import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Dev only" }, { status: 403 });
  }

  const { id, title } = await req.json();
  if (id === undefined || !title) {
    return NextResponse.json({ error: "Missing id or title" }, { status: 400 });
  }

  const root = process.cwd();
  const dataPath = path.join(root, "src/app/approved/approved-data.ts");
  let data = fs.readFileSync(dataPath, "utf-8");

  // Remove the concept object with matching id and title
  // Match the full object block: { id: X, ... title: "Title", ... },
  const regex = new RegExp(
    `\\s*\\{[^}]*id:\\s*${id},[^}]*title:\\s*"${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^}]*\\},?`,
    "s"
  );

  const updated = data.replace(regex, "");

  if (updated === data) {
    return NextResponse.json({ error: "Concept not found in data file" }, { status: 404 });
  }

  // Clean up any double blank lines
  const cleaned = updated.replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(dataPath, cleaned);

  return NextResponse.json({ success: true, deleted: title });
}
