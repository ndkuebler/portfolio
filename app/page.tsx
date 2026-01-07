"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  // ✅ NEW: hover control
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(false);

  // ✅ NEW: marquee refs
  const rowRef = useRef<HTMLDivElement | null>(null);
  const halfWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  /* ================= INTRO SESSION LOGIC ================= */
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("nk_intro_played");
    if (hasPlayed) {
      setShowIntro(false);
    } else {
      sessionStorage.setItem("nk_intro_played", "true");
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    const t = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(t);
  }, [showIntro]);

  useEffect(() => {
    if (showIntro) document.body.classList.add("nk-intro-active");
    else document.body.classList.remove("nk-intro-active");
    return () => document.body.classList.remove("nk-intro-active");
  }, [showIntro]);

  // ✅ NEW: keep hover state in a ref (so rAF loop never resets)
  useEffect(() => {
    hoverRef.current = isHovering;
  }, [isHovering]);

  // ✅ NEW: requestAnimationFrame marquee (speed changes on hover without visual bugs)
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const BASE_SPEED = 70; // px/sec (tweak if you want)
    const HOVER_MULT = 2 / 3; // 33% slower

    const measure = () => {
      // halfWidth is width of one set (since you duplicated A+B)
      const hw = row.scrollWidth / 2;
      halfWidthRef.current = Number.isFinite(hw) ? hw : 0;
    };

    const attachImageListeners = () => {
      const imgs = Array.from(row.querySelectorAll("img")) as HTMLImageElement[];
      let remaining = 0;

      const onOneLoad = () => {
        remaining -= 1;
        if (remaining <= 0) measure();
      };

      imgs.forEach((img) => {
        if (!img.complete) {
          remaining += 1;
          img.addEventListener("load", onOneLoad, { once: true });
          img.addEventListener("error", onOneLoad, { once: true });
        }
      });

      // If all were already complete, measure immediately
      if (remaining === 0) measure();
    };

    // Initial measure + re-measure after assets load
    measure();
    attachImageListeners();

    // Re-measure on resize (and when fonts/images can affect layout)
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    // ResizeObserver catches layout changes inside the row
    const ro = new ResizeObserver(() => measure());
    ro.observe(row);

    const tick = (t: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      const hw = halfWidthRef.current;

      // If not measured yet, keep trying
      if (hw > 0) {
        const speed = hoverRef.current ? BASE_SPEED * HOVER_MULT : BASE_SPEED;
        offsetRef.current += speed * dt;

        // Wrap seamlessly
        if (offsetRef.current >= hw) offsetRef.current -= hw;

        // Apply transform
        row.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  /* ================= SPARK SHOWER ON EXISTING TOP-RIGHT NAV =================
     - Does NOT add new nav links (prevents double text)
     - Enhances existing <a> tags whose text is Portfolio / About / Contact
     - Namespaced classes so it does NOT conflict with your intro SVG .spark paths
  */
  useEffect(() => {
    const labels = new Set(["Portfolio", "About", "Contact"]);

    const sparkDefs = [
      { sx: "12%", sy: "38%", dx: "34px", dy: "-18px", delayMs: 0 },
      { sx: "84%", sy: "48%", dx: "-30px", dy: "-24px", delayMs: 160 },
      { sx: "56%", sy: "22%", dx: "18px", dy: "22px", delayMs: 320 },
    ] as const;

    const anchors = Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];

    anchors.forEach((a) => {
      const txt = (a.textContent || "").trim();
      if (!labels.has(txt)) return;

      // Prevent re-wrapping
      if ((a as any).dataset?.nkSparkified === "1") return;
      (a as any).dataset.nkSparkified = "1";

      // Apply class to existing anchor (no duplicate nav)
      a.classList.add("sparkLink");

      // Rebuild inner content to include sparks
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

  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* ================= INTRO ================= */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black overflow-hidden overlay-fade">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              {/* LEFT BOLT */}
              <path
                className="bolt core draw-left"
                d="M0,100 L200,100 L260,45 L340,165 L425,80 L500,120 L520,100"
              />
              <path
                className="bolt glow draw-left"
                d="M0,100 L200,100 L260,45 L340,165 L425,80 L500,120 L520,100"
              />

              <path
                className="bolt ghost draw-left delay-40"
                d="M0,102 L190,102 L255,60 L335,150 L420,90 L495,125 L520,102"
              />
              <path
                className="bolt ghost draw-left delay-80"
                d="M0,98 L215,98 L270,35 L350,170 L440,75 L510,115 L520,98"
              />
              <path
                className="bolt ghost2 draw-left delay-120"
                d="M0,101 L180,101 L245,52 L325,162 L410,82 L485,118 L520,101"
              />

              {/* NK */}
              <path className="bolt core draw-nk" d="M520,150 L520,50 L570,150 L570,50" />
              <path className="bolt glow draw-nk" d="M520,150 L520,50 L570,150 L570,50" />

              <path
                className="bolt core draw-nk2"
                d="M610,50 L610,150 M610,100 L670,50 M610,100 L680,150"
              />
              <path
                className="bolt glow draw-nk2"
                d="M610,50 L610,150 M610,100 L670,50 M610,100 L680,150"
              />
              <path
                className="bolt ghost2 draw-nk2 delay-60 nk-flicker"
                d="M608,52 L608,148 M608,100 L666,52 M608,100 L676,148"
              />

              {/* RIGHT BOLT */}
              <path
                className="bolt core draw-right"
                d="M700,100 L790,125 L875,45 L960,165 L1040,80 L1120,110 L1200,100"
              />
              <path
                className="bolt glow draw-right"
                d="M700,100 L790,125 L875,45 L960,165 L1040,80 L1120,110 L1200,100"
              />

              <path
                className="bolt ghost draw-right delay-40"
                d="M700,102 L785,130 L870,60 L955,150 L1035,90 L1115,115 L1200,102"
              />
              <path
                className="bolt ghost2 draw-right delay-90"
                d="M700,98 L800,120 L880,40 L970,170 L1045,75 L1130,108 L1200,98"
              />

              {/* SPARKS */}
              <path className="spark flash-1" d="M260,45 L240,30 L255,18" />
              <path className="spark flash-1 delay-60" d="M340,165 L320,182 L330,196" />
              <path className="spark flash-1 delay-90" d="M425,80 L450,66 L440,48" />
              <path className="spark flash-1 delay-120" d="M500,120 L525,135 L545,128" />

              <path className="spark flash-2" d="M570,95 L590,85 L595,70" />
              <path className="spark flash-2 delay-60" d="M610,120 L635,132 L640,150" />
              <path className="spark flash-2 delay-90" d="M680,150 L700,162 L712,178" />

              <path className="spark flash-3" d="M875,45 L855,30 L865,16" />
              <path className="spark flash-3 delay-70" d="M960,165 L980,182 L970,196" />
              <path className="spark flash-3 delay-110" d="M1040,80 L1065,66 L1055,48" />
            </svg>
          </div>
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className={`transition-opacity duration-700 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Nick Kuebler</h1>

          <p className="text-lg text-white/75 max-w-2xl">
            Designer & engineer focused on aesthetic systems, physical products, and clean digital
            experiences.
          </p>

          <h2 className="mt-20 mb-6 text-xs uppercase tracking-[0.25em] text-white/50">
            Selected work
          </h2>

          {/* ================= CAROUSEL ================= */}
          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div
              className="nk-track"
              onPointerEnter={() => setIsHovering(true)}
              onPointerLeave={() => setIsHovering(false)}
            >
              <div className="nk-row" ref={rowRef}>
                {/* SET A */}
                <a href="/work/ringallets" className="nk-item">
                  <img src="/work/ringallets.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>Ringallets</h3>
                    <p>Rings training tool</p>
                  </div>
                </a>

                <a href="/work/watershield" className="nk-item">
                  <img src="/work/watershield.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield</h3>
                    <p>Longboard wheel fender</p>
                  </div>
                </a>

                <a href="/work/watershield-figma" className="nk-item">
                  <img src="/work/watershield-figma.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield Figma</h3>
                    <p>Purchase flow prototype</p>
                  </div>
                </a>

                {/* SET B (IDENTICAL COPY) */}
                <a href="/work/ringallets" className="nk-item">
                  <img src="/work/ringallets.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>Ringallets</h3>
                    <p>Rings training tool</p>
                  </div>
                </a>

                <a href="/work/watershield" className="nk-item">
                  <img src="/work/watershield.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield</h3>
                    <p>Longboard wheel fender</p>
                  </div>
                </a>

                <a href="/work/watershield-figma" className="nk-item">
                  <img src="/work/watershield-figma.png" className="nk-img" />
                  <div className="nk-overlay">
                    <h3>WaterShield Figma</h3>
                    <p>Purchase flow prototype</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* ===== Spark Shower Hover (applies to existing links after JS adds classes) ===== */
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
          transition: color 140ms ease, transform 160ms ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        :global(.sparkLink:hover) {
          color: rgba(255, 255, 255, 1);
          background: transparent;
          transform: translateY(-1px);
        }

        :global(.sparkLink:focus-visible) {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.22), 0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        :global(.sparkText) {
          position: relative;
          display: inline-block;
          font-size: 16px; /* keep your top-right size */
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
            transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.2);
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

        /* ===== YOUR ORIGINAL STYLES (ONLY CHANGE: FULL-COVER MASK) ===== */
        .nk-track {
          overflow: hidden;
        }

        .nk-row {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .nk-item {
          position: relative;
          flex-shrink: 0;
          margin-right: 3rem;
          display: inline-flex;

          /* ✅ ensures the mask clips perfectly to the same rounded corners */
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .nk-row > .nk-item:last-child {
          margin-right: 0;
        }

        .nk-img {
          height: 220px;
          width: auto;
          display: block;
          border-radius: 0.75rem;
          transition: transform 0.5s ease;
          background: rgba(255, 255, 255, 0.05);
        }

        .nk-item:hover .nk-img {
          transform: scale(1.06);
        }

        /* ✅ FULL-COVER GREY MASK (covers entire image on hover) */
        .nk-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .nk-item:hover::after {
          opacity: 1;
        }

        /* overlay now just holds text (mask is handled by ::after) */
        .nk-overlay {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 1rem;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: opacity 0.3s ease;
          pointer-events: none;
          background: transparent;
          z-index: 2;
        }

        .nk-item:hover .nk-overlay {
          opacity: 1;
        }

        /* ===== INTRO ANIMATIONS (UNCHANGED) ===== */
        .overlay-fade {
          animation: overlayFade 520ms ease-out forwards;
          animation-delay: 1850ms;
        }

        .bolt {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
        }

        .core {
          stroke-width: 6;
        }

        .glow {
          stroke-width: 16;
          opacity: 0.18;
        }

        .ghost {
          stroke-width: 4;
          opacity: 0.45;
        }

        .ghost2 {
          stroke-width: 3;
          opacity: 0.35;
        }

        .draw-left {
          animation: draw 600ms ease-out forwards;
        }

        .draw-nk {
          animation: draw 420ms ease-out forwards;
          animation-delay: 520ms;
        }

        .draw-nk2 {
          animation: draw 480ms ease-out forwards;
          animation-delay: 600ms;
        }

        .draw-right {
          animation: draw 720ms ease-out forwards;
          animation-delay: 1120ms;
        }

        .nk-flicker {
          animation: flicker 240ms steps(2, end) infinite;
          animation-delay: 760ms;
        }

        .spark {
          fill: none;
          stroke: white;
          stroke-width: 3;
          opacity: 0;
          animation: sparkOn 140ms ease-out forwards;
        }

        .flash-1 {
          animation-delay: 330ms;
        }

        .flash-2 {
          animation-delay: 740ms;
        }

        .flash-3 {
          animation-delay: 1200ms;
        }

        .delay-40 {
          animation-delay: 40ms;
        }

        .delay-60 {
          animation-delay: 60ms;
        }

        .delay-70 {
          animation-delay: 70ms;
        }

        .delay-80 {
          animation-delay: 80ms;
        }

        .delay-90 {
          animation-delay: 90ms;
        }

        .delay-110 {
          animation-delay: 110ms;
        }

        .delay-120 {
          animation-delay: 120ms;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes overlayFade {
          to {
            opacity: 0;
          }
        }

        @keyframes sparkOn {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes flicker {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}
