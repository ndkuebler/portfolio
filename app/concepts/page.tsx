"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { CONCEPTS, type Concept } from "./concepts-data";

export default function ConceptsPage() {
  /* ================= SPARK SHOWER ON EXISTING TOP-RIGHT NAV ================= */
  useEffect(() => {
    const labels = new Set(["Portfolio", "Concepts", "About", "Contact"]);

    const sparkDefs = [
      { sx: "12%", sy: "38%", dx: "34px", dy: "-18px", delayMs: 0 },
      { sx: "84%", sy: "48%", dx: "-30px", dy: "-24px", delayMs: 160 },
      { sx: "56%", sy: "22%", dx: "18px", dy: "22px", delayMs: 320 },
    ] as const;

    const anchors = Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];

    anchors.forEach((a) => {
      const txt = (a.textContent || "").trim();
      if (!labels.has(txt)) return;

      if ((a as any).dataset?.nkSparkified === "1") return;
      (a as any).dataset.nkSparkified = "1";

      (a as any).dataset.nkTopnav = "1";

      a.classList.add("sparkLink");

      a.innerHTML = "";
      const span = document.createElement("span");
      span.className = "sparkText";
      span.textContent = txt;

      sparkDefs.forEach((s, i) => {
        const dot = document.createElement("span");
        dot.className = `navSpark s${i + 1}`;
        dot.setAttribute("aria-hidden", "true");

        dot.style.setProperty("--sx", s.sx);
        dot.style.setProperty("--sy", s.sy);
        dot.style.setProperty("--dx", s.dx);
        dot.style.setProperty("--dy", s.dy);
        dot.style.setProperty("--delay", `${s.delayMs}ms`);

        span.appendChild(dot);
      });

      a.appendChild(span);
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

  const concepts: Concept[] = CONCEPTS;

  /* ================= CLICK-TO-EXPAND (FLIP-ish) ================= */
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [fromRect, setFromRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const [toRect, setToRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
    radius: number;
  } | null>(null);

  const [expanded, setExpanded] = useState(false);
  const closingRef = useRef(false);

  // ✅ NEW: refs to measure media so caption stays inside the visible media box
  const imgRef = useRef<HTMLImageElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const [capVars, setCapVars] = useState<{
    left: number;
    bottom: number;
    maxW: number;
  } | null>(null);

  const lockScroll = (lock: boolean) => {
    if (lock) {
      const y = window.scrollY;
      document.body.dataset.nkScrollY = String(y);
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const y = Number(document.body.dataset.nkScrollY || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      delete document.body.dataset.nkScrollY;
      window.scrollTo(0, y);
    }
  };

  // ✅ Centered "stage" rect (4:3) that is constrained by the GRID width,
  // and always centered in the VIEWPORT no matter scroll position.
  const computeToRect = () => {
    const gridEl = gridRef.current;
    if (!gridEl) return null;

    const r = gridEl.getBoundingClientRect();

    // ✅ tweak padding on mobile so the stage can be bigger, while desktop stays the same
    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    const PAD_X = isMobile ? 18 : 48; // less side padding on mobile
    const PAD_Y = isMobile ? 96 : 64; // reserve vertical space for title/sub text on mobile

    // Constrain width to the grid width (preserves the "empty sides" look),
    // and also to viewport so it never overflows.
    let w = Math.min(r.width, window.innerWidth - PAD_X * 2);
    let h = (w * 3) / 4;

    // ✅ allow taller stage on mobile (bigger image), but still leave room for text above/below
    const maxH = Math.max(240, window.innerHeight - PAD_Y * 2);
    if (h > maxH) {
      h = maxH;
      w = (h * 4) / 3;
    }

    const left = (window.innerWidth - w) / 2;
    const top = (window.innerHeight - h) / 2;

    return {
      top,
      left,
      width: w,
      height: h,
      radius: isMobile ? 18 : 20,
    };
  };

  // ✅ NEW: compute caption placement so it never "overhangs" outside visible media
  const recomputeCaptionVars = () => {
    if (!toRect || activeIndex == null) return;

    const stageW = toRect.width;
    const stageH = toRect.height;

    const isVideo =
      (concepts[activeIndex] as any)?.mediaType === "video" &&
      !!(concepts[activeIndex] as any)?.mediaSrc;

    let mediaW = 0;
    let mediaH = 0;

    if (isVideo) {
      const v = vidRef.current;
      mediaW = v?.videoWidth || 0;
      mediaH = v?.videoHeight || 0;
    } else {
      const img = imgRef.current;
      mediaW = img?.naturalWidth || 0;
      mediaH = img?.naturalHeight || 0;
    }

    if (!mediaW || !mediaH || !stageW || !stageH) return;

    // object-fit: contain math
    const scale = Math.min(stageW / mediaW, stageH / mediaH);
    const dispW = mediaW * scale;
    const dispH = mediaH * scale;
    const offsetX = (stageW - dispW) / 2;
    const offsetY = (stageH - dispH) / 2;

    const CAP_PAD_X = 22;
    const CAP_PAD_Y = 18;

    const left = offsetX + CAP_PAD_X;

    // distance from frame bottom to media bottom:
    const bottomLetterbox = stageH - (offsetY + dispH);
    const bottom = bottomLetterbox + CAP_PAD_Y;

    const maxW = Math.max(220, dispW - CAP_PAD_X * 2);

    setCapVars({ left, bottom, maxW });
  };

  const open = (i: number) => {
    const el = tileRefs.current[i];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setActiveIndex(i);
    setFromRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    setToRect(computeToRect());
    closingRef.current = false;

    document.body.classList.add("nk-concepts-overlay-open");
    lockScroll(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });
  };

  const close = () => {
    if (activeIndex == null) return;

    const el = tileRefs.current[activeIndex];
    if (el) {
      const rect = el.getBoundingClientRect();
      setFromRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    }

    closingRef.current = true;
    setExpanded(false);

    // ✅ smooth return: let the page/nav start coming back immediately
    document.body.classList.remove("nk-concepts-overlay-open");
  };

  useEffect(() => {
    if (activeIndex == null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const onResize = () => {
      setToRect(computeToRect());
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // ✅ NEW: whenever the overlay opens / stage changes, recompute caption bounds
  useEffect(() => {
    if (!expanded) return;
    // next paint so refs are attached
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        recomputeCaptionVars();
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, toRect, activeIndex]);

  const active = activeIndex != null ? concepts[activeIndex] : null;

  return (
    <main className="min-h-screen px-6 py-24 md:px-16">
      {/* ✅ smooth return: hide the underlay ONLY while actually expanded */}
      <div className={`nk-underlay ${expanded ? "is-hidden" : ""}`}>
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Concepts</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-2xl" />

          <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c, i) => (
              <button
                key={c.mediaSrc}
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                type="button"
                className="nk-tile group relative overflow-hidden rounded-2xl bg-white/[0.03] text-left focus:outline-none transition-all duration-300 ease-out"
                onClick={() => open(i)}
                aria-label={c.title}
              >
                {/* ✅ show preview image only if provided */}
                {c.thumb ? (
                  <img
                    src={c.thumb}
                    alt=""
                    className={`nk-thumb block w-full h-full aspect-[4/3] transition-transform duration-500 ease-out ${
                      ((c.title || "").toLowerCase().includes("fridge") ||
                        (c.thumb || "").toLowerCase().includes("fridge") ||
                        (c.mediaSrc || "").toLowerCase().includes("fridge")) ||
                      ((c.title || "").toLowerCase().includes("lightning") ||
                        (c.title || "").toLowerCase().includes("table") ||
                        (c.thumb || "").toLowerCase().includes("tablelightning")) ||
                      ((c.title || "").toLowerCase().includes("tank") ||
                        (c.thumb || "").toLowerCase().includes("tank") ||
                        (c.mediaSrc || "").toLowerCase().includes("tank"))
                        ? "object-contain bg-black"
                        : "object-cover"
                    } rounded-2xl`}
                    draggable={false}
                  />
                ) : (
                  <div className="nk-tile-blank aspect-[4/3]" aria-hidden="true" />
                )}

                {/* refined hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Fullscreen expand overlay ===== */}
      {active && fromRect && toRect && (
        <div
          className={`nk-lightbox-root ${expanded ? "is-open" : "is-closed"}`}
          onClick={close}
          aria-hidden={!expanded}
        >
          <div className="nk-lightbox-backdrop" />

          <div
            className="nk-lightbox-frame"
            style={
              {
                "--from-top": `${fromRect.top}px`,
                "--from-left": `${fromRect.left}px`,
                "--from-w": `${fromRect.width}px`,
                "--from-h": `${fromRect.height}px`,
                "--to-top": `${toRect.top}px`,
                "--to-left": `${toRect.left}px`,
                "--to-w": `${toRect.width}px`,
                "--to-h": `${toRect.height}px`,
                "--to-r": `${toRect.radius}px`,
                ...(capVars
                  ? {
                      "--cap-left": `${capVars.left}px`,
                      "--cap-bottom": `${capVars.bottom}px`,
                      "--cap-maxw": `${capVars.maxW}px`,
                    }
                  : {}),
              } as React.CSSProperties
            }
            onTransitionEnd={(e) => {
              if ((e.target as HTMLElement).classList?.contains("nk-lightbox-frame")) {
                if (!expanded && closingRef.current) {
                  closingRef.current = false;
                  setActiveIndex(null);
                  setFromRect(null);
                  setToRect(null);
                  setCapVars(null);
                  lockScroll(false);
                  // (already removed on close(), but safe if it runs twice)
                  document.body.classList.remove("nk-concepts-overlay-open");
                }
              }
            }}
          >
            {/* ✅ MOBILE: title above the stage (centered) */}
            <div className={`nk-mobile-topcap ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-mcap-title">{active.title}</div>
            </div>

            {/* ✅ Image OR Video depending on concept */}
            {(active as any).mediaType === "video" && (active as any).mediaSrc ? (
              <video
                ref={vidRef}
                src={(active as any).mediaSrc}
                className="nk-lightbox-media"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={() => {
                  recomputeCaptionVars();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
              />
            ) : (
              <img
                ref={imgRef}
                src={active.mediaSrc}
                alt={active.title}
                className="nk-lightbox-img"
                onLoad={() => {
                  recomputeCaptionVars();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                draggable={false}
              />
            )}

            {/* ✅ DESKTOP caption (unchanged) */}
            <div className={`nk-lightbox-caption ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-cap-title">{active.title}</div>
              <div className="nk-cap-sub">{active.subtitle}</div>
            </div>

            {/* ✅ MOBILE: subtitle below the stage (left-aligned within stage width) */}
            <div className={`nk-mobile-botcap ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-mcap-sub">{active.subtitle}</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== Hide everything except the opened concept ===== */
        .nk-underlay {
          transition: opacity 220ms ease, filter 220ms ease;
        }
        .nk-underlay.is-hidden {
          opacity: 0;
          pointer-events: none;
          filter: blur(2px);
        }

        /* Also hide top-right nav text when overlay is open */
        :global(body.nk-concepts-overlay-open .sparkLink[data-nk-topnav="1"]) {
          opacity: 0 !important;
          transform: translateY(-10px) !important;
          pointer-events: none !important;
        }

        /* ===== Spark Shower Hover ===== */
        :global(.sparkLink) {
          position: relative;
          display: inline-block;
          padding: 10px 10px;
          border-radius: 14px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.86);
          background: transparent;
          transition: color 140ms ease, transform 160ms ease, opacity 180ms ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        :global(.sparkLink:hover) {
          color: rgba(255, 255, 255, 1);
          background: transparent;
          transform: translateY(-1px);
        }

        :global(.sparkLink:focus-visible) {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.22),
            0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        :global(.sparkText) {
          position: relative;
          display: inline-block;
          font-size: 16px;
          letter-spacing: -0.02em;
          line-height: 1;
          padding: 2px 2px;
        }

        :global(.navSpark) {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
          opacity: 0;
          pointer-events: none;

          left: var(--sx);
          top: var(--sy);
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
        }

        :global(.sparkLink:hover .navSpark) {
          animation: navSparkBurst 620ms ease-out infinite;
          animation-delay: var(--delay);
          animation-fill-mode: backwards;
        }

        @keyframes navSparkBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.75);
          }
          12% {
            opacity: 0.9;
          }
          45% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.sparkLink),
          :global(.sparkLink:hover) {
            transform: none !important;
            transition: none !important;
          }
          :global(.sparkLink:hover .navSpark) {
            animation: none !important;
            opacity: 0.7;
          }
        }

        @media (max-width: 639px) {
          :global(body.nk-mobile-nav-hidden .sparkLink[data-nk-topnav="1"]) {
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
          }
        }

        /* ===== Tile styling - Apple-inspired ===== */
        .nk-tile {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          transition: transform 280ms cubic-bezier(0.2, 0, 0, 1), 
                      box-shadow 280ms cubic-bezier(0.2, 0, 0, 1);
          will-change: transform, box-shadow;
        }

        .nk-tile:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
        }

        .nk-tile:active {
          transform: translateY(-2px) scale(1.005);
          transition-duration: 120ms;
        }

        .nk-tile:focus-visible {
          outline: none;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5),
                      0 0 0 2px rgba(255, 255, 255, 0.3),
                      0 0 0 4px rgba(255, 255, 255, 0.1);
        }

        /* ✅ make sure previews clip perfectly (kills faint edge/halo) */
        .nk-thumb {
          border-radius: inherit; /* ✅ always match the tile's rounding */
          transform: translateZ(0);
          display: block;
        }

        .nk-tile:hover .nk-thumb {
          transform: translateZ(0) scale(1.05);
        }

        /* ===== Blank tile look ===== */
        .nk-tile-blank {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: radial-gradient(
              1200px 800px at 20% 0%,
              rgba(255, 255, 255, 0.06),
              transparent 60%
            ),
            rgba(255, 255, 255, 0.02);
          border-radius: inherit;
        }

        /* ===== Lightbox expand/collapse ===== */
        .nk-lightbox-root {
          position: fixed;
          inset: 0;
          z-index: 60;
        }

        .nk-lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          opacity: 0;
          transition: opacity 260ms ease;
        }

        .nk-lightbox-root.is-open .nk-lightbox-backdrop {
          opacity: 1;
        }

        .nk-lightbox-frame {
          position: absolute;
          top: var(--from-top);
          left: var(--from-left);
          width: var(--from-w);
          height: var(--from-h);
          border-radius: 16px;
          overflow: hidden;

          /* ✅ black stage so "contain" letterboxing looks intentional */
          background: #000;

          transition: top 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            left 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            width 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            height 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            border-radius 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        /* ✅ Open state expands to the centered 4:3 stage (viewport-centered, grid-constrained) */
        .nk-lightbox-root.is-open .nk-lightbox-frame {
          top: var(--to-top);
          left: var(--to-left);
          width: var(--to-w);
          height: var(--to-h);
          border-radius: var(--to-r);
        }

        /* ✅ no cropping in expanded state */
        .nk-lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          user-select: none;
          background: #000;
        }

        /* ✅ video matches image behavior (no cropping) */
        .nk-lightbox-media {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #000;
        }

        /* ===== Desktop caption (existing) ===== */
        .nk-lightbox-caption {
          position: absolute;

          /* ✅ keep caption INSIDE the visible media box (no overhang) */
          left: var(--cap-left, 22px);
          bottom: var(--cap-bottom, 18px);
          max-width: var(--cap-maxw, 60ch);

          display: flex;
          flex-direction: column;
          gap: 8px;
          pointer-events: none;
        }

        /* ✅ Bigger + pure white */
        .nk-cap-title {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);

          /* reveal base */
          display: inline-block;
          opacity: 0;
          transform: translateX(-10px);
          clip-path: inset(0 100% 0 0);
          will-change: clip-path, transform, opacity;
        }

        .nk-cap-sub {
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          opacity: 0;
          transform: translateX(-10px);
          clip-path: inset(0 100% 0 0);
          will-change: clip-path, transform, opacity;

          text-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
        }

        /* ✅ Left-to-right reveal when expanded */
        .nk-lightbox-caption.cap-in .nk-cap-title {
          animation: nkRevealLR 560ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          animation-delay: 120ms;
        }
        .nk-lightbox-caption.cap-in .nk-cap-sub {
          animation: nkRevealLR 560ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          animation-delay: 220ms;
        }

        @keyframes nkRevealLR {
          to {
            opacity: 1;
            transform: translateX(0px);
            clip-path: inset(0 0 0 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nk-lightbox-caption.cap-in .nk-cap-title,
          .nk-lightbox-caption.cap-in .nk-cap-sub {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
          }
        }

        /* ================= MOBILE-ONLY LIGHTBOX LAYOUT ================= */
        /* On mobile, we move title above and subtitle below, and hide the overlay caption */
        .nk-mobile-topcap,
        .nk-mobile-botcap {
          display: none;
        }

        @media (max-width: 639px) {
          /* hide desktop overlay caption on mobile */
          .nk-lightbox-caption {
            display: none;
          }

          /* allow the frame to show outside the stage so we can place text above/below */
          .nk-lightbox-frame {
            overflow: visible;
            background: transparent; /* stage black stays on media element */
          }

          /* keep media stage black + rounded */
          .nk-lightbox-img,
          .nk-lightbox-media {
            border-radius: 18px;
            background: #000;
          }

          /* top title */
          .nk-mobile-topcap {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -68px; /* sits above stage */
            width: min(92vw, var(--to-w));
            pointer-events: none;
            text-align: center;
          }

          .nk-mcap-title {
            font-size: 34px;
            font-weight: 800;
            letter-spacing: -0.02em;
            color: #ffffff;
            text-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);

            opacity: 0;
            transform: translateY(6px);
          }

          /* bottom subtitle (left-aligned within stage width) */
          .nk-mobile-botcap {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(var(--to-h) + 14px); /* just below stage */
            width: min(92vw, var(--to-w));
            pointer-events: none;
            text-align: left;
          }

          .nk-mcap-sub {
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            opacity: 0;
            transform: translateY(6px);
            text-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
            max-width: 38ch;
          }

          /* simple fade-in synced with your open animation */
          .nk-mobile-topcap.cap-in .nk-mcap-title {
            animation: nkFadeUp 420ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
            animation-delay: 160ms;
          }
          .nk-mobile-botcap.cap-in .nk-mcap-sub {
            animation: nkFadeUp 420ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
            animation-delay: 240ms;
          }

          @keyframes nkFadeUp {
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .nk-mobile-topcap.cap-in .nk-mcap-title,
            .nk-mobile-botcap.cap-in .nk-mcap-sub {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        }
      `}</style>
    </main>
  );
}
