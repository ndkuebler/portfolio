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
    id: 3,
    title: "Covenant Coin",
    subtitle:
      "A heavy blackened brass coin split into two halves that magnetically reunite. Two people each carry a half; when both halves are placed within range of any NFC reader, a shared private note unlocks on both their phones. A physical key that requires two people to turn.",
    thumb: "/ideate/covenant-coin-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/covenant-coin.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 4,
    title: "Sonograph Plate",
    subtitle:
      "A ceramic wall plate with a single groove spiraling from edge to center, cut from the waveform of a sound you upload. Drag a wooden stylus along the groove and hear a ghostly analog playback of your child's first word, a voicemail, or any sound you want to keep forever.",
    thumb: "/ideate/sonograph-plate-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/sonograph-plate.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 5,
    title: "Omen Tray",
    subtitle:
      "A desk tray carved from walnut with a surface of thermochromic ink that shifts from black to deep red as the day warms. Drop your keys and wallet on it each morning and watch your daily objects rest on a surface that reveals the invisible temperature around them.",
    thumb: "/ideate/omen-tray-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/omen-tray.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 6,
    title: "Solace Mask",
    subtitle:
      "A wall mounted ceramic face with closed eyes that breathes. A tiny internal bellows inflates and deflates once every six seconds, matching the rhythm of a calm breath. Hang it where you can see it from your desk and let it pace you without a screen or notification.",
    thumb: "/ideate/solace-mask-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/solace-mask.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 7,
    title: "Latch Journal",
    subtitle:
      "A leather notebook with a brass clasp that only opens once per day via a timed mechanical lock. Write your entry, close the latch, and it seals until tomorrow. Forces a single daily reflection and makes the act of writing feel like an event rather than a habit.",
    thumb: "/ideate/latch-journal-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/latch-journal.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 8,
    title: "Wake Shard",
    subtitle:
      "A slender shard of smoked glass mounted vertically on a steel base. Inside, a column of dense mineral oil rises and falls in real time with the swell height of a chosen surf break, giving surfers and ocean lovers a silent physical read on wave conditions from across the room.",
    thumb: "/ideate/wake-shard-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wake-shard.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 9,
    title: "Thread Loom",
    subtitle:
      "A small tabletop frame with pegs and a spool of dark thread. Each day you wind one row based on a prompt from the companion app: wrap tight for a hard day, loose for an easy one. After a month you have a woven textile that encodes your emotional weather into fabric.",
    thumb: "/ideate/thread-loom-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/thread-loom.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 10,
    title: "Pyre Vault",
    subtitle:
      "A cast iron box the size of a deck of cards with a ceramic chamber inside. Write something on flash paper, drop it in, and press the lid to ignite it. The ash stays sealed inside forever. A ritual for letting go of thoughts, regrets, or names that no longer serve you.",
    thumb: "/ideate/pyre-vault-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pyre-vault.webp",
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
