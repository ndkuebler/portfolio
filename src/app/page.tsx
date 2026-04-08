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

          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-[1.4] text-[#f5f5f5]/80 max-w-[600px] mb-12">
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
      </section>
    </main>
  );
}
