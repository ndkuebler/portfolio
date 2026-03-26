import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Pulse Coaster",
    subtitle:
      "A drink coaster with a built-in heart rate sensor. Place your finger on it and it pulses a soft LED ring in sync with your heartbeat — calming you down in real time.",
    thumb: "/ideate/pulse-coaster-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pulse-coaster.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 2,
    title: "Memory Marble",
    subtitle:
      "A hand-blown glass marble with a tiny embedded NFC chip. Tap it to your phone to replay a saved voice memo, song, or photo — a physical bookmark for a digital memory.",
    thumb: "/ideate/memory-marble-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/memory-marble.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 3,
    title: "Gravity Lamp",
    subtitle:
      "A desk lamp with no switch. A floating brushed-aluminum head hovers above a magnetic base — push it down to dim, pull it up to brighten.",
    thumb: "/ideate/gravity-lamp-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/gravity-lamp.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 4,
    title: "Breath Tile",
    subtitle:
      "Ceramic wall tiles with micro-pneumatic bladders beneath soft silicone skin. They subtly expand and contract in a slow breathing rhythm, making your wall feel alive.",
    thumb: "/ideate/breath-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/breath-tile.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 5,
    title: "Shadow Clock",
    subtitle:
      "A minimalist wall clock with no hands or numbers. A single pin and a hidden rotating LED ring cast a shadow that tells the time.",
    thumb: "/ideate/shadow-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/shadow-clock.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 6,
    title: "Taste Ring",
    subtitle:
      "A sleek silicone ring with micro-flavor capsules in the inner band. Bite it to release a burst of espresso, mint, or citrus — flavor on demand, no calories.",
    thumb: "/ideate/taste-ring-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/taste-ring.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 7,
    title: "Rescue Reel",
    subtitle:
      "A keychain-sized auto-retracting spool holding 30 feet of ultra-thin Dyneema rescue line rated at 500 lbs. One-thumb deploy, anodized titanium shell.",
    thumb: "/ideate/rescue-reel-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/rescue-reel.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 8,
    title: "Echo Sneaker",
    subtitle:
      "Shoes with bone-conduction speakers in the sole and an ambient mic array. Walk through a forest, then replay the birdsong later at your desk.",
    thumb: "/ideate/echo-sneaker-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/echo-sneaker.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 9,
    title: "Thermal Portrait",
    subtitle:
      "An e-ink picture frame that displays real-time thermal camera imagery of the room, turning everyday scenes into glowing heat-signature art.",
    thumb: "/ideate/thermal-portrait-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/thermal-portrait.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 10,
    title: "Drift Globe",
    subtitle:
      "A desk globe that spins driven by live global wind data — faster winds spin it faster. Thin LED trails glow across the surface showing real-time jet streams.",
    thumb: "/ideate/drift-globe-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/drift-globe.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 11,
    title: "Tidal Vase",
    subtitle:
      "A glass vase with an internal motorized water-level mechanism synced to real ocean tide data. The water inside rises and falls throughout the day, bringing the rhythm of the sea indoors.",
    thumb: "/ideate/tidal-vase-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tidal-vase.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 12,
    title: "Ember Mug Ring",
    subtitle:
      "A ceramic ring that clips onto any mug and uses induction heating to keep your drink at the perfect temperature. Powered wirelessly by a slim charging coaster.",
    thumb: "/ideate/ember-mug-ring-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ember-mug-ring.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 13,
    title: "Prism Speaker",
    subtitle:
      "A triangular prism Bluetooth speaker made of frosted glass. Sound radiates omnidirectionally while internal LEDs shift color in response to the music's frequency spectrum.",
    thumb: "/ideate/prism-speaker-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/prism-speaker.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 14,
    title: "Loom Chair",
    subtitle:
      "A lounge chair with a 3D-printed bioplastic woven seat that adapts to your body shape over time. The lattice structure flexes where you need it most.",
    thumb: "/ideate/loom-chair-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/loom-chair.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 15,
    title: "Halo Headphones",
    subtitle:
      "Over-ear headphones with translucent ear cups and a glowing equalizer ring that pulses with your music. The light intensity adjusts to ambient brightness.",
    thumb: "/ideate/halo-headphones-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/halo-headphones.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 16,
    title: "Nebula Projector",
    subtitle:
      "A palm-sized orb that projects swirling nebula patterns onto your ceiling using micro-laser optics. Rotate the orb to shift between constellations and deep-space scenes.",
    thumb: "/ideate/nebula-projector-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/nebula-projector.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 17,
    title: "Kinetic Pen",
    subtitle:
      "A ballpoint pen with an internal flywheel that spins up when you click it. Set it on a desk and it stands upright on its tip, gyroscopically balanced.",
    thumb: "/ideate/kinetic-pen-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/kinetic-pen.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 18,
    title: "Moss Terrarium Speaker",
    subtitle:
      "A living moss terrarium sealed in a glass dome that doubles as a Bluetooth speaker. Sound vibrations keep the moss healthy while delivering rich, warm audio.",
    thumb: "/ideate/moss-speaker-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/moss-speaker.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 19,
    title: "Arc Bottle",
    subtitle:
      "A stainless steel water bottle with a built-in UV-C sterilization arc in the cap. Press the button and a visible violet arc sweeps through the water, purifying it in seconds.",
    thumb: "/ideate/arc-bottle-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/arc-bottle.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 20,
    title: "Horizon Shelf",
    subtitle:
      "A floating wall shelf with an edge-lit LED strip that casts a gradient glow downward — warm amber at sunset, cool blue at dawn — synced to your local horizon times.",
    thumb: "/ideate/horizon-shelf-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/horizon-shelf.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 21,
    title: "Wave Tray",
    subtitle:
      "A desk organizer with a mathematically generated wave surface carved from solid walnut. Pens, clips, and cards nestle into the troughs of a frozen sine wave.",
    thumb: "/ideate/wave-tray-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wave-tray.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 22,
    title: "Phase Mirror",
    subtitle:
      "A circular wall mirror with electrochromic glass. At a voice command the reflective surface fades to transparent, revealing a minimal analog clock behind it.",
    thumb: "/ideate/phase-mirror-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/phase-mirror.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 23,
    title: "Filament Lamp",
    subtitle:
      "A table lamp with no shade — instead, an abstract glowing filament sculpture floats inside a hand-blown glass dome, casting warm organic shadows across the room.",
    thumb: "/ideate/filament-lamp-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/filament-lamp.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 24,
    title: "Tide Pool Table",
    subtitle:
      "A side table with a clear resin top encasing a miniature tide pool scene — tiny shells, sea glass, and sand permanently suspended in crystal-clear epoxy.",
    thumb: "/ideate/tide-pool-table-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tide-pool-table.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 25,
    title: "Geo Planter",
    subtitle:
      "A geometric faceted concrete planter with inlaid brass drainage channels visible on the surface. Each facet catches light differently, making the planter shift appearance throughout the day.",
    thumb: "/ideate/geo-planter-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/geo-planter.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 26,
    title: "Ripple Coaster Set",
    subtitle:
      "A set of stone coasters with concentric ripple rings on the surface. When placed side by side the ripple patterns interlock, forming a continuous wave across the group.",
    thumb: "/ideate/ripple-coaster-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ripple-coaster.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 27,
    title: "Aurum Stylus",
    subtitle:
      "A precision stylus machined from solid bronze with a magnetic cap and a sapphire-tipped nib. Weighted for perfect balance, it doubles as a elegant desk sculpture.",
    thumb: "/ideate/aurum-stylus-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/aurum-stylus.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 28,
    title: "Cloud Humidifier",
    subtitle:
      "A magnetically suspended cloud-shaped humidifier that floats above a walnut base. Ultrasonic mist drifts downward from the cloud, creating a surreal miniature weather system on your desk.",
    thumb: "/ideate/cloud-humidifier-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cloud-humidifier.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 29,
    title: "Spine Bookend",
    subtitle:
      "A bookend shaped like a curved section of a human spine, cast in brushed stainless steel. Anatomically accurate and surprisingly functional — vertebrae grip book spines securely.",
    thumb: "/ideate/spine-bookend-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/spine-bookend.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 30,
    title: "Sol Charger",
    subtitle:
      "A wireless phone charger shaped like a miniature sun with corona-like rays, made of brushed gold aluminum. An amber LED glow pulses gently while charging, fading when complete.",
    thumb: "/ideate/sol-charger-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/sol-charger.webp",
    createdAt: "2026-03-24",
  },
  {
    id: 31,
    title: "Anchor Tag",
    subtitle:
      "A titanium carabiner keychain with an embedded NFC chip and GPS tracker. Clip it to anything — bags, keys, pets — and locate it from your phone. The carabiner doubles as a bottle opener with a chamfered edge.",
    thumb: "/ideate/anchor-tag-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/anchor-tag.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 32,
    title: "Sonar Tumbler",
    subtitle:
      "A matte black insulated tumbler with an ultrasonic sensor ring at the base. It measures liquid level and temperature, displaying them as glowing blue LED dots on the surface. Knows when you need a refill.",
    thumb: "/ideate/sonar-tumbler-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/sonar-tumbler.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 33,
    title: "Vein Wallet",
    subtitle:
      "A slim bifold wallet made from lab-grown vascularized leather. The surface has visible branching vein-like channels with embedded fiber-optic threads that glow faintly amber — organic yet futuristic.",
    thumb: "/ideate/vein-wallet-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/vein-wallet.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 34,
    title: "Seismic Sandal",
    subtitle:
      "A futuristic sport sandal with a translucent sole containing visible piezoelectric energy-harvesting cells. Every step generates power — the hexagonal cells glow faintly orange when compressed.",
    thumb: "/ideate/seismic-sandal-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/seismic-sandal.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 35,
    title: "Spore Diffuser",
    subtitle:
      "A mushroom-shaped essential oil diffuser made of matte white ceramic. The cap has tiny Voronoi perforations through which vapor escapes, lit from within by a warm amber glow. Touch the stem to dim.",
    thumb: "/ideate/spore-diffuser-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/spore-diffuser.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 36,
    title: "Beacon Tile",
    subtitle:
      "A hexagonal smart floor tile made of frosted glass over an LED matrix. It displays glowing directional arrows to create illuminated pathways through your home at night. Brushed aluminum edges.",
    thumb: "/ideate/beacon-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/beacon-tile.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 37,
    title: "Cryo Cup",
    subtitle:
      "A double-walled borosilicate glass cup with a sealed chamber of phase-change cooling gel between the walls. The gel turns from clear to icy blue when frozen, keeping drinks cold for hours without ice.",
    thumb: "/ideate/cryo-cup-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/cryo-cup.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 38,
    title: "Reef Brick",
    subtitle:
      "A modular 3D-printed coral reef restoration block made of marine-grade calcium carbonate. Its intricate branching lattice structure provides cavities for marine life to colonize and rebuild ocean ecosystems.",
    thumb: "/ideate/reef-brick-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/reef-brick.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 39,
    title: "Warp Mirror",
    subtitle:
      "A circular vanity mirror with a flexible OLED display ring around the edge showing a subtle animated wormhole effect in deep purple and cyan. The convex mirror sits on a weighted matte black disc base.",
    thumb: "/ideate/warp-mirror-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/warp-mirror.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 40,
    title: "Sine Headband",
    subtitle:
      "A slim athletic headband with embedded EEG sensors and a thin flexible OLED strip that displays your real-time brainwave pattern in soft green light. Titanium sensor contacts, breathable black mesh.",
    thumb: "/ideate/sine-headband-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/sine-headband.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 41,
    title: "Glyph Ring",
    subtitle:
      "A wide band ring of black zirconium with deeply engraved geometric glyphs filled with photoluminescent resin. In the dark, the ancient-looking symbols glow an ethereal teal-green.",
    thumb: "/ideate/glyph-ring-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/glyph-ring.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 42,
    title: "Ferro Clock",
    subtitle:
      "A desk clock that tells time using ferrofluid. A sealed glass arc tube contains magnetic fluid that forms spiky peaks at the hour and minute positions, controlled by hidden electromagnets beneath a walnut base.",
    thumb: "/ideate/ferro-clock-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ferro-clock.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 43,
    title: "Aero Tile",
    subtitle:
      "A wall-mounted acoustic panel shaped like an airfoil cross-section. Made of recycled PET felt in charcoal grey with ribbed texture inspired by aircraft wings. An integrated LED strip casts indirect light upward.",
    thumb: "/ideate/aero-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/aero-tile.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 44,
    title: "Phantom Doorbell",
    subtitle:
      "A flush-mount smart doorbell with no visible button. The matte black aluminum face has a ghost handprint outline that glows softly white when someone approaches, inviting a touch. Camera hidden in the palm.",
    thumb: "/ideate/phantom-doorbell-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/phantom-doorbell.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 45,
    title: "Root Lamp",
    subtitle:
      "A table lamp whose base is a tangle of sculptural cast bronze roots emerging from a raw-edge slate platform. The roots climb upward to cradle a frosted glass orb glowing warm white. Dark patina with verdigris hints.",
    thumb: "/ideate/root-lamp-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/root-lamp.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 46,
    title: "Pulse Bracelet",
    subtitle:
      "A slim matte black silicone wrist cuff with an embedded strip of micro-LEDs along the outer edge. The LEDs display a continuous heartbeat pulse wave in soft red light. Magnetic brushed steel clasp.",
    thumb: "/ideate/pulse-bracelet-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pulse-bracelet.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 47,
    title: "Prism Key",
    subtitle:
      "A house key with a bow made of transparent optical-grade acrylic with prismatic facets that cast rainbow refractions when light hits. The functional stainless steel blade is seamlessly bonded to the crystal head.",
    thumb: "/ideate/prism-key-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/prism-key.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 48,
    title: "Strata Table",
    subtitle:
      "A side table whose top is a cross-section of geological strata — layers of resin in earth tones with thin veins of crushed stone and gold leaf between them. Slim matte black steel hairpin legs.",
    thumb: "/ideate/strata-table-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/strata-table.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 49,
    title: "Thermal Pen",
    subtitle:
      "A ballpoint pen with a thermochromic body that shifts color based on your hand temperature — from deep navy through purple to warm copper. Machined aluminum click mechanism and matte black clip.",
    thumb: "/ideate/thermal-pen-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/thermal-pen.webp",
    createdAt: "2026-03-25",
  },
  {
    id: 50,
    title: "Echo Stone",
    subtitle:
      "A smooth river-stone-shaped Bluetooth speaker carved from solid basalt. One side has a polished concave surface acting as a passive acoustic amplifier. A warm LED ring glows from a seam around the middle.",
    thumb: "/ideate/echo-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/echo-stone.webp",
    createdAt: "2026-03-25",
  },
];
