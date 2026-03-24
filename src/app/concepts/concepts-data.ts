export type Concept = {
  title: string;
  subtitle: string;
  thumb?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
};

export const CONCEPTS: Concept[] = [
  {
    title: "DJ Glasses",
    subtitle: "Glasses that pulse to the song's instrumental",
    thumb: "/concepts/djglasses1.webp",
    mediaType: "video",
    mediaSrc: "/concepts/djglassesloop.mp4",
  },
  {
    title: "Conversational Plant",
    subtitle:
      "Pot with soil sensors + tiny thermal printer that prints receipts like \"I'm thirsty\"",
    thumb: "/concepts/plantr1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/plantr.webp",
  },
  {
    title: "Haptic Direction Belt",
    subtitle: "Subtle vibrations guide you to a pin location",
    thumb: "/concepts/hapticbelt.webp",
    mediaType: "image",
    mediaSrc: "/concepts/hapticbelt.webp",
  },
  {
    title: "Lightning Connection Table",
    subtitle:
      "A table with conductive veins of lightning that briefly arc when someone touches two points",
    thumb: "/concepts/tablelightning.webp",
    mediaType: "video",
    mediaSrc: "/concepts/lightningtableaction.mp4",
  },
  {
    title: "Intuitive Fridge",
    subtitle: "Interior fridge lighting that gradually darkens as food ages",
    thumb: "/concepts/fridge1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/fridgeopen.webp",
  },
  {
    title: "Posture Chair",
    subtitle: "Each person who sits leaves a silhouette of their posture",
    thumb: "/concepts/chairproj1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/chairprojwoman.webp",
  },
  {
    title: "Athlete recovery gum",
    subtitle:
      "Gum sticks made with recovery-forward ingredients like turmeric, vitamin C, and tart cherry.",
    thumb: "/concepts/gumstyxclosed.webp",
    mediaType: "image",
    mediaSrc: "/concepts/gumopened.webp",
  },
  {
    title: "Living Album Cover",
    subtitle: "A wall display that creates living album art from the music you play",
    thumb: "/concepts/musicframe.webp",
    mediaType: "image",
    mediaSrc: "/concepts/musicframe.webp",
  },
  {
    title: "Micro-LED Freckles",
    subtitle: "temporary freckle stickers that glow like constellations in low light",
    thumb: "/concepts/freckles.webp",
    mediaType: "image",
    mediaSrc: "/concepts/womanfreckles.webp",
  },
  {
    title: "Companion Bench",
    subtitle: "A bench that warms only when two strangers sit on it",
    thumb: "/concepts/bench.webp",
    mediaType: "image",
    mediaSrc: "/concepts/bench glow.webp",
  },
  {
    title: "Think Tank",
    subtitle: "A pod with sensory deprivation technologies",
    thumb: "/concepts/tank.webp",
    mediaType: "image",
    mediaSrc: "/concepts/tankbg.webp",
  },
  {
    title: "Drone Shepherd",
    subtitle: "Drone that herds sheep",
    thumb: "/concepts/dogdronev2.webp",
    mediaType: "image",
    mediaSrc: "/concepts/dognsheepv2.webp",
  },
  {
    title: "Scent Fork",
    subtitle:
      "A fork with swappable aroma sleeves that slide onto the neck, tricking your brain into perceiving different flavors than what you're eating. Time to make broccoli taste like chocolate.",
    thumb: "/concepts/scentfork1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/scentfork2.webp",
  },
  {
    title: "The Mode Candle",
    subtitle:
      "A dual-chamber ceramic candle with a thermochromic divider. Rotate 180° to switch between rosemary + peppermint (WORK) and amber + sandalwood (CHILL). Heated from below.",
    thumb: "/concepts/modecandle1.webp",
    mediaType: "image",
    mediaSrc: "/concepts/modecandle2.webp",
  },
];
