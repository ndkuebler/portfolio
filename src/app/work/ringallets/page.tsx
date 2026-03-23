export default function RingalletsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO IMAGE ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem]">
        <img
          src="/work/ringalletsbbg.png"
          alt="Ringallets"
          className="absolute inset-0 w-full h-full object-contain object-center bg-black"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <a
            href="/#selected-works"
            className="inline-block text-xs uppercase tracking-[0.2em] text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition mb-12"
          >
            ← Back to work
          </a>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                Ringallets
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A gymnastics training tool that bridges the gap between parallettes and rings
                by preserving correct mechanics without introducing instability.
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Date</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2023</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Role</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Product Design</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Training Tool</p>
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
            Rings are one of the most effective tools for developing upper-body strength, but
            their instability makes them inaccessible for many athletes.
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
            Ringallets replicate standard ring spacing while maintaining parallette stability.
          </p>
        </div>
      </section>

      {/* ===== DESIGN ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src="/work/ringallets-sketch.png" alt="Early sketches" className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="mt-3 text-sm text-[#f5f5f5]/50">Early sketches</p>
            </div>
            <div>
              <img src="/work/ringallets-cad.png" alt="CAD model" className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="mt-3 text-sm text-[#f5f5f5]/50">CAD model</p>
            </div>
          </div>

          <img
            src="/work/ringallets-prototype.png"
            alt="Physical prototype"
            className="w-full max-h-[80vh] object-contain rounded-xl mt-8"
          />
          <p className="mt-3 text-sm text-[#f5f5f5]/50">Physical prototype</p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Process
          </h2>
          <ul className="max-w-[720px] space-y-3 text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            <li>Failure point analysis</li>
            <li>Geometry locking</li>
            <li>Prototype iteration</li>
            <li>Real athlete testing</li>
          </ul>
        </div>
      </section>

      {/* ===== TESTING ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src="/work/ringallets-testing1.png" alt="Stability testing" className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="mt-3 text-sm text-[#f5f5f5]/50">Stability testing</p>
            </div>
            <div>
              <img src="/work/ringallets-testing2.png" alt="Iteration feedback" className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="mt-3 text-sm text-[#f5f5f5]/50">Iteration feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TAKEAWAYS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Takeaways
          </h2>
          <p className="max-w-[720px] text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/80">
            The right constraints unlock accessibility.
          </p>
        </div>
      </section>

      {/* ===== FINAL + IN ACTION ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Product in action
          </h2>
          <img src="/work/ringallets-final-alt.png" alt="Final components" className="w-full max-h-[80vh] object-contain rounded-xl mb-8" />
          <img src="/work/ringalleths.JPG" alt="Ringallets in use" className="w-full max-h-[80vh] object-contain rounded-xl mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/work/ringalletl.jpg" alt="Ringallets L-sit" className="w-full max-h-[80vh] object-contain rounded-xl" />
            <img src="/work/ringalletplanche.jpg" alt="Ringallets planche" className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>

          <img
            src="/work/ringallets-final.png"
            alt="Ringallets final product"
            className="w-full max-h-[80vh] object-contain rounded-xl mt-8"
          />
          <p className="mt-3 text-sm text-[#f5f5f5]/50">Final Ringallets configuration</p>
        </div>
      </section>
    </main>
  );
}
