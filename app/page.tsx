"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  // ✅ hover control (desktop)
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(false);
  
  // ✅ prevent flicker on initial load
  const [carouselReady, setCarouselReady] = useState(false);
  const carouselReadyRef = useRef(false);

  // ✅ marquee refs
  const rowRef = useRef<HTMLDivElement | null>(null);
  const halfWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // ✅ swipe/drag refs (fixed so clicks still work)
  const isDraggingRef = useRef(false); // only true AFTER user actually drags
  const pointerIdRef = useRef<number | null>(null);
  const dragOwnerRef = useRef<HTMLDivElement | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const didDragRef = useRef(false);

  useEffect(() => {
    hoverRef.current = isHovering;
  }, [isHovering]);

  // ✅ requestAnimationFrame marquee (pauses while dragging)
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const BASE_SPEED = 70; // px/sec
    const HOVER_MULT = 2 / 3;

    const measure = () => {
      const hw = row.scrollWidth / 2;
      halfWidthRef.current = Number.isFinite(hw) ? hw : 0;
    };

    const attachImageListeners = () => {
      const imgs = Array.from(row.querySelectorAll("img")) as HTMLImageElement[];
      let remaining = 0;

      const onOneLoad = () => {
        remaining -= 1;
        if (remaining <= 0) measure();
      };

      imgs.forEach((img) => {
        if (!img.complete) {
          remaining += 1;
          img.addEventListener("load", onOneLoad, { once: true });
          img.addEventListener("error", onOneLoad, { once: true });
        }
      });

      if (remaining === 0) measure();
    };

    measure();
    attachImageListeners();

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => measure());
    ro.observe(row);

    const tick = (t: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      const hw = halfWidthRef.current;

      if (hw > 0) {
        if (!isDraggingRef.current) {
          const speed = hoverRef.current ? BASE_SPEED * HOVER_MULT : BASE_SPEED;
          offsetRef.current += speed * dt;
          if (offsetRef.current >= hw) offsetRef.current -= hw;
        }

        row.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        
        // Mark carousel as ready after first transform is applied
        if (!carouselReadyRef.current) {
          carouselReadyRef.current = true;
          setCarouselReady(true);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  /* ================= MARK TOP-RIGHT NAV LINKS ================= */
  useEffect(() => {
    const labels = new Set(["Portfolio", "Concepts", "About", "Contact"]);

    const anchors = Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];

    anchors.forEach((a) => {
      const txt = (a.textContent || "").trim();
      if (!labels.has(txt)) return;

      // ✅ mark these as the top-right nav links so we can hide them on mobile scroll
      (a as any).dataset.nkTopnav = "1";
      a.classList.add("nk-nav-link");
    });
  }, []);

  /* ================= MOBILE-ONLY: HIDE TOP-RIGHT NAV ON SCROLL ================= */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;

    const THRESHOLD = 24;

    const onScroll = () => {
      if (window.scrollY > THRESHOLD) document.body.classList.add("nk-mobile-nav-hidden");
      else document.body.classList.remove("nk-mobile-nav-hidden");
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("nk-mobile-nav-hidden");
    };
  }, []);

  // ✅ swipe/drag handlers (FIXED: do NOT pointer-capture until user actually drags,
  // so desktop clicks on <a> still work)
  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    pointerIdRef.current = e.pointerId;
    dragOwnerRef.current = e.currentTarget as HTMLDivElement;

    isDraggingRef.current = false;
    didDragRef.current = false;

    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;

    // avoid dt jump after interaction
    lastTimeRef.current = null;
  };

  const onTrackPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current == null) return;

    const row = rowRef.current;
    if (!row) return;

    const dx = e.clientX - dragStartXRef.current;
    const DRAG_START_PX = 10;

    // Only become a "drag" after threshold (keeps taps/clicks working)
    if (!isDraggingRef.current) {
      if (Math.abs(dx) < DRAG_START_PX) return;

      isDraggingRef.current = true;
      didDragRef.current = true;

      // capture now that we know it's a drag
      try {
        dragOwnerRef.current?.setPointerCapture(pointerIdRef.current);
      } catch {}

      // reset timing so auto-scroll resumes smoothly later
      lastTimeRef.current = null;
    }

    // while dragging: update offset
    e.preventDefault();

    let next = dragStartOffsetRef.current - dx;
    const hw = halfWidthRef.current;
    if (hw > 0) next = ((next % hw) + hw) % hw;

    offsetRef.current = next;
    row.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current == null) return;

    const pid = pointerIdRef.current;

    // if we were dragging, release capture
    if (isDraggingRef.current) {
      try {
        (e.currentTarget as HTMLDivElement).releasePointerCapture(pid);
      } catch {}
    }

    pointerIdRef.current = null;
    dragOwnerRef.current = null;
    isDraggingRef.current = false;

    lastTimeRef.current = null;
  };

  const onTrackClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    // If user dragged, don't navigate links.
    if (didDragRef.current) {
      e.preventDefault();
      e.stopPropagation();
      didDragRef.current = false;
    }
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* ================= CONTENT ================= */}
      <div>
        {/* ✅ FIX: only the HEADER gets extra right padding on mobile (not the carousel)
            so the carousel stays centered/full-width on mobile */}
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">
          <div className="pr-28 sm:pr-0">
            <h1 className="text-5xl font-bold tracking-tight mb-6">Nick Kuebler</h1>

            <p className="text-lg text-white/75 max-w-2xl">
              Designer & engineer focused on aesthetic systems, physical products, and clean digital
              experiences.
            </p>

            <h2 className="mt-20 mb-6 text-xs uppercase tracking-[0.25em] text-white/50">
              Selected work
            </h2>
          </div>

          {/* ================= CAROUSEL ================= */}
          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div
              className={`nk-track ${carouselReady ? "opacity-100" : "opacity-0"}`}
              style={{ transition: carouselReady ? "opacity 0.3s ease" : "none" }}
              onPointerEnter={() => setIsHovering(true)}
              onPointerLeave={() => setIsHovering(false)}
              onPointerDown={onTrackPointerDown}
              onPointerMove={onTrackPointerMove}
              onPointerUp={endPointer}
              onPointerCancel={endPointer}
              onClickCapture={onTrackClickCapture}
            >
              <div className="nk-row" ref={rowRef}>
                {/* SET A */}
                <a href="/work/ringallets" className="nk-item">
                  <img src="/work/ringalletsbbg.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>Ringallets</h3>
                    <p>Rings training tool</p>
                  </div>
                </a>

                <a href="/work/watershield" className="nk-item">
                  <img src="/work/watershieldbbg.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield</h3>
                    <p>Longboard wheel fender</p>
                  </div>
                </a>

                <a href="/work/watershield-figma" className="nk-item">
                  <img src="/work/watershield-figma.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield Figma</h3>
                    <p>Purchase flow prototype</p>
                  </div>
                </a>

                {/* SET B (IDENTICAL COPY) */}
                <a href="/work/ringallets" className="nk-item">
                  <img src="/work/ringalletsbbg.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>Ringallets</h3>
                    <p>Rings training tool</p>
                  </div>
                </a>

                <a href="/work/watershield" className="nk-item">
                  <img src="/work/watershieldbbg.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield</h3>
                    <p>Longboard wheel fender</p>
                  </div>
                </a>

                <a href="/work/watershield-figma" className="nk-item">
                  <img src="/work/watershield-figma.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield Figma</h3>
                    <p>Purchase flow prototype</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* ✅ MOBILE-ONLY: hide top-right nav after scroll */
        @media (max-width: 639px) {
          :global(body.nk-mobile-nav-hidden .nk-nav-link[data-nk-topnav="1"]),
          :global(body.nk-mobile-nav-hidden a[data-nk-topnav="1"]) {
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
          }
        }

        /* ===== CAROUSEL ===== */
        .nk-track {
          overflow: hidden;

          /* ✅ enables vertical scroll while still allowing horizontal drag */
          touch-action: pan-y;
        }

        .nk-row {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .nk-item {
          position: relative;
          flex-shrink: 0;
          margin-right: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .nk-img {
          height: 220px;
          width: auto;
          display: block;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
        }

        .nk-img[src="/work/watershieldbbg.png"] {
          height: 260px;
          transform: translateY(35px);
        }

        .nk-img[src="/work/ringalletsbbg.png"] {
          height: 250px;
        }

        .nk-item:hover .nk-img {
          transition: transform 0.5s ease;
          transform: scale(1.06);
        }

        .nk-item:hover .nk-img[src="/work/watershieldbbg.png"] {
          transition: transform 0.5s ease;
          transform: scale(1.06) translateY(35px);
        }

        .nk-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .nk-item:hover::after {
          opacity: 1;
        }

        .nk-overlay {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 1rem;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: opacity 0.3s ease;
          pointer-events: none;
          background: transparent;
          z-index: 2;
        }

        .nk-item:hover .nk-overlay {
          opacity: 1;
        }

      `}</style>
    </main>
  );
}
