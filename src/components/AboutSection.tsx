"use client";

import { useState } from "react";

const PHOTOS = [
  { src: "/nick.jpeg", alt: "Nick in the workshop" },
  { src: "/concepts/nkhbar.jpeg", alt: "Nick on high bar" },
  { src: "/concepts/nickcube.jpeg", alt: "Nick portrait" },
];

export function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section id="about" className="border-t border-[#f5f5f5]/[0.08] px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[clamp(3rem,10vw,7rem)] font-bold uppercase tracking-tight text-[#f5f5f5] leading-[0.9] mb-16">
          About
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left — photo with thumbnails */}
          <div className="md:w-1/2">
            <img
              src={PHOTOS[activePhoto].src}
              alt={PHOTOS[activePhoto].alt}
              className="w-full aspect-[4/5] object-cover rounded-2xl transition-opacity duration-300"
            />
            <div className="flex gap-3 mt-4">
              {PHOTOS.map((photo, i) => (
                <button
                  key={photo.src}
                  onClick={() => setActivePhoto(i)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    i === activePhoto
                      ? "ring-2 ring-[#f5f5f5] opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — full bio */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5] mb-8">
              I&apos;m Nick. I am a product designer engineer and focus on physical products.
            </p>
            <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-6">
              I enjoy building things that are aesthetically pleasing, address real user
              needs, and improve quality of life. I also compete on the Stanford gymnastics
              team. I like playing board games with friends, and mixing music. I used to be
              really good at Origami.
            </p>
            <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
              If you want to collaborate or talk through a project, please{" "}
              <a
                href="/#contact"
                className="text-[#f5f5f5] underline underline-offset-4 decoration-[#f5f5f5]/30 hover:decoration-[#f5f5f5] transition"
              >
                contact me
              </a>
              .
            </p>
            <div className="flex gap-6 text-sm text-[#f5f5f5]/50">
              <span>Based in the US</span>
              <span>·</span>
              <span>Open to new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
