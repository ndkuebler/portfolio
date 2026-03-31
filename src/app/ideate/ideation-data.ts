import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Absence Clock",
    subtitle:
      "A wall mounted disc of matte black steel where twelve small holes let light through from behind. Each hole dims as the hour passes, so the clock tells time by what is missing rather than what is shown. At midnight all twelve reignite.",
    thumb: "/ideate/absence-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/absence-clock.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 2,
    title: "Salt Basin",
    subtitle:
      "A shallow volcanic stone tray connected to local weather data that slowly evaporates a thin layer of saltwater throughout the day, leaving behind crystal formations that map the temperature and humidity. Each evening you dissolve the pattern and start again.",
    thumb: "/ideate/salt-basin-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/salt-basin.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 11,
    title: "Nocturne Tile",
    subtitle:
      "A single dark porcelain wall tile with an embedded star map that illuminates only after the lights go out, using photoluminescent glaze to show the exact night sky above your coordinates on the date you choose. A permanent snapshot of the stars from a night that mattered.",
    thumb: "/ideate/nocturne-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/nocturne-tile.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 12,
    title: "Relic Caster",
    subtitle:
      "A desktop crucible kit that lets you melt down small metal keepsakes (old keys, coins, broken jewelry) and pour them into a mold to create a single solid token. Turn scattered sentimental clutter into one dense meaningful object you actually keep on your shelf.",
    thumb: "/ideate/relic-caster-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/relic-caster.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 13,
    title: "Veil Plinth",
    subtitle:
      "A low pedestal of raw black concrete with a sheet of electrochromic glass on top. Place any small object on it and the glass slowly frosts over the course of an hour, gradually concealing what is inside until it disappears completely. Tap the base to reveal it again.",
    thumb: "/ideate/veil-plinth-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/veil-plinth.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 14,
    title: "Axis Spinner",
    subtitle:
      "A heavy solid tungsten top with an embedded gyroscope that, once spun on its magnetic base, stays upright for over an hour. The base tracks total spin time across your lifetime and engraves a faint ring into the steel surface for every hundred hours accumulated.",
    thumb: "/ideate/axis-spinner-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/axis-spinner.webp",
    createdAt: "2026-03-30",
  },
];
