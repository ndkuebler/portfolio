"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type VoteResult = {
  slug: string;
  title: string;
  thumb?: string;
  likes: number;
  passes: number;
  total: number;
  likePercent: number;
};

export default function VotesPage() {
  const params = useSearchParams();
  const key = params.get("key");
  const [results, setResults] = useState<VoteResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (key !== "nk2026") {
      setError("Unauthorized");
      return;
    }

    fetch(`/api/votes?key=${key}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setResults(data.results);
        }
      })
      .catch(() => setError("Failed to load"));
  }, [key]);

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-sm text-white/30">{error}</p>
      </main>
    );
  }

  if (!results) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-sm text-white/30">Loading...</p>
      </main>
    );
  }

  const totalVotes = results.reduce((sum, r) => sum + r.total, 0);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-20">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Vote Results
        </h1>
        <p className="mt-2 text-sm text-white/30">
          {totalVotes} total votes across {results.length} concepts
        </p>

        <div className="mt-10 space-y-4">
          {results.map((r, i) => (
            <div
              key={r.slug}
              className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-4"
            >
              {/* Rank */}
              <span className="w-6 shrink-0 text-center text-sm font-medium tabular-nums text-white/20">
                {i + 1}
              </span>

              {/* Thumbnail */}
              {r.thumb && (
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-black">
                  <img
                    src={r.thumb}
                    alt={r.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white/80">{r.title}</p>
                <div className="mt-1.5 flex items-center gap-3">
                  {/* Progress bar */}
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-emerald-500/60 transition-all duration-500"
                      style={{ width: `${r.likePercent}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs tabular-nums text-white/30">
                    {r.likePercent}%
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="shrink-0 text-right">
                <div className="flex items-center gap-3 text-xs tabular-nums">
                  <span className="text-emerald-400/70">{r.likes} ♥</span>
                  <span className="text-red-400/50">{r.passes} ✕</span>
                </div>
                <p className="mt-0.5 text-[10px] text-white/20">
                  {r.total} vote{r.total !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
