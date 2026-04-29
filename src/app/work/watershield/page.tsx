import { BackButton } from "@/components/BackButton";

export default function WaterShieldPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO IMAGE — full bleed ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem]">
        <img
          src="/work/watershieldbbg.webp"
          alt="WaterShield"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO — two column ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton slug="watershield" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* Left — title + description */}
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                WaterShield
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A longboard wheel &ldquo;fender&rdquo; attachment designed to prevent water
                from spraying up onto the rider in wet conditions.
              </p>
            </div>

            {/* Right — metadata */}
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Date</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2024</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Role</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Product Design</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Prototyping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Problem
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            Riding a longboard in the rain quickly soaks the rider because the wheels kick
            water upward. Existing solutions were either bulky, not designed for longboards,
            or inconvenient to install/remove.
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Solution
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            WaterShield is a compact, attachable wheel cover that blocks splash-up at the
            source. The design focuses on a secure mount, simple installation, and a form
            factor that fits common longboard setups without getting in the way of riding.
          </p>
        </div>
      </section>

      {/* ===== DESIGN DEVELOPMENT ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Design Development
          </h2>

          {/* Full-width first prototype */}
          <img
            src="/work/wsprototypev1.webp"
            alt="First iteration prototype"
            className="w-full max-h-[80vh] object-contain rounded-xl"
          />
          <p className="mt-4 text-sm text-[#f5f5f5]/50 max-w-[600px]">
            First iteration prototype — 3 objectives: arch over the wheel, attach using
            existing mounting hardware, and clear the wheel during sharp turns.
          </p>

          {/* Two-column: prototype photo + design iteration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div>
              <img
                src="/work/wsprototypev1pic.webp"
                alt="Prototype looked too bulky"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-4 text-sm text-[#f5f5f5]/50">
                Prototype looked too bulky and reminded me of a door stopper.
              </p>
            </div>
            <div>
              <img
                src="/work/watershield-design.webp"
                alt="WaterShield design development"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-4 text-sm text-[#f5f5f5]/50">
                Sleeker model with a wider arch to catch the upsplash at the frontmost
                part of the wheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTING ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Testing
          </h2>

          {/* Two-column testing photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="/work/watershield-testing1-new.webp"
                alt="WaterShield testing"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-4 text-sm text-[#f5f5f5]/50">
                Real-world testing to validate fit, clearance, and durability.
              </p>
            </div>
            <div>
              <img
                src="/work/watershield-testing2.webp"
                alt="WaterShield splash testing"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-4 text-sm text-[#f5f5f5]/50">
                Observing splash reduction under wet riding conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEMO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Demo
          </h2>

          <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08]">
            <video
              src="/work/watershield-demo.mp4#t=25"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto bg-black"
            />
          </div>
          <p className="mt-4 text-sm text-[#f5f5f5]/50">
            WaterShield in motion, demonstrating real-time splash reduction.
          </p>
        </div>
      </section>

      {/* ===== V2: METAL D-SHAFT ASSEMBLY ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            V2 — Metal D-shaft assembly
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            The V1 demo works for normal riding, but the single 3D-printed center
            piece could snap when the board hit a sharp impact like a curb edge.
            V2 splits that center into two parts joined by metal D-shafts: a base
            that bolts to the truck and an arc that slides onto the shafts. The
            shaft takes the impact load instead of the print, so the part survives
            the bumps a longboard is meant to handle.
          </p>
          <img
            src="/work/watershield-v2-1.jpg"
            alt="WaterShield V2 with metal D-shaft assembly"
            className="w-full max-h-[80vh] object-contain rounded-xl mt-12"
          />

          <h3 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mt-16 mb-6">
            Attachment improvements
          </h3>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            The split also turns setup into a one-time job. The base stays bolted
            to the truck, and the D-shaft and arc slide off when you don't need
            them. As soon as it starts raining you push the arc back onto the
            shafts and you're riding in about 20 seconds. The V1 setup took
            around 5 minutes every time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img
              src="/work/watershield-v2-2.jpg"
              alt="WaterShield V2 — angled view of the two-part assembly"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <img
              src="/work/watershield-v2-3.jpg"
              alt="WaterShield V2 — side view showing the D-shaft connection"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>

          <div className="max-w-[800px] mx-auto mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-black">
                <video
                  src="/work/watershield-v2-demo1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-black">
                <video
                  src="/work/watershield-v2-demo2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-[#f5f5f5]/50 text-center">
              Comparison of the WaterShield on the board (front wheels versus back wheels).
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT I DID + TAKEAWAYS — side by side ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-20 pb-8 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            <div className="md:w-1/2">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
                What I did
              </h2>
              <ul className="space-y-3 text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/80">
                <li>Defined the user pain point and usage scenarios</li>
                <li>Designed the attachment concept and mounting approach</li>
                <li>Iterated shape and fit for wheel clearance and durability</li>
                <li>Prototyped and validated basic function with test rides</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
                Takeaways
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/80">
                Small accessories succeed or fail on install friction. The design had to
                feel immediately worth using the moment conditions turned wet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] flex justify-center pb-8">
        <BackButton slug="watershield" />
      </section>
    </main>
  );
}
