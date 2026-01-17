import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import NavIndicator from "./components/NavIndicator";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen">
        {/* NAV */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 z-40 flex gap-6 text-sm tracking-wide nk-nav">
          <Link href="/">Portfolio</Link>
          <Link href="/concepts">Concepts</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Minimal nav indicator (shown when nav is hidden) */}
        <NavIndicator />

        {children}
      </body>
    </html>
  );
}
