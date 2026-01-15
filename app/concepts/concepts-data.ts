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
    subtitle: "Glasses that pulse to the song’s instrumental",
    thumb: "/concepts/djglasses.png",
    mediaType: "video",
    mediaSrc: "/concepts/djglassesloop.mp4",
  },

  {
    title: "Conversational Plant",
    subtitle:
      "Pot with soil sensors + tiny thermal printer that prints receipts like “I’m thirsty”",
    thumb: "/concepts/plantr.png",
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
    thumb: "/concepts/lightningtable.png",
    mediaType: "video",
    mediaSrc: "/concepts/lightningtableaction.mp4",
  },

  {
    title: "Intuitive Fridge",
    subtitle: "Interior fridge lighting that gradually darkens as food ages",
    thumb: "/concepts/fridgeclosed.png",
    mediaType: "image",
    mediaSrc: "/concepts/fridgeopen.png",
  },

  {
    title: "Posture Chair",
    subtitle: "Each person who sits leaves a silhouette of their posture",
    thumb: "/concepts/chairproj.png",
    mediaType: "image",
    mediaSrc: "/concepts/chairprojwoman.png",
  },
];
