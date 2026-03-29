"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { APPROVED_CONCEPTS, type IdeationConcept } from "./approved-data";

const STORAGE_KEY = "approved-review-results";

type Category = "deploy_now" | "deployed" | "touch_up_text" | "touch_up_image" | "touch_up";
type CatResults = Record<number, Category>;

function loadResults(): CatResults {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveResults(r: CatResults) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
}

/* ───────────────────────── Detail View ───────────────────────── */

async function deployConceptToPortfolio(concept: IdeationConcept): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/deploy-concept", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: concept.title,
        subtitle: concept.subtitle,
        thumb: concept.thumb,
        mediaType: concept.mediaType,
        mediaSrc: concept.mediaSrc,
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      return { success: false, error: data.error || "Deploy failed" };
    }
    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

function DetailView({
  concept,
  onBack,
  onCategorize,
  onDeploy,
}: {
  concept: IdeationConcept;
  onBack: () => void;
  onCategorize: (cat: Category) => void;
  onDeploy: () => void;
}) {
  const [deploying, setDeploying] = useState(false);
  return (
    <div>
      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1.5 text-[12px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Image — uses thumbnail which is properly framed */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black">
        <Image
          src={concept.thumb || concept.mediaSrc}
          alt={concept.title}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Info below image */}
      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
          Concept {concept.id}
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white/90">
          {concept.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {concept.subtitle}
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex flex-col gap-2.5">
        <button
          type="button"
          disabled={deploying}
          onClick={async () => {
            setDeploying(true);
            const result = await deployConceptToPortfolio(concept);
            setDeploying(false);
            if (result.success) {
              onDeploy();
            } else {
              alert(`Deploy failed: ${result.error}`);
            }
          }}
          className="w-full rounded-full bg-white py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.97] disabled:opacity-50"
        >
          {deploying ? "Deploying..." : "Deploy Now"}
        </button>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => onCategorize("touch_up_text")}
            className="flex-1 rounded-full border border-white/20 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white/80 active:scale-[0.97]"
          >
            Touch Up Text
          </button>
          <button
            type="button"
            onClick={() => onCategorize("touch_up_image")}
            className="flex-1 rounded-full border border-white/20 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white/80 active:scale-[0.97]"
          >
            Touch Up Image
          </button>
        </div>
        <button
          type="button"
          onClick={() => onCategorize("touch_up")}
          className="w-full rounded-full border border-white/20 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white/80 active:scale-[0.97]"
        >
          Touch Up Both
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── Concept Card ───────────────────────── */

function ConceptCard({
  concept,
  onClick,
  badge,
}: {
  concept: IdeationConcept;
  onClick: () => void;
  badge?: string;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-[#141414] transition-all duration-200 hover:border-white/[0.12] hover:bg-[#1a1a1a]"
    >
      <div className="relative aspect-square w-full bg-black">
        <Image
          src={concept.thumb || concept.mediaSrc}
          alt={concept.title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {badge && (
          <div className="absolute right-3 top-3">
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                badge === "Deployed"
                  ? "bg-green-500/90 text-white"
                  : badge === "Deploy Now"
                  ? "bg-white/90 text-black"
                  : "bg-white/10 text-white/50 backdrop-blur-sm"
              }`}
            >
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-[15px] font-medium text-white/85">{concept.title}</p>
        <p className="mt-1 text-[12px] leading-relaxed text-white/35">
          {concept.subtitle}
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

export default function ApprovedReview() {
  const [results, setResults] = useState<CatResults>({});
  const [mounted, setMounted] = useState(false);
  const [viewing, setViewing] = useState<IdeationConcept | null>(null);

  useEffect(() => {
    setResults(loadResults());
    setMounted(true);
  }, []);

  const uncategorized = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => !(c.id in results)),
    [results]
  );

  const deployed = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => results[c.id] === "deployed"),
    [results]
  );

  const deployNow = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => results[c.id] === "deploy_now"),
    [results]
  );

  const touchUpText = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => results[c.id] === "touch_up_text"),
    [results]
  );

  const touchUpImage = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => results[c.id] === "touch_up_image"),
    [results]
  );

  const touchUp = useMemo(
    () => APPROVED_CONCEPTS.filter((c) => results[c.id] === "touch_up"),
    [results]
  );

  const handleCategorize = useCallback(
    (cat: Category) => {
      if (!viewing) return;
      const next: CatResults = { ...results, [viewing.id]: cat };
      setResults(next);
      saveResults(next);
      setViewing(null);
    },
    [viewing, results]
  );

  const handleDeploy = useCallback(() => {
    if (!viewing) return;
    const next: CatResults = { ...results, [viewing.id]: "deployed" };
    setResults(next);
    saveResults(next);
    setViewing(null);
  }, [viewing, results]);

  const resetAll = () => {
    setResults({});
    localStorage.removeItem(STORAGE_KEY);
    setViewing(null);
  };

  if (!mounted) return null;

  // Empty state
  if (APPROVED_CONCEPTS.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <div className="text-center px-6">
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-white/30">
            No approved concepts yet
          </p>
          <p className="mt-3 text-sm text-white/15">
            Paste your picks code to Claude to populate this page.
          </p>
        </div>
      </main>
    );
  }

  // Detail view
  if (viewing) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="mx-auto max-w-lg px-6 pt-8 pb-12">
          <DetailView
            concept={viewing}
            onBack={() => setViewing(null)}
            onCategorize={handleCategorize}
            onDeploy={handleDeploy}
          />
        </div>
      </main>
    );
  }

  const allCategorized = uncategorized.length === 0;

  // Results view — all categorized
  if (allCategorized) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-12 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-white/25">
            All Categorized
          </p>

          {/* Sections */}
          <div className="mt-12 space-y-14">
            {/* Deployed */}
            {deployed.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-green-400">
                    Deployed
                  </h2>
                  <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-[11px] tabular-nums text-green-400/60">
                    {deployed.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {deployed.map((c) => (
                    <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} badge="Deployed" />
                  ))}
                </div>
              </div>
            )}

            {/* Deploy Now */}
            {deployNow.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
                    Deploy Now
                  </h2>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] tabular-nums text-white/40">
                    {deployNow.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {deployNow.map((c) => (
                    <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} />
                  ))}
                </div>
              </div>
            )}

            {/* Touch Up Text */}
            {touchUpText.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Touch Up Text
                  </h2>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] tabular-nums text-white/40">
                    {touchUpText.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {touchUpText.map((c) => (
                    <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} badge="Text" />
                  ))}
                </div>
              </div>
            )}

            {/* Touch Up Image */}
            {touchUpImage.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Touch Up Image
                  </h2>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] tabular-nums text-white/40">
                    {touchUpImage.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {touchUpImage.map((c) => (
                    <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} badge="Image" />
                  ))}
                </div>
              </div>
            )}

            {/* Touch Up Both */}
            {touchUp.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Touch Up Both
                  </h2>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] tabular-nums text-white/40">
                    {touchUp.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {touchUp.map((c) => (
                    <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} badge="Both" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reset */}
          <div className="mt-16 text-center">
            <p
              onClick={resetAll}
              className="cursor-pointer text-[11px] font-medium uppercase tracking-[0.2em] text-red-400/60 transition-colors duration-300 hover:text-red-400"
            >
              Recategorize All
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Browse view — uncategorized concepts
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-12 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/25">
            Approved Concepts
          </p>
          <p className="text-[11px] font-medium tabular-nums tracking-wider text-white/20">
            {uncategorized.length} remaining
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-white/20 transition-all duration-700 ease-out"
            style={{
              width: `${((APPROVED_CONCEPTS.length - uncategorized.length) / APPROVED_CONCEPTS.length) * 100}%`,
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uncategorized.map((c) => (
            <ConceptCard key={c.id} concept={c} onClick={() => setViewing(c)} />
          ))}
        </div>

        {/* Already categorized */}
        {(deployed.length > 0 || deployNow.length > 0 || touchUpText.length > 0 || touchUpImage.length > 0 || touchUp.length > 0) && (
          <div className="mt-16">
            <div className="mx-auto mb-8 h-px w-12 bg-white/10" />

            {[
              { label: "Deployed", items: deployed },
              { label: "Deploy Now", items: deployNow },
              { label: "Touch Up Text", items: touchUpText },
              { label: "Touch Up Image", items: touchUpImage },
              { label: "Touch Up Both", items: touchUp },
            ].filter((s) => s.items.length > 0).map((section) => (
              <div key={section.label} className="mb-8">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/20">
                  {section.label} ({section.items.length})
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {section.items.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setViewing(c)}
                      className="flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-[#141414] px-3 py-2 transition-colors hover:border-white/[0.12]"
                    >
                      <div className="h-8 w-8 overflow-hidden rounded-lg bg-black">
                        <img src={c.thumb || c.mediaSrc} alt={c.title} className="h-full w-full object-cover" />
                      </div>
                      <span className="text-[13px] text-white/60">{c.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
