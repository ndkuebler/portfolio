import { AirDjHero } from "@/components/AirDjHero";
import { BackButton } from "@/components/BackButton";
import { GestureReference } from "@/components/GestureReference";

export const metadata = {
  title: "Air DJ · Nick Kuebler",
  description:
    "A gesture-controlled DJ board that replaces every knob and fader with a hand motion tracked through a webcam.",
};

export default function AirDjPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO VIDEO ===== */}
      <AirDjHero />

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                Air DJ
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A gesture-controlled DJ board that replaces every knob, fader,
                and hotcue with a hand motion tracked through a webcam.
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">
                  Date
                </p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">
                  Role
                </p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">
                  Computer Vision
                </p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Machine Learning</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Claude Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pb-24">
        <div className="mx-auto max-w-[800px] flex flex-col gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f5f5f5]">
              The idea
            </h2>
            <p className="mt-4 text-[1rem] sm:text-[1.0625rem] leading-[1.8] text-[#f5f5f5]/75">
              DJing with physical controllers is wonderful but expensive.
              Most people have laptops instead, and laptops are cheap. I
              wanted to collapse the gap by using the one camera everyone
              already has, training a custom gesture model on my own hands,
              and routing the classified motions out as MIDI so any DJ
              software can consume them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f5f5f5]">
              How it works
            </h2>
            <p className="mt-4 text-[1rem] sm:text-[1.0625rem] leading-[1.8] text-[#f5f5f5]/75">
              A MediaPipe hand tracker feeds 21 landmarks per hand into a
              gesture classifier I trained on data I collected myself. The
              classifier output maps to virtual MIDI messages routed into
              VirtualDJ, which handles decks, beatgrids, and the actual audio.
            </p>
            <p className="mt-4 text-[1rem] sm:text-[1.0625rem] leading-[1.8] text-[#f5f5f5]/75">
              The debug overlay with the hand skeleton exists to show an
              audience how the system sees them. During an actual set, it is
              closed. The interface is the gesture, the music, and the room.
            </p>
            <figure className="mt-8">
              <div className="relative overflow-hidden rounded-lg border border-[#f5f5f5]/10 bg-black aspect-video">
                <video
                  src="/work/airdj-tracking.mp4"
                  poster="/work/airdj-tracking-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-[0.8125rem] text-[#f5f5f5]/50">
                Debug view. A pinch brings a track in, palm height controls
                volume, crossed hands sweep the crossfader, a shaka toggles
                the cursor, and pointing one or two fingers selects a stem
                to solo.
              </figcaption>
            </figure>
            <GestureReference />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f5f5f5]">
              Takeaways
            </h2>
            <ol className="mt-6 flex flex-col gap-8">
              <li>
                <p className="text-[1.0625rem] font-semibold text-[#f5f5f5]">
                  Creativity is the real leverage with Claude Code.
                </p>
                <p className="mt-2 text-[1rem] leading-[1.8] text-[#f5f5f5]/75">
                  The agent is a strong executor but a mediocre inventor. It
                  happily builds whatever you describe, so the value is in
                  deciding what to build. Claude did the typing. The framing
                  was mine.
                </p>
              </li>
              <li>
                <p className="text-[1.0625rem] font-semibold text-[#f5f5f5]">
                  Bridge existing tools, do not replace them.
                </p>
                <p className="mt-2 text-[1rem] leading-[1.8] text-[#f5f5f5]/75">
                  Air DJ does not rebuild a DJ engine. It outputs virtual MIDI
                  so VirtualDJ handles decks, beatgrids, and mixing. One small
                  app plugging into a mature one beats reinventing the stack.
                </p>
              </li>
              <li>
                <p className="text-[1.0625rem] font-semibold text-[#f5f5f5]">
                  Gesture design was the hard part.
                </p>
                <p className="mt-2 text-[1rem] leading-[1.8] text-[#f5f5f5]/75">
                  The ML was not the bottleneck. The real work was inventing
                  motions that felt obvious on the first try. The crossfader
                  became crossed fingers sliding side to side because the word
                  and the motion match. Every gesture had to carry that kind
                  of immediate meaning or it got cut.
                </p>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f5f5f5]">
              Status
            </h2>
            <p className="mt-4 text-[1rem] sm:text-[1.0625rem] leading-[1.8] text-[#f5f5f5]/75">
              Working prototype. Runs as a standalone macOS app. Next up is
              hardening the gesture vocabulary and tightening the mappings
              into VirtualDJ.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
