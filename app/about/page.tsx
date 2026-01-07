"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const labels = new Set(["Portfolio", "About", "Contact"]);

    const sparkDefs = [
      { sx: "12%", sy: "38%", dx: "34px", dy: "-18px", delayMs: 0 },
      { sx: "84%", sy: "48%", dx: "-30px", dy: "-24px", delayMs: 160 },
      { sx: "56%", sy: "22%", dx: "18px", dy: "22px", delayMs: 320 },
    ] as const;

    // ✅ Sparkify the nav that already exists (same approach as HomePage)
    const anchors = Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];

    anchors.forEach((a) => {
      const txt = (a.textContent || "").trim();
      if (!labels.has(txt)) return;

      // Prevent re-wrapping
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

  // ✅ MOBILE-ONLY: HIDE TOP-RIGHT NAV ON SCROLL (About page too)
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
    <main className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-4xl font-semibold tracking-tight">About</h1>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Image */}
          <div>
            <img
              src="/nick.jpeg"
              alt="Nick working in the shop"
              className="w-full max-w-md rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              I’m Nick — a designer & engineer focused on physical products and clean digital
              experiences. I enjoy building products that are aesthetically pleasing, address real
              user needs, and improve quality of life. When I'm not working, I'm competing gymnastics
              for Stanford, playing board games with friends, and mixing music.
            </p>

            <p>
              This site is a home for selected work: product design, prototyping, and systems
              thinking. If you want to collaborate or talk through a project, hit Contact.
            </p>

            <p className="text-neutral-400">Based in the US · Open to new projects</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== Spark Shower Hover (same as your HomePage) ===== */
        :global(.sparkLink) {
          position: relative;
          display: inline-block;
          padding: 10px 10px;
          border-radius: 14px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.86);
          background: transparent;
          transition: color 140ms ease, transform 160ms ease, opacity 180ms ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        :global(.sparkLink:hover) {
          color: rgba(255, 255, 255, 1);
          background: transparent;
          transform: translateY(-1px);
        }

        :global(.sparkLink:focus-visible) {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.22),
            0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        :global(.sparkText) {
          position: relative;
          display: inline-block;
          font-size: 16px;
          letter-spacing: -0.02em;
          line-height: 1;
          padding: 2px 2px;
        }

        :global(.navSpark) {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
          opacity: 0;
          pointer-events: none;

          left: var(--sx);
          top: var(--sy);
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
        }

        :global(.sparkLink:hover .navSpark) {
          animation: navSparkBurst 620ms ease-out infinite;
          animation-delay: var(--delay);
          animation-fill-mode: backwards;
        }

        @keyframes navSparkBurst {
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
            transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy)))
              scale(0.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.sparkLink),
          :global(.sparkLink:hover) {
            transform: none !important;
            transition: none !important;
          }
          :global(.sparkLink:hover .navSpark) {
            animation: none !important;
            opacity: 0.7;
          }
        }

        /* ✅ MOBILE-ONLY: hide top-right nav after scroll */
        @media (max-width: 639px) {
          :global(body.nk-mobile-nav-hidden .sparkLink[data-nk-topnav="1"]) {
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
          }
        }
      `}</style>
    </main>
  );
}
