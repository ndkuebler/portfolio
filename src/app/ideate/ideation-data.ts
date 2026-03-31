import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Tone Fossil",
    subtitle:
      "A polished slab of dark resin with a visible sound wave frozen inside, cast from the actual waveform of a sound you choose. Your child's first word, a favorite lyric, a voice you want to keep. A permanent fossil of an invisible moment preserved in solid form.",
    thumb: "/ideate/tone-fossil-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tone-fossil.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 2,
    title: "Phantom Dial",
    subtitle:
      "A vintage rotary phone dial mounted in a block of oiled walnut. Spin it to any digit and a tiny speaker plays a randomly selected voicemail from a public archive of abandoned answering machines. Each number connects you to a stranger's ordinary moment from decades ago.",
    thumb: "/ideate/phantom-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/phantom-dial.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 3,
    title: "Cipher Cube",
    subtitle:
      "A blackened steel cube with rotating faces like a puzzle. Each configuration reveals a different fragment of text through a small window cut into one side. Only one specific solved position displays the complete hidden message. A physical encryption device built to guard a single secret.",
    thumb: "/ideate/cipher-cube-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cipher-cube.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 4,
    title: "Ghost Frame",
    subtitle:
      "A matte black picture frame with e ink behind frosted glass that displays a portrait of a person who has never existed, generated fresh each morning. A new face appears at dawn and vanishes by the next. A quiet meditation on identity and presence sitting on your shelf.",
    thumb: "/ideate/ghost-frame-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ghost-frame.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 5,
    title: "Scribe Plate",
    subtitle:
      "A matte black ceramic slab with a layer of white porcelain underneath. Scratch the surface with anything sharp and the white shows through permanently. Over months it fills with notes, sketches, and marks. When the surface is full, fire it in a kiln to seal everything forever.",
    thumb: "/ideate/scribe-plate-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/scribe-plate.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 6,
    title: "Wake Glass",
    subtitle:
      "A tall narrow glass column filled with a dense non Newtonian fluid. Tap the base once and a single ripple travels upward in extreme slow motion, taking a full minute to reach the top. A visible, physical rendering of one moment stretched across sixty seconds.",
    thumb: "/ideate/wake-glass-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wake-glass.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 7,
    title: "Mimic Block",
    subtitle:
      "A matte black silicone block on your desk that slowly reshapes itself using internal pneumatics and a tiny depth sensor. It mirrors the posture and arrangement of nearby objects with a ten minute delay. Move your coffee mug left and ten minutes later the block leans the same direction.",
    thumb: "/ideate/mimic-block-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/mimic-block.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 8,
    title: "Hollow Book",
    subtitle:
      "A solid block of black walnut carved and finished to look exactly like a closed hardcover book. Open it and the interior is a cavity shaped precisely for your phone. Place it inside, close the cover, and a copper mesh lining blocks all wireless signal. A physical do not disturb.",
    thumb: "/ideate/hollow-book-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/hollow-book.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 9,
    title: "Relic Press",
    subtitle:
      "A miniature desktop letterpress cast in black iron where you set one word per week using lead type. Press it into a continuous strip of cotton paper that slowly feeds through the machine. Over a year you produce a fifty two word diary that extends from your desk like a growing timeline.",
    thumb: "/ideate/relic-press-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/relic-press.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 10,
    title: "Angler",
    subtitle:
      "A deep sea anglerfish sculpture in blackened brass, sized for a shelf. A sealed glass vial at the tip of its lure contains living bioluminescent dinoflagellates. Shake the sculpture gently and the organisms glow blue for several minutes before slowly fading back to darkness.",
    thumb: "/ideate/angler-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/angler.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 11,
    title: "Murmur Sphere",
    subtitle:
      "A heavy matte black ceramic orb resting in a brass cradle. Inside is a tiny speaker connected to a shortwave radio receiver locked to a random frequency. Hold it to your ear and hear fragments of distant broadcasts, number stations, and atmospheric noise from the other side of the world.",
    thumb: "/ideate/murmur-sphere-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/murmur-sphere.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 12,
    title: "Echo Coin",
    subtitle:
      "A heavy blackened copper disc with a contact microphone embedded in one face. Place it on any surface and it amplifies the inaudible vibrations of that object through a tiny speaker on the reverse side. Hear your wooden desk breathing, your bookshelf humming, your window trembling.",
    thumb: "/ideate/echo-coin-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/echo-coin.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 13,
    title: "Index Block",
    subtitle:
      "A cube of matte black aluminum containing one hundred tiny numbered drawers, each barely large enough for a rolled slip of paper. A physical database for your smallest thoughts and ideas. There is no search function. You must remember which drawer holds what.",
    thumb: "/ideate/index-block-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/index-block.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 14,
    title: "Palimpsest Board",
    subtitle:
      "A sheet of thermochromic film mounted on a matte black backing. Write on it with your fingertip and your words appear in white where body heat leaves a trace. The message fades completely within two minutes as the surface cools. A writing surface built for thoughts that should not last.",
    thumb: "/ideate/palimpsest-board-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/palimpsest-board.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 15,
    title: "Vessel",
    subtitle:
      "A hollow ceramic form shaped like an abstracted head, glazed in soot black with a single opening at the crown. Whisper a word into it and the interior geometry scatters the sound into unrecognizable fragments. A physical place to deposit a thought and hear it dissolve.",
    thumb: "/ideate/vessel-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/vessel.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 16,
    title: "Parallax Tile",
    subtitle:
      "A matte black wall tile with dozens of micro lenticular ridges across its surface that reveal a hidden image only when viewed from one specific angle. Walk past it every day and the image appears for exactly one step of your path, then vanishes completely.",
    thumb: "/ideate/parallax-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/parallax-tile.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 17,
    title: "Confessional",
    subtitle:
      "A small black walnut box with a brass grate on one side and a record button on top. Speak into the grate and the box captures your voice, but playback is permanently and irreversibly distorted. You hear the emotional shape of your own words without being able to understand them.",
    thumb: "/ideate/confessional-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/confessional.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 18,
    title: "Bloom Orb",
    subtitle:
      "A sealed glass sphere containing a supersaturated mineral solution. Drop a tiny seed crystal through the valve at the top and watch an intricate crystalline structure bloom outward over several hours, filling the entire orb. Dissolve it with warm water poured through the valve and grow a new one.",
    thumb: "/ideate/bloom-orb-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/bloom-orb.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 19,
    title: "Memory Drawer",
    subtitle:
      "A single drawer of blackened steel mounted to your wall with no cabinet around it. Inside is a felt lined compartment with a tiny embedded speaker. Record a ten second sound to the drawer. Every time you pull it open, the sound plays. A physical audio bookmark for a moment you want to revisit.",
    thumb: "/ideate/memory-drawer-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/memory-drawer.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 20,
    title: "Glyph Board",
    subtitle:
      "A matte black ceramic board with a grid of 64 raised dots that can each be pushed flush or popped out. Create tactile symbols and patterns by pressing combinations of dots. Leave silent physical messages on your desk for someone to discover by touch rather than sight.",
    thumb: "/ideate/glyph-board-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/glyph-board.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 21,
    title: "Pendulum Jar",
    subtitle:
      "A glass bell jar containing a brass pendulum that swings in response to micro vibrations in your building. Footsteps, closing doors, and passing traffic all influence its path. Over a full day it traces a unique pattern in fine black sand at the base. Smooth the sand each morning to reset.",
    thumb: "/ideate/pendulum-jar-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pendulum-jar.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 22,
    title: "Spoke Dial",
    subtitle:
      "A circular brass dial mounted on your wall with a single hand that points to one of twelve slots. Each slot holds a small printed card with a task, intention, or question you wrote. Spin the hand each morning and commit to whatever it lands on. Analog randomness for a digital life.",
    thumb: "/ideate/spoke-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/spoke-dial.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 23,
    title: "Lens Cube",
    subtitle:
      "A solid cube of optically clear resin with a tiny meaningful object permanently embedded at the center: a seed, a gear, an insect, a circuit board. Each face has a different optical distortion ground into it, so the same object looks completely different depending on which side you peer through.",
    thumb: "/ideate/lens-cube-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/lens-cube.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 24,
    title: "Archive Spool",
    subtitle:
      "A desktop spool of thermal paper connected to a tiny receipt printer that outputs one line of text per day, pulled from the public domain: a sentence from a forgotten book, a line from an expired patent, a weather report from 1923. The paper curls and accumulates on your desk like sediment.",
    thumb: "/ideate/archive-spool-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/archive-spool.webp",
    createdAt: "2026-03-30",
  },
  {
    id: 25,
    title: "Fault Line",
    subtitle:
      "A raw block of black granite deliberately cracked in half and repaired with molten brass poured into the fracture. Every block breaks along a different path so no two share the same scar. Inspired by the Japanese art of repairing with gold, but rendered in stone and metal for your desk or shelf.",
    thumb: "/ideate/fault-line-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/fault-line.webp",
    createdAt: "2026-03-30",
  },
];
