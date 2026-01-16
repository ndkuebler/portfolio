"use client";

import { useEffect, useState } from "react";

export default function WaterShieldFigmaPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  /* ================= MOBILE-ONLY: HIDE TOP-RIGHT NAV ON SCROLL ================= */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)"); // Tailwind "sm"
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

  return (
    <main className="relative min-h-screen px-6 py-16 md:px-16">
      {/* Scroll Progress Bar */}
      <div className="fixed right-8 top-1/2 z-40 hidden h-48 w-[2px] -translate-y-1/2 bg-neutral-700 md:block">
        <div
          className="w-full bg-white transition-all duration-150"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="mx-auto max-w-3xl space-y-24">
        <a href="/" className="text-sm text-neutral-400 transition hover:text-white">
          ← Back to work
        </a>

        {/* Overview */}
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">WaterShield — Figma Website</h1>
          <p className="text-lg text-neutral-300">
            A Figma website concept designed to showcase WaterShield and drive purchases with a
            clean, product-first flow.
          </p>
        </section>
        {/* Goal */}
        <section className="animate-fade-in">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Goal</h2>
          <p className="mt-4 text-neutral-300">
            Present the product clearly, explain the problem in seconds, and make the path to
            purchase obvious without overwhelming the user.
          </p>
        </section>
        {/* Images */}
        <section className="space-y-8">
          <figure className="animate-fade-in">
            <img
              src="/work/watershield-figma-nav.png"
              alt="Navigation design"
              className="rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-neutral-500">
              Navigation system and brand expression.
            </figcaption>
          </figure>

          <figure className="animate-fade-in">
            <img
              src="/work/watershield-figma-hero.png"
              alt="Hero section"
              className="rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-neutral-500">
              Hero section focused on immediate problem recognition.
            </figcaption>
          </figure>

          <figure className="animate-fade-in">
            <img
              src="/work/watershield-figma-product.png"
              alt="Product page"
              className="rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-neutral-500">
              Product page optimized for clarity and low purchase friction.
            </figcaption>
          </figure>
        </section>

        {/* Key Decisions */}
        <section className="animate-fade-in">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Key decisions</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Strong hero image and single-sentence value prop</li>
            <li>Problem/solution explained with minimal scrolling</li>
            <li>Simple sections: benefits, fit, FAQ</li>
            <li>Quiet, consistent calls-to-action</li>
          </ul>
        </section>

        {/* Process */}
        <section className="animate-fade-in">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">What I did</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Designed site layout and hierarchy</li>
            <li>Created UI components and spacing system</li>
            <li>Built a clickable Figma prototype</li>
          </ul>
        </section>

        {/* Demo */}
        <section className="animate-fade-in">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Demo</h2>
          <video src="/work/watershield-figma-demo.mp4" controls className="mt-6 w-full rounded-lg" />
          <p className="mt-2 text-sm text-neutral-500">
            Walkthrough of the Figma prototype and user flow.
          </p>
        </section>

        {/* Takeaways */}
        <section className="animate-fade-in">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Takeaways</h2>
          <p className="mt-4 text-neutral-300">
            For a product like this, clarity beats persuasion. Reducing uncertainty around fit,
            install, and real-world effectiveness mattered more than flashy marketing.
          </p>
        </section>
      </div>

      {/* ✅ added: mobile-only hide top-right nav on scroll */}
      <style jsx>{`
        @media (max-width: 639px) {
          :global(body.nk-mobile-nav-hidden a[data-nk-topnav="1"]),
          :global(body.nk-mobile-nav-hidden .sparkLink[data-nk-topnav="1"]) {
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: opacity 180ms ease, transform 180ms ease;
          }
        }
      `}</style>
    </main>
  );
}
