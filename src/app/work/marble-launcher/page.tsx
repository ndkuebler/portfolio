import { BackButton } from "@/components/BackButton";

export default function MarbleLauncherPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO IMAGE ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem]">
        <img
          src="/work/mlheader.webp"
          alt="Marble Launcher"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                Marble Launcher
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A marble launcher inspired by the Stanford Dish telescope
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Date</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2022</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Role</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Mechanical Engineering</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">ME102</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM + CONSTRAINTS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Problem + Constraints
          </h2>
          <ul className="max-w-[720px] space-y-3 text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            <li>Design a mechanical desktop perpetual marble launcher</li>
            <li>Must use rotary motion input + spring reset</li>
            <li>Strict material constraints (acrylic, plywood, 3D print)</li>
          </ul>
        </div>
      </section>

      {/* ===== INSPIRATION + RESEARCH ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Inspiration + Research
          </h2>
          <ul className="max-w-[720px] space-y-3 text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            <li>Pinball machine (high-velocity launch, track behavior)</li>
            <li>Magnetic loop launcher (airtime + return via ramp)</li>
            <li>Stanford Dish (funnel geometry inspiration)</li>
          </ul>
        </div>
      </section>

      {/* ===== IDEATION + SKETCHING ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Ideation + Sketching
          </h2>
          <ul className="max-w-[720px] space-y-3 text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
            <li>Generated multiple concept sketches</li>
            <li>Focused on exploring mechanism possibilities</li>
            <li>Goal: maximize idea quantity before narrowing down</li>
          </ul>
          <img src="/work/mlsketches.webp" alt="Ideation sketches" className="w-full max-h-[80vh] object-contain rounded-xl" />
        </div>
      </section>

      {/* ===== PROTOTYPING + TESTING ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Prototyping + Testing
          </h2>

          {/* Ball Displacement */}
          <h3 className="text-sm font-semibold text-[#f5f5f5]/80 mb-4">Ball Displacement Mechanism</h3>
          <p className="text-[1rem] text-[#f5f5f5]/80 mb-6">
            Tested slot shapes (circle, oval, triangle, square). Circular slot performed best.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <img src="/work/mlslot.webp" alt="Slot shapes" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <img src="/work/mlslot3.webp" alt="Circular slot" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <img src="/work/mlslot2.png" alt="Slot testing" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>

          {/* Funnel */}
          <h3 className="text-sm font-semibold text-[#f5f5f5]/80 mb-4">Funnel</h3>
          <p className="text-[1rem] text-[#f5f5f5]/80 mb-6">
            Tested angles (90°, 75°, 60°, 45°, 30°). Chose 60° for best alignment + manufacturability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img src="/work/mlfunnel1.png" alt="Funnel" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <img src="/work/mlfunnelchart.png" alt="Funnel chart" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img src="/work/mlfunnel2.webp" alt="60 degree funnel" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <div>
              <img src="/work/mlfunnel4.webp" alt="Bad funnel angle" className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="mt-3 text-sm text-[#f5f5f5]/50">Bad funnel angle: balls block each other</p>
            </div>
          </div>

          {/* Low fidelity prototype */}
          <h3 className="text-sm font-semibold text-[#f5f5f5]/80 mt-16 mb-4">Low fidelity prototype</h3>
          <img src="/work/mlp1.webp" alt="Low fidelity prototype" className="w-full md:w-4/5 max-h-[80vh] object-contain rounded-xl" />

          {/* Spring */}
          <h3 className="text-sm font-semibold text-[#f5f5f5]/80 mt-16 mb-4">Spring Integration</h3>
          <p className="text-[1rem] text-[#f5f5f5]/80 mb-6">
            Tested attachment locations. Found optimal slot for linear stretch + max extension. Incorporated hard stops.
          </p>
          <img src="/work/mlspring.webp" alt="Spring integration" className="w-full max-h-[80vh] object-contain rounded-xl" />

          {/* Launch Hammer */}
          <h3 className="text-sm font-semibold text-[#f5f5f5]/80 mt-16 mb-4">Launch Hammer</h3>
          <p className="text-[1rem] text-[#f5f5f5]/80">
            Iterated block width (.35 → .6 in). Identified consistency issue → redesigned.
          </p>
        </div>
      </section>

      {/* ===== HIGHER FIDELITY PROTOTYPE ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Higher fidelity prototype
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/work/mlp2.webp" alt="Higher fidelity prototype" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <img src="/work/mlp2sketch.webp" alt="Prototype sketch" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      </section>

      {/* ===== ITERATION ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Iteration + Adjustments
          </h2>
          <img src="/work/mlitad.webp" alt="Iteration and adjustments" className="w-full max-h-[80vh] object-contain rounded-xl" />
        </div>
      </section>

      {/* ===== FINAL ASSEMBLY ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Final Assembly + Documentation
          </h2>
          <img src="/work/mlbuild.webp" alt="Final assembly" className="w-full max-h-[80vh] object-contain rounded-xl mb-8" />
          <img src="/work/mlfinal.webp" alt="Final working version" className="w-full max-h-[80vh] object-contain rounded-xl mb-8" />

          <div className="flex justify-center my-12">
            <video
              src="/work/mlvid2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full md:w-3/5 max-h-[80vh] object-contain rounded-xl"
            />
          </div>

          <img src="/work/mlcad.webp" alt="CAD model" className="w-full max-h-[80vh] object-contain rounded-xl" />
          <p className="mt-3 text-sm text-[#f5f5f5]/50">CAD model</p>
        </div>
      </section>

      {/* ===== TAKEAWAYS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Takeaways
          </h2>
          <ul className="space-y-3 text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/80">
            <li>Break problems into subcomponents</li>
            <li>Precision is critical</li>
            <li>Plan before lab work</li>
            <li>Ambition increased challenge but increased reward</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#0a0a0a] flex justify-center pb-8">
        <BackButton />
      </section>
    </main>
  );
}
