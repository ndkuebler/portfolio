"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  pdfUrl?: string;
};

export function ResumeModal({ open, onClose, pdfUrl = "/nick-resume.pdf" }: Props) {
  // Lock scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-[900px] h-[90vh] rounded-2xl bg-white overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating controls */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <a
            href={pdfUrl}
            download="Nicolas-Kuebler-Resume.pdf"
            aria-label="Download resume"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0a0a0a] shadow-md transition-colors"
          >
            <Download size={18} />
          </a>
          <button
            onClick={onClose}
            aria-label="Close resume"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0a0a0a] shadow-md transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Resume content — scrollable, flows as one continuous document */}
        <div className="w-full h-full overflow-y-auto px-8 sm:px-14 py-10 sm:py-14 text-[#0a0a0a]">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Nicolas D. Kuebler
            </h1>
            <p className="mt-2 text-sm text-[#0a0a0a]/70">
              (206) 953-5678 ·{" "}
              <a href="mailto:nkuebler@stanford.edu" className="underline hover:text-[#0a0a0a]">
                nkuebler@stanford.edu
              </a>{" "}
              · Stanford, CA ·{" "}
              <a href="https://nkuebler.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0a0a0a]">
                nkuebler.com
              </a>
            </p>
          </header>

          {/* Education */}
          <Section title="Education">
            <Entry
              title="B.S. Stanford University, Stanford, CA"
              right="Expected June 2026"
            />
            <p className="text-sm text-[#0a0a0a]/80 mt-1">
              Major: Product Design (Mechanical Engineering / Design School). GPA: 3.73/4.00
            </p>

            <Entry
              className="mt-4"
              title="Stanford Varsity Gymnastics, Team Member"
              right="Sept. 2021 – Present"
            />
            <Bullets items={[
              "2022, 2023, & 2024 NCAA Team Champion",
              "2023 NCAA Individual Floor Champion",
              "Hosted annual camp for aspiring students & local non-profit groups (Children's Champions) for a day of handstands, backflips, and balance practice to inspire a love for gymnastics",
              <>
                Showcase new skills on personal{" "}
                <a href="https://www.instagram.com/nkuebs/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>{" "}
                (20K+ followers, gymnastics/calisthenics content)
              </>,
            ]} />
          </Section>

          {/* Products & Portfolio */}
          <Section title="Products & Portfolio">
            <p className="text-sm text-[#0a0a0a]/80">
              <a href="https://nkuebler.com" target="_blank" rel="noopener noreferrer" className="underline">
                nkuebler.com
              </a>
              {" "}· Product portfolio & original design concepts
            </p>
            <Bullets items={[
              <>
                <strong>Air DJ:</strong> Designed and built a gesture-controlled DJ board that replaces every knob and fader with a hand motion tracked through a webcam. Trained a custom gesture classifier on self-collected data, mapped poses to virtual MIDI for VirtualDJ, and authored an intuitive vocabulary (pinch to play, crossed fingers to crossfade, among 13 other gestures).
              </>,
              <>
                <strong>Ringallets:</strong> Designed and prototyped a gymnastics training tool that bridges the gap between parallettes and rings, preserving correct mechanics without instability. Iterated through CAD modeling, failure point analysis, and tested with professional gymnasts.
              </>,
              <>
                <strong>WaterShield:</strong> Designed a compact longboard wheel fender to prevent water upsplash during wet conditions. Defined user pain points, iterated attachment geometry for clearance and durability, and validated through real-world ride testing. I use this on my way to class when it's raining.
              </>,
              <>
                <strong>Marble Launcher:</strong> Designed and prototyped a mechanical desktop perpetual marble launcher that stores, displaces, and launches marbles one at a time using rotary input and spring-driven reset.
              </>,
              <>
                <strong>Concepts:</strong> 12+ original product concepts exploring haptics, smart furniture, wearable tech, and human-centered systems (see{" "}
                <a href="https://nkuebler.com/concepts" target="_blank" rel="noopener noreferrer" className="underline">nkuebler.com/concepts</a>
                )
              </>,
            ]} />
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience">
            <Entry title="Metropolitan Gymnastics, Kent, WA" right="Dec. 2024 – June 2025" />
            <Bullets items={[
              "Coached 30 competitive gymnasts (levels 5-10) in skill progression and routine development while recovering from a sports injury.",
              "Created personalized strength & conditioning plans",
              "Developed air awareness",
              "Developed athletes' mental approach to competing with consistency in high performance culture",
            ]} />

            <Entry
              className="mt-4"
              title="ReFleece Marketing and Social Media, Stanford, CA — Internship"
              right="June – Aug. 2024"
            />
            <Bullets items={[
              "Created marketing videos, posts, and concepts to expand brand awareness for ReFleece Tote Bags",
            ]} />

            <Entry
              className="mt-4"
              title="Long Run Capital, Stanford, CA — Internship"
              right="June – Aug. 2022"
            />
            <Bullets items={[
              "Created an investor guide explaining blockchain fundamentals, current applications, and limitations for potential LRC investors",
            ]} />

            <Entry
              className="mt-4"
              title="Stanford Boys Gymnastics Camp, Stanford, CA — High Performance Coach"
              right="July – Aug. 2021"
            />
            <Bullets items={[
              "Coached young gymnasts in perfecting skills and technique",
              "Led daily stretching and conditioning programs to prepare athletes for training",
            ]} />
          </Section>

          {/* Skills & Additional */}
          <Section title="Skills & Additional">
            <p className="text-sm text-[#0a0a0a]/80">
              <strong>Design:</strong> CAD (Fusion), digital design, physical prototyping (metal, 3d printing, laser cutting, sand casting, water jetting), video production
            </p>
            <p className="mt-2 text-sm text-[#0a0a0a]/80">
              <strong>Software:</strong> Claude Code, Cursor, Vercel, Supabase
            </p>
            <p className="mt-2 text-sm text-[#0a0a0a]/80">
              <strong>Social Media:</strong> Instagram (20K+ followers, gymnastics/calisthenics content) ·{" "}
              <a href="https://www.instagram.com/nkuebs/reels" target="_blank" rel="noopener noreferrer" className="underline">
                instagram.com/nkuebs/reels
              </a>
            </p>
            <p className="mt-2 text-sm text-[#0a0a0a]/80">
              <strong>Interests:</strong> Origami, music mixing, board games
            </p>
          </Section>

          {/* Demonstration of Exceptional Ability */}
          <Section title="Demonstration of Exceptional Ability">
            <p className="text-sm font-semibold">Gymnastics National Champion</p>
            <Bullets items={[
              "2022, 2023, 2024, & 2026 NCAA Team Champion",
              "2026 NCAA Floor, Ring, & High Bar All-American",
              "2023 NCAA Floor Champion & Ring All-American",
              "Team USA 5x Junior National Team Member",
            ]} />

            <p className="mt-4 text-sm font-semibold">Tasteful & Rapid Physical Product Design</p>
            <Bullets items={[
              "I ship ideas to working physical products in a week e.g. Watershield",
            ]} />

            <p className="mt-4 text-sm font-semibold">Creative Design Approach</p>
            <Bullets items={[
              <>
                See concepts:{" "}
                <a href="https://www.nkuebler.com/concepts" target="_blank" rel="noopener noreferrer" className="underline">
                  nkuebler.com/concepts
                </a>
              </>,
            ]} />
          </Section>
        </div>
      </div>
    </div>
  );
}

/* ---------- small helpers ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-[0.95rem] font-bold uppercase tracking-wide border-b border-[#0a0a0a]/25 pb-1">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Entry({
  title,
  right,
  className = "",
}: {
  title: string;
  right?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline justify-between gap-4 ${className}`}>
      <p className="text-sm font-semibold">{title}</p>
      {right && <p className="text-sm text-[#0a0a0a]/70 whitespace-nowrap">{right}</p>}
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-[#0a0a0a]/80 leading-relaxed">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
