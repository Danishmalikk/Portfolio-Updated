import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A small, tasteful cursor follower ring. It:
 *  - is hidden on touch / coarse-pointer devices,
 *  - is disabled under prefers-reduced-motion,
 *  - never captures pointer events (pointer-events: none),
 *  - grows slightly when hovering interactive elements.
 */
const CursorFollower = () => {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Only enable on fine pointers (mouse/trackpad) and when motion is allowed
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHovering(!!(t.closest && t.closest('a, button, [data-magnetic], input, textarea')));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border border-accent/70"
      />
    </motion.div>
  );
};

export default CursorFollower;
