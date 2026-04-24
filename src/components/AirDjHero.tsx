"use client";

import { useRef, useState } from "react";

export function AirDjHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {});
    setMuted(false);
  };

  const showHint = muted;

  return (
    <section className="relative h-[50vh] sm:h-[80vh] w-full overflow-hidden sm:-mt-[4.5rem] bg-black">
      <video
        ref={videoRef}
        src="/work/airdj-hero.mp4"
        poster="/work/airdj-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        onVolumeChange={(e) => setMuted((e.target as HTMLVideoElement).muted)}
        className="absolute inset-0 h-full w-full object-contain object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* Sound-on hint chip, bottom-center over the gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[22%] flex justify-center transition-opacity duration-500"
        style={{ opacity: showHint ? 1 : 0 }}
      >
        <button
          type="button"
          onClick={enableSound}
          aria-label="Unmute video"
          disabled={!showHint}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-black/75 px-5 py-3 text-[0.875rem] sm:text-[0.9375rem] font-medium text-white/95 ring-1 ring-white/20 backdrop-blur shadow-lg shadow-black/50 transition-all hover:bg-black/90 hover:ring-white/30 hover:scale-[1.02]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
          <span>Turn sound on for the full experience</span>
        </button>
      </div>
    </section>
  );
}
