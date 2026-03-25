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
      setTimeout(() => onSwipe(dir), 400);
    },
    [onSwipe]
  );

  const swipe = useSwipeGesture(cardRef, {
    threshold: 120,
    onSwipe: handleSwipe,
    enabled: isTop && !exiting,
  });

  // Programmatic swipe (from buttons/keyboard)
  useEffect(() => {
    if (!isTop) return;
    const handler = (e: CustomEvent<"left" | "right">) => {
      handleSwipe(e.detail);
    };
    window.addEventListener("ideate-swipe" as string, handler as EventListener);
    return () =>
      window.removeEventListener("ideate-swipe" as string, handler as EventListener);
  }, [isTop, handleSwipe]);

  // Stack positioning for non-top cards
  const stackScale = 1 - stackIndex * 0.05;
  const stackY = stackIndex * 10;

  // Drag transform
  const dragTransform =
    isTop && !exiting
      ? `translateX(${swipe.offsetX}px) translateY(${swipe.offsetY}px) rotate(${swipe.rotation}deg)`
      : "";

  // Exit transform
  const exitTransform = exiting
    ? `translateX(${exiting === "right" ? "120vw" : "-120vw"}) rotate(${exiting === "right" ? 25 : -25}deg)`
    : "";

  const transform = exiting
    ? exitTransform
    : isTop
      ? dragTransform
      : `scale(${stackScale}) translateY(${stackY}px)`;

  // Overlay opacities
  const approveOpacity = isTop && swipe.offsetX > 0 ? Math.min(swipe.offsetX / 150, 0.8) : 0;
  const rejectOpacity = isTop && swipe.offsetX < 0 ? Math.min(-swipe.offsetX / 150, 0.8) : 0;

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
              ? "transform 400ms ease-in"
              : "transform 300ms cubic-bezier(0.2, 0.9, 0.2, 1)",
        zIndex: 30 - stackIndex,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
        <Image
          src={concept.thumb || concept.mediaSrc}
          alt={concept.title}
          fill
          className="object-contain"
          draggable={false}
          priority={stackIndex === 0}
        />

        {/* Title overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-24">
          <span className="mb-1 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium tabular-nums text-white/60 backdrop-blur-sm">
            #{concept.id}
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {concept.title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-white/50">
            {concept.subtitle}
          </p>
        </div>

        {/* Approve overlay */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[20px] bg-emerald-500/30"
          style={{ opacity: approveOpacity }}
        >
          <div className="rounded-xl border-4 border-emerald-400 px-6 py-3 rotate-[-20deg]">
            <span className="text-4xl font-black tracking-wider text-emerald-400">
              KEEP
            </span>
          </div>
        </div>

        {/* Reject overlay */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[20px] bg-red-500/30"
          style={{ opacity: rejectOpacity }}
        >
          <div className="rounded-xl border-4 border-red-400 px-6 py-3 rotate-[20deg]">
            <span className="text-4xl font-black tracking-wider text-red-400">
              NOPE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

export default function IdeationSwipe() {
  const [results, setResults] = useState<Results>({});
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setResults(loadResults());
    setMounted(true);
  }, []);

  // Concepts that haven't been reviewed yet
  const remaining = useMemo(
    () => IDEATION_CONCEPTS.filter((c) => !(c.id in results)),
    [results]
  );

  const approved = useMemo(
    () =>
      IDEATION_CONCEPTS.filter((c) => results[c.id] === "approved"),
    [results]
  );

  const rejected = useMemo(
    () =>
      IDEATION_CONCEPTS.filter((c) => results[c.id] === "rejected"),
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
        window.dispatchEvent(
          new CustomEvent("ideate-swipe", { detail: "left" })
        );
      } else if (e.key === "ArrowRight" || e.key === "k") {
        window.dispatchEvent(
          new CustomEvent("ideate-swipe", { detail: "right" })
        );
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [remaining.length]);

  if (!mounted) return null;

  // Empty state — no concepts generated yet
  if (total === 0) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
        <div className="mx-auto max-w-md px-6 text-center">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Ideation
          </h1>
          <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-white/10 py-20">
            <p className="text-lg font-medium text-white/30">No concepts yet</p>
            <p className="mt-2 max-w-xs text-sm text-white/20">
              Run the overnight generation to populate this page.
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Results screen — all reviewed
  if (remaining.length === 0) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-white">
            Review Complete
          </h1>

          <div className="mb-8 flex justify-center gap-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-emerald-400">
                {approved.length}
              </span>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                Approved
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-red-400">
                {rejected.length}
              </span>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                Rejected
              </p>
            </div>
          </div>

          {approved.length > 0 && (
            <>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
                Approved Concepts
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {approved.map((c) => (
                  <div
                    key={c.id}
                    className="group relative overflow-hidden rounded-xl bg-white/[0.03]"
                  >
                    <div className="aspect-[4/3] w-full bg-black">
                      <img
                        src={c.thumb || c.mediaSrc}
                        alt={c.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-white/40">#{c.id}</span>
                      <p className="text-sm font-medium text-white/80">
                        {c.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={resetAll}
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              Review Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Swipe UI
  const visibleCards = remaining.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-20">
      <div className="mx-auto max-w-md px-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-white">
            Ideation
          </h1>
          <span className="text-sm tabular-nums text-white/40">
            {reviewed + 1} / {total}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white/30 transition-all duration-500 ease-out"
            style={{ width: `${(reviewed / total) * 100}%` }}
          />
        </div>

        {/* Card stack */}
        <div className="card-stack">
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

        {/* Action buttons */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("ideate-swipe", { detail: "left" })
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-400/40 text-red-400 transition-all duration-200 hover:border-red-400 hover:bg-red-400/10 hover:scale-110 active:scale-95"
            aria-label="Reject"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("ideate-swipe", { detail: "right" })
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-400/40 text-emerald-400 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-400/10 hover:scale-110 active:scale-95"
            aria-label="Approve"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="mt-4 text-center text-xs text-white/20">
          ← / j to reject &middot; → / k to approve
        </p>
      </div>

      <style jsx>{`
        .card-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          max-width: 400px;
          margin: 0 auto;
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
