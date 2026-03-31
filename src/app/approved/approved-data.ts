import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string;
};

export const APPROVED_CONCEPTS: IdeationConcept[] = [
  {
    id: 2,
    title: "Memory Marble",
    subtitle:
      "A hand-blown glass marble with a tiny embedded NFC chip. Tap it to your phone to replay a saved voice memo, song, or photo.",
    thumb: "/ideate/memory-marble-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/memory-marble.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 5,
    title: "Shadow Clock",
    subtitle:
      "A minimalist wall clock with no hands or numbers. A single pin and a hidden rotating LED ring cast a shadow that tells the time.",
    thumb: "/ideate/shadow-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/shadow-clock.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 9,
    title: "Thermal Portrait",
    subtitle:
      "An e-ink picture frame that displays real-time thermal camera imagery of the room, turning everyday scenes into glowing heat-signature art.",
    thumb: "/ideate/thermal-portrait-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/thermal-portrait.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 10,
    title: "Drift Globe",
    subtitle:
      "A desk globe that spins driven by live global wind data. Thin LED trails glow across the surface showing real-time jet streams.",
    thumb: "/ideate/drift-globe-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/drift-globe.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 20,
    title: "Horizon Shelf",
    subtitle:
      "A floating wall shelf with an edge-lit LED strip that casts a gradient glow downward. Warm amber at sunset. Cool blue at dawn. All synced to your local horizon times.",
    thumb: "/ideate/horizon-shelf-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/horizon-shelf.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 28,
    title: "Cloud Humidifier",
    subtitle:
      "A magnetically suspended cloud shaped humidifier that floats above a base, freshening your room.",
    thumb: "/ideate/cloud-humidifier-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cloud-humidifier.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 41,
    title: "Glyph Ring",
    subtitle:
      "A wide band ring of black zirconium with deeply engraved geometric glyphs filled with photoluminescent resin. In the dark, the ancient-looking symbols glow an ethereal teal-green.",
    thumb: "/ideate/glyph-ring-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/glyph-ring.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 42,
    title: "Ferro Clock",
    subtitle:
      "A desk clock that tells time using ferrofluid. A sealed glass arc tube contains magnetic fluid that forms spiky peaks at the hour and minute positions, controlled by hidden electromagnets beneath a walnut base.",
    thumb: "/ideate/ferro-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ferro-clock.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 2,
    title: "Tide Stone",
    subtitle:
      "A smooth basalt desk stone with an embedded e-ink strip that displays the real time tide height of any coastline you choose.",
    thumb: "/ideate/tide-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tide-stone.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 4,
    title: "Nebula Jar",
    subtitle:
      "A sealed glass jar filled with a proprietary magnetic fluid that swirls into galaxy like formations when you wave your hand near it, creating a personal nebula on your shelf.",
    thumb: "/ideate/nebula-jar-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/nebula-jar.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 12,
    title: "Soot Canvas",
    subtitle:
      "A matte black wall panel coated in a soot based surface that you draw on with your fingertip. Exposed areas glow faintly at night using phosphorescent pigment beneath the soot layer.",
    thumb: "/ideate/soot-canvas-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/soot-canvas.webp",
    createdAt: "2026-03-27",
  },
];
