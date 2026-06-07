import { BackButton } from "@/components/BackButton";

export const metadata = {
  title: "Somni · Nick Kuebler",
  description:
    "A bedside dream journaling device that listens for your alarm, records your dream the moment you wake, and analyzes it with AI.",
};

const SITE_URL = "https://somnidreamcatch.com/";
const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn3Vi3cO3PLD5ggBPtHqpuNz7GXvJHz32m6knjm77szy23jw/viewform";

export default function SomniPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem] bg-black">
        <img
          src="/work/somni-hero.jpg"
          alt="Somni V1 device on a workshop table with violet LED ring glowing"
          className="absolute inset-0 w-full h-full object-contain object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton slug="somni" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                Somni
              </h1>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-violet-300">
                Stanford Capstone
              </p>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A bedside device that captures your dream the instant you wake up.
                Somni listens for your alarm, lights a soft ring of LEDs, records
                you narrating the dream, and pushes a transcript, analysis, and
                AI generated images of the dream to a companion app before your
                coffee finishes brewing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-5 py-2.5 text-sm font-medium text-[#0a0a0a] border border-[#f5f5f5] hover:border-[#d4af37] transition-colors duration-200"
                >
                  View Somni →
                </a>
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:border-[#d4af37] transition-colors duration-200"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Date</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Course</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">
                  Design 161B (Senior Capstone)
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Role</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Hardware Engineering</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Firmware</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Full-Stack</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Project Management</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Live</p>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[1rem] text-[#f5f5f5]/80 hover:text-violet-300 transition-colors break-all"
                >
                  somnidreamcatch.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE IDEA ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The idea
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            Dreams fade fast. Within thirty seconds of waking up most of the story
            is already gone. Within a minute, only fragments remain. A notebook
            on your nightstand or a phone app introduces enough friction to lose
            the dream entirely. Somni lands inside the first ten second window,
            before the cognitive cost of unlocking a phone or reaching for a pen.
          </p>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mt-6">
            The goal is to make dream journaling frictionless, then use the
            captured data to surface patterns the dreamer would never notice on
            their own.
          </p>
        </div>
      </section>

      {/* ===== RECALL DECAY GRAPH ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Why every second matters
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-12">
            Dream recall accuracy drops on a steep curve in the seconds after
            waking. The deeper you get into the morning routine, the less of the
            dream is recoverable.
          </p>

          <RecallGraph />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            The flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f5f5] mb-12">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Step
              n="01"
              title="You wake up"
              body="Your alarm goes off. The instant your eyes open the clock starts, and the dream begins to fade."
            />
            <Step
              n="02"
              title="Somni wakes with you"
              body="Somni recognizes your alarm and answers with a soft chime and a glowing ring of LEDs, letting you know it is awake and actively listening."
            />
            <Step
              n="03"
              title="You speak, Somni captures"
              body="Speak your dream whenever you are ready. Somni stops listening, registers it, and pushes everything to the app. By the time you have had your coffee, the transcript, analytics, patterns, and AI generated images of the dream are waiting for you."
            />
          </div>
        </div>
      </section>

      {/* ===== HARDWARE ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The hardware
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
            A Raspberry Pi Zero 2 W drives a 40 LED ring, a USB microphone, and a
            momentary button inside a 3D printed crescent moon enclosure. The
            shell went through sand cast, resin, and printed iterations before
            landing on the current form. The electronics breakdown below shows
            the base after wiring up the LED data line, capacitive touch sensor,
            and power.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              loading="lazy"
              src="/work/somni-shell.jpg"
              alt="Somni 3D printed crescent moon shell"
              className="w-full h-auto object-contain rounded-xl bg-[#0a0a0a]"
            />
            <img
              loading="lazy"
              src="/work/somni-electronics.jpg"
              alt="Somni internal electronics on the base plate"
              className="w-full h-auto object-contain rounded-xl bg-[#0a0a0a]"
            />
          </div>
        </div>
      </section>

      {/* ===== THE APP ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The companion app
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mb-10">
            Every dream is transcribed with OpenAI Whisper, analyzed with Claude
            for themes, emotions, lucidity, and recurring symbols, then synced to
            a React PWA backed by Supabase. The app surfaces the dream history as
            a calendar, a theme graph, and a people graph built from everyone the
            dreamer mentions across dreams.
          </p>
          <img
            loading="lazy"
            src="/work/somni-app-insights.jpg"
            alt="Somni companion app insights view"
            className="w-full max-h-[80vh] object-contain rounded-xl bg-[#0a0a0a]"
          />
        </div>
      </section>

      {/* ===== STATUS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Status
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            V1 is functional end to end. Alarm detection, recording, transcription,
            analysis, and upload all work in a real bedroom on real sleep. The
            companion app is live in the App Store review queue. V2 is in design
            with the upgraded form factor, a built in speaker for chimes, and a
            capacitive touch surface for manual controls.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM CTAs ===== */}
      <section className="bg-[#0a0a0a] flex flex-wrap justify-center items-center gap-3 pb-8">
        <BackButton slug="somni" />
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 mb-12"
        >
          View Somni →
        </a>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-white hover:bg-violet-400 transition-all duration-200 mb-12 shadow-[0_8px_24px_-8px_rgba(139,92,246,0.6)]"
        >
          Join the waitlist
        </a>
      </section>
    </main>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-300">
          {n}
        </span>
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight text-[#f5f5f5]">
        {title}
      </h3>
      <p className="text-[1rem] leading-[1.7] text-[#f5f5f5]/70">{body}</p>
    </div>
  );
}

// Recall decay graph — static SVG port of the landing page chart, no motion
// library required. Same colors and the same three reference points.
function RecallGraph() {
  const curve =
    "M 70 78 C 84.333 78.317, 127.333 77.683, 156 79.9 C 184.667 82.117, 187.533 78.95, 242 91.3 C 296.467 103.65, 396.8 136.9, 482.8 154 C 568.8 171.1, 683.467 185.35, 758 193.9 C 832.533 202.45, 901.333 203.4, 930 205.3";
  const area = `${curve} L 930 268 L 70 268 Z`;

  const markers = [
    { left: "15.6%", top: "22.194%", emphasis: true },
    { left: "48.28%", top: "42.778%" },
    { left: "75.8%", top: "53.861%" },
  ];

  const labels = [
    {
      left: "15.6%",
      time: "~10s",
      title: "Somni",
      blurb:
        "Captured in the first ten seconds, recall at its peak, zero distractions.",
      badge: "bg-violet-500/20 text-violet-300",
      titleCls: "text-violet-300",
    },
    {
      left: "48.28%",
      time: "~30s",
      title: "Notebook journaling",
      blurb: "Fumbling for a pen, key details already slipping away.",
      badge: "bg-orange-500/20 text-orange-300",
      titleCls: "text-[#f5f5f5]",
    },
    {
      left: "75.8%",
      time: "~60s",
      title: "Dream journal app",
      blurb: "Unlock, tap, type. The distraction erases the most.",
      badge: "bg-rose-500/20 text-rose-300",
      titleCls: "text-[#f5f5f5]",
    },
  ];

  return (
    <div className="relative w-full select-none">
      <div className="relative h-[440px] w-full sm:h-[480px]">
        <svg
          viewBox="0 0 1000 360"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="somniRecallArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="somniRecallLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="45%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#52525b" />
            </linearGradient>
          </defs>

          <rect x="70" y="70" width="172" height="198" fill="#8b5cf6" opacity="0.12" />
          <line
            x1="242"
            y1="70"
            x2="242"
            y2="268"
            stroke="#a78bfa"
            strokeWidth="1"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="70"
            y1="268"
            x2="930"
            y2="268"
            stroke="#3f3f46"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />

          <path d={area} fill="url(#somniRecallArea)" />
          <path
            d={curve}
            fill="none"
            stroke="url(#somniRecallLine)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          <line x1="156" y1="79.9" x2="156" y2="296" stroke="#a78bfa" strokeWidth="1.25" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
          <line x1="482.8" y1="154" x2="482.8" y2="296" stroke="#3f3f46" strokeWidth="1.25" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
          <line x1="758" y1="193.9" x2="758" y2="296" stroke="#3f3f46" strokeWidth="1.25" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
        </svg>

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "15.6%", top: "12.222%" }}
        >
          <span className="whitespace-nowrap rounded-full bg-violet-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-300">
            First 10s · peak recall
          </span>
        </div>

        {markers.map((m, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: m.left, top: m.top }}
          >
            {m.emphasis ? (
              <>
                <span className="absolute inset-0 -m-1 animate-ping rounded-full bg-violet-400/40" />
                <span className="relative block h-5 w-5 rounded-full bg-violet-400 ring-4 ring-[#0a0a0a] shadow-[0_0_12px_3px_rgba(167,139,250,0.55)]" />
              </>
            ) : (
              <span className="relative block h-4 w-4 rounded-full border-[2.5px] border-violet-300 bg-[#0a0a0a] ring-4 ring-[#0a0a0a]" />
            )}
          </div>
        ))}

        {labels.map((l) => (
          <div
            key={l.time}
            className="absolute w-[150px] -translate-x-1/2 text-center sm:w-[180px]"
            style={{ left: l.left, top: "84.444%" }}
          >
            <span
              className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold tabular-nums tracking-wide ${l.badge}`}
            >
              {l.time}
            </span>
            <p className={`text-base font-bold ${l.titleCls}`}>{l.title}</p>
            <p className="mt-1 text-xs leading-snug text-[#f5f5f5]/50">{l.blurb}</p>
          </div>
        ))}

        <div
          className="absolute flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#f5f5f5]/40"
          style={{ left: "7%", top: "78.333%" }}
        >
          <span>Wake up</span>
          <span className="h-px w-8 bg-[#3f3f46]" />
          <span>time</span>
        </div>
        <div
          className="absolute whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-[#f5f5f5]/40"
          style={{
            left: "1.6%",
            top: "48.056%",
            transform: "translate(-50%, -50%) rotate(-90deg)",
          }}
        >
          Dream recall accuracy
        </div>
      </div>
    </div>
  );
}
