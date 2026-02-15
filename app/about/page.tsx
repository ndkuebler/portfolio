"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  // Image rotation state
  const images = [
    "/nick.jpeg",
    "/concepts/nkhbar.jpeg",
    "/concepts/nickcube.jpeg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate images every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [images.length]);
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
          {/* Image with rotation */}
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-xl">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="Nick"
                className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
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
    </main>
  );
}
