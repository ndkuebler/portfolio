"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useCallback } from "react";
import { works } from "@/data/works";

const SomniModelViewer = dynamic(
  () => import("@/components/SomniModelViewer").then((m) => m.SomniModelViewer),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center"><span className="text-white/50 text-sm">Loading 3D model...</span></div> }
);

// Preload the GLB file and component module on page load
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = "/work/somni.glb";
  link.as = "fetch";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  // Also prefetch the component JS chunk
  import("@/components/SomniModelViewer").catch(() => {});
}

export function SelectedWorks() {
  const [isMobile, setIsMobile] = useState(false);
  const [somniOpen, setSomniOpen] = useState(false);
  const [somniAnimated, setSomniAnimated] = useState(false);
  const [somniRect, setSomniRect] = useState<DOMRect | null>(null);
  const somniImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSomniClick = useCallback(() => {
    if (somniImgRef.current) {
      setSomniRect(somniImgRef.current.getBoundingClientRect());
    }
    setSomniOpen(true);
    setSomniAnimated(false);
    // Trigger animation after mount
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSomniAnimated(true);
      });
    });
  }, []);

  const [somniClosing, setSomniClosing] = useState(false);
  const [show3D, setShow3D] = useState(false);

  const handleSomniClose = useCallback(() => {
    if (somniClosing) return;
    setSomniClosing(true);
    // Step 1: fade out text immediately, then fade backdrop + close
    setTimeout(() => {
      setSomniOpen(false);
      setSomniAnimated(false);
      setSomniClosing(false);
      setSomniRect(null);
      setShow3D(false);
    }, 400);
  }, [somniClosing]);

  // Lock scroll + escape key for Somni lightbox
  useEffect(() => {
    if (somniOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleSomniClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [somniOpen, handleSomniClose]);

  const cardScrollHeight = isMobile ? 100 : 100;
  const totalHeight = `${works.length * cardScrollHeight}vh`;

  // Calculate the starting transform for the FLIP animation
  const getStartTransform = () => {
    if (!somniRect) return {};
    const targetSize = Math.min(window.innerWidth * 0.8, 500);
    const targetX = (window.innerWidth - targetSize) / 2;
    const targetY = (window.innerHeight - targetSize) / 2 - 60; // offset for text below

    const scaleX = somniRect.width / targetSize;
    const scaleY = somniRect.height / targetSize;
    const translateX = somniRect.left - targetX + (somniRect.width - targetSize * scaleX) / 2;
    const translateY = somniRect.top - targetY + (somniRect.height - targetSize * scaleY) / 2;

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
    };
  };

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
        {works.map((project, index) => {
          const isComingSoon = project.slug === "somni";
          const Wrapper = isComingSoon ? "div" : Link;
          const wrapperProps = isComingSoon
            ? {}
            : { href: `/work/${project.slug}` };

          return (
          <Wrapper
            key={project.slug}
            {...(wrapperProps as any)}
            className={`group sticky block w-full bg-[#0a0a0a] border-t border-[#f5f5f5]/[0.08] ${isComingSoon ? "cursor-pointer" : ""}`}
            style={{
              top: "80px",
              height: "calc(100vh - 80px)",
            }}
            {...(isComingSoon ? { onClick: handleSomniClick } : {})}
          >
            {/* Top bar: number + name | tags | year */}
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div className="flex items-center justify-between py-5 sm:py-6">
                <div className="flex items-center gap-3">
                  <span className="text-[0.75rem] font-normal tabular-nums text-[#f5f5f5]/40">
                    {project.number}
                  </span>
                  <span className="text-[0.875rem] sm:text-[1rem] font-semibold tracking-wide text-[#f5f5f5] uppercase">
                    {project.title}
                    {project.subtitle && (
                      <span className="block text-[0.75rem] sm:text-[0.8125rem] font-medium text-[#f5f5f5]/50 mt-0.5">
                        {project.subtitle}
                      </span>
                    )}
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
                  <div
                    ref={isComingSoon ? somniImgRef : undefined}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black"
                  >
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
          </Wrapper>
          );
        })}
      </div>

      {/* Bottom spacer for sticky card clearance */}
      <div className="h-32" aria-hidden />

      {/* Somni lightbox with FLIP animation */}
      {somniOpen && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={handleSomniClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            style={{
              opacity: somniClosing ? 0 : somniAnimated ? 1 : 0,
              transition: somniClosing ? "opacity 400ms ease" : "opacity 500ms ease",
            }}
          />

          {/* Back button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleSomniClose(); }}
            className="absolute top-20 sm:top-5 left-6 z-[210] flex items-center gap-2 rounded-full bg-black/60 border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm"
            style={{
              opacity: somniClosing ? 0 : somniAnimated ? 1 : 0,
              transition: somniClosing ? "opacity 200ms ease" : "opacity 400ms ease 300ms",
            }}
          >
            ← Back
          </button>

          {/* 2D / 3D toggle */}
          <button
            onClick={(e) => { e.stopPropagation(); setShow3D(!show3D); }}
            className="absolute top-20 sm:top-5 right-6 z-[210] flex items-center gap-2 rounded-full bg-black/60 border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm"
            style={{
              opacity: somniClosing ? 0 : somniAnimated ? 1 : 0,
              transition: somniClosing ? "opacity 200ms ease" : "opacity 400ms ease 300ms",
            }}
          >
            {show3D ? "View 2D" : "View 3D"}
          </button>

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-center gap-8 px-6"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: somniClosing ? 0 : 1,
              transform: somniClosing ? "scale(0.95)" : "scale(1)",
              transition: "opacity 350ms ease, transform 350ms ease",
            }}
          >
            {/* 2D image */}
            <div
              className="relative w-[min(80vw,500px)] aspect-square"
              style={{
                display: show3D ? "none" : "block",
                transition: somniAnimated && !somniClosing
                  ? "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
                transformOrigin: "center center",
                ...(somniAnimated ? {} : getStartTransform()),
              }}
            >
              <Image
                src="/work/somni.webp"
                alt="Somni Dream Catch 1.0"
                fill
                className="object-contain"
                sizes="500px"
              />
            </div>
            {/* 3D model - always mounted once lightbox opens so it preloads */}
            <div
              className="relative w-[min(80vw,500px)] aspect-square"
              style={{ display: show3D ? "block" : "none" }}
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <SomniModelViewer />
            </div>

            {/* Text fades in after image arrives */}
            <p
              className="text-[clamp(1.25rem,3vw,2rem)] font-light italic text-white text-center max-w-lg"
              style={{
                opacity: somniClosing ? 0 : somniAnimated ? 1 : 0,
                transform: somniClosing ? "translateY(10px)" : somniAnimated ? "translateY(0)" : "translateY(20px)",
                transition: somniClosing
                  ? "opacity 200ms ease, transform 200ms ease"
                  : "opacity 500ms ease 400ms, transform 500ms ease 400ms",
              }}
            >
              What if we could relive our dreams?
            </p>
            <span
              className="text-sm font-medium tracking-widest text-white/40 uppercase"
              style={{
                opacity: somniClosing ? 0 : somniAnimated ? 1 : 0,
                transform: somniClosing ? "translateY(10px)" : somniAnimated ? "translateY(0)" : "translateY(20px)",
                transition: somniClosing
                  ? "opacity 150ms ease, transform 150ms ease"
                  : "opacity 500ms ease 550ms, transform 500ms ease 550ms",
              }}
            >
              Coming 2026
            </span>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
