"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type SwipeDirection = "left" | "right" | null;

export interface SwipeState {
  offsetX: number;
  offsetY: number;
  rotation: number;
  isDragging: boolean;
  direction: SwipeDirection;
}

export function useSwipeGesture(
  ref: React.RefObject<HTMLDivElement | null>,
  options: {
    threshold?: number;
    onSwipe: (dir: "left" | "right") => void;
    enabled?: boolean;
  }
): SwipeState {
  const threshold = options.threshold ?? 120;
  const [state, setState] = useState<SwipeState>({
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
    isDragging: false,
    direction: null,
  });

  const startX = useRef(0);
  const startY = useRef(0);
  const dragging = useRef(false);
  const swiped = useRef(false);

  const handleDown = useCallback(
    (e: PointerEvent) => {
      if (options.enabled === false || swiped.current) return;
      dragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
      (e.currentTarget as HTMLElement)?.setPointerCapture(e.pointerId);
      setState((s) => ({ ...s, isDragging: true }));
    },
    [options.enabled]
  );

  const handleMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      const rotation = dx * 0.06;
      const dir: SwipeDirection =
        Math.abs(dx) > threshold / 2
          ? dx > 0
            ? "right"
            : "left"
          : null;
      setState({ offsetX: dx, offsetY: dy * 0.3, rotation, isDragging: true, direction: dir });
    },
    [threshold]
  );

  const handleUp = useCallback(
    () => {
      if (!dragging.current) return;
      dragging.current = false;

      setState((prev) => {
        if (Math.abs(prev.offsetX) > threshold) {
          const dir = prev.offsetX > 0 ? "right" : "left";
          swiped.current = true;
          // Delay callback so animation can start
          setTimeout(() => options.onSwipe(dir as "left" | "right"), 10);
          return prev; // Keep current position — exit animation handles the rest
        }
        return { offsetX: 0, offsetY: 0, rotation: 0, isDragging: false, direction: null };
      });
    },
    [threshold, options]
  );

  // Reset swiped flag when enabled changes (new card)
  useEffect(() => {
    swiped.current = false;
    setState({ offsetX: 0, offsetY: 0, rotation: 0, isDragging: false, direction: null });
  }, [options.enabled]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointerdown", handleDown);
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerup", handleUp);
    el.addEventListener("pointercancel", handleUp);

    return () => {
      el.removeEventListener("pointerdown", handleDown);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerup", handleUp);
      el.removeEventListener("pointercancel", handleUp);
    };
  }, [ref, handleDown, handleMove, handleUp]);

  return state;
}
