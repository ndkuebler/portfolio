"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { IDEATION_CONCEPTS, type IdeationConcept } from "./ideation-data";
import { useSwipeGesture } from "./useSwipeGesture";

const STORAGE_KEY = "ideation-swipe-results";

type Results = Record<number, "approved" | "rejected">;

function loadResults(): Results {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveResults(r: Results) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
}

/* ───────────────────────── SwipeCard ───────────────────────── */

function SwipeCard({
  concept,
  isTop,
  stackIndex,
  onSwipe,
}: {
  concept: IdeationConcept;
  isTop: boolean;
  stackIndex: number;
  onSwipe: (dir: "left" | "right") => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState<"left" | "right" | null>(null);

  const handleSwipe = useCallback(
    (dir: "left" | "right") => {
      setExiting(dir);
      setTimeout(() => onSwipe(dir), 450);
    },
    [onSwipe]
  );

  const swipe = useSwipeGesture(cardRef, {
    threshold: 100,
    onSwipe: handleSwipe,
    enabled: isTop && !exiting,
  });

  // Programmatic swipe (from keyboard)
  useEffect(() => {
    if (!isTop) return;
    const handler = (e: CustomEvent<"left" | "right">) => {
      handleSwipe(e.detail);
    };
    window.addEventListener("ideate-swipe" as string, handler as EventListener);
    return () =>
      window.removeEventListener("ideate-swipe" as string, handler as EventListener);
  }, [isTop, handleSwipe]);

  const stackScale = 1 - stackIndex * 0.04;
  const stackY = stackIndex * 8;

  const dragTransform =
    isTop && !exiting
      ? `translateX(${swipe.offsetX}px) translateY(${swipe.offsetY * 0.4}px) rotate(${swipe.rotation * 0.6}deg)`
      : "";

  const exitTransform = exiting
    ? `translateX(${exiting === "right" ? "110vw" : "-110vw"}) rotate(${exiting === "right" ? 15 : -15}deg)`
    : "";

  const transform = exiting
    ? exitTransform
    : isTop
      ? dragTransform
      : `scale(${stackScale}) translateY(${stackY}px)`;

  // Subtle edge glow on drag
  const dragProgress = isTop ? Math.abs(swipe.offsetX) / 150 : 0;
  const isApproving = swipe.offsetX > 0;
  const glowOpacity = Math.min(dragProgress * 0.4, 0.4);

  return (
    <div
      ref={cardRef}
      className="swipe-card"
      style={{
        transform,
        transition:
          swipe.isDragging && !exiting
            ? "none"
            : exiting
              ? "transform 450ms cubic-bezier(0.4, 0, 1, 1)"
              : "transform 350ms cubic-bezier(0.2, 0.9, 0.2, 1)",
        zIndex: 30 - stackIndex,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#111]">
        <Image
          src={concept.thumb || concept.mediaSrc}
          alt={concept.title}
          fill
          className="object-contain object-[center_35%]"
          draggable={false}
          priority={stackIndex === 0}
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

        {/* Content at bottom — editorial style */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
            Concept {concept.id}
          </p>
          <h2 className="mt-1.5 text-[22px] font-semibold tracking-tight text-white/90 md:text-2xl">
            {concept.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-[15px]">
            {concept.subtitle}
          </p>
        </div>

        {/* Color glow on swipe — green for keep, red for pass */}
        {isTop && dragProgress > 0.1 && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-100"
            style={{
              opacity: glowOpacity,
              background: isApproving
                ? "radial-gradient(ellipse at right center, rgba(52,211,153,0.15) 0%, transparent 70%)"
                : "radial-gradient(ellipse at left center, rgba(248,113,113,0.15) 0%, transparent 70%)",
              boxShadow: isApproving
                ? "inset 0 0 80px rgba(52,211,153,0.1), inset 4px 0 40px rgba(52,211,153,0.08)"
                : "inset 0 0 80px rgba(248,113,113,0.1), inset -4px 0 40px rgba(248,113,113,0.08)",
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

export default function IdeationSwipe() {
  const [results, setResults] = useState<Results>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setResults(loadResults());
    setMounted(true);
  }, []);

  const remaining = useMemo(
    () => IDEATION_CONCEPTS.filter((c) => !(c.id in results)),
    [results]
  );

  const approved = useMemo(
    () => IDEATION_CONCEPTS.filter((c) => results[c.id] === "approved"),
    [results]
  );

  const rejected = useMemo(
    () => IDEATION_CONCEPTS.filter((c) => results[c.id] === "rejected"),
    [results]
  );

  const total = IDEATION_CONCEPTS.length;
  const reviewed = total - remaining.length;

  const handleSwipe = useCallback(
    (dir: "left" | "right") => {
      if (remaining.length === 0) return;
      const concept = remaining[0];
      const next: Results = {
        ...results,
        [concept.id]: dir === "right" ? "approved" : "rejected",
      };
      setResults(next);
      saveResults(next);
    },
    [remaining, results]
  );

  const resetAll = () => {
    setResults({});
    localStorage.removeItem(STORAGE_KEY);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (remaining.length === 0) return;
      if (e.key === "ArrowLeft" || e.key === "j") {
        window.dispatchEvent(new CustomEvent("ideate-swipe", { detail: "left" }));
      } else if (e.key === "ArrowRight" || e.key === "k") {
        window.dispatchEvent(new CustomEvent("ideate-swipe", { detail: "right" }));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [remaining.length]);

  if (!mounted) return null;

  // Empty state
  if (total === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/20">
            No concepts yet
          </p>
        </div>
      </main>
    );
  }

  // Results screen — all reviewed
  if (remaining.length === 0) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-12 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-lg px-6">
          {/* Minimal header */}
          <div className="mb-12 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/25">
              Review Complete
            </p>
            <div className="mx-auto mt-6 flex max-w-[200px] justify-between">
              <div className="text-center">
                <span className="text-2xl font-light tabular-nums text-white/70">
                  {approved.length}
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Kept
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-center">
                <span className="text-2xl font-light tabular-nums text-white/40">
                  {rejected.length}
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Passed
                </p>
              </div>
            </div>
          </div>

          {approved.length > 0 && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {approved.map((c) => (
                <div
                  key={c.id}
                  className="group relative overflow-hidden rounded-xl bg-[#111]"
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={c.thumb || c.mediaSrc}
                      alt={c.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                    <p className="text-xs font-medium text-white/60">
                      {c.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={resetAll}
              className="rounded-full px-8 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Start Over
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Swipe UI
  const visibleCards = remaining.slice(0, 3);

  return (
    <main className="h-[100dvh] overflow-hidden bg-[#0a0a0a] md:h-auto md:min-h-screen md:overflow-visible md:pb-20">
      <div className="mx-auto flex h-full max-w-md flex-col px-5 pt-4 pb-6 md:block md:h-auto md:pt-28">
        {/* Header — ultra minimal */}
        <div className="mb-3 flex items-center justify-between md:mb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/25">
            Ideation
          </p>
          <p className="text-[11px] font-medium tabular-nums tracking-wider text-white/20">
            {reviewed + 1} / {total}
          </p>
        </div>

        {/* Progress — thin line */}
        <div className="mb-4 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06] md:mb-8">
          <div
            className="h-full rounded-full bg-white/20 transition-all duration-700 ease-out"
            style={{ width: `${(reviewed / total) * 100}%` }}
          />
        </div>

        {/* Card stack */}
        <div className="card-stack flex-1 md:flex-none">
          {visibleCards
            .slice()
            .reverse()
            .map((c, reverseIdx) => {
              const stackIndex = visibleCards.length - 1 - reverseIdx;
              return (
                <SwipeCard
                  key={c.id}
                  concept={c}
                  isTop={stackIndex === 0}
                  stackIndex={stackIndex}
                  onSwipe={handleSwipe}
                />
              );
            })}
        </div>

        {/* Keyboard hint — desktop only, very subtle */}
        <p className="mt-6 hidden text-center text-[10px] tracking-[0.15em] text-white/15 md:block">
          ← PASS &nbsp;&middot;&nbsp; KEEP →
        </p>
      </div>

      <style jsx>{`
        .card-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          max-width: 420px;
          margin: 0 auto;
        }
        @media (max-width: 767px) {
          .card-stack {
            aspect-ratio: unset;
            min-height: 0;
          }
        }
        .card-stack :global(.swipe-card) {
          position: absolute;
          inset: 0;
          will-change: transform;
          cursor: grab;
        }
        .card-stack :global(.swipe-card:active) {
          cursor: grabbing;
        }
      `}</style>
    </main>
  );
}
