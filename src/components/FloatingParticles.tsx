import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  depth: number; // For parallax effect
  baseDriftX: number;
  baseDriftY: number;
  vx: number;
  vy: number;
  phase: number;
  el: HTMLDivElement;
};

export function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    
    // Limit particles heavily for mobile performance
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    const COUNT = isMobile ? 8 : 20;

    const container = containerRef.current;
    if (!container) return;

    const particles: Particle[] = [];
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement("div");
      
      const layerRand = Math.random();
      let size, alpha, blurAmount, colorStr, shadow, depth, baseSpeedMultiplier;

      if (layerRand > 0.66) {
        // Front Layer (Closest, Sharpest, Fastest)
        size = 18 + Math.random() * 12; // 18-30px
        alpha = 0.18 + Math.random() * 0.07; // 0.18-0.25
        blurAmount = 6 + Math.random() * 4; // 6-10px
        colorStr = `0, 102, 255, ${alpha}`;
        shadow = `0 0 25px rgba(0, 102, 255, 0.25)`;
        depth = 1.0; 
        baseSpeedMultiplier = 1.2;
      } else if (layerRand > 0.33) {
        // Mid Layer (Medium)
        size = 10 + Math.random() * 8; // 10-18px
        alpha = 0.12 + Math.random() * 0.06; // 0.12-0.18
        blurAmount = 10 + Math.random() * 8; // 10-18px
        colorStr = Math.random() > 0.5 ? `100, 150, 255, ${alpha}` : `240, 248, 255, ${alpha}`;
        shadow = `0 0 18px rgba(100, 150, 255, 0.2)`;
        depth = 0.6;
        baseSpeedMultiplier = 0.7;
      } else {
        // Back Layer (Far, Softest, Slowest)
        size = 6 + Math.random() * 6; // 6-12px
        alpha = 0.06 + Math.random() * 0.06; // 0.06-0.12
        blurAmount = 18 + Math.random() * 12; // 18-30px
        colorStr = `180, 200, 230, ${alpha}`; // soft blue/gray
        shadow = `0 0 12px rgba(100, 150, 255, 0.1)`;
        depth = 0.2;
        baseSpeedMultiplier = 0.3;
      }

      // Automatically slash performance impact parameters on mobile devices
      if (isMobile) {
        blurAmount = Math.min(blurAmount, 8); // hard clamp blur
        shadow = "none";
        baseSpeedMultiplier *= 0.3; // less drift
        depth *= 0.1; // almost disable scroll parallax
      }

      el.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(${colorStr});
        box-shadow: ${shadow};
        filter: blur(${blurAmount}px);
        will-change: transform;
        pointer-events: none;
      `;
      container.appendChild(el);
      
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size,
        depth,
        // Ensure slight continuous movement proportional to layer depth
        baseDriftX: (Math.random() - 0.5) * 0.4 * baseSpeedMultiplier,
        baseDriftY: ((Math.random() - 0.5) * 0.4 - 0.1) * baseSpeedMultiplier,
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        el,
      });
    }

    let scrollY = window.scrollY;
    let lastScrollY = scrollY;
    let rafId = 0;
    let t = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      
      // Apply force based on scroll delta
      // Inverse so down-scroll pushes particles up
      const force = -delta * 0.05;

      // Distribute force among particles based on depth for 3D parallax
      for (const p of particles) {
        p.vy += force * p.depth;
      }
    };

    const tick = () => {
      t += 0.016; // Time step for sin wave oscillation
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Physics integration
        p.x += p.baseDriftX + p.vx;
        p.y += p.baseDriftY + p.vy;

        // Apply friction to slow down velocity (smooth ease-out deceleration)
        p.vx *= 0.92;
        p.vy *= 0.92;

        // Wrap around screen gently
        if (p.y < -50) p.y = h + 50;
        else if (p.y > h + 50) p.y = -50;
        
        if (p.x < -50) p.x = w + 50;
        else if (p.x > w + 50) p.x = -50;

        // Gentle oscillation (sin wave) independent of base position
        const oscX = Math.sin(t * 0.5 + p.phase) * (8 * p.depth);
        const oscY = Math.cos(t * 0.4 + p.phase) * (6 * p.depth);

        // Batch DOM update
        p.el.style.transform = `translate3d(${p.x + oscX}px, ${p.y + oscY}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    />
  );
}

