"use client";

import { useEffect, useRef, useState } from "react";

type Marker = { time: number; label: string };

const MARKERS: Marker[] = [
  { time: 0, label: "Pinch to play (Deck A)" },
  { time: 1, label: "Back-of-hand lift controls volume" },
  { time: 8, label: "Pinch to play (Deck B)" },
  { time: 9.25, label: "Cross fingers and drag across for crossfader" },
  { time: 21, label: "Pinch again to stop (Deck A)" },
  { time: 25, label: "Thumb three toggles the vocals off" },
  { time: 26.8, label: "Thumb three toggles the vocals back on" },
  { time: 30, label: "Thumb three toggles the instrumental off" },
  { time: 31.5, label: "Thumb three toggles the instrumental back on" },
];

const AUTO_TOOLTIP_MS = 1000;
const CROSSING_TOLERANCE = 0.25; // seconds

export function AirDjHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [autoActiveIdx, setAutoActiveIdx] = useState<number | null>(null);

  const crossedRef = useRef<Set<number>>(new Set());
  const lastTimeRef = useRef(0);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      const t = v.currentTime;
      // Loop / seek-back: reset crossed set so markers retrigger on next pass.
      if (t < lastTimeRef.current - 0.5) crossedRef.current.clear();
      lastTimeRef.current = t;
      setCurrentTime(t);

      MARKERS.forEach((m, i) => {
        if (
          !crossedRef.current.has(i) &&
          t >= m.time - CROSSING_TOLERANCE &&
          t <= m.time + CROSSING_TOLERANCE
        ) {
          crossedRef.current.add(i);
          setAutoActiveIdx(i);
          if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
          autoTimerRef.current = setTimeout(() => {
            setAutoActiveIdx((cur) => (cur === i ? null : cur));
          }, AUTO_TOOLTIP_MS);
        }
      });
    };

    const onLoadedMetadata = () => setDuration(v.duration || 0);
    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);
    const onSeeked = () => crossedRef.current.clear();
    const onVolumeChange = () => setMuted(v.muted);
    const onFullscreenChange = () =>
      setIsFullscreen(document.fullscreenElement === v);

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadedmetadata", onLoadedMetadata);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("seeked", onSeeked);
    v.addEventListener("volumechange", onVolumeChange);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    if (v.readyState >= 1) setDuration(v.duration || 0);
    setPaused(v.paused);

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadedmetadata", onLoadedMetadata);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("volumechange", onVolumeChange);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, []);

  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {});
    setMuted(false);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted && v.volume === 0) v.volume = 1;
  };

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      v.requestFullscreen().catch(() => {});
    }
  };

  const seekFromEvent = (clientX: number) => {
    const v = videoRef.current;
    const tl = timelineRef.current;
    if (!v || !tl || !duration) return;
    const rect = tl.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    v.currentTime = pct * duration;
  };

  const formatTime = (s: number) => {
    if (!Number.isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${ss}`;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const visibleTooltipIdx = hoveredIdx !== null ? hoveredIdx : autoActiveIdx;
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
        preload="metadata"
        onClick={togglePlay}
        className="absolute inset-0 h-full w-full object-contain object-center cursor-pointer"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* Sound-on hint chip */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[28%] z-20 flex justify-center transition-opacity duration-500"
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

      {/* Custom controls */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-3 pt-10 sm:px-8 sm:pb-4 sm:pt-12">
        {/* Timeline */}
        <div className="group/timeline relative pt-9">
          <div
            ref={timelineRef}
            onClick={(e) => seekFromEvent(e.clientX)}
            className="relative h-[3px] w-full cursor-pointer rounded-full bg-white/20 transition-[height] duration-150 group-hover/timeline:h-[5px]"
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-white"
              style={{ width: `${progressPct}%` }}
            />
            {MARKERS.map((m, i) => {
              const left = duration > 0 ? (m.time / duration) * 100 : 0;
              const tipVisible = visibleTooltipIdx === i;
              const tipAlign =
                left < 12 ? "left" : left > 88 ? "right" : "center";
              const tipTransform =
                tipAlign === "left"
                  ? "translateX(0)"
                  : tipAlign === "right"
                    ? "translateX(-100%)"
                    : "translateX(-50%)";
              const tipLeft =
                tipAlign === "left"
                  ? "0%"
                  : tipAlign === "right"
                    ? "100%"
                    : "50%";
              return (
                <button
                  key={i}
                  type="button"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => setHoveredIdx(i)}
                  onBlur={() => setHoveredIdx(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    const v = videoRef.current;
                    if (v) v.currentTime = m.time;
                  }}
                  aria-label={`${formatTime(m.time)} ${m.label}`}
                  className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37] shadow-[0_0_0_3px_rgba(0,0,0,0.25)] transition-all duration-150 hover:h-3 hover:w-3 hover:shadow-[0_0_0_4px_rgba(212,175,55,0.18)] focus:outline-none focus:h-3 focus:w-3"
                  style={{ left: `${left}%` }}
                >
                  <span
                    className="pointer-events-none absolute bottom-full mb-3 whitespace-normal rounded-lg bg-black/80 px-3 py-1.5 text-[0.75rem] font-medium leading-snug text-white/95 ring-1 ring-white/10 backdrop-blur-md shadow-lg shadow-black/40 transition-opacity duration-150"
                    style={{
                      opacity: tipVisible ? 1 : 0,
                      left: tipLeft,
                      transform: tipTransform,
                      maxWidth: "16rem",
                      width: "max-content",
                    }}
                  >
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Button row */}
        <div className="mt-4 flex items-center gap-3 text-white">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={paused ? "Play" : "Pause"}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 hover:text-white hover:scale-110 transition-all duration-150"
          >
            {paused ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            )}
          </button>
          <span className="text-[0.75rem] tabular-nums text-white/85">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 hover:text-white hover:scale-110 transition-all duration-150"
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 hover:text-white hover:scale-110 transition-all duration-150"
            >
              {isFullscreen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3v4H4M16 3v4h4M8 21v-4H4M16 21v-4h4" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
