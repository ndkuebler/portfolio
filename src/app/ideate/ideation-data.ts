import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Tremor Pen",
    subtitle:
      "An obsidian pen holder with a built in seismograph needle that draws micro tremor patterns on a slowly rotating paper disc beneath it. Every vibration in your building, every footstep, every passing truck leaves a mark. At the end of each day the disc holds a unique drawing made entirely by the invisible motion of your environment.",
    thumb: "/ideate/tremor-pen-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tremor-pen.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 2,
    title: "Rift Lamp",
    subtitle:
      "A cracked basalt column about a foot tall with bioluminescent blue green algae growing inside the fractures. During the day it absorbs ambient light. At night the living organisms glow softly through the cracks, casting faint veins of light across your shelf. The glow shifts and pulses as the colony grows and responds to temperature.",
    thumb: "/ideate/rift-lamp-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/rift-lamp.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 3,
    title: "Ember Vault",
    subtitle:
      "A blackened steel box with a ceramic lined interior and a small electric heating element at the base. Write a thought, a regret, or a secret on a slip of paper, place it inside, and close the lid. The element slowly chars the paper to ash over the course of an hour. A ritual object for releasing things you need to let go of.",
    thumb: "/ideate/ember-vault-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ember-vault.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 4,
    title: "Gravity Well",
    subtitle:
      "A ferrofluid coated sphere that levitates silently above a concave matte black base using embedded rare earth magnets. The sphere rotates slowly on its own, and the ferrofluid surface ripples and spikes in response to any magnetic field changes nearby. Place a phone or magnet close and watch the surface distort into alien geometry.",
    thumb: "/ideate/gravity-well-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/gravity-well.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 5,
    title: "Storm Glass",
    subtitle:
      "A sealed glass cylinder on a brass stand filled with a solution of camphor, potassium nitrate, and ammonium chloride. The crystals inside form, dissolve, and reshape in response to atmospheric pressure and temperature changes, producing snowflake structures before storms and clear liquid on calm days. A 19th century weather prediction device revived as a desk object.",
    thumb: "/ideate/storm-glass-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/storm-glass.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 6,
    title: "Anchor Clock",
    subtitle:
      "A wall clock made of blackened steel where time is told by a miniature anchor chain. Instead of hands, a fine brass chain feeds link by link from a spool at the top, dropping through a slot at the 12 o'clock position. Each hour one link falls. By midnight the chain hangs at full length. Wind it back each morning to reset the day.",
    thumb: "/ideate/anchor-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/anchor-clock.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 7,
    title: "Moth Lantern",
    subtitle:
      "A blackened brass lantern with a UV LED at its center and panels of frosted glass on all four sides. Hang it outside your window at night and real moths are drawn to the light. Their silhouettes appear on the frosted glass like a living shadow puppet theater. Each night brings a different cast of visitors.",
    thumb: "/ideate/moth-lantern-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/moth-lantern.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 8,
    title: "Depth Map",
    subtitle:
      "A wall mounted topographic relief map carved from stacked layers of matte black acrylic, depicting the bathymetry of a real ocean floor location of your choosing. The Mariana Trench, the Mid Atlantic Ridge, or the continental shelf off your nearest coast. Each layer represents a depth contour, creating a physical three dimensional portrait of terrain no human has ever touched.",
    thumb: "/ideate/depth-map-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/depth-map.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 9,
    title: "Spore Clock",
    subtitle:
      "A wall clock sealed inside a glass terrarium dome where living moss slowly grows over the hour markers. When new, all twelve numbers are visible. Over weeks and months the moss colonizes the clock face, gradually obscuring the numbers until time becomes unreadable. A meditation on nature reclaiming human systems.",
    thumb: "/ideate/spore-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/spore-clock.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 10,
    title: "Pulse Stone",
    subtitle:
      "A smooth black river stone with a translucent amber resin vein running through its center. Inside the vein is a piezoelectric sensor and a warm LED. Hold the stone in your hand and the vein glows softly in time with your heartbeat, detected through the vibrations of your pulse against the surface. Set it down and it slowly fades to dark.",
    thumb: "/ideate/pulse-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pulse-stone.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 11,
    title: "Ink Tide",
    subtitle:
      "A shallow black ceramic tray filled with magnetic ferrofluid. Beneath the tray is a concealed magnet on a track. Slide your finger along the edge and the magnet follows, causing the ferrofluid to spike, ripple, and flow across the surface in mesmerizing black liquid formations. A desktop zen garden made of magnets and liquid metal.",
    thumb: "/ideate/ink-tide-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ink-tide.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 12,
    title: "Void Mirror",
    subtitle:
      "A circular concave mirror carved from polished obsidian and mounted in a patinated brass frame. The volcanic glass surface creates a dark, distorted reflection that warps and inverts your image. Lean in close and your face stretches into something unrecognizable. Step back and the room behind you bends. A mirror that shows you something other than yourself.",
    thumb: "/ideate/void-mirror-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/void-mirror.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 13,
    title: "Erosion Block",
    subtitle:
      "A block of dark sandstone mounted on a matte black base with a small brass water reservoir at the top. A valve releases a single drop of water every thirty seconds onto the same point on the stone surface. Over weeks and months the water carves a visible canyon into the block. A geological process compressed into a lifetime on your desk.",
    thumb: "/ideate/erosion-block-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/erosion-block.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 14,
    title: "Signal Flame",
    subtitle:
      "A blackened brass oil lamp where the flame height is controlled by a live data feed of your choosing. Connect it to a stock price, wind speed, website traffic, or temperature sensor and the flame rises and falls in real time. A physical, flickering visualization of invisible information burning on your shelf.",
    thumb: "/ideate/signal-flame-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/signal-flame.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 15,
    title: "Aurora Disc",
    subtitle:
      "A wall mounted frosted glass disc about twelve inches in diameter with RGB LEDs arranged behind it. Connected to live solar wind data from NOAA satellites, the disc recreates the colors and movement patterns of the aurora borealis in real time. When a geomagnetic storm hits, your wall glows green and violet. On quiet solar days it barely flickers.",
    thumb: "/ideate/aurora-disc-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/aurora-disc.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 16,
    title: "Grave Candle",
    subtitle:
      "A tall black taper candle with a solid brass skeleton key hidden inside, positioned vertically at the core. As the candle burns down over several evenings the wax slowly melts away and the key is gradually revealed. When the candle is finished the key remains, standing upright in the brass holder. What it unlocks is up to you.",
    thumb: "/ideate/grave-candle-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/grave-candle.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 17,
    title: "Wax Seal Station",
    subtitle:
      "A heated brass stamp with a configurable face made of removable brass pins, mounted beside a small cradle for melting sealing wax. Arrange the pins to create your own custom seal pattern, melt a stick of colored wax, and press your personal mark onto envelopes, journals, or packages. A ritual of authentication in an age of digital signatures.",
    thumb: "/ideate/wax-seal-station-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wax-seal-station.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 18,
    title: "Decay Frame",
    subtitle:
      "A matte black e ink photo frame that displays a single photograph of your choosing. Each day the image degrades slightly: pixels scatter, contrast fades, edges dissolve. Over the course of weeks the photo slowly disintegrates into static. Upload a new image to restart the cycle. A frame that forces you to watch a memory disappear.",
    thumb: "/ideate/decay-frame-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/decay-frame.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 19,
    title: "Smoke Letter",
    subtitle:
      "A blackened brass object shaped like a miniature mailbox with a hinged door and a small chimney. Place a cone of incense inside along with a slip of paper bearing a handwritten message. Close the door and light the incense through a vent. The message burns with the incense and the words leave as smoke through the chimney. A physical ritual for sending thoughts into the air.",
    thumb: "/ideate/smoke-letter-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/smoke-letter.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 20,
    title: "Latch Journal",
    subtitle:
      "A thick leather bound journal locked with a brass mechanical combination latch on the front cover. Small rotating numbered wheels like a vintage safe lock must be set to the correct code before the book will open. Each week a new combination is printed inside the back cover. A journal that demands a daily ritual of unlocking before you can write.",
    thumb: "/ideate/latch-journal-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/latch-journal.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 21,
    title: "Thread Loom",
    subtitle:
      "A small desktop weaving loom made of blackened steel and dark walnut, about the size of a tablet. Each day you weave one row using a colored thread that corresponds to your mood: deep blue for calm, red for intensity, gold for joy, gray for quiet. Over a year the loom produces a woven textile strip that is a physical record of 365 days of emotional data.",
    thumb: "/ideate/thread-loom-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/thread-loom.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 22,
    title: "Tide Dial",
    subtitle:
      "A wall mounted circular brass instrument with a single elegant needle that tracks real time ocean tide levels from a coastal monitoring station of your choosing. The dial face is matte black with engraved markings reading HIGH, RISING, LOW, and FALLING. The needle rises and falls throughout the day, connecting your inland room to a distant shoreline you may never visit.",
    thumb: "/ideate/tide-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tide-dial.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 23,
    title: "Fossil Clock",
    subtitle:
      "A functioning wall clock where the face is a polished cross section of petrified wood, millions of years old, showing ancient tree rings in shades of amber, brown, and dark gray. Minimalist blackened steel hands and hour markers are mounted directly on the stone surface. Modern quartz movement measuring seconds against geological time. Every glance at the hour is also a glance at deep history.",
    thumb: "/ideate/fossil-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/fossil-clock.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 24,
    title: "Magma Core",
    subtitle:
      "A sphere of dark volcanic obsidian glass split cleanly in half and mounted on a minimal brass stand. The outside is smooth pure black glass. The interior cavity is filled with crystallized bismuth displaying iridescent rainbow staircase formations in blues, purples, golds, and greens. The two halves sit slightly apart, revealing an alien geometry hidden inside absolute darkness.",
    thumb: "/ideate/magma-core-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/magma-core.webp",
    createdAt: "2026-04-01",
  },
  {
    id: 25,
    title: "Nocturne Box",
    subtitle:
      "A sealed cube of dark black walnut wood about five inches on each side with a circular frosted glass window on one face. Inside, a micro projector displays a real time star map of the night sky above your exact location, even during the day. Constellations drift slowly across the glass as the earth rotates. A pocket planetarium that never stops tracking the invisible stars overhead.",
    thumb: "/ideate/nocturne-box-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/nocturne-box.webp",
    createdAt: "2026-04-01",
  },
];

/* Cleared after batch 5 approval (5/25 approved: Tone Fossil, Phantom Dial, Cipher Cube, Angler, Memory Drawer)
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
]; */
