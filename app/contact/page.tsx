"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const labels = new Set(["Portfolio", "About", "Contact"]);

    const sparkDefs = [
      { sx: "12%", sy: "38%", dx: "34px", dy: "-18px", delayMs: 0 },
      { sx: "84%", sy: "48%", dx: "-30px", dy: "-24px", delayMs: 160 },
      { sx: "56%", sy: "22%", dx: "18px", dy: "22px", delayMs: 320 },
    ] as const;

    // ✅ Sparkify the nav that already exists (same approach as HomePage + About)
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

  // ✅ MOBILE-ONLY: HIDE TOP-RIGHT NAV ON SCROLL (Contact page too)
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
    <main className="min-h-screen px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-12">Contact</h1>

        <div className="space-y-8 text-lg text-neutral-300">
          {/* Email */}
          <p>
            <span className="text-neutral-400">Email</span>
            <br />
            <a href="mailto:nkuebler@stanford.edu" className="hover:text-white transition">
              nkuebler@stanford.edu
            </a>
          </p>

          {/* Social */}
          <div>
            <p className="text-neutral-400 mb-4">Social</p>

            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nkuebs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nicolas-k-4246b7275/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 6 3.32 6 7.64V24h-5v-7.6c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== Spark Shower Hover (same as HomePage + About) ===== */
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
