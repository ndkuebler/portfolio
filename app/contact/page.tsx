export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-12">
          Contact
        </h1>

        <div className="space-y-8 text-lg text-neutral-300">
          {/* Email */}
          <p>
            <span className="text-neutral-400">Email</span>
            <br />
            <a
              href="mailto:nkuebler@stanford.edu"
              className="hover:text-white transition"
            >
              nkuebler@stanford.edu
            </a>
          </p>

          {/* Social */}
          <div>
            <p className="text-neutral-400 mb-4">Social</p>

            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nkuebs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nicolas-k-4246b7275/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 6 3.32 6 7.64V24h-5v-7.6c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
