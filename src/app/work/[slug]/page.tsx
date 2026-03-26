import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import { SomniImageToggle } from "@/components/SomniImageToggle";

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Nick Kuebler`,
    description: project.tags.join(", "),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  return (
    <article className="flex flex-1 flex-col px-6 pb-24 pt-10 sm:px-10 sm:pb-32 sm:pt-12 lg:px-14">
      <div className="mx-auto w-full max-w-[900px]">
        <Link
          href="/#selected-works"
          className="nav-underline inline-block text-[0.8125rem] font-medium tracking-wide text-[#f5f5f5]/55"
        >
          Selected Works
        </Link>

        <header className="mt-10 sm:mt-12">
          <p className="text-[0.8125rem] font-medium tabular-nums tracking-wide text-[#f5f5f5]/45">
            {project.number}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f5f5] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-[0.9375rem] font-light leading-relaxed text-[#f5f5f5]/55">
            {project.tags.join(" · ")} · {project.year}
          </p>
        </header>

        {slug === "somni" ? (
          <SomniImageToggle image={project.image} title={project.title} />
        ) : (
          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-sm border border-[#f5f5f5]/10 bg-[#111]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 900px"
              priority
              unoptimized={project.image.endsWith(".svg")}
            />
          </div>
        )}

        <p className="mt-12 max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-[#f5f5f5]/60">
          Case study content for this project can go here — process, outcomes, and
          media.
        </p>
      </div>
    </article>
  );
}
