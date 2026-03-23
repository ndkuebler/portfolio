import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nick Kuebler",
  description: "Product designer/engineer focused on building QOL upgrades, tech forward physical products and aesthetics.",
  openGraph: {
    title: "Nick Kuebler",
    description: "Product designer/engineer focused on building QOL upgrades, tech forward physical products and aesthetics.",
    url: "https://nkuebler.com",
    siteName: "Nick Kuebler",
    images: [
      {
        url: "/nklogo.png",
        width: 1200,
        height: 630,
        alt: "Nick Kuebler",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Kuebler",
    description: "Product designer/engineer focused on building QOL upgrades, tech forward physical products and aesthetics.",
    images: ["/nklogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} min-h-full`}>
      <body className="font-sans flex min-h-screen flex-col overflow-x-visible overflow-y-visible bg-[#0a0a0a] text-[#f5f5f5]">
        <Navbar />
        {/* Single scroll wrapper — nested flex + min-h-0 breaks position:sticky (wrong scrollport) */}
        <div className="flex-1 overflow-visible pt-[4.5rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
