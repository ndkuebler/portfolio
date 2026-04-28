"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { works } from "@/data/works";

export function SelectedWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile, use a uniformly shorter card height for every card — this
  // tightens the overall section while keeping sticky transitions clean
  // (any asymmetry between cards creates visual gaps as sticky ranges
  // stop overlapping).
  const cardVh = isMobile ? 78 : 100;
  const totalHeight = `${works.length * cardVh}vh`;
  const cardCss = isMobile ? `${cardVh}vh` : "calc(100vh - 80px)";

  return (
    <section
      id="selected-works"
      className="relative bg-[#0a0a0a]"
      aria-labelledby="selected-works-heading"
    >
      {/* Section header */}
      <div className="bg-[#0a0a0a] pt-8 pb-6 sm:pt-10">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="flex items-baseline justify-between gap-6 pb-6">
            <h2
              id="selected-works-heading"
              className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase"
            >
              Selected Works
            </h2>
          </div>
        </div>
      </div>

      <div className="relative" style={{ height: totalHeight }}>
        {works.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group sticky block w-full bg-[#0a0a0a] border-t border-[#f5f5f5]/[0.08]"
            style={{
              top: "4.5rem",
              height: cardCss,
            }}
          >
            {/* Top bar: number + title | tags | year */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex items-center justify-between py-5 sm:py-6">
                <div className="flex items-center gap-3">
                  <span className="text-[0.75rem] font-normal tabular-nums text-[#f5f5f5]/40">
                    {project.number}
                  </span>
                  <span className="text-[1.125rem] sm:text-[1.5rem] font-semibold tracking-wide text-[#f5f5f5] uppercase">
                    {project.title}
                  </span>
                </div>

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

                <span className="text-[0.75rem] sm:text-[0.8125rem] font-normal tabular-nums text-[#f5f5f5]/40">
                  {project.year}
                </span>
              </div>

              {/* Description below the title bar */}
              {project.description && (
                <p className="text-[0.875rem] sm:text-[1rem] font-normal text-[#f5f5f5]/50 -mt-2 pb-3">
                  {project.description}
                </p>
              )}

            </div>

            {/* Image area with centered pill button */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex">
                {/* Left side — pill button centered vertically */}
                <div className="hidden md:flex md:w-2/5 items-center justify-start pl-6">
                  <span className="inline-flex rounded-full border border-[#f5f5f5]/30 px-6 py-2.5 text-sm font-medium text-[#f5f5f5]/70 group-hover:bg-[#f5f5f5] group-hover:text-[#0a0a0a] transition-all duration-200">
                    View project →
                  </span>
                </div>
                <div className="w-full md:w-3/5">
                  <div
                    className={`relative w-full overflow-hidden rounded-lg bg-black ${
                      project.slug === "air-dj"
                        ? "aspect-video"
                        : "aspect-[4/3]"
                    }`}
                  >
                    {project.video ? (
                      <video
                        src={project.video}
                        poster={project.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 h-full w-full object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                          project.slug === "air-dj"
                            ? "object-cover scale-[1.08] group-hover:scale-[1.11]"
                            : "object-contain"
                        }`}
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={index === 0}
                        unoptimized={project.image.endsWith(".svg")}
                      />
                    )}
                  </div>
                  {/* Mobile pill button — centered below image */}
                  <div className="flex md:hidden justify-center mt-4">
                    <span className="inline-flex rounded-full border border-[#f5f5f5]/30 px-6 py-2.5 text-sm font-medium text-[#f5f5f5]/70">
                      View project →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom spacer for sticky card clearance */}
      <div className="h-32" aria-hidden />
    </section>
  );
}
