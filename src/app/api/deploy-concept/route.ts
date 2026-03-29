import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Dev only" }, { status: 403 });
  }

  const { title, subtitle, thumb, mediaType, mediaSrc } = await req.json();
  if (!title || !subtitle || !thumb || !mediaType || !mediaSrc) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const root = process.cwd();

  // 1. Append to CONCEPTS array in concepts-data.ts
  const conceptsDataPath = path.join(root, "src/app/concepts/concepts-data.ts");
  let conceptsData = fs.readFileSync(conceptsDataPath, "utf-8");

  // Count existing concepts to know the new index
  const existingCount = (conceptsData.match(/\{\s*slug:/g) || []).length;

  const newConcept = `  {
    slug: "${slug}",
    title: "${title}",
    subtitle:\n      "${subtitle.replace(/"/g, '\\"')}",
    thumb: "${thumb}",
    mediaType: "${mediaType}",
    mediaSrc: "${mediaSrc}",
  },`;

  // Insert before the final ];
  conceptsData = conceptsData.replace(/\n];\s*$/, `\n${newConcept}\n];\n`);
  fs.writeFileSync(conceptsDataPath, conceptsData);

  // 2. Append thumb filename to FILENAMES in data/concepts.ts
  const carouselDataPath = path.join(root, "src/data/concepts.ts");
  let carouselData = fs.readFileSync(carouselDataPath, "utf-8");

  // Extract just the filename from the thumb path (e.g. "/ideate/tide-stone-thumb.webp" -> "tide-stone-thumb.webp")
  // But carousel uses /concepts/ prefix, so we need the full thumb path as-is
  // Actually carousel maps filename -> `/concepts/${filename}`, but our images are in /ideate/
  // We need to use the full path directly. Let's add the thumb path to FILENAMES as a relative path.
  const thumbFilename = thumb.startsWith("/") ? thumb.slice(1) : thumb;

  // Replace the FILENAMES array to include our new entry
  carouselData = carouselData.replace(
    /] as const;/,
    `  "${thumbFilename}",\n] as const;`
  );

  // The carousel src mapping uses `/concepts/${encodeURIComponent(filename)}`
  // but our files are in /ideate/. We need to change the src mapping to handle paths with slashes.
  // Actually, let's just update the map function to handle full paths.
  if (!carouselData.includes("filename.includes('/')")) {
    carouselData = carouselData.replace(
      "src: `/concepts/${encodeURIComponent(filename)}`",
      "src: filename.includes('/') ? `/${filename}` : `/concepts/${encodeURIComponent(filename)}`"
    );
  }

  fs.writeFileSync(carouselDataPath, carouselData);

  // 3. Add carousel mapping in Concepts.tsx
  const conceptsComponentPath = path.join(root, "src/components/Concepts.tsx");
  let conceptsComponent = fs.readFileSync(conceptsComponentPath, "utf-8");

  // Add mapping entry before the closing }; of CAROUSEL_TO_CONCEPT
  const mappingEntry = `    "${thumbFilename}": ${existingCount},   // ${title}`;
  conceptsComponent = conceptsComponent.replace(
    /(\s*)(};)\s*\n\s*const getConceptForFile/,
    `\n${mappingEntry}\n  $2\n\n  const getConceptForFile`
  );

  fs.writeFileSync(conceptsComponentPath, conceptsComponent);

  // 4. Git add, commit, and push
  try {
    execSync(
      `git add "${conceptsDataPath}" "${carouselDataPath}" "${conceptsComponentPath}" && git commit -m "Deploy ${title} to portfolio concepts" && git push origin main`,
      { cwd: root, stdio: "pipe" }
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ success: true, slug, index: existingCount, pushError: msg });
  }

  return NextResponse.json({ success: true, slug, index: existingCount, pushed: true });
}
