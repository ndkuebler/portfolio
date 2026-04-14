"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { Copy, Check, FileText } from "lucide-react";
import dynamic from "next/dynamic";

const ResumeModal = dynamic(
  () => import("./ResumeModal").then((m) => m.ResumeModal),
  { ssr: false }
);

const PHOTOS = [
  { src: "/nick.webp", alt: "Nick in the workshop" },
  { src: "/concepts/nkhbar.webp", alt: "Nick on high bar" },
  { src: "/concepts/nickcube.webp", alt: "Nick portrait" },
];

const EMAIL = "nkuebler@stanford.edu";

export function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  // Auto-cycle photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about" className="relative z-10 bg-[#0a0a0a] border-t border-[#f5f5f5]/[0.08] px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[clamp(3rem,10vw,7rem)] font-bold uppercase tracking-tight text-[#f5f5f5] leading-[0.9] mb-16">
          About
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left — auto-cycling photo */}
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              {PHOTOS.map((photo, i) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === activePhoto ? 1 : 0 }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              ))}
            </div>
          </div>

          {/* Right — full bio */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5] mb-8">
              I&apos;m Nick. I am a product designer/engineer and focus on physical products.
            </p>
            <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-6">
              I enjoy building things that are aesthetically pleasing, address real user
              needs, and improve quality of life. I also compete on the Stanford gymnastics
              team. I like playing board games with friends, and mixing music. I used to be
              really good at Origami.
            </p>
            <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
              If you want to collaborate or talk through a project, contact me.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nicolas-k-4246b7275/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#004182] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#f5f5f5]/90 transition-colors"
              >
                <FileText size={16} />
                Resume
              </button>
              <a
                href="https://www.instagram.com/nkuebs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-85 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-[#f5f5f5]/20 bg-transparent px-5 py-2.5 text-sm font-medium text-[#f5f5f5]/80 hover:bg-[#f5f5f5]/10 transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : EMAIL}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </section>
  );
}
