"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------------- Scroll Progress ---------------- */

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      setProgress(scrollTop / docHeight);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function ScrollIndicator() {
  const progress = useScrollProgress();

  return (
    <div className="fixed right-6 top-1/2 z-40 h-48 w-px -translate-y-1/2 bg-neutral-800">
      <div
        className="origin-top bg-white transition-transform duration-150 ease-out"
        style={{
          height: "100%",
          transform: `scaleY(${progress})`,
        }}
      />
    </div>
  );
}

/* ---------------- Fade In ---------------- */

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------------- Figure ---------------- */

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <FadeIn>
      <figure className="mx-auto mt-12 max-w-2xl">
        <Image src={src} alt={alt} width={1600} height={1000} className="w-full rounded-sm" />
        <figcaption className="mt-3 text-xs text-neutral-400">{caption}</figcaption>
      </figure>
    </FadeIn>
  );
}

/* ---------------- Page ---------------- */

export default function RingalletsPage() {
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

      // ✅ mark these as the top-right nav links so we can hide them on mobile scroll
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

  // ✅ MOBILE-ONLY: hide top-right nav after scroll
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)"); // Tailwind "sm" breakpoint
    if (!mq.matches) return;

    const THRESHOLD = 24; // px scrolled before hiding

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

  return (
    <main className="relative min-h-screen bg-black px-6 py-16 text-white md:px-16">
      {/* Scroll Progress */}
      <ScrollIndicator />

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Link href="/" className="text-sm text-neutral-400 hover:text-white transition">
            ← Back to work
          </Link>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">Ringallets</h1>
          <p className="mt-4 text-lg text-neutral-300">
            A gymnastics training tool that bridges the gap between parallettes and rings by
            preserving correct mechanics without introducing instability.
          </p>
        </FadeIn>

        <Figure
          src="/work/ringallets-final.png"
          alt="Ringallets final product"
          caption="Final Ringallets configuration"
        />

        <FadeIn>
          <section className="mt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Problem</h2>
            <p className="mt-4 text-neutral-300">
              Rings are one of the most effective tools for developing upper-body strength, but
              their instability makes them inaccessible for many athletes.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mt-12">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Solution</h2>
            <p className="mt-4 text-neutral-300">
              Ringallets replicate standard ring spacing while maintaining parallette stability.
            </p>
          </section>
        </FadeIn>

        <Figure src="/work/ringallets-sketch.png" alt="Sketch" caption="Early sketches" />

        <Figure src="/work/ringallets-cad.png" alt="CAD" caption="CAD model" />

        <Figure
          src="/work/ringallets-prototype.png"
          alt="Prototype"
          caption="Physical prototype"
        />

        <FadeIn>
          <section className="mt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Process</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
              <li>Failure point analysis</li>
              <li>Geometry locking</li>
              <li>Prototype iteration</li>
              <li>Real athlete testing</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 grid max-w-2xl gap-10 md:grid-cols-2">
            <div>
              <Image src="/work/ringallets-testing1.png" alt="Testing 1" width={800} height={600} />
              <p className="mt-3 text-xs text-neutral-400">Stability testing</p>
            </div>
            <div>
              <Image src="/work/ringallets-testing2.png" alt="Testing 2" width={800} height={600} />
              <p className="mt-3 text-xs text-neutral-400">Iteration feedback</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="mt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Takeaways</h2>
            <p className="mt-4 text-neutral-300">The right constraints unlock accessibility.</p>
          </section>
        </FadeIn>

        <Figure src="/work/ringallets-final-alt.png" alt="Final assembly" caption="Final components" />
      </div>

      {/* ✅ MOBILE-ONLY: hide top-right nav after scroll */}
      <style jsx>{`
        @media (max-width: 639px) {
          :global(body.nk-mobile-nav-hidden a[data-nk-topnav="1"]) {
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
          }
        }
      `}</style>
    </main>
  );
}
