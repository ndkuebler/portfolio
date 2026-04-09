"use client";

import { useEffect, useState } from "react";
import { Briefcase, Lightbulb, User } from "lucide-react";

const navItems = [
  { href: "/#selected-works", label: "Projects", Icon: Briefcase },
  { href: "/concepts", label: "Concepts", Icon: Lightbulb },
  { href: "/#about", label: "About", Icon: User },
];

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

function NavIcon({ item }: { item: (typeof navItems)[number] }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = item;

  return (
    <a
      href={item.href}
      className="relative flex items-center justify-center w-10 h-10 rounded-full text-[#1a1a1a] hover:bg-[#e0e0e0] transition-colors duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={18} strokeWidth={1.75} />
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1a1a1a] px-2.5 py-1 text-[0.6875rem] font-medium text-white tracking-wide uppercase transition-all duration-200"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-4px)",
        }}
      >
        {item.label}
      </span>
    </a>
  );
}

export function Navbar() {
  const [time, setTime] = useState<Date | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-14">
          {/* Logo */}
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

          {/* Center clock — desktop only */}
          <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 text-center md:block">
            <p className="text-[0.8125rem] tabular-nums tracking-tight text-[#f5f5f5]">
              {time ? formatSanFranciscoTime(time) : "\u2014"}
            </p>
            <p className="mt-0.5 text-[0.6875rem] font-normal tracking-wide text-[#f5f5f5]/55">
              Stanford, CA
            </p>
          </div>

          {/* Desktop icon nav pill */}
          <nav
            className="hidden sm:flex shrink-0 items-center gap-1 rounded-full bg-[#f5f5f5] px-2 py-1.5"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavIcon key={item.href} item={item} />
            ))}
          </nav>

          {/* Mobile hamburger button */}
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold tracking-tight text-[#f5f5f5] hover:text-[#f5f5f5]/70 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Clock + location on mobile menu */}
          <div className="absolute bottom-12 left-6">
            <p className="text-sm tabular-nums text-[#f5f5f5]/50">
              {time ? formatSanFranciscoTime(time) : "\u2014"}
            </p>
            <p className="mt-1 text-xs text-[#f5f5f5]/30">Stanford, CA</p>
          </div>
        </div>
      )}
    </>
  );
}
