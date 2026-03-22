export function Hero() {
  return (
    <section
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center px-6 pt-10 pb-20 sm:px-10 sm:pt-12 sm:pb-28 lg:px-14"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[min(100%,1400px)]">
        <h1
          id="hero-heading"
          className="hero-enter text-[clamp(2.75rem,12.5vw,8.25rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[#f5f5f5]"
        >
          Nick Kuebler
        </h1>
        <p className="hero-enter-delayed mt-10 max-w-[min(40rem,92vw)] text-[0.9375rem] font-light leading-[1.65] text-[#f5f5f5]/52 sm:mt-12 sm:max-w-[min(44rem,88vw)] sm:text-base sm:leading-[1.7]">
          Product designer focused on building QOL upgrades, tech forward
          physical products and aesthetics.
        </p>
      </div>
    </section>
  );
}
