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
- Local dev: `npm run dev` on port 3000. Watch for other Next apps holding the port (Nick has a `Level Set` project that also uses 3000); kill stale `next dev` processes and remove `.next/dev/lock` if startup fails.

## Writing Style

- Avoid em dashes, en dashes, and hyphens as punctuation separators in any user-facing copy (project descriptions, captions, tooltips, page text). Restructure the sentence instead. Grammatical hyphens inside compound words like "back-of-hand" are fine.
- Keep copy minimal and professional. Lead with the problem before the fix.
- Always capitalize V1 / V2 in all user-facing text (project pages, alt attributes). File paths can stay lowercase.

## Project Pages

Each project has its own folder under `src/app/work/<slug>/page.tsx`:
- `air-dj`, `watershield`, `ringallets`, `marble-launcher`
- There is also a fallback `[slug]/page.tsx` (rarely touched).

### Per-page conventions
- **Top BackButton**: `<BackButton slug="<this-project>" />` near the top of the project info section.
- **Bottom CTAs**: a centered row at the very end of `<main>` with the BackButton and (where applicable) a "View case study" link to the showcase page.
- The `BackButton` component (`src/components/BackButton.tsx`) accepts an optional `slug` prop and routes to `/#work-<slug>` so the home page lands on the originating card.

### `/work` layout (`src/app/work/layout.tsx`)
- Client component that resets scroll instantly on every project navigation (overrides the global `scroll-behavior: smooth` so the page never visibly animates to the top).
- Air DJ specifically: on desktop only (`window.innerWidth >= 640`), scrolls so the bottom of the project info section sits near the viewport bottom — keeps "Air DJ" + the role list visible while hiding "The idea". Mobile and other projects land at scrollY=0.
- Air DJ's project info section must keep `id="project-info"` for this calculation.

## Selected Works (Home Page)

`src/components/SelectedWorks.tsx` renders the sticky stacked cards from `src/data/works.ts`.

### Sticky card layout
- Container is `position: relative` with `height: works.length * cardVh` (vh).
- Cards are `position: sticky; top: 4.5rem`. Each card has `height: cardCss` (mobile `78vh`, desktop `calc(100vh - 80px)`).
- Each card has `id={`work-${slug}`}` and `scrollMarginTop: 4.5rem`.

### Hash navigation quirk (do not undo)
Browsers report the same `offsetTop` for every stacked sticky card — `scrollIntoView` and offsetTop chains both land on the wrong card. The hash effect inside `SelectedWorks` works around this by:
1. Reading the `#work-<slug>` hash
2. Looking up the card index in `works`
3. Walking the **container's** offsetTop chain (the `<div className="relative">`, not the card itself)
4. Adding `index * cardHeight - 72 + 8` (the +8 keeps us inside the card's sticky range, away from the boundary with the next card)

If you change the SelectedWorks JSX, make sure the hash effect's container reference (`firstCard.parentElement`) still points at the cards container.

### "View project" pill
- Centered in the left column on desktop (`md:flex md:w-2/5 items-center justify-center`)
- Filled white with black text. Border swaps to gold (`#d4af37`) on **direct** hover (use `hover:`, NOT `group-hover:`, since the whole card is the link group)

## Air DJ Hero Player (`src/components/AirDjHero.tsx`)

Custom video player replacing native controls. Apple-minimal style.

### Layout
- Hairline timeline (h-[3px], grows to h-[5px] on group hover) with a white progress fill
- Gold (`#d4af37`) marker dots positioned at `(time / duration) * 100%`
- Custom play/pause, current time / duration, mute, fullscreen buttons
- "Turn sound on for the full experience" hint chip is at `bottom-[28%]` and **must keep `z-20`** so it sits above the controls overlay (`z-10`); without it the click is intercepted on mobile.

### Marker tooltips
- Auto-show for 1s when playback crosses a marker (`AUTO_TOOLTIP_MS`, `CROSSING_TOLERANCE = 0.25s`)
- Hover/focus shows tooltip indefinitely
- Click on dot seeks to that timestamp
- Tooltip alignment auto-adjusts based on left% (left-aligned if <12%, right-aligned if >88%, centered otherwise) so labels never clip off the viewport edges
- Loop / seek-back resets the "crossed" set so markers retrigger on subsequent passes

### Current MARKERS
Edit the `MARKERS` array in the component. Times are in seconds, fractional values OK.

```ts
{ time: 0,    label: "Pinch to play (Deck A)" },
{ time: 1,    label: "Back-of-hand lift controls volume" },
{ time: 8,    label: "Pinch to play (Deck B)" },
{ time: 9.25, label: "Cross fingers and drag across for crossfader" },
{ time: 21,   label: "Pinch again to stop (Deck A)" },
{ time: 25,   label: "Thumb three toggles the vocals off" },
{ time: 26.8, label: "Thumb three toggles the vocals back on" },
{ time: 30,   label: "Thumb three toggles the instrumental off" },
{ time: 31.5, label: "Thumb three toggles the instrumental back on" },
```

The `formatTime` helper truncates to whole seconds in display, so `31.5` renders as `0:31` in aria labels.

## Showcase Pages (Static)

Static HTML lives under `public/showcase-1/` (Ringallets) and `public/showcase-2/` (WaterShield), each with `process/` and `analysis/` subdirectories.

URL conventions (clean URLs work on Vercel; for local dev append `/index.html`):
- Ringallets case study root → `/showcase-1` (process tab is the default landing)
- WaterShield case study process → `/showcase-2/process`
- WaterShield root `/showcase-2` redirects to `/showcase-2/process`

Buttons that link to these are `<a target="_blank" rel="noopener noreferrer">` placed next to the bottom BackButton on the corresponding project page. Dev server (`next dev`) returns 404 for the clean URLs — that's expected; Vercel serves them correctly.

## Watershield V2 Section

`src/app/work/watershield/page.tsx` has a `V2 — Metal D-shaft assembly` section between the Demo and the "What I did + Takeaways" sections. It contains:
- Two body paragraphs (the snap-fix and the slide-on attachment improvements)
- A subheader `Attachment improvements` introducing the second paragraph
- One full-width hero image (`watershield-v2-1.jpg`) followed by two side-by-side images (`-2.jpg`, `-3.jpg`)
- Two side-by-side portrait demo videos in a `max-w-[800px]` container with `max-h-[60vh] object-contain` (constrained because the source clips are 1080x1920 portrait)
- A small caption below the videos: "Comparison of the WaterShield on the board (front wheels versus back wheels)."
- `watershield-v2-demo1.mp4` is trimmed to start 3s into the original capture.

## Layout / Footer

- Root `src/app/layout.tsx` body uses `flex flex-col min-h-screen`. The single scroll wrapper is `<div className="overflow-visible pt-[4.5rem]">` — do not nest another scroll container inside; sticky positioning relies on `<html>` being the scrollport.
- Navbar: `h-[4.5rem]` (72px) with `border-b border-[#f5f5f5]/[0.06]` — the sticky card top offset (`4.5rem`) intentionally matches so the card border and navbar border collapse into a single line.
- Global CSS keeps `scroll-behavior: smooth` for in-page anchor links. Project pages override this with explicit `behavior: "instant"` scrolls in the work layout.
