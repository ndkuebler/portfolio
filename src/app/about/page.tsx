export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero area with title */}
      <section className="px-6 sm:px-10 lg:px-14 pt-32 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold uppercase tracking-tight text-[#f5f5f5] leading-[0.9]">
            About
          </h1>
        </div>
      </section>

      {/* Two column: image left, bio right */}
      <section className="px-6 sm:px-10 lg:px-14 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* Left — photos */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <img
                src="/nick.jpeg"
                alt="Nick in the workshop"
                className="w-full rounded-2xl"
              />
              <img
                src="/concepts/nkhbar.jpeg"
                alt="Nick on high bar"
                className="w-full rounded-2xl"
              />
              <img
                src="/concepts/nickcube.jpeg"
                alt="Nick"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Right — bio */}
            <div className="md:w-1/2 md:sticky md:top-32 md:self-start">
              <p className="text-[1.5rem] sm:text-[1.75rem] font-bold leading-[1.4] text-[#f5f5f5] mb-8">
                I&apos;m Nick. I am a product designer/engineer and focus on physical products.
              </p>

              <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-6">
                I enjoy building things that are aesthetically pleasing, address real user
                needs, and improve quality of life. I also compete on the Stanford gymnastics
                team. I like playing board games with friends, and mixing music. I used to be
                really good at Origami.
              </p>

              <p className="text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
                If you want to collaborate or talk through a project, please{" "}
                <a
                  href="/contact"
                  className="text-[#f5f5f5] underline underline-offset-4 decoration-[#f5f5f5]/30 hover:decoration-[#f5f5f5] transition"
                >
                  contact me
                </a>
                .
              </p>

              <div className="flex gap-6 text-sm text-[#f5f5f5]/50">
                <span>Based in the US</span>
                <span>·</span>
                <span>Open to new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
