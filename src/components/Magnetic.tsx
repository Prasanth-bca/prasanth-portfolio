import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  intensity?: number; // How far it moves
  scale?: number;     // Hover scale
  className?: string; // Optional wrapper class
}

export function Magnetic({ children, intensity = 15, scale = 1.05, className = "inline-flex" }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, snappy spring configuration
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Disable magnetic movement on mobile devices, keeping the hover scale active
    if (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Proportional distance from center
    const moveX = ((clientX - centerX) / width) * intensity;
    const moveY = ((clientY - centerY) / height) * intensity;
    
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ scale: isHovered ? scale : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        x: springX,
        y: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
