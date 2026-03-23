export type ConceptItem = {
  filename: string;
  src: string;
};

/** Curated list — filenames as stored in /public/concepts */
const FILENAMES = [
  "djglasses1.png",
  "bench.png",
  "chairproj1.png",
  "dogdronev2.png",
  "freckles.png",
  "fridge1.png",
  "gumopened.png",
  "hapticbelt.png",
  "ltable.png",
  "musicframe.png",
] as const;

export const conceptItems: ConceptItem[] = FILENAMES.map((filename) => ({
  filename,
  src: `/concepts/${encodeURIComponent(filename)}`,
}));
