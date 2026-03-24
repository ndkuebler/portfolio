"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { conceptItems } from "@/data/concepts";
import { CONCEPTS } from "@/app/concepts/concepts-data";

export function Concepts() {
  const items = conceptItems;
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const speedRef = useRef(1);
  const targetSpeedRef = useRef(1);
  const rafRef = useRef<number | null>(null);

  const BASE_SPEED = 1;

  // Touch/drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const lastDragX = useRef(0);
  const dragVelocity = useRef(0);

  // Lightbox state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Direct mapping from carousel filenames to CONCEPTS index
  // Some carousel images differ from CONCEPTS thumbs, so we map manually
  const CAROUSEL_TO_CONCEPT: Record<string, number> = {
    "djglasses1.webp": 0,   // DJ Glasses
    "bench.webp": 9,         // Companion Bench
    "chairproj1.webp": 5,    // Posture Chair
    "dogdronev2.webp": 11,   // Drone Shepherd
    "freckles.webp": 8,      // Micro-LED Freckles
    "fridge1.webp": 4,       // Intuitive Fridge
    "gumopened.webp": 6,     // Athlete recovery gum
    "hapticbelt.webp": 2,    // Haptic Direction Belt
    "ltable.webp": 3,        // Lightning Connection Table
    "musicframe.webp": 7,    // Living Album Cover
    "scentfork1-carousel.webp": 12,   // Scent Fork
  };

  const getConceptForFile = (filename: string) => {
    const idx = CAROUSEL_TO_CONCEPT[filename];
    return idx !== undefined ? CONCEPTS[idx] : undefined;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getHalfWidth = () => {
      const firstGroup = track.children[0] as HTMLElement;
      if (!firstGroup) return track.scrollWidth / 2;
      return firstGroup.offsetWidth + 32;
    };

    const animate = () => {
      if (!isDragging.current) {
        // Decay drag velocity back toward 0
        dragVelocity.current *= 0.95;
        if (Math.abs(dragVelocity.current) < 0.1) dragVelocity.current = 0;

        // Blend auto-scroll speed with drag velocity
        speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.03;
        posRef.current += speedRef.current + dragVelocity.current;
      }

      const halfWidth = getHalfWidth();
      if (halfWidth > 0) {
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        if (posRef.current < 0) posRef.current += halfWidth;
      }

      track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      dragStartX.current = e.touches[0].clientX;
      dragStartPos.current = posRef.current;
      lastDragX.current = e.touches[0].clientX;
      dragVelocity.current = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].clientX;
      const delta = lastDragX.current - x;
      posRef.current += delta;
      dragVelocity.current = delta;
      lastDragX.current = x;
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

    // Mouse drag events
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      dragStartX.current = e.clientX;
      dragStartPos.current = posRef.current;
      lastDragX.current = e.clientX;
      dragVelocity.current = 0;
      track.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const x = e.clientX;
      const delta = lastDragX.current - x;
      posRef.current += delta;
      dragVelocity.current = delta;
      lastDragX.current = x;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      track.style.cursor = "";
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);
    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Get sorted list of concept indices that are in the carousel
  const carouselConceptIndices = Object.values(CAROUSEL_TO_CONCEPT).sort((a, b) => a - b);

  const goToPrev = () => {
    if (activeIndex === null) return;
    const currentPos = carouselConceptIndices.indexOf(activeIndex);
    if (currentPos === -1) return;
    const prevPos = currentPos === 0 ? carouselConceptIndices.length - 1 : currentPos - 1;
    setActiveIndex(carouselConceptIndices[prevPos]);
  };

  const goToNext = () => {
    if (activeIndex === null) return;
    const currentPos = carouselConceptIndices.indexOf(activeIndex);
    if (currentPos === -1) return;
    const nextPos = currentPos === carouselConceptIndices.length - 1 ? 0 : currentPos + 1;
    setActiveIndex(carouselConceptIndices[nextPos]);
  };

  // Keyboard navigation: Escape to close, arrows to navigate
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  const handleMouseEnter = () => {
    targetSpeedRef.current = 0;
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = BASE_SPEED;
  };

  const handleItemClick = (filename: string) => {
    const idx = CAROUSEL_TO_CONCEPT[filename];
    if (idx !== undefined) setActiveIndex(idx);
  };

  const activeConcept = activeIndex !== null ? CONCEPTS[activeIndex] : null;

  const renderItem = (item: (typeof items)[0], keyPrefix = "") => {
    const concept = getConceptForFile(item.filename);
    return (
      <button
        key={`${keyPrefix}${item.filename}`}
        className="w-[min(72vw,280px)] shrink-0 sm:w-72 md:w-80 cursor-pointer"
        onClick={() => handleItemClick(item.filename)}
        type="button"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#f5f5f5]/10 bg-black transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src={item.src}
            alt={concept?.title || ""}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 72vw, 320px"
          />
        </div>
      </button>
    );
  };

  return (
    <>
    <section
      className="relative z-10 border-t border-[#f5f5f5]/[0.08] py-20 sm:py-28 bg-[#0a0a0a]"
      aria-labelledby="concepts-heading"
    >
      <div className="mx-auto mb-12 flex max-w-[1400px] items-baseline justify-between gap-6 px-6 sm:px-10 lg:px-14">
        <h2
          id="concepts-heading"
          className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase"
        >
          Concepts
        </h2>
      </div>

      <div
        className="concepts-marquee relative overflow-hidden pl-6 sm:pl-10 lg:pl-14 cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={trackRef} className="concepts-marquee-track inline-flex gap-8">
          <div className="flex gap-8">
            {items.map((item) => renderItem(item))}
          </div>
          <div className="flex gap-8" aria-hidden>
            {items.map((item) => renderItem(item, "loop-"))}
          </div>
        </div>
      </div>

    </section>

      {/* ===== Lightbox Modal (portalled to body to escape z-10 stacking context) ===== */}
      {activeConcept && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
        >
          {/* Backdrop — click to close */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveIndex(null)} />

          {/* Back button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-20 sm:top-5 left-6 z-[210] flex items-center gap-2 rounded-full bg-black/60 border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm"
          >
            ← Back
          </button>

          {/* Prev / Next arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous concept"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm"
            aria-label="Next concept"
          >
            ›
          </button>

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-6 max-h-[92vh] overflow-y-auto pb-6" onClick={(e) => e.stopPropagation()}>
            {/* Media */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-black">
              {activeConcept.mediaType === "video" && activeConcept.mediaSrc ? (
                <video
                  src={activeConcept.mediaSrc}
                  className="w-full h-auto max-h-[55vh] object-contain bg-black"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => setActiveIndex(null)}
                />
              ) : (
                <img
                  src={activeConcept.mediaSrc}
                  alt={activeConcept.title}
                  className="w-full h-auto max-h-[55vh] object-contain bg-black"
                  onClick={() => setActiveIndex(null)}
                />
              )}
            </div>

            {/* Caption */}
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeConcept.title}
                </h3>
                <p className="mt-2 text-[1rem] text-white/70">
                  {activeConcept.subtitle}
                </p>
              </div>
              <a
                href="/concepts"
                className="shrink-0 rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200"
              >
                View all →
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
