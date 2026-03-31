export type ConceptItem = {
  filename: string;
  src: string;
};

/** Curated list — filenames as stored in /public/concepts */
const FILENAMES = [
  "djglasses1.webp",
  "bench.webp",
  "chairproj1.webp",
  "dogdronev2.webp",
  "freckles.webp",
  "fridge1.webp",
  "gumopened.webp",
  "hapticbelt.webp",
  "ltable.webp",
  "musicframe.webp",
  "scentfork1-carousel.webp",
  "modecandle1.webp",
  "ideate/shadow-clock-thumb.webp",
  "ideate/memory-marble-thumb.webp",
  "ideate/drift-globe-thumb.webp",
  "ideate/horizon-shelf-thumb.webp",
  "ideate/cloud-humidifier-thumb.webp",
] as const;

export const conceptItems: ConceptItem[] = FILENAMES.map((filename) => ({
  filename,
  src: filename.includes('/') ? `/${filename}` : `/concepts/${encodeURIComponent(filename)}`,
}));
