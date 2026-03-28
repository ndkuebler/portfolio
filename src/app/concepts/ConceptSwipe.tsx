"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { CONCEPTS, type Concept } from "./concepts-data";
import { useSwipeGesture } from "@/app/ideate/useSwipeGesture";

const STORAGE_KEY = "concept-vote-slugs";
const INTRO_KEY = "concept-swipe-intro-seen";

type VotedMap = Record<string, "like" | "pass">;

function loadVoted(): VotedMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveVoted(v: VotedMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/* ───────────────────────── SwipeCard ───────────────────────── */

function SwipeCard({
  concept,
  isTop,
  stackIndex,
  onSwipe,
}: {
  concept: Concept;
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

  // Programmatic swipe (from keyboard or buttons)
  useEffect(() => {
    if (!isTop) return;
    const handler = (e: CustomEvent<"left" | "right">) => {
      handleSwipe(e.detail);
    };
    window.addEventListener("concept-swipe" as string, handler as EventListener);
    return () =>
      window.removeEventListener("concept-swipe" as string, handler as EventListener);
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

  const likeOpacity = isTop && swipe.offsetX > 0 ? Math.min(swipe.offsetX / 150, 0.8) : 0;
  const passOpacity = isTop && swipe.offsetX < 0 ? Math.min(-swipe.offsetX / 150, 0.8) : 0;

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
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-black">
        {/* Image area */}
        <div className="relative min-h-0 flex-1">
          <Image
            src={concept.thumb || concept.mediaSrc}
            alt={concept.title}
            fill
            className="object-contain"
            draggable={false}
            priority={stackIndex === 0}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content below image */}
        <div className="shrink-0 px-5 pb-4 pt-2 md:px-7 md:pb-5">
          <h2 className="text-[20px] font-semibold tracking-tight text-white/90 md:text-2xl">
            {concept.title}
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/55 md:text-[15px]">
            {concept.subtitle}
          </p>
        </div>

        {/* Like overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-emerald-500/30"
          style={{ opacity: likeOpacity }}
        />
        {/* Like label */}
        <div
          className="pointer-events-none absolute left-6 top-6 rounded-lg border-2 border-emerald-400 px-4 py-1.5"
          style={{ opacity: likeOpacity, transform: `rotate(-12deg)` }}
        >
          <span className="text-lg font-bold tracking-wide text-emerald-400">LIKE</span>
        </div>

        {/* Pass overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-red-500/30"
          style={{ opacity: passOpacity }}
        />
        {/* Pass label */}
        <div
          className="pointer-events-none absolute right-6 top-6 rounded-lg border-2 border-red-400 px-4 py-1.5"
          style={{ opacity: passOpacity, transform: `rotate(12deg)` }}
        >
          <span className="text-lg font-bold tracking-wide text-red-400">PASS</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Instruction Modal ───────────────────────── */

function InstructionModal({ onStart }: { onStart: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-[#151515] p-8 text-center">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          Rate My Concepts
        </h3>
        <div className="mt-6 space-y-4 text-left text-sm text-white/50">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
              →
            </span>
            <p><span className="md:hidden">Swipe right to <span className="text-emerald-400">like</span></span><span className="hidden md:inline">Swipe right or tap the heart to <span className="text-emerald-400">like</span> a concept</span></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs text-red-400">
              ←
            </span>
            <p><span className="md:hidden">Swipe left to <span className="text-red-400">pass</span></span><span className="hidden md:inline">Swipe left or tap X to <span className="text-red-400">pass</span></span></p>
          </div>
          <div className="hidden items-start gap-3 md:flex">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-white/60">
              ⌨
            </span>
            <p>On desktop, use arrow keys or J/K</p>
          </div>
        </div>
        <p className="mt-5 text-xs text-white/30">
          Your votes help me know what resonates
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95"
        >
          Start Rating
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── Completion Screen ───────────────────────── */

function CompletionScreen({
  likedCount,
  totalCount,
  onClose,
  onReset,
}: {
  likedCount: number;
  totalCount: number;
  onClose: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="text-4xl">✨</div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
        Thanks for rating!
      </h3>
      <p className="mt-2 text-sm text-white/40">
        You liked {likedCount} of {totalCount} concepts
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95"
      >
        Back to Concepts
      </button>
      <button
        type="button"
        onClick={onReset}
        className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-red-400/60 transition-colors hover:text-red-400"
      >
        Start Over
      </button>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

export default function ConceptSwipe({ onClose }: { onClose: () => void }) {
  const [voted, setVoted] = useState<VotedMap>({});
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [shuffledConcepts, setShuffledConcepts] = useState<Concept[]>([]);

  useEffect(() => {
    const savedVotes = loadVoted();
    setVoted(savedVotes);

    // Shuffle concepts, filtering out already-voted ones (only concepts with slugs)
    const unvoted = CONCEPTS.filter((c) => c.slug && !(c.slug in savedVotes));
    setShuffledConcepts(shuffleArray(unvoted));

    // Always show intro when opening the swipe UI
    setShowIntro(true);

    setMounted(true);
  }, []);

  const remaining = useMemo(() => {
    return shuffledConcepts.filter((c) => !(c.slug in voted));
  }, [shuffledConcepts, voted]);

  const totalToRate = shuffledConcepts.length;
  const reviewed = totalToRate - remaining.length;
  const likedCount = Object.values(voted).filter((v) => v === "like").length;

  const handleSwipe = useCallback(
    (dir: "left" | "right") => {
      if (remaining.length === 0) return;
      const concept = remaining[0];
      const vote = dir === "right" ? "like" : "pass";
      const next: VotedMap = { ...voted, [concept.slug]: vote as "like" | "pass" };
      setVoted(next);
      saveVoted(next);

      // Fire and forget API call
      fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: concept.slug, vote }),
      }).catch(() => {});
    },
    [remaining, voted]
  );

  const handleReset = () => {
    setVoted({});
    localStorage.removeItem(STORAGE_KEY);
    setShuffledConcepts(shuffleArray(CONCEPTS));
  };

  const handleDismissIntro = () => {
    setShowIntro(false);
    localStorage.setItem(INTRO_KEY, "1");
  };

  // Keyboard shortcuts
  useEffect(() => {
    if (!mounted || remaining.length === 0) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "j") {
        window.dispatchEvent(new CustomEvent("concept-swipe", { detail: "left" }));
      } else if (e.key === "ArrowRight" || e.key === "k") {
        window.dispatchEvent(new CustomEvent("concept-swipe", { detail: "right" }));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mounted, remaining.length, onClose]);

  if (!mounted) return null;

  const done = remaining.length === 0;
  const visibleCards = remaining.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]">
      {/* Instruction modal */}
      {showIntro && <InstructionModal onStart={handleDismissIntro} />}

      {/* Header */}
      <div className="mx-auto flex w-full max-w-md shrink-0 items-center justify-between px-5 pt-2 md:pt-6">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Close
        </button>
        {!done && (
          <p className="text-[11px] font-medium tabular-nums tracking-wider text-white/70">
            {reviewed + 1} / {totalToRate}
          </p>
        )}
      </div>

      {/* Progress bar */}
      {!done && (
        <div className="mx-auto mt-3 h-[2px] w-full max-w-md overflow-hidden rounded-full bg-white/[0.06] px-5">
          <div
            className="h-full rounded-full bg-white/20 transition-all duration-700 ease-out"
            style={{ width: `${totalToRate > 0 ? (reviewed / totalToRate) * 100 : 0}%` }}
          />
        </div>
      )}

      {/* Main content */}
      {done ? (
        <CompletionScreen
          likedCount={likedCount}
          totalCount={CONCEPTS.length}
          onClose={onClose}
          onReset={handleReset}
        />
      ) : (
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-6 pt-1">
          {/* Card stack */}
          <div className="card-stack flex-1 md:flex-none">
            {visibleCards
              .slice()
              .reverse()
              .map((c, reverseIdx) => {
                const stackIndex = visibleCards.length - 1 - reverseIdx;
                return (
                  <SwipeCard
                    key={c.slug}
                    concept={c}
                    isTop={stackIndex === 0}
                    stackIndex={stackIndex}
                    onSwipe={handleSwipe}
                  />
                );
              })}
          </div>

          {/* Desktop buttons */}
          <div className="mt-6 hidden items-center justify-center gap-8 md:flex">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("concept-swipe", { detail: "left" }))}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-red-400/30 text-red-400/70 transition-all hover:border-red-400/60 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/10 active:scale-90"
              aria-label="Pass"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("concept-swipe", { detail: "right" }))}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-400/70 transition-all hover:border-emerald-400/60 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 active:scale-90"
              aria-label="Like"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="mt-4 hidden text-center text-[10px] tracking-[0.15em] text-white/60 md:block">
            ← PASS &nbsp;·&nbsp; LIKE →
          </p>
        </div>
      )}

      <style jsx>{`
        .card-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          max-width: 420px;
          max-height: 60vh;
          margin: 0 auto;
        }
        @media (max-width: 767px) {
          .card-stack {
            aspect-ratio: unset;
            max-height: none;
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
    </div>
  );
}
