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
              ? "transform 450ms cubic-bezier(0.4, 0, 1, 1)"
              : "transform 350ms cubic-bezier(0.2, 0.9, 0.2, 1)",
        zIndex: 30 - stackIndex,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
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

        {/* Approve overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-emerald-500/30"
          style={{ opacity: approveOpacity }}
        />

        {/* Reject overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-red-500/30"
          style={{ opacity: rejectOpacity }}
        />
      </div>
    </div>
  );
}

/* ───────────────────────── ScrollWheel ───────────────────────── */

function ScrollWheel({ concepts }: { concepts: IdeationConcept[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        const elCenter = elRect.top + elRect.height / 2;
        const dist = Math.abs(elCenter - centerY);
        const maxDist = rect.height / 2;
        const norm = Math.min(dist / maxDist, 1);

        const scale = 1 - norm * 0.2;
        const opacity = 1 - norm * 0.7;

        el.style.transform = `scale(${scale})`;
        el.style.opacity = `${opacity}`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    // Initial render
    requestAnimationFrame(update);

    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [concepts.length]);

  return (
    <div className="relative mt-6 min-h-0 flex-1">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div
        ref={containerRef}
        className="h-full snap-y snap-mandatory overflow-y-auto overscroll-contain"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        {/* Top spacer */}
        <div className="h-[calc(20%-40px)]" />

        {concepts.map((c, i) => (
          <div
            key={c.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="flex h-[80px] snap-center items-center gap-4 px-5 will-change-transform"
          >
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-black">
              <img
                src={c.thumb || c.mediaSrc}
                alt={c.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-white">
                {c.title}
              </p>
              <p className="mt-0.5 truncate text-[12px] text-white/40">
                {c.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom spacer — allows last item to reach center */}
        <div className="h-[calc(50%-40px)]" />
      </div>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

function buildResultsCode(approvedIds: number[]): string {
  return approvedIds.sort((a, b) => a - b).join("-");
}

function copyToClipboard(text: string) {
  navigator.clipboard?.writeText(text);
}

export default function IdeationSwipe() {
  const [results, setResults] = useState<Results>({});
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const resultsCode = useMemo(
    () => buildResultsCode(approved.map((c) => c.id)),
    [approved]
  );

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
      <main className="h-[100dvh] flex flex-col bg-[#0a0a0a] md:h-auto md:min-h-screen">
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pt-14 pb-8 md:pt-32 md:pb-20">
          {/* Count */}
          <p className="shrink-0 text-center text-[13px] font-semibold uppercase tracking-[0.3em] text-white">
            {approved.length} Kept
          </p>

          {/* Scroll wheel */}
          {approved.length > 0 && (
            <ScrollWheel concepts={approved} />
          )}

          {/* Fixed bottom section */}
          <div className="shrink-0 pt-3">
            {/* Results code — white pill */}
            {approved.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  copyToClipboard(resultsCode);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="mx-auto flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 transition-all duration-300 hover:bg-white/90 active:scale-95"
              >
                <span className="font-mono text-[13px] tracking-wider text-black/70">
                  {resultsCode}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            )}

            {/* Start over — red */}
            <p
              onClick={resetAll}
              className="mt-3 cursor-pointer text-center text-[11px] font-medium uppercase tracking-[0.2em] text-red-400/60 transition-colors duration-300 hover:text-red-400"
            >
              Start Over
            </p>
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
