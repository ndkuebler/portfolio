export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Big CONTACT title */}
      <section className="px-6 sm:px-10 lg:px-14 pt-32 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold uppercase tracking-tight text-[#f5f5f5] leading-[0.9]">
            Contact
          </h1>
        </div>
      </section>

      {/* Two column: form left, message + info right */}
      <section className="px-6 sm:px-10 lg:px-14 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5]/80 max-w-[600px]">
            Let&apos;s stay in touch and create incredible things together, turning ideas into reality with passion, creativity, and innovation
          </p>

          <div className="mt-12 flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Email</p>
              <a
                href="mailto:nkuebler@stanford.edu"
                className="mt-2 inline-block text-[1rem] text-[#f5f5f5]/80 hover:text-[#f5f5f5] transition"
              >
                nkuebler@stanford.edu
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Instagram</p>
              <a
                href="https://www.instagram.com/nkuebs/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[1rem] text-[#f5f5f5]/80 hover:text-[#f5f5f5] transition"
              >
                @nkuebs
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/nicolas-k-4246b7275/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[1rem] text-[#f5f5f5]/80 hover:text-[#f5f5f5] transition"
              >
                Nick Kuebler
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Location</p>
              <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Stanford, CA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
