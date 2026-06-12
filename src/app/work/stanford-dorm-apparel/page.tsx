import { BackButton } from "@/components/BackButton";

export const metadata = {
  title: "Stanford Dorm Apparel · Nick Kuebler",
  description:
    "A zip-up hoodie designed for the residents of Norcliffe and Adelfa, distributed to all 157 students across both houses.",
};

export default function StanfordDormApparelPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem] bg-black">
        <img
          src="/work/dorm-apparel-8.jpg"
          alt="Nick wearing the Norcliffe and Adelfa zip-up hoodie on the Memorial Auditorium stairs"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton slug="stanford-dorm-apparel" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                Stanford Dorm Apparel
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A zip-up hoodie designed for the residents of Norcliffe and
                Adelfa, the two Lagunita Court houses on West Campus.
                Distributed to all 157 students across both houses in June
                2026.
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">
                  Date
                </p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">
                  Designed 2026, distributed June 2026
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">
                  Role
                </p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Sole Designer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">
                  Theme
                </p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">
                  Avatar: The Last Airbender
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE IDEA ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The idea
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            The dorm theme for the year was Avatar: The Last Airbender. The
            design constraint was to reference both houses and the four elements
            inside one piece that residents would actually want to wear in
            everyday life. The brief I gave myself was minimalist. Recognizable
            up close, neutral from across a room.
          </p>
        </div>
      </section>

      {/* ===== THE FRONT ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The front
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
            A two line wordmark, NORCLIFFE & ADELFA stacked above 2025-2026.
            Both names are embroidered in the deep blue that anchors the piece.
            Four letters in each name are stitched in a different color, one for
            each of the four nations. The detail rewards a closer look. From a
            distance the wordmark reads like a clean serif lockup.
          </p>
          <img
            loading="lazy"
            src="/work/dorm-apparel-1.jpg"
            alt="Close-up of the embroidered NORCLIFFE & ADELFA wordmark with four letters in each name colored for the four elements"
            className="w-full max-h-[80vh] object-contain rounded-xl bg-[#0a0a0a]"
          />
        </div>
      </section>

      {/* ===== THE BACK ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The back
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
            The back carries a small four panel emblem that combines the
            elements into a single mark. Water as a wave, earth as a mountain,
            air as a curl, fire as a flame. Each one drawn down to its most
            recognizable line so the whole thing reads as one shape at a glance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              loading="lazy"
              src="/work/dorm-apparel-6.jpg"
              alt="Back of the hoodie showing the four element emblem with Stanford CARD signage behind"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
            <img
              loading="lazy"
              src="/work/dorm-apparel-4.jpg"
              alt="Closer back angle showing the four element emblem"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
          </div>
        </div>
      </section>

      {/* ===== SCALE ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Distribution
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                157
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Hoodies distributed across both houses.
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                109
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Residents of Norcliffe.
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                48
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Residents of Adelfa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            On campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              loading="lazy"
              src="/work/dorm-apparel-5.jpg"
              alt="Back of the hoodie against Stanford CARDINAL signage"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
            <img
              loading="lazy"
              src="/work/dorm-apparel-2.jpg"
              alt="Walking up a stairwell in the hoodie"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
            <img
              loading="lazy"
              src="/work/dorm-apparel-3.jpg"
              alt="Hoodie at the top of the stairs"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
            <img
              loading="lazy"
              src="/work/dorm-apparel-7.jpg"
              alt="Seated on the red stairs in the hoodie"
              className="w-full h-auto object-cover rounded-xl bg-[#0a0a0a]"
            />
          </div>
        </div>
      </section>

      {/* ===== ITERATION (PLACEHOLDER) ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Iteration
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            Sketches and the early letter color exploration are coming soon.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM BACK ===== */}
      <section className="bg-[#0a0a0a] flex justify-center pb-8">
        <BackButton slug="stanford-dorm-apparel" />
      </section>
    </main>
  );
}
