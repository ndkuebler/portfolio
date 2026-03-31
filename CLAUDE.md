# Portfolio Project Instructions

## Concept Generation Rules

- Never use em dashes, en dashes, or hyphens as punctuation separators in concept descriptions. Restructure sentences instead.
- Concepts go into `src/app/ideate/ideation-data.ts` as entries in the `IDEATION_CONCEPTS` array.
- Each concept needs: id, title, subtitle, thumb, mediaType, mediaSrc, createdAt.
- Thumbnail images go in `public/ideate/` as webp files.

## Ideation Batch Workflow

1. Generate concepts into `src/app/ideate/ideation-data.ts`
2. Nick reviews on mobile at `nkuebler.com/ideate?key=nk2026`
3. Nick sends back approved numbers (e.g. "approved: 2-5-9-10")
4. Approved concepts get added to `src/app/approved/approved-data.ts` (self-contained, does NOT import from ideation-data)
5. Ideation data gets cleared (empty the array) for the next batch
6. Never touch approved-data.ts when clearing ideation data

## Nick's Concept Taste Profile (16/114 approved across 5 batches)

### What he likes
- Objects that blend physical and digital in a subtle, poetic way
- Time/nature-connected products (shadow, wind, tides, horizon)
- Dark/moody materials (black zirconium, walnut, matte, basalt, soot, blackened brass/steel)
- Products with a sense of quiet magic (floating, glowing, magnets, ferrofluid, bioluminescence)
- Desk/shelf/wall objects over wearables or kitchen items
- Tactile interaction (hand wave, fingertip drawing, touch, spinning dials)
- Real world data made physical (tides, wind, aurora, ocean)
- Sound/voice preservation concepts (waveform fossils, archived voicemails, audio drawers)
- Puzzle/secret/mystery objects (cipher cubes, hidden messages, locked journals)
- Ritual objects with daily/weekly cadence (burn vaults, latch journals, thread looms)
- Living/organic elements (bioluminescent organisms, crystal growth)

### What he passes on
- Pure wearables (rings, headbands, bracelets, sandals)
- Purely decorative items without an interactive element
- Overly gadget-y or utilitarian products (rescue tools, trackers, chargers)
- Furniture pieces (chairs, tables)
- Biometric/wellness products (breath guides, stress monitors, focus sensors)
- Handheld tools or monocle-type devices
- Most lamps (unless very unique concept)
- Braille/tactile messaging boards
- Receipt printers and archive output devices
- Items too similar to existing approved concepts (e.g. another pendulum, another orb)

### Approved concepts
- Batch 1: Memory Marble, Shadow Clock, Thermal Portrait, Drift Globe, Horizon Shelf, Cloud Humidifier, Glyph Ring, Ferro Clock
- Batch 2: Tide Stone, Nebula Jar, Soot Canvas
- Batch 3: (no approvals)
- Batch 4: (no approvals)
- Batch 5: Tone Fossil, Phantom Dial, Cipher Cube, Angler, Memory Drawer

## Deployment

- Hosted on Vercel, auto-deploys from `main` branch
- Push to GitHub triggers deploy to nkuebler.com
- Cowork VM cannot push to GitHub directly — Nick pushes from local machine via Claude Code
