"use client";

import { useEffect } from "react";

export default function IdeateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("ideate-page");
    return () => {
      document.body.classList.remove("ideate-page");
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (max-width: 767px) {
          body.ideate-page nav,
          body.ideate-page footer,
          body.ideate-page > div:has(footer) > footer,
          body.ideate-page header {
            display: none !important;
          }
          body.ideate-page > .flex-1 {
            padding-top: 0 !important;
          }
          body.ideate-page > div > .flex-1 {
            padding-top: 0 !important;
          }
          /* Target the wrapper between body and main content */
          body.ideate-page > :first-child:not(main):not(style) + div {
            padding-top: 0 !important;
          }
        }
      `}</style>
      {children}
    </>
  );
}
