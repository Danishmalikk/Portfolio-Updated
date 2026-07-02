import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle floating blurred blobs behind all content. Uses the existing accent
 * palette at very low opacity so it never competes with the foreground.
 * Sits below content (z -1) and ignores pointer events. Static (no motion)
 * when the user prefers reduced motion.
 */
const blobs = [
  {
    className: "left-[-8rem] top-[8rem] h-72 w-72 bg-accent/20",
    animate: { x: [0, 40, 0], y: [0, 30, 0] },
    duration: 18,
  },
  {
    className: "right-[-6rem] top-[45%] h-80 w-80 bg-iris/20",
    animate: { x: [0, -50, 0], y: [0, 40, 0] },
    duration: 22,
  },
  {
    className: "left-[35%] bottom-[-6rem] h-72 w-72 bg-accent-deep/20",
    animate: { x: [0, 30, 0], y: [0, -30, 0] },
    duration: 26,
  },
];

const AnimatedBackground = () => {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          animate={reduce ? undefined : b.animate}
          transition={
            reduce
              ? undefined
              : { duration: b.duration, repeat: Infinity, ease: "easeInOut" }
          }
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
