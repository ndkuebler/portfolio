export type Concept = {
  slug?: string;
  title: string;
  subtitle: string;
  thumb?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
};

export const CONCEPTS: Concept[] = [
  {
    slug: "dj-glasses",
    title: "DJ Glasses",
    subtitle: "Glasses that pulse to the song's instrumental",
    thumb: "/concepts/djglasses1.webp",
    mediaType: "video",
    mediaSrc: "/concepts/djglassesloop.mp4",
  },
  {
    slug: "conversational-plant",
    title: "Conversational Plant",
    subtitle:
      "Pot with soil sensors + tiny thermal printer that prints receipts like \"I'm thirsty\"",
    thumb: "/concepts/plantr1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/plantr.webp",
  },
  {
    slug: "haptic-direction-belt",
    title: "Haptic Direction Belt",
    subtitle: "Subtle vibrations guide you to a pin location",
    thumb: "/concepts/hapticbelt.webp",
    mediaType: "image",
    mediaSrc: "/concepts/hapticbelt.webp",
  },
  {
    slug: "lightning-connection-table",
    title: "Lightning Connection Table",
    subtitle:
      "A table with conductive veins of lightning that briefly arc when someone touches two points",
    thumb: "/concepts/tablelightning.webp",
    mediaType: "video",
    mediaSrc: "/concepts/lightningtableaction.mp4",
  },
  {
    slug: "intuitive-fridge",
    title: "Intuitive Fridge",
    subtitle: "Interior fridge lighting that gradually darkens as food ages",
    thumb: "/concepts/fridge1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/fridgeopen.webp",
  },
  {
    slug: "posture-chair",
    title: "Posture Chair",
    subtitle: "Each person who sits leaves a silhouette of their posture",
    thumb: "/concepts/chairproj1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/chairprojwoman.webp",
  },
  {
    slug: "athlete-recovery-gum",
    title: "Athlete recovery gum",
    subtitle:
      "Gum sticks made with recovery-forward ingredients like turmeric, vitamin C, and tart cherry.",
    thumb: "/concepts/gumstyxclosed.webp",
    mediaType: "image",
    mediaSrc: "/concepts/gumopened.webp",
  },
  {
    slug: "living-album-cover",
    title: "Living Album Cover",
    subtitle: "A wall display that creates living album art from the music you play",
    thumb: "/concepts/musicframe.webp",
    mediaType: "image",
    mediaSrc: "/concepts/musicframe.webp",
  },
  {
    slug: "micro-led-freckles",
    title: "Micro-LED Freckles",
    subtitle: "temporary freckle stickers that glow like constellations in low light",
    thumb: "/concepts/freckles.webp",
    mediaType: "image",
    mediaSrc: "/concepts/womanfreckles.webp",
  },
  {
    slug: "companion-bench",
    title: "Companion Bench",
    subtitle: "A bench that warms only when two strangers sit on it",
    thumb: "/concepts/bench.webp",
    mediaType: "image",
    mediaSrc: "/concepts/bench glow.webp",
  },
  {
    slug: "think-tank",
    title: "Think Tank",
    subtitle: "A pod with sensory deprivation technologies",
    thumb: "/concepts/tank.webp",
    mediaType: "image",
    mediaSrc: "/concepts/tankbg.webp",
  },
  {
    slug: "drone-shepherd",
    title: "Drone Shepherd",
    subtitle: "Drone that herds sheep",
    thumb: "/concepts/dogdronev2.webp",
    mediaType: "image",
    mediaSrc: "/concepts/dognsheepv2.webp",
  },
  {
    slug: "scent-fork",
    title: "Scent Fork",
    subtitle:
      "A fork with swappable aroma sleeves that slide onto the neck, tricking your brain into perceiving different flavors than what you're eating. Time to make broccoli taste like chocolate.",
    thumb: "/concepts/scentfork1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/scentfork2.webp",
  },
  {
    slug: "mode-candle",
    title: "The Mode Candle",
    subtitle:
      "A dual-chamber ceramic candle with a thermochromic divider. Rotate 180° to switch between rosemary + peppermint (WORK) and amber + sandalwood (CHILL). Heated from below.",
    thumb: "/concepts/modecandle1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/modecandle2.webp",
  },
  {
    slug: "shadow-clock",
    title: "Shadow Clock",
    subtitle:
      "A minimalist wall clock with no hands or numbers. A single pin and a hidden rotating LED ring cast a shadow that tells the time.",
    thumb: "/ideate/shadow-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/shadow-clock.webp",
  },
  {
    slug: "memory-marble",
    title: "Memory Marble",
    subtitle:
      "A hand-blown glass marble with a tiny embedded NFC chip. Tap it to your phone to replay a saved voice memo, song, or photo.",
    thumb: "/ideate/memory-marble-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/memory-marble.webp",
  },
  {
    slug: "drift-globe",
    title: "Drift Globe",
    subtitle:
      "A desk globe that spins driven by live global wind data. Thin LED trails glow across the surface showing real-time jet streams.",
    thumb: "/ideate/drift-globe-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/drift-globe.webp",
  },
  {
    slug: "horizon-shelf",
    title: "Horizon Shelf",
    subtitle:
      "A floating wall shelf with an edge-lit LED strip that casts a gradient glow downward. Warm amber at sunset. Cool blue at dawn. All synced to your local horizon times.",
    thumb: "/ideate/horizon-shelf-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/horizon-shelf.webp",
  },
  {
    slug: "cloud-humidifier",
    title: "Cloud Humidifier",
    subtitle:
      "A magnetically suspended cloud shaped humidifier that floats above a base, freshening your room.",
    thumb: "/ideate/cloud-humidifier-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cloud-humidifier.webp",
  },
  {
    slug: "tide-stone",
    title: "Tide Stone",
    subtitle:
      "A smooth basalt desk stone with an embedded e-ink strip that displays the real time tide height of any coastline you choose.",
    thumb: "/ideate/tide-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tide-stone.webp",
  },
];
