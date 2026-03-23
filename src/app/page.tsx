import { AboutSection } from "@/components/AboutSection";
import { Concepts } from "@/components/Concepts";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SelectedWorks />
      <Concepts />

      <AboutSection />

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative z-10 bg-[#0a0a0a] border-t border-[#f5f5f5]/[0.08] px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[clamp(3rem,10vw,7rem)] font-bold uppercase tracking-tight text-[#f5f5f5] leading-[0.9] mb-16">
            Contact
          </h2>

          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            {/* Left — form */}
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

            {/* Right — info */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5]/80 mb-12">
                Let&apos;s stay in touch and create incredible things together
              </p>

              <div className="flex flex-col gap-8">
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
