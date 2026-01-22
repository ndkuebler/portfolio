// app/concepts/concepts-data.ts

export type Concept = {
  title: string;
  subtitle: string;

  // optional grid preview (what shows in the grey box)
  thumb?: string;

  // what opens fullscreen
  mediaType: "image" | "video";
  mediaSrc: string;
};

export const CONCEPTS: Concept[] = [
  {
    title: "DJ Glasses",
    subtitle: "Glasses that pulse to the song's instrumental",
    thumb: "/concepts/djglasses1.png",
    mediaType: "video",
    mediaSrc: "/concepts/djglassesloop.mp4",
  },

  {
    title: "Conversational Plant",
    subtitle:
      "Pot with soil sensors + tiny thermal printer that prints receipts like \"I'm thirsty\"",
    thumb: "/concepts/plantr1.png",
    mediaType: "image",
    mediaSrc: "/concepts/plantr.png",
  },

  {
    title: "Haptic Direction Belt",
    subtitle: "Subtle vibrations guide you to a pin location",
    thumb: "/concepts/hapticbelt.png",
    mediaType: "image",
    mediaSrc: "/concepts/hapticbelt.png",
  },

  {
    title: "Lightning Connection Table",
    subtitle:
      "A table with conductive veins of lightning that briefly arc when someone touches two points",
    thumb: "/concepts/tablelightning.png",
    mediaType: "video",
    mediaSrc: "/concepts/lightningtableaction.mp4",
  },

  {
    title: "Intuitive Fridge",
    subtitle: "Interior fridge lighting that gradually darkens as food ages",
    thumb: "/concepts/fridge1.png",
    mediaType: "image",
    mediaSrc: "/concepts/fridgeopen.png",
  },

  {
    title: "Posture Chair",
    subtitle: "Each person who sits leaves a silhouette of their posture",
    thumb: "/concepts/chairproj1.png",
    mediaType: "image",
    mediaSrc: "/concepts/chairprojwoman.png",
  },

  {
    title: "Athlete recovery gum",
    subtitle:
      "Gum sticks made with recovery-forward ingredients like turmeric, vitamin C, and tart cherry.",
    thumb: "/concepts/gumstyxclosed.png",
    mediaType: "image",
    mediaSrc: "/concepts/gumopened.png",
  },

  {
    title: "Living Album Cover",
    subtitle: "A wall display that creates living album art from the music you play",
    thumb: "/concepts/musicframe.png",
    mediaType: "image",
    mediaSrc: "/concepts/musicframe.png",
  },

  {
    title: "Micro-LED Freckles",
    subtitle: "temporary freckle stickers that glow like constellations in low light",
    thumb: "/concepts/freckles.png",
    mediaType: "image",
    mediaSrc: "/concepts/womanfreckles.png",
  },

  {
    title: "Companion Bench",
    subtitle: "A bench that warms only when two strangers sit on it",
    thumb: "/concepts/bench.png",
    mediaType: "image",
    mediaSrc: "/concepts/bench glow.png",
  },

  {
    title: "Think Tank",
    subtitle: "A pod with sensory deprivation technologies",
    thumb: "/concepts/tank.png",
    mediaType: "image",
    mediaSrc: "/concepts/tankbg.png",
  },

  {
    title: "Drone Shepherd",
    subtitle: "Drone that herds sheep",
    thumb: "/concepts/dogdrone.png",
    mediaType: "image",
    mediaSrc: "/concepts/dognsheep.png",
  },
];
