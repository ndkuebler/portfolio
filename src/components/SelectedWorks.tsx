import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

const CARD_TOPS = [130, 150, 170];

function getCardTop(index: number): number {
  return index < CARD_TOPS.length ? CARD_TOPS[index] : 130 + index * 20;
}

export function SelectedWorks() {
  return (
    <section
      id="selected-works"
      className="relative"
      aria-labelledby="selected-works-heading"
    >
      <div
        className="sticky z-[100] bg-[#0a0a0a] pt-16 pb-6 sm:pt-20"
        style={{ top: "4.5rem" }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="flex items-baseline justify-between gap-6 border-b border-[#f5f5f5]/[0.08] pb-6">
            <h2
              id="selected-works-heading"
              className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase"
            >
              Selected Works
            </h2>
            <p className="text-[0.8125rem] font-normal tabular-nums tracking-wide text-[#f5f5f5]/45">
              (19–25)
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {works.map((project, index) => {
          const topPx = getCardTop(index);
          const isLast = index === works.length - 1;

          return (
            <div
              key={project.slug}
              style={{
                height: isLast ? "auto" : "90vh",
                minHeight: isLast ? "auto" : "90vh",
              }}
              className="relative w-full"
            >
              <div
                className="sticky w-full bg-[#0a0a0a]"
                style={{
                  top: `${topPx}px`,
                  zIndex: 10 + index,
                  height: `calc(100vh - ${topPx}px)`,
                  maxHeight: `calc(100vh - ${topPx}px)`,
                }}
              >
                <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col overflow-hidden rounded-t-xl border border-b-0 border-[#f5f5f5]/[0.06] bg-[#0f0f0f] shadow-[0_-4px_30px_rgba(0,0,0,0.6)]">
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex min-h-0 flex-1 flex-col px-6 pt-6 pb-0 sm:px-10 sm:pt-8 lg:px-14 lg:pt-10"
                  >
                    <div className="flex shrink-0 flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
                      <div className="flex items-baseline gap-4">
                        <span className="text-[0.8125rem] font-medium tabular-nums tracking-wide text-[#f5f5f5]/50">
                          {project.number}
                        </span>
                        <span className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold leading-[1.15] tracking-tight text-[#f5f5f5]">
                          {project.title}
                        </span>
                      </div>
                      <p className="text-[0.8125rem] font-light tracking-wide text-[#f5f5f5]/40">
                        {project.tags.join(", ")}
                      </p>
                      <span className="text-[0.8125rem] tabular-nums text-[#f5f5f5]/50">
                        {project.year}
                      </span>
                    </div>

                    <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-t-lg sm:mt-8">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority={index === 0}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-20 sm:h-32" aria-hidden />
    </section>
  );
}
