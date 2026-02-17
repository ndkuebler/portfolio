"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavButton() {
  const pathname = usePathname();

  // Ensure nav is visible on page load/navigation
  useEffect(() => {
    // Always remove the class on route change - navigation should always show nav
    // The page's scroll handler will add it back if user scrolls down
    document.body.classList.remove("nk-mobile-nav-hidden");
    
    // Also check after delays to catch any timing issues with Next.js navigation
    // This ensures the class is removed even if scroll handlers run first
    const timeoutId1 = setTimeout(() => {
      document.body.classList.remove("nk-mobile-nav-hidden");
    }, 0);
    
    const timeoutId2 = setTimeout(() => {
      document.body.classList.remove("nk-mobile-nav-hidden");
    }, 100);
    
    const timeoutId3 = setTimeout(() => {
      document.body.classList.remove("nk-mobile-nav-hidden");
    }, 200);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, [pathname]); // Re-run whenever pathname changes

  const handleClick = () => {
    document.body.classList.remove("nk-mobile-nav-hidden");
  };

  return (
    <button
      type="button"
      className="nk-mobile-nav-button"
      onClick={handleClick}
      aria-label="Show navigation"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
      </svg>
    </button>
  );
}
