"use client";

import { useEffect, useRef, useState } from "react";

export default function WaterShieldPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

  /* ================= DESKTOP-ONLY: HIDE TOP-RIGHT NAV ON SCROLL ================= */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)"); // Desktop only
    if (!mq.matches) return;

    const THRESHOLD = 48;

    const onScroll = () => {
      if (window.scrollY > THRESHOLD) {
        document.body.classList.add("nk-desktop-nav-hidden");
      } else {
        document.body.classList.remove("nk-desktop-nav-hidden");
        // Also remove indicator-hover class when scrolling to top
        document.body.classList.remove("nk-indicator-hover");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("nk-desktop-nav-hidden");
      document.body.classList.remove("nk-indicator-hover");
    };
  }, []);

  return (
    <main className="relative min-h-screen px-6 py-16 md:px-16">
      {/* Scroll indicator (RIGHT SIDE) */}
      <div className="fixed right-6 top-1/2 h-48 w-px -translate-y-1/2 bg-neutral-800">
        <div
          className="w-px bg-white transition-all duration-200"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-neutral-400 transition hover:text-white">
          ← Back to work
        </a>

        {/* HERO */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="fade-section mt-6"
        >
          <h1 className="text-4xl font-semibold tracking-tight">WaterShield</h1>

          <p className="mt-4 text-lg text-neutral-300">
            A longboard wheel “fender” attachment designed to prevent water from spraying up onto
            the rider in wet conditions.
          </p>
        </section>

        {/* PROBLEM */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Problem</h2>
          <p className="mt-4 text-neutral-300">
            Riding a longboard in the rain quickly soaks the rider because the wheels kick water
            upward. Existing solutions were either bulky, not designed for longboards, or
            inconvenient to install/remove.
          </p>
        </section>

        {/* SOLUTION */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Solution</h2>
          <p className="mt-4 text-neutral-300">
            WaterShield is a compact, attachable wheel cover that blocks splash-up at the source.
            The design focuses on a secure mount, simple installation, and a form factor that fits
            common longboard setups without getting in the way of riding.
          </p>
        </section>

        {/* DESIGN DEVELOPMENT */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Design Development
          </h2>

          <img
            src="/work/watershield-design.png"
            alt="WaterShield design development"
            className="mt-6 w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-neutral-500">
            Iterating form and attachment strategy for wheel clearance and stability.
          </p>
        </section>

        {/* TESTING */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Testing</h2>

          <img
            src="/work/watershield-testing1-new.png"
            alt="WaterShield testing"
            className="mt-6 w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-neutral-500">
            Real-world testing to validate fit, clearance, and durability.
          </p>

          <img
            src="/work/watershield-testing2.png"
            alt="WaterShield splash testing"
            className="mt-6 w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-neutral-500">
            Observing splash reduction under wet riding conditions.
          </p>
        </section>

        {/* DEMO */}
        <section
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          className="fade-section mt-16"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Demo</h2>

          <div className="mt-6 overflow-hidden rounded-xl border border-neutral-800">
            <video
              src="/work/watershield-demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto bg-black"
            />
          </div>

          <p className="mt-2 text-sm text-neutral-500">
            WaterShield in motion, demonstrating real-time splash reduction.
          </p>
        </section>

        {/* WHAT I DID */}
        <section
          ref={(el) => {
            sectionsRef.current[6] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">What I did</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Defined the user pain point and usage scenarios</li>
            <li>Designed the attachment concept and mounting approach</li>
            <li>Iterated shape and fit for wheel clearance and durability</li>
            <li>Prototyped and validated basic function with test rides</li>
          </ul>
        </section>

        {/* TAKEAWAYS */}
        <section
          ref={(el) => {
            sectionsRef.current[7] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">Takeaways</h2>
          <p className="mt-4 text-neutral-300">
            Small accessories succeed or fail on install friction. The design had to feel
            immediately worth using the moment conditions turned wet.
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
