"use client";

export function Hero() {
  return (
    <>
      {/* Keyframes injected directly so they can't be purged */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hero-image-reveal {
          from {
            filter: blur(20px);
            transform: scale(1.15);
          }
          to {
            filter: blur(0px);
            transform: scale(1);
          }
        }
      `}} />

      {/* Hero section — full viewport image with name at bottom */}
      <section
        className="relative h-[100svh] w-full overflow-hidden -mt-[4.5rem] pt-[4.5rem]"
        aria-labelledby="hero-heading"
      >
        {/* Background image — fills entire viewport */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/work/nkhero1.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
          style={{ animation: "hero-image-reveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}
          fetchPriority="high"
        />

        {/* Gradient overlay — dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Name pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
          <h1
            id="hero-heading"
            className="hero-enter text-[clamp(3.5rem,15vw,12rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-white"
          >
            Nick Kuebler
          </h1>
        </div>
      </section>

      {/* Philosophy/tagline — revealed on scroll, like Mason Taylor */}
      <section className="bg-[#0a0a0a] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <p className="hero-enter-delayed max-w-[min(48rem,88vw)] text-[clamp(1.125rem,2.5vw,1.75rem)] font-light leading-[1.5] text-[#f5f5f5]">
            Product designer focused on building QOL upgrades, tech forward
            physical products and aesthetics.
          </p>
        </div>
      </section>
    </>
  );
}
