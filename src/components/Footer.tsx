import Link from "next/link";

const EMAIL = "nkuebler@stanford.edu";

export function Footer() {
  const mailto = `mailto:${EMAIL}`;

  return (
    <footer className="mt-auto border-t border-[#f5f5f5]/[0.08] bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
        <p className="max-w-[40rem] text-[0.9375rem] font-light leading-relaxed text-[#f5f5f5]/70 sm:text-base">
          Available for work and always looking for exciting projects —{" "}
          <a
            href={mailto}
            className="nav-underline text-[#f5f5f5] transition-opacity hover:opacity-80"
          >
            {EMAIL}
          </a>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#f5f5f5]/[0.08] pt-8 sm:grid-cols-3 sm:items-center sm:gap-8">
          <p className="text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-[#f5f5f5]">
            Nick Kuebler <span className="align-super text-[0.65em] font-normal">®</span>
          </p>
          <p className="text-[0.8125rem] sm:text-center">
            <Link
              href={mailto}
              className="nav-underline font-normal tracking-wide text-[#f5f5f5]/55 transition-opacity hover:text-[#f5f5f5]/80"
            >
              {EMAIL}
            </Link>
          </p>
          <p className="text-[0.8125rem] font-normal tabular-nums tracking-wide text-[#f5f5f5]/45 sm:text-right">
            © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
