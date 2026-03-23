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
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            {/* Left — contact form */}
            <div className="md:w-1/2 rounded-2xl bg-[#f5f5f5]/[0.04] p-8 sm:p-10">
              <form
                action="mailto:nkuebler@stanford.edu"
                method="POST"
                encType="text/plain"
                className="flex flex-col gap-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[#f5f5f5]/20 py-4 text-[1rem] text-[#f5f5f5] placeholder-[#f5f5f5]/30 outline-none focus:border-[#f5f5f5]/60 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-[#f5f5f5]/20 py-4 text-[1rem] text-[#f5f5f5] placeholder-[#f5f5f5]/30 outline-none focus:border-[#f5f5f5]/60 transition"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-[#f5f5f5]/20 py-4 text-[1rem] text-[#f5f5f5] placeholder-[#f5f5f5]/30 outline-none focus:border-[#f5f5f5]/60 transition resize-y"
                />
                <button
                  type="submit"
                  className="self-start mt-2 rounded-full bg-[#f5f5f5] px-8 py-3 text-sm font-semibold text-[#0a0a0a] hover:bg-white transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right — message + socials */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5]/80">
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
          </div>
        </div>
      </section>
    </main>
  );
}
