import { BackButton } from "@/components/BackButton";

export const metadata = {
  title: "MyLeague · Nick Kuebler",
  description:
    "A web app that lets people see where they stand and connect with others within their league.",
};

const APP_URL = "https://level-set-eight.vercel.app";

export default function MyLeaguePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] sm:h-[70vh] w-full overflow-hidden sm:-mt-[4.5rem] bg-[#f5f0e6]">
        <img
          src="/work/myleague-self-check.jpg"
          alt="MyLeague self check screen"
          className="absolute inset-0 w-full h-full object-contain object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* ===== PROJECT INFO ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 pt-16 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <BackButton slug="myleague" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:w-3/5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5] leading-[1.05]">
                MyLeague
              </h1>
              <p className="mt-8 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#f5f5f5]/80">
                A web app that scores facial aesthetics and lets people see where they
                stand, who they match with, and how their team stacks up. Built to give
                friends a fun way to connect inside their own league.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-5 py-2.5 text-sm font-medium text-[#0a0a0a] border border-[#f5f5f5] hover:border-[#d4af37] transition-colors duration-200"
              >
                Visit MyLeague →
              </a>
            </div>
            <div className="md:w-2/5 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Date</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Role</p>
                <p className="mt-2 text-[1rem] text-[#f5f5f5]/80">Full-Stack</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Product Design</p>
                <p className="text-[1rem] text-[#f5f5f5]/80">Claude API</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40">Live</p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[1rem] text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors break-all"
                >
                  level-set-eight.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            The idea
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            Two patterns drive most dating outcomes. People tend to end up with someone
            in their own tier, give or take one tier in either direction. Those couples
            also tend to look at least a little like each other. Everyone has heard
            this. Almost nobody knows where they actually fit.
          </p>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mt-6">
            MyLeague makes it visible. Upload a photo and you see your score, what you
            would look like as the opposite sex, and the realistic floor and ceiling of
            your dating pool. The product is a calibration tool, not a verdict. It
            tells people who is actually in their range so they can stop guessing.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            How it works
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            Photos are scored by Claude using a tuned aesthetics rubric. The model
            returns a numeric score on the PSL scale plus a written breakdown of
            strengths, refinements, and category scores for symmetry, bone structure,
            skin, eyes, proportions, and grooming.
          </p>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mt-6">
            Scores sit on a standard distribution, so they behave like the real world
            instead of a feel-good rubric. A 5 is average. Anything past 7.5 is
            genuinely rare. Most people land somewhere in the middle, which is the
            point.
          </p>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mt-6">
            Photos and entries are stored in Supabase. Leaderboards are public by URL
            with no signup, so a single shared link is enough to spin up a board for a
            team or a friend group.
          </p>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Four ways in
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Self Check */}
            <div>
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
                <img
                  loading="lazy"
                  src="/work/myleague-self-check.jpg"
                  alt="Self check tab"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-[1rem] font-semibold text-[#f5f5f5]">Self check</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/60">
                Upload a photo. Get a PSL score, a rubric breakdown, and notes on what is
                working and what is not.
              </p>
            </div>

            {/* Match */}
            <div>
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
                <img
                  loading="lazy"
                  src="/work/myleague-match.jpg"
                  alt="Match tab"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-[1rem] font-semibold text-[#f5f5f5]">Match</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/60">
                Upload two photos. Find out if you fall inside each other&apos;s range.
              </p>
            </div>

            {/* Photogenic */}
            <div>
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
                <img
                  loading="lazy"
                  src="/work/myleague-photogenic.jpg"
                  alt="Photogenic tab"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-[1rem] font-semibold text-[#f5f5f5]">Photogenic</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/60">
                Compare a casual photo to your best one. See how far your camera can take
                you.
              </p>
            </div>

            {/* Leaderboards */}
            <div>
              <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
                <img
                  loading="lazy"
                  src="/work/myleague-leaderboards.jpg"
                  alt="Leaderboards tab"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-[1rem] font-semibold text-[#f5f5f5]">Leaderboards</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/60">
                Spin up a private board for a team or friend group. Anyone with the link
                can post. No signup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCORING OUTPUT ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            What a score looks like
          </h2>
          <p className="max-w-[720px] text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/75 mb-10">
            Every result returns a number, a rubric, written strengths and refinements,
            and per-category scores. Enough detail to feel personal, light enough to
            stay shareable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
              <img
                loading="lazy"
                src="/work/myleague-result-1.jpg"
                alt="Score result top"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
              <img
                loading="lazy"
                src="/work/myleague-result-2.jpg"
                alt="Score result strengths"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
              <img
                loading="lazy"
                src="/work/myleague-result-3.jpg"
                alt="Score result category breakdown"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DATING POOL ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Your floor and ceiling
          </h2>
          <p className="max-w-[720px] text-[1.0625rem] leading-[1.7] text-[#f5f5f5]/75 mb-10">
            From the score, MyLeague generates a realistic range. The floor is the
            lowest you can reasonably expect to date. The ceiling is the highest. This
            is the actual output for the same user whose 8.0 result is shown above.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
              <img
                loading="lazy"
                src="/work/myleague-pool-top.jpg"
                alt="Dating pool top with target range"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-[#f5f5f5]/[0.08] bg-[#f5f0e6]">
              <img
                loading="lazy"
                src="/work/myleague-pool-range.jpg"
                alt="Floor and ceiling of the dating pool"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-12">
            Traction
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                1,143
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Photos uploaded across the first 28 days, with a peak of 203 in a single
                day.
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                2
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                QR codes posted. One in athlete dining, one in the design school.
                Everything else was friends sharing the link.
              </p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-[#f5f5f5]">
                5x+
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Repeat sessions per first-time user. People who tried it once came back
                at least five more times.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[820px] mb-12">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">105</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#f5f5f5]/45">
                Users
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">
                1,107
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#f5f5f5]/45">
                Photos scored
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">36</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#f5f5f5]/45">
                Leaderboards
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">906</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#f5f5f5]/45">
                Feature uses
              </p>
            </div>
          </div>

          <p className="max-w-[720px] text-[1rem] leading-[1.7] text-[#f5f5f5]/70 mb-3">
            Across the 906 logged feature uses, <span className="text-[#f5f5f5]">87% picked
            Self Check</span>, 10.8% used Match, 1.3% Photogenic, and 0.9% Ascension.
            Self Check carried the product.
          </p>
          <p className="max-w-[720px] text-[1rem] leading-[1.7] text-[#f5f5f5]/70">
            The two QR codes were the only marketing. The growth was organic, driven by
            friends sending the link to friends and entire teams asking for their own
            board.
          </p>
        </div>
      </section>

      {/* ===== LIMITATIONS ===== */}
      <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-14 py-20 border-t border-[#f5f5f5]/[0.08]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#f5f5f5]/40 mb-6">
            Limitations
          </h2>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80">
            The model is not perfect. A person can land a tier above or a tier below
            where they would actually score in real life, and the generated floor and
            ceiling photos can drift, especially at the extremes of the scale.
          </p>
          <p className="max-w-[720px] text-[1.125rem] leading-[1.7] text-[#f5f5f5]/80 mt-6">
            Nothing the model returns is medical advice or a verdict on anyone&apos;s
            appearance. MyLeague is one more data point about how a person reads in
            photos. The goal is calibration, not judgment.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM BACK + VISIT ===== */}
      <section className="bg-[#0a0a0a] flex flex-wrap justify-center items-center gap-3 pb-8">
        <BackButton slug="myleague" />
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 mb-12"
        >
          Visit MyLeague →
        </a>
      </section>
    </main>
  );
}
