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
      "A hand-blown glass marble with a tiny embedded NFC chip. Tap it to your phone to replay a saved voice memo, song, or photo — a physical bookmark for a digital memory.",
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
      "A desk globe that spins driven by live global wind data — faster winds spin it faster. Thin LED trails glow across the surface showing real-time jet streams.",
    thumb: "/ideate/drift-globe-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/drift-globe.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 20,
    title: "Horizon Shelf",
    subtitle:
      "A floating wall shelf with an edge-lit LED strip that casts a gradient glow downward — warm amber at sunset, cool blue at dawn — synced to your local horizon times.",
    thumb: "/ideate/horizon-shelf-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/horizon-shelf.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 28,
    title: "Cloud Humidifier",
    subtitle:
      "A magnetically suspended cloud-shaped humidifier that floats above a walnut base. Ultrasonic mist drifts downward from the cloud, creating a surreal miniature weather system on your desk.",
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
      "A smooth basalt desk stone with an embedded e-ink strip that displays the real time tide height of any coastline you choose, connecting your workspace to the ocean's rhythm.",
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
  {
    id: 501,
    title: "Tone Fossil",
    subtitle:
      "A polished slab of dark resin with a visible sound wave frozen inside, cast from the actual waveform of a sound you choose. Your child's first word, a favorite lyric, a voice you want to keep. A permanent fossil of an invisible moment preserved in solid form.",
    thumb: "/ideate/tone-fossil-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tone-fossil.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 502,
    title: "Phantom Dial",
    subtitle:
      "A vintage rotary phone dial mounted in a block of oiled walnut. Spin it to any digit and a tiny speaker plays a randomly selected voicemail from a public archive of abandoned answering machines. Each number connects you to a stranger's ordinary moment from decades ago.",
    thumb: "/ideate/phantom-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/phantom-dial.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 503,
    title: "Cipher Cube",
    subtitle:
      "A blackened steel cube with rotating faces like a puzzle. Each configuration reveals a different fragment of text through a small window cut into one side. Only one specific solved position displays the complete hidden message. A physical encryption device built to guard a single secret.",
    thumb: "/ideate/cipher-cube-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cipher-cube.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 504,
    title: "Angler",
    subtitle:
      "A deep sea anglerfish sculpture in blackened brass, sized for a shelf. A sealed glass vial at the tip of its lure contains living bioluminescent dinoflagellates. Shake the sculpture gently and the organisms glow blue for several minutes before slowly fading back to darkness.",
    thumb: "/ideate/angler-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/angler.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 505,
    title: "Memory Drawer",
    subtitle:
      "A single drawer of blackened steel mounted to your wall with no cabinet around it. Inside is a felt lined compartment with a tiny embedded speaker. Record a ten second sound to the drawer. Every time you pull it open, the sound plays. A physical audio bookmark for a moment you want to revisit.",
    thumb: "/ideate/memory-drawer-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/memory-drawer.webp",
    createdAt: "2026-03-30",
  },
];
