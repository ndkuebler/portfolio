import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Whisper Stone",
    subtitle:
      "A palm sized obsidian pebble that records a 10 second voice message when you squeeze it, then plays it back for someone else when they hold it to their ear. Leave one on a partner's desk before you leave for work.",
    thumb: "/ideate/whisper-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/whisper-stone.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 2,
    title: "Orbit Pendulum",
    subtitle:
      "A magnetically suspended brass sphere traces slow ellipses above a walnut base, its orbital speed synced to the ISS position overhead. The closer the station is to your location, the faster it swings.",
    thumb: "/ideate/orbit-pendulum-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/orbit-pendulum.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 3,
    title: "Fog Mirror",
    subtitle:
      "A black glass wall mirror that slowly develops condensation patterns based on the humidity and weather approaching your city. Watch a storm front arrive as fog creeps across the surface hours before rain.",
    thumb: "/ideate/fog-mirror-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/fog-mirror.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 4,
    title: "Ember Dice",
    subtitle:
      "A pair of solid tungsten dice that heat themselves to a gentle warmth when rolled. The number you land on sets a timer in minutes, creating an analog ritual for timeboxing creative work or deciding how long to take a break.",
    thumb: "/ideate/ember-dice-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ember-dice.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 5,
    title: "Root Ink",
    subtitle:
      "A desktop terrarium where a living plant's root system grows against a transparent dark glass panel, slowly composing an unrepeatable drawing over weeks. Each plant writes a different signature that becomes a one of a kind art piece.",
    thumb: "/ideate/root-ink-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/root-ink.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 6,
    title: "Signal Flame",
    subtitle:
      "A matte black candle shaped object with a real flickering plasma tip that only ignites when a specific person you've paired it with is awake. Two people in different time zones each keep one, a quiet proof of shared waking hours.",
    thumb: "/ideate/signal-flame-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/signal-flame.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 7,
    title: "Residue Frame",
    subtitle:
      "A wall mounted phosphorescent panel in a dark wood frame that captures your shadow when you stand in front of it and flash the built in strobe. Your silhouette lingers for five minutes, then slowly fades like a ghost leaving the room.",
    thumb: "/ideate/residue-frame-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/residue-frame.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 8,
    title: "Grain Dial",
    subtitle:
      "A sealed glass cylinder filled with layered black and white sand. Rotating the brass collar triggers a slow internal avalanche that reveals a hidden hour marker, turning the act of checking time into something you have to actively create.",
    thumb: "/ideate/grain-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/grain-dial.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 9,
    title: "Compass Null",
    subtitle:
      "A matte black compass that doesn't point north. Instead it points toward the last place you tapped on its companion map, always pulling toward a memory or a destination you chose. A physical bookmark for a place in the world.",
    thumb: "/ideate/compass-null-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/compass-null.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 10,
    title: "Fault Block",
    subtitle:
      "A split basalt desk object connected to live seismic data. The two halves sit slightly apart and vibrate with a faint hum whenever an earthquake is happening anywhere on Earth, making the planet's restlessness something you can feel at your fingertips.",
    thumb: "/ideate/fault-block-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/fault-block.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 11,
    title: "Séance Board",
    subtitle:
      "A ouija style walnut board where a magnetically driven pointer moves on its own, slowly spelling out words pulled from the public domain text of a randomly selected century old book. A daily ritual of receiving messages from forgotten authors.",
    thumb: "/ideate/seance-board-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/seance-board.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 12,
    title: "Echo Casting",
    subtitle:
      "A small bronze dish that fills with water from a hidden reservoir at the same time each day. Drop an object in and the ripple patterns are photographed from below by a tiny camera, building a personal archive of interference patterns unique to what you chose to drop.",
    thumb: "/ideate/echo-casting-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/echo-casting.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 13,
    title: "Vow Anvil",
    subtitle:
      "A solid metal block with a single button. Press it once per day to maintain your streak; the surface slowly develops a patina ring for each consecutive day. Miss a day and the patina resets to raw metal. A physical contract with yourself that shows commitment through material change.",
    thumb: "/ideate/vow-anvil-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/vow-anvil.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 14,
    title: "Moth Lantern",
    subtitle:
      "A dark frosted glass lantern that projects slowly drifting points of light onto nearby walls, each dot representing a satellite currently passing overhead. The room fills with a constellation that is always true and never the same twice.",
    thumb: "/ideate/moth-lantern-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/moth-lantern.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 15,
    title: "Hollow Book",
    subtitle:
      "A real hardcover book with blank pages and an embedded flexible display on the inside cover that loads one page per day from a classic novel. You can only read forward, never scroll back, restoring the lost patience of reading one chapter at a time.",
    thumb: "/ideate/hollow-book-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/hollow-book.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 16,
    title: "Tremor Glass",
    subtitle:
      "A heavy drinking glass with a tungsten base that amplifies the micro vibrations of whatever surface it sits on. Set it on your desk and watch the water inside reveal the hidden tremor of trains passing underground, wind hitting the building, or your own typing rhythm.",
    thumb: "/ideate/tremor-glass-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tremor-glass.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 17,
    title: "Wane Tablet",
    subtitle:
      "A slab of dark concrete with 29 embedded LEDs arranged in a crescent arc. Each night exactly one light turns on or off to match the current moon phase, building a glowing lunar cycle on your shelf without screens or apps.",
    thumb: "/ideate/wane-tablet-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wane-tablet.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 18,
    title: "Carbon Letter",
    subtitle:
      "A desktop press that embosses short messages onto thin sheets of actual graphite. Write a note with a stylus on the touch surface, press the lever, and hand someone a brittle black page that smudges when read. Messages that are physically consumed by the act of receiving them.",
    thumb: "/ideate/carbon-letter-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/carbon-letter.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 19,
    title: "Summit Cairn",
    subtitle:
      "A set of stackable matte black stones with embedded magnets that let you build a small cairn on your desk. Each stone logs the date it was stacked via NFC, so the tower becomes a physical timeline. Topple it and start a new era.",
    thumb: "/ideate/summit-cairn-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/summit-cairn.webp",
    createdAt: "2026-03-28",
  },
  {
    id: 20,
    title: "Murmur Jar",
    subtitle:
      "A sealed ceramic vessel that listens to the ambient sound of your room all day, then plays back a compressed 30 second collage of your day's soundscape each evening. A daily audio fossil of the life happening around you that you never noticed.",
    thumb: "/ideate/murmur-jar-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/murmur-jar.webp",
    createdAt: "2026-03-28",
  },
];
