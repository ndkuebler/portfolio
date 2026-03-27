import type { Concept } from "@/app/concepts/concepts-data";

export type IdeationConcept = Concept & {
  id: number;
  createdAt: string; // ISO date, e.g. "2026-03-24"
};

export const IDEATION_CONCEPTS: IdeationConcept[] = [
  {
    id: 1,
    title: "Void Lens",
    subtitle:
      "A handheld monocle carved from obsidian glass that reveals hidden UV reactive patterns painted on everyday surfaces, turning any room into a secret gallery.",
    thumb: "/ideate/void-lens-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/void-lens.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 2,
    title: "Tide Stone",
    subtitle:
      "A smooth basalt desk stone with an embedded e-ink strip that displays the real time tide height of any coastline you choose, connecting your workspace to the ocean's rhythm.",
    thumb: "/ideate/tide-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/tide-stone.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 3,
    title: "Phase Dial",
    subtitle:
      "A wall mounted brass dial whose single hand rotates to show the current lunar phase, mechanically driven by a real time moon tracking module hidden in the housing.",
    thumb: "/ideate/phase-dial-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/phase-dial.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 4,
    title: "Nebula Jar",
    subtitle:
      "A sealed glass jar filled with a proprietary magnetic fluid that swirls into galaxy like formations when you wave your hand near it, creating a personal nebula on your shelf.",
    thumb: "/ideate/nebula-jar-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/nebula-jar.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 5,
    title: "Breath Stone",
    subtitle:
      "A palm sized volcanic stone that gently warms and cools in a four second breathing rhythm, guiding your inhale and exhale through temperature alone.",
    thumb: "/ideate/breath-stone-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/breath-stone.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 6,
    title: "Flux Panel",
    subtitle:
      "A wall panel made of thermochromic tiles that permanently shift color based on the room's ambient temperature, creating a living heat map of your space.",
    thumb: "/ideate/flux-panel-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/flux-panel.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 7,
    title: "Dusk Prism",
    subtitle:
      "A triangular crystal desk object that captures and refracts the exact color temperature of the current sky outside, projecting a live sunset or sunrise gradient onto your wall.",
    thumb: "/ideate/dusk-prism-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/dusk-prism.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 8,
    title: "Echo Well",
    subtitle:
      "A concave ceramic desk bowl that captures and replays the last 30 seconds of ambient sound when you tap its rim, letting you rewind a missed thought or conversation fragment.",
    thumb: "/ideate/echo-well-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/echo-well.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 9,
    title: "Ash Pendulum",
    subtitle:
      "A desktop pendulum encased in a glass cylinder filled with volcanic ash particles that trace the pendulum's path, creating ephemeral patterns that slowly settle and reset.",
    thumb: "/ideate/ash-pendulum-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ash-pendulum.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 10,
    title: "Aurora Slab",
    subtitle:
      "A thick slab of frosted acrylic with fiber optic threads woven through it that display real time aurora borealis activity data as shifting green and violet light patterns.",
    thumb: "/ideate/aurora-slab-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/aurora-slab.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 11,
    title: "Meridian Needle",
    subtitle:
      "A floating magnetic needle suspended in a glass dome that points toward the International Space Station's current position overhead instead of magnetic north.",
    thumb: "/ideate/meridian-needle-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/meridian-needle.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 12,
    title: "Soot Canvas",
    subtitle:
      "A matte black wall panel coated in a soot based surface that you draw on with your fingertip. Exposed areas glow faintly at night using phosphorescent pigment beneath the soot layer.",
    thumb: "/ideate/soot-canvas-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/soot-canvas.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 13,
    title: "Hollow Sun",
    subtitle:
      "A spherical desk lamp with a perforated shell that projects a constellation map of the night sky onto surrounding walls, rotating slowly to match Earth's actual rotation.",
    thumb: "/ideate/hollow-sun-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/hollow-sun.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 14,
    title: "Rain Drum",
    subtitle:
      "A shallow drum shaped desk object with a taut membrane surface. Internal mechanisms create the sound and visual ripple patterns of rainfall intensity from your chosen city in real time.",
    thumb: "/ideate/rain-drum-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/rain-drum.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 15,
    title: "Veil Screen",
    subtitle:
      "A freestanding desk screen made of layered translucent fabric panels that shift opacity based on your focus state, detected through a small biometric sensor on its base.",
    thumb: "/ideate/veil-screen-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/veil-screen.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 16,
    title: "Root Core",
    subtitle:
      "A transparent resin cylinder containing a living air plant whose root system is illuminated from below, revealing growth patterns that change over weeks and months on your desk.",
    thumb: "/ideate/root-core-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/root-core.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 17,
    title: "Solstice Band",
    subtitle:
      "A wall mounted curved metal band that catches a sliver of sunlight through a tiny aperture, projecting a bright dot that moves along the band's length to mark the progression of each solstice and equinox.",
    thumb: "/ideate/solstice-band-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/solstice-band.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 18,
    title: "Pulse Fossil",
    subtitle:
      "A polished stone disc embedded with LED veins that pulse in sync with your heartbeat when you rest your thumb on its surface, turning biometric data into a living fossil.",
    thumb: "/ideate/pulse-fossil-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/pulse-fossil.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 19,
    title: "Canopy Lamp",
    subtitle:
      "A desk lamp shaped like a single ginkgo leaf that adjusts its light filtering based on real forest canopy density data, simulating dappled sunlight through a living canopy.",
    thumb: "/ideate/canopy-lamp-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/canopy-lamp.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 20,
    title: "Frost Tile",
    subtitle:
      "A small e-ink desk tile that generates unique frost crystal patterns based on real time humidity and temperature data, growing and melting digital ice formations throughout the day.",
    thumb: "/ideate/frost-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/frost-tile.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 21,
    title: "Wake Glass",
    subtitle:
      "A dark glass sphere that gradually fogs and clears internally in sync with real coastal fog conditions from a chosen harbor, bringing distant weather phenomena to your desk.",
    thumb: "/ideate/wake-glass-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/wake-glass.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 22,
    title: "Ember Block",
    subtitle:
      "A charred oak desk piece with embedded micro LEDs that glow like embers through the wood's natural cracks, pulsing in rhythm with your biometric stress levels to encourage calm.",
    thumb: "/ideate/ember-block-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/ember-block.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 23,
    title: "Murmur Cube",
    subtitle:
      "A matte black rubber cube that converts live seismic activity data from any tectonic region into subtle desk vibrations, letting you feel the Earth's tremors in real time.",
    thumb: "/ideate/murmur-cube-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/murmur-cube.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 24,
    title: "Loom Tile",
    subtitle:
      "A walnut framed wall tile with mechanically actuated white threads that shift and weave into topographic patterns driven by live data feeds like stock prices, wind speed, or social sentiment.",
    thumb: "/ideate/loom-tile-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/loom-tile.webp",
    createdAt: "2026-03-27",
  },
  {
    id: 25,
    title: "Depth Glass",
    subtitle:
      "A thick block of deep blue tinted glass with internal bioluminescent LEDs that visualize real time ocean depth and marine activity data, shifting from sunlit surface glow to abyssal darkness.",
    thumb: "/ideate/depth-glass-thumb.webp",
    mediaType: "image",
    mediaSrc: "/ideate/depth-glass.webp",
    createdAt: "2026-03-27",
  },
];
