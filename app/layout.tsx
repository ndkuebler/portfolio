import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen">
        {/* NAV */}
        <nav className="fixed top-6 right-8 z-40 flex gap-6 text-sm tracking-wide nk-nav">
          <Link href="/">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
