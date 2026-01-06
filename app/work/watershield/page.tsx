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
        <a
          href="/"
          className="text-sm text-neutral-400 transition hover:text-white"
        >
          ← Back to work
        </a>

        {/* HERO */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="fade-section mt-6"
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            WaterShield
          </h1>

          <p className="mt-4 text-lg text-neutral-300">
            A longboard wheel “fender” attachment designed to prevent water
            from spraying up onto the rider in wet conditions.
          </p>
        </section>

        {/* PROBLEM */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </h2>
          <p className="mt-4 text-neutral-300">
            Riding a longboard in the rain quickly soaks the rider because the
            wheels kick water upward. Existing solutions were either bulky,
            not designed for longboards, or inconvenient to install/remove.
          </p>
        </section>

        {/* SOLUTION */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="fade-section mt-12"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Solution
          </h2>
          <p className="mt-4 text-neutral-300">
            WaterShield is a compact, attachable wheel cover that blocks
            splash-up at the source. The design focuses on a secure mount,
            simple installation, and a form factor that fits common longboard
            setups without getting in the way of riding.
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
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Testing
          </h2>

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
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Demo
          </h2>

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
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            What I did
          </h2>
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
          <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Takeaways
          </h2>
          <p className="mt-4 text-neutral-300">
            Small accessories succeed or fail on install friction. The design had
            to feel immediately worth using the moment conditions turned wet.
          </p>
        </section>
      </div>
    </main>
  );
}
