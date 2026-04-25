import { useEffect, useRef } from "react";

/**
 * Physics-based custom cursor.
 * - Inner dot follows mouse tightly
 * - Outer ring lags behind with lerp inertia
 * - Expands on hover over interactive elements
 * - Subtle bounce on click
 * - Pure transform/opacity animations via rAF for 60fps
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / coarse pointer devices for performance
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Default target properties
      let newTargetScale = 1;
      let newBoxShadow = "0 0 15px rgba(100, 150, 255, 0.1)";
      let newBorder = "1px solid color-mix(in oklch, oklch(0.55 0.18 255) 55%, transparent)";
      
      const target = e.target as HTMLElement | null;
      // Search for specific data-cursor attributes
      const customCursorElement = target?.closest("[data-cursor]");
      const cursorType = customCursorElement?.getAttribute("data-cursor");
      
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, label, .cursor-pointer"
      ) as HTMLElement | null;

      if (cursorType === "text") {
        newTargetScale = 0.4;
        newBorder = "1px solid transparent";
        newBoxShadow = "none";
      } else if (cursorType === "card") {
        newTargetScale = 2.5;
        newBorder = "1px solid rgba(255, 255, 255, 0.1)";
        newBoxShadow = "0 0 40px rgba(100, 150, 255, 0.15)";
      } else if (interactive) {
        // Button interaction
        newTargetScale = 1.6;
        newBoxShadow = "0 0 25px rgba(0, 102, 255, 0.35)"; // AI style blue glow
        newBorder = "1px solid rgba(100, 150, 255, 0.5)";
        
        const rect = interactive.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Subtle magnetic pull
        mouseX = mouseX + (cx - mouseX) * 0.10;
        mouseY = mouseY + (cy - mouseY) * 0.10;
      }
      
      targetScale = newTargetScale;
      ring.style.boxShadow = newBoxShadow;
      ring.style.border = newBorder;
    };

    const onDown = () => {
      targetScale = targetScale * 0.5; // Quick shrink bounce
    };
    const onUp = () => {
      // It'll smoothly float back to proper targetScale on next move tick
      targetScale = targetScale * 2; 
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      // Inner dot — near instant following
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;
      
      // Outer ring — trailing offset
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      
      // Fast, snappy expansion/shrink on hover
      scale += (targetScale - scale) * 0.35;

      dot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0) scale(${scale})`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-9 w-9 rounded-full border border-[oklch(0.55_0.18_255/0.55)] opacity-0 transition-opacity duration-200 mix-blend-multiply"
        style={{ willChange: "transform, opacity", backdropFilter: "blur(2px)" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-[oklch(0.5_0.2_260)] opacity-0 transition-opacity duration-200"
        style={{ willChange: "transform, opacity" }}
      />
    </>
  );
}
