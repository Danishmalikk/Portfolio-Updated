import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Wraps a clickable element with a subtle magnetic pull toward the cursor,
 * plus hover/tap scale. Disabled entirely under prefers-reduced-motion.
 *
 * Renders `as` (default "a"). Pass href/onClick/etc. through.
 */
const MagneticButton = ({ children, as = "a", strength = 0.35, className = "", ...rest }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const MotionTag = motion[as] || motion.a;

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { x: springX, y: springY }}
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      data-magnetic
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
