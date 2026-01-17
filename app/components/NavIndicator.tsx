"use client";

import { useEffect, useRef } from "react";

export default function NavIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const nav = document.querySelector<HTMLElement>(".nk-nav");
    if (!nav) return;

    const handleIndicatorEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (document.body.classList.contains("nk-desktop-nav-hidden")) {
        document.body.classList.add("nk-indicator-hover");
      }
    };

    const handleIndicatorLeave = () => {
      // Small delay to allow moving to nav
      timeoutRef.current = setTimeout(() => {
        // Only remove if not hovering nav
        if (!nav.matches(":hover")) {
          document.body.classList.remove("nk-indicator-hover");
        }
      }, 150);
    };

    const handleNavEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      document.body.classList.add("nk-indicator-hover");
    };

    const handleNavLeave = () => {
      if (document.body.classList.contains("nk-desktop-nav-hidden")) {
        document.body.classList.remove("nk-indicator-hover");
      }
    };

    indicator.addEventListener("mouseenter", handleIndicatorEnter);
    indicator.addEventListener("mouseleave", handleIndicatorLeave);
    nav.addEventListener("mouseenter", handleNavEnter);
    nav.addEventListener("mouseleave", handleNavLeave);

    return () => {
      indicator.removeEventListener("mouseenter", handleIndicatorEnter);
      indicator.removeEventListener("mouseleave", handleIndicatorLeave);
      nav.removeEventListener("mouseenter", handleNavEnter);
      nav.removeEventListener("mouseleave", handleNavLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="nk-nav-indicator" ref={indicatorRef} aria-label="Navigation menu">
      <div className="nk-nav-indicator-dot"></div>
    </div>
  );
}
