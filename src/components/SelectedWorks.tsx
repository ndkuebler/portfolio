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

  const cardScrollHeight = 100;
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
                <div className="flex items-center gap-3">
                  <span className="text-[0.75rem] font-normal tabular-nums text-[#f5f5f5]/40">
                    {project.number}
                  </span>
                  <span className="text-[1.125rem] sm:text-[1.5rem] font-semibold tracking-wide text-[#f5f5f5] uppercase">
                    {project.title}
                  </span>
                  {project.description && (
                    <p className="text-[0.875rem] sm:text-[1rem] font-normal text-[#f5f5f5]/50 mt-1">
                      {project.description}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-2 mt-3 text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#f5f5f5]/60 group-hover:text-[#f5f5f5] transition-colors">
                    View project <span className="transition-transform group-hover:translate-x-1">→</span>
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
            </div>

            {/* Image area */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex">
                <div className="hidden md:block md:w-2/5" />
                <div className="w-full md:w-3/5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black">
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

      {/* Bottom spacer for sticky card clearance */}
      <div className="h-32" aria-hidden />
    </section>
  );
}
