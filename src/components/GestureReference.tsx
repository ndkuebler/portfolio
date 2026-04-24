"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Gesture = {
  name: string;
  hand?: string;
  action: string;
  detail?: string;
};

type Group = {
  label: string;
  caption: string;
  items: Gesture[];
};

const GROUPS: Group[] = [
  {
    label: "Triggers",
    caption: "Rising-edge. Fires once per pose.",
    items: [
      { name: "Pinch", hand: "Either", action: "Play or pause", detail: "Thumb and index fingertips touch." },
      { name: "Rock", hand: "Either", action: "Cue", detail: "Thumb, index, and pinky extended. Middle and ring curled." },
      { name: "Pointing", hand: "Either", action: "Toggle vocal stem", detail: "Index finger only." },
      { name: "Peace", hand: "Either", action: "Toggle instrumental stem", detail: "Index and middle extended." },
      { name: "Three up", hand: "Either", action: "Toggle acapella stem", detail: "Index, middle, and ring extended." },
      { name: "Thumb one", hand: "Either", action: "Toggle kick stem" },
      { name: "Thumb two", hand: "Either", action: "Toggle hi-hat stem" },
      { name: "Thumb three", hand: "Either", action: "Toggle instrument stem" },
      { name: "Thumbs down", hand: "Right", action: "Load into Deck A", detail: "Uses the current browser selection." },
      { name: "Thumbs up", hand: "Right", action: "Load into Deck B", detail: "Uses the current browser selection." },
    ],
  },
  {
    label: "Continuous",
    caption: "Latches on while you hold the pose. Drops when you drop it.",
    items: [
      { name: "Back of hand", hand: "Either", action: "Volume fader", detail: "Palm away from camera. Tilt the wrist about 75 degrees either way to move the fader. Pickup mode prevents jumps until you catch the current value." },
      { name: "Open palm", hand: "Either", action: "Jog wheel", detail: "Palm to camera, fingers spread. Drift the hand left or right from center to fire beat jumps. Speed scales with offset." },
      { name: "Crossed fingers", hand: "Right", action: "Crossfader", detail: "Index crossed over middle. Anchors on first detect. Move about 10 percent of the frame width either way for a full 0 to 127 sweep." },
    ],
  },
  {
    label: "Modes",
    caption: "State toggles that change what the rest of your hand does.",
    items: [
      { name: "Right-hand shaka", hand: "Right", action: "Mouse mode", detail: "Index fingertip drives the macOS cursor. Pinky curl clicks. Lower third of the frame scrolls the song pool." },
      { name: "Left-hand shaka", hand: "Left", action: "Browse mode", detail: "Left third of the frame navigates folders. Right third navigates the song pool. Middle third scrolls. Pinky curl clicks the search bar." },
    ],
  },
];

export function GestureReference() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f5f5f5]/20 bg-[#0f0f0f] px-5 py-3 text-[0.875rem] font-medium text-[#f5f5f5]/85 transition hover:border-[#c9a56c]/60 hover:bg-[#151515] hover:text-[#c9a56c]"
      >
        <span>See all gestures</span>
        <span aria-hidden="true">→</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Air DJ gesture reference"
            className="relative z-10 flex h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl border border-[#f5f5f5]/10 bg-[#0a0a0a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-[#f5f5f5]/10 px-6 py-5 sm:px-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f5f5f5]">
                  Gesture reference
                </h2>
                <p className="mt-1 text-[0.8125rem] text-[#f5f5f5]/55">
                  Every pose the classifier listens for.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]/10 text-[#f5f5f5]/80 transition hover:bg-[#f5f5f5]/15 hover:text-[#f5f5f5]"
              >
                <X size={18} />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              {GROUPS.map((group) => (
                <div key={group.label} className="mt-8 first:mt-0">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#f5f5f5]/10 pb-3">
                    <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[#c9a56c]">
                      {group.label}
                    </h3>
                    <p className="text-[0.75rem] text-[#f5f5f5]/45">
                      {group.caption}
                    </p>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.items.map((g) => (
                      <li
                        key={g.name}
                        className="flex flex-col gap-1 rounded-lg border border-[#f5f5f5]/10 bg-[#0f0f0f] p-4"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="text-[0.9375rem] font-semibold text-[#f5f5f5]">
                            {g.name}
                          </p>
                          {g.hand && (
                            <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#f5f5f5]/40">
                              {g.hand}
                            </span>
                          )}
                        </div>
                        <p className="text-[0.9375rem] text-[#c9a56c]">
                          {g.action}
                        </p>
                        {g.detail && (
                          <p className="mt-1 text-[0.8125rem] leading-[1.6] text-[#f5f5f5]/55">
                            {g.detail}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
