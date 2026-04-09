export function Hero() {
  return (
    <section
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-start px-6 pt-[12vh] sm:px-10 lg:px-14"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[min(100%,1400px)]">
        <h1
          id="hero-heading"
          className="hero-enter text-[clamp(3.5rem,15vw,12rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-white"
        >
          Nick Kuebler
        </h1>
        <p className="hero-enter-delayed mt-8 max-w-[min(48rem,88vw)] text-[clamp(1.125rem,2.5vw,1.75rem)] font-light leading-[1.5] text-[#f5f5f5]/60">
          Product designer focused on building QOL upgrades, tech forward
          physical products and aesthetics.
        </p>
      </div>
    </section>
  );
}
