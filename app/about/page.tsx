export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-4xl font-semibold tracking-tight">
          About
        </h1>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Image */}
          <div>
            <img
              src="/nick.jpeg"
              alt="Nick working in the shop"
              className="w-full max-w-md rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              I’m Nick — a designer & engineer focused on physical products and
              clean digital experiences. I enjoy building products that are aesthetically pleasing, address real user needs, and improve quality of life.
            </p>

            <p>
              This site is a home for selected work: product design,
              prototyping, and systems thinking. If you want to collaborate or
              talk through a project, hit Contact.
            </p>

            <p className="text-neutral-400">
              Based in the US · Open to new projects
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
