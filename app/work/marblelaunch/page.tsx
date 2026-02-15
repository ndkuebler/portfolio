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

export default function MarbleLaunchPage() {
  /* ================= MARK TOP-RIGHT NAV LINKS ================= */
  useEffect(() => {
    const labels = new Set(["Portfolio", "Concepts", "About", "Contact"]);

    const anchors = Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];

    anchors.forEach((a) => {
      const txt = (a.textContent || "").trim();
      if (!labels.has(txt)) return;

      // ✅ mark these as the top-right nav links so we can hide them on mobile scroll
      (a as any).dataset.nkTopnav = "1";
      a.classList.add("nk-nav-link");
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
    <main className="relative min-h-screen bg-black px-6 py-16 text-white md:px-16">
      {/* Scroll Progress */}
      <ScrollIndicator />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition">
          ← Back to work
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Marble Launcher</h1>

        <p className="mt-4 text-lg text-neutral-300">
          A marble launcher inspired by the Stanford Dish telescope
        </p>

        <div className="mt-6">
          <Image src="/work/mlheader.png" alt="Marble Launcher" width={1600} height={1000} className="w-full rounded-sm" />
        </div>

        <section className="mt-16">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Problem + Constraints</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>Design a mechanical desktop perpetual marble launcher</li>
            <li>Must use rotary motion input + spring reset.</li>
            <li>Strict material constraints (acrylic, plywood, 3D print).</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Inspiration + Research</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>Pinball machine (high-velocity launch, track behavior).</li>
            <li>Magnetic loop launcher (airtime + return via ramp).</li>
            <li>Stanford Dish (funnel geometry inspiration).</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Ideation + Sketching</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>Generated multiple concept sketches.</li>
            <li>Focused on exploring mechanism possibilities.</li>
            <li>Goal: maximize idea quantity before narrowing down.</li>
          </ul>
          <div className="mt-6 -ml-5">
            <Image src="/work/mlsketches.png" alt="Ideation sketches" width={1600} height={1000} className="w-full rounded-sm" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Prototyping + Testing</h2>
          
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-neutral-200 mt-4">Ball Displacement Mechanism</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Tested slot shapes (circle, oval, triangle, square).</li>
              </ul>
              <div className="mt-4">
                <Image src="/work/mlslot.png" alt="Ball displacement mechanism" width={1600} height={1000} className="w-1/3 rounded-sm" />
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Circular slot performed best.</li>
              </ul>
              <div className="mt-4">
                <Image src="/work/mlslot3.png" alt="Circular slot" width={1600} height={1000} className="w-2/5 rounded-sm" />
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Used metrics of success (did it travel 180° smoothly?).</li>
              </ul>
              <div className="mt-4">
                <Image src="/work/mlslot2.png" alt="Circular slot" width={1600} height={1000} className="w-1/3 rounded-sm" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-200 mt-4">Funnel</h3>
              <div className="mt-4">
                <Image src="/work/mlfunnel1.png" alt="Funnel" width={1600} height={1000} className="w-1/3 rounded-sm" />
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Tested angles (90°, 75°, 60°, 45°, 30°).</li>
              </ul>
              <div className="mt-4 flex gap-4">
                <div className="flex-1">
                  <Image src="/work/mlfunnel3.png" alt="Funnel angles" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
                </div>
                <div className="flex-1">
                  <Image src="/work/mlfunnelchart.png" alt="Funnel chart" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
                </div>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Chose 60° for best alignment + manufacturability.</li>
              </ul>
              <div className="mt-4 flex gap-4">
                <div className="flex-1">
                  <Image src="/work/mlfunnel2.png" alt="60 degree funnel" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
                </div>
                <div className="flex-1">
                  <Image src="/work/mlfunnel4.png" alt="60 degree funnel" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
                  <p className="mt-2 text-sm text-neutral-400">Bad funnel angle: balls block each other</p>
                </div>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Considered 3D printing constraints.</li>
              </ul>
              <h4 className="text-sm font-medium text-neutral-200 mt-6">Low fidelity prototype</h4>
              <div className="mt-4">
                <Image src="/work/mlp1.png" alt="Low fidelity prototype" width={1600} height={1000} className="w-[85%] rounded-sm" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-200 mt-4">Spring Integration</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Tested attachment locations.</li>
                <li>Found optimal slot for linear stretch + max extension.</li>
                <li>Incorporated hard stops.</li>
              </ul>
              <div className="mt-4">
                <Image src="/work/mlspring.png" alt="Spring integration" width={1600} height={1000} className="w-full rounded-sm" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-200 mt-4">Launch Hammer</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-300">
                <li>Iterated block width (.35 → .6 in).</li>
                <li>Identified consistency issue → redesigned.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Higher fidelity prototype</h2>
          <div className="mt-4 flex gap-4">
            <div className="flex-1">
              <Image src="/work/mlp2.png" alt="Higher fidelity prototype" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
            </div>
            <div className="flex-1">
              <Image src="/work/mlp2sketch.png" alt="Higher fidelity prototype sketch" width={1600} height={1000} className="w-full h-full object-contain rounded-sm" style={{ height: '400px' }} />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Iteration + Adjustments</h2>
          <div className="mt-4">
            <Image src="/work/mlitad.png" alt="Iteration and adjustments" width={1600} height={1000} className="w-full rounded-sm" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Final Assembly + Documentation</h2>
          <div className="mt-4">
            <Image src="/work/mlbuild.png" alt="Final assembly" width={1600} height={1000} className="w-full rounded-sm" />
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>Final working version.</li>
          </ul>
          <div className="mt-4">
            <Image src="/work/mlfinal.png" alt="Final working version" width={1600} height={1000} className="w-full rounded-sm" />
          </div>
          <div className="mt-6 flex justify-center">
            <video
              src="/work/mlvid2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[56.25%] rounded-sm"
            />
          </div>
          <div className="mt-4">
            <Image src="/work/mlcad.png" alt="CAD model" width={1600} height={1000} className="w-full rounded-sm" />
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>CAD model.</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">Takeaways</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300">
            <li>Break problems into subcomponents.</li>
            <li>Precision is critical.</li>
            <li>Plan before lab work.</li>
            <li>Ambition increased challenge but increased reward.</li>
          </ul>
        </section>
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
