export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-start px-6 pt-[22vh] sm:px-10 lg:px-14"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-[min(100%,1400px)]">
        <h1
          id="hero-heading"
          className="hero-enter text-center text-[clamp(3.5rem,15vw,12rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-white"
        >
          Nick Kuebler
        </h1>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-24 flex justify-center sm:bottom-28">
        <a
          href="#selected-works"
          aria-label="Scroll to selected works"
          className="hero-scroll-cue pointer-events-auto text-[#d4af37] transition-colors hover:text-[#f0c94a]"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
