"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { CONCEPTS, type Concept } from "./concepts-data";

export default function ConceptsPage() {
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

  const imgRef = useRef<HTMLImageElement | null>(null);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const [capVars, setCapVars] = useState<{
    left: number;
    bottom: number;
    maxW: number;
  } | null>(null);

  const lockScroll = (lock: boolean) => {
    if (lock) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  };

  const computeToRect = () => {
    const gridEl = gridRef.current;
    if (!gridEl) return null;

    const r = gridEl.getBoundingClientRect();
    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    const PAD_X = isMobile ? 18 : 48;
    const PAD_Y = isMobile ? 96 : 64;

    let w = Math.min(r.width, window.innerWidth - PAD_X * 2);
    let h = (w * 3) / 4;

    const maxH = Math.max(240, window.innerHeight - PAD_Y * 2);
    if (h > maxH) {
      h = maxH;
      w = (h * 4) / 3;
    }

    const left = (window.innerWidth - w) / 2;
    const top = (window.innerHeight - h) / 2;

    return { top, left, width: w, height: h, radius: isMobile ? 18 : 20 };
  };

  const recomputeCaptionVars = () => {
    if (!toRect || activeIndex == null) return;

    const stageW = toRect.width;
    const stageH = toRect.height;

    const isVideo = concepts[activeIndex]?.mediaType === "video";

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

    const scale = Math.min(stageW / mediaW, stageH / mediaH);
    const dispW = mediaW * scale;
    const dispH = mediaH * scale;
    const offsetX = (stageW - dispW) / 2;
    const offsetY = (stageH - dispH) / 2;

    const CAP_PAD_X = 22;
    const CAP_PAD_Y = 18;

    const left = offsetX + CAP_PAD_X;
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
  };

  useEffect(() => {
    if (activeIndex == null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => setToRect(computeToRect());

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    if (!expanded) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => recomputeCaptionVars());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, toRect, activeIndex]);

  const active = activeIndex != null ? concepts[activeIndex] : null;

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-20">
      {/* Underlay: grid content */}
      <div className={`nk-underlay ${expanded ? "is-hidden" : ""}`}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
          <h1 className="text-4xl font-semibold tracking-tight text-[#f5f5f5] mb-12">
            Concepts
          </h1>

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
                {c.thumb ? (
                  <img
                    src={c.thumb}
                    alt=""
                    className={`nk-thumb block w-full h-full aspect-[4/3] transition-transform duration-500 ease-out ${
                      (c.title || "").toLowerCase().includes("fridge") ||
                      (c.title || "").toLowerCase().includes("lightning") ||
                      (c.title || "").toLowerCase().includes("table") ||
                      (c.title || "").toLowerCase().includes("tank") ||
                      (c.title || "").toLowerCase().includes("plant") ||
                      (c.title || "").toLowerCase().includes("drone")
                        ? "object-contain bg-black"
                        : "object-cover"
                    } rounded-2xl`}
                    draggable={false}
                  />
                ) : (
                  <div className="nk-tile-blank aspect-[4/3]" aria-hidden="true" />
                )}

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

          {/* Back button */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-20 sm:top-6 left-6 z-[70] flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200"
            style={{ opacity: expanded ? 1 : 0, transition: "opacity 300ms ease 200ms" }}
          >
            ← Back
          </button>

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
                }
              }
            }}
          >
            {/* MOBILE: title above the stage */}
            <div className={`nk-mobile-topcap ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-mcap-title">{active.title}</div>
            </div>

            {/* Image or Video */}
            {active.mediaType === "video" && active.mediaSrc ? (
              <video
                ref={vidRef}
                src={active.mediaSrc}
                className="nk-lightbox-media"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={() => recomputeCaptionVars()}
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
                onLoad={() => recomputeCaptionVars()}
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                draggable={false}
              />
            )}

            {/* DESKTOP caption */}
            <div className={`nk-lightbox-caption ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-cap-title">{active.title}</div>
              <div className="nk-cap-sub">{active.subtitle}</div>
            </div>

            {/* MOBILE: subtitle below the stage */}
            <div className={`nk-mobile-botcap ${expanded ? "cap-in" : "cap-out"}`}>
              <div className="nk-mcap-sub">{active.subtitle}</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nk-underlay {
          transition: opacity 220ms ease, filter 220ms ease;
        }
        .nk-underlay.is-hidden {
          opacity: 0;
          pointer-events: none;
          filter: blur(2px);
        }

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

        .nk-thumb {
          border-radius: inherit;
          transform: translateZ(0);
          display: block;
        }
        .nk-tile:hover .nk-thumb {
          transform: translateZ(0) scale(1.05);
        }

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

        /* ===== Lightbox ===== */
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
          background: #000;
          transition: top 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            left 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            width 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            height 520ms cubic-bezier(0.2, 0.9, 0.2, 1),
            border-radius 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }
        .nk-lightbox-root.is-open .nk-lightbox-frame {
          top: var(--to-top);
          left: var(--to-left);
          width: var(--to-w);
          height: var(--to-h);
          border-radius: var(--to-r);
        }

        .nk-lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          user-select: none;
          background: #000;
        }
        .nk-lightbox-media {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #000;
        }

        /* Desktop caption */
        .nk-lightbox-caption {
          position: absolute;
          left: var(--cap-left, 22px);
          bottom: var(--cap-bottom, 18px);
          max-width: var(--cap-maxw, 60ch);
          display: flex;
          flex-direction: column;
          gap: 8px;
          pointer-events: none;
        }
        .nk-cap-title {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
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

        /* ===== Mobile lightbox ===== */
        .nk-mobile-topcap,
        .nk-mobile-botcap {
          display: none;
        }

        @media (max-width: 639px) {
          .nk-lightbox-caption {
            display: none;
          }
          .nk-lightbox-frame {
            overflow: visible;
            background: transparent;
          }
          .nk-lightbox-img,
          .nk-lightbox-media {
            border-radius: 18px;
            background: #000;
          }

          .nk-mobile-topcap {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -68px;
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

          .nk-mobile-botcap {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(var(--to-h) + 14px);
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
