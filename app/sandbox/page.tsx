"use client";

import React, { useMemo } from "react";

type Spark = {
  cls: string;
  sx: string; // left %
  sy: string; // top %
  dx: string; // px
  dy: string; // px
  delayMs: number;
};

export default function SandboxPage() {
  const items = useMemo(
    () => [
      { label: "Portfolio", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Spark Shower Hover</h1>
          <p className="mt-2 text-white/70">Hover the items — sparks only (no pill, no underline, no “start dot”).</p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
          <nav className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {items.map((it) => (
              <SparkLink key={it.label} href={it.href} label={it.label} />
            ))}
          </nav>
        </div>
      </div>

      <style jsx global>{`
        .sparkLink {
          position: relative;
          display: inline-block;
          padding: 10px 10px;
          border-radius: 14px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.86);
          background: transparent;
          transition: color 140ms ease, transform 160ms ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .sparkLink:hover {
          color: rgba(255, 255, 255, 1);
          background: transparent;
          transform: translateY(-1px);
        }

        .sparkLink:focus-visible {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.22), 0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        .sparkText {
          position: relative;
          display: inline-block;
          font-size: 22px;
          letter-spacing: -0.02em;
          line-height: 1;
          padding: 2px 2px;
        }

        /* Sparks */
        .spark {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
          opacity: 0; /* ✅ stay invisible unless animation shows it */
          pointer-events: none;

          left: var(--sx);
          top: var(--sy);
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
        }

        /* ✅ IMPORTANT FIX:
           Don't set opacity: 1 on hover — it causes “dots” to appear during animation delays.
           Instead, start the animation on hover and use fill-mode: backwards so 0% keyframe applies during delay. */
        .sparkLink:hover .spark {
          animation: sparkBurst 620ms ease-out infinite;
          animation-delay: var(--delay);
          animation-fill-mode: backwards;
        }

        @keyframes sparkBurst {
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
          .sparkLink,
          .sparkLink:hover {
            transform: none !important;
            transition: none !important;
          }
          .sparkLink:hover .spark {
            animation: none !important;
            opacity: 0.7;
          }
        }
      `}</style>
    </main>
  );
}

function SparkLink({ href, label }: { href: string; label: string }) {
  const sparks: Spark[] = useMemo(
    () => [
      { cls: "s1", sx: "12%", sy: "38%", dx: "34px", dy: "-18px", delayMs: 0 },
      { cls: "s2", sx: "84%", sy: "48%", dx: "-30px", dy: "-24px", delayMs: 160 },
      { cls: "s3", sx: "56%", sy: "22%", dx: "18px", dy: "22px", delayMs: 320 },
    ],
    []
  );

  return (
    <a href={href} className="sparkLink">
      <span className="sparkText">
        {label}
        {sparks.map((s) => (
          <span
            key={s.cls}
            className={`spark ${s.cls}`}
            aria-hidden="true"
            style={
              {
                ["--sx" as any]: s.sx,
                ["--sy" as any]: s.sy,
                ["--dx" as any]: s.dx,
                ["--dy" as any]: s.dy,
                ["--delay" as any]: `${s.delayMs}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </span>
    </a>
  );
}
