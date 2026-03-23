import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function SelectedWorks() {
  // Each card is ~80vh tall. The parent needs enough height
  // so that scrolling reveals each card one by one.
  // Total height = (number of cards) * card height in scroll space
  const cardScrollHeight = 80; // vh per card of scroll travel
  const totalHeight = `${works.length * cardScrollHeight}vh`;

  return (
    <section
      id="selected-works"
      className="relative bg-[#0a0a0a]"
      aria-labelledby="selected-works-heading"
    >
      {/* Section header */}
      <div className="bg-[#0a0a0a] pt-8 pb-6 sm:pt-10">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="flex items-baseline justify-between gap-6 border-b border-[#f5f5f5]/[0.08] pb-6">
            <h2
              id="selected-works-heading"
              className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase"
            >
              Selected Works
            </h2>
          </div>
        </div>
      </div>

      {/*
        All cards are siblings inside one tall container.
        Each card is position:sticky with the same top value.
        As you scroll, each card sticks in place and the next
        one scrolls up to cover it — exactly like Mason Taylor.
      */}
      <div className="relative" style={{ height: totalHeight }}>
        {works.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group sticky block w-full bg-[#0a0a0a] border-t border-[#f5f5f5]/[0.08]"
            style={{
              top: "80px",
              height: "calc(100vh - 80px)",
            }}
          >
            {/* Top bar: number + name | tags | year */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex items-center justify-between py-5 sm:py-6">
                {/* Left: number + title */}
                <div className="flex items-center gap-3">
                  <span className="text-[0.75rem] font-normal tabular-nums text-[#f5f5f5]/40">
                    {project.number}
                  </span>
                  <span className="text-[0.875rem] sm:text-[1rem] font-semibold tracking-wide text-[#f5f5f5] uppercase">
                    {project.title}
                  </span>
                </div>

                {/* Center: tags */}
                <div className="hidden md:flex items-center gap-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.75rem] sm:text-[0.8125rem] font-medium tracking-wide text-[#f5f5f5]/50 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Right: year */}
                <span className="text-[0.75rem] sm:text-[0.8125rem] font-normal tabular-nums text-[#f5f5f5]/40">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Image area — right-aligned like Mason Taylor */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex">
                {/* Left spacer on desktop */}
                <div className="hidden md:block md:w-2/5" />

                {/* Image */}
                <div className="w-full md:w-3/5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="h-[30vh] sm:h-32" aria-hidden />
    </section>
  );
}
