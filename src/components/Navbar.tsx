"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#selected-works", label: "Portfolio" },
  { href: "/concepts", label: "Concepts" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

function formatSanFranciscoTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(date);
}

export function Navbar() {
  const [time, setTime] = useState<Date | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
          scrolled
            ? "border-b border-[#f5f5f5]/[0.08] bg-[#0a0a0a]/75 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0a0a]/55"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-14">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "instant" });
              }
            }}
            className="shrink-0 text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-[#f5f5f5] transition-opacity hover:opacity-80 cursor-pointer"
          >
            Nick Kuebler
          </a>

          <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 text-center md:block">
            <p className="text-[0.8125rem] tabular-nums tracking-tight text-[#f5f5f5]">
              {time ? formatSanFranciscoTime(time) : "—"}
            </p>
            <p className="mt-0.5 text-[0.6875rem] font-normal tracking-wide text-[#f5f5f5]/55">
              Stanford, CA
            </p>
          </div>

          {/* Desktop nav — hidden on mobile */}
          <nav
            className="hidden sm:flex shrink-0 items-center gap-6 sm:gap-8"
            aria-label="Primary"
          >
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-underline text-[0.8125rem] font-medium tracking-wide text-[#f5f5f5]/90"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button — visible only on mobile */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#f5f5f5] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#f5f5f5] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#f5f5f5] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[45] bg-[#0a0a0a] sm:hidden"
          style={{ paddingTop: "4.5rem" }}
        >
          <nav className="flex flex-col items-start px-6 pt-12 gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold tracking-tight text-[#f5f5f5] hover:text-[#f5f5f5]/70 transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Clock + location on mobile menu */}
          <div className="absolute bottom-12 left-6">
            <p className="text-sm tabular-nums text-[#f5f5f5]/50">
              {time ? formatSanFranciscoTime(time) : "—"}
            </p>
            <p className="mt-1 text-xs text-[#f5f5f5]/30">
              Stanford, CA
            </p>
          </div>
        </div>
      )}
    </>
  );
}
