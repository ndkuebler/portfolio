"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAVBAR_OFFSET = 72;

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTarget = () => {
      if (pathname === "/work/air-dj") {
        const target = document.getElementById("project-info");
        if (target) {
          const rect = target.getBoundingClientRect();
          const paddingBottom = parseFloat(
            window.getComputedStyle(target).paddingBottom,
          );
          const contentEnd = rect.bottom + window.scrollY - paddingBottom;
          const y = Math.max(0, contentEnd - window.innerHeight + 24);
          window.scrollTo({ top: y, behavior: "instant" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    scrollToTarget();
    const t = setTimeout(scrollToTarget, 60);
    return () => clearTimeout(t);
  }, [pathname]);

  return <>{children}</>;
}
