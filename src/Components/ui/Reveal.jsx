import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VARIANTS, reducedFade } from "../../animations/variants";

/**
 * Scroll-triggered reveal wrapper. Animates once when it enters the viewport.
 * Automatically falls back to a simple opacity fade when the user prefers
 * reduced motion.
 *
 * @param {"fadeUp"|"fadeDown"|"fadeLeft"|"fadeRight"|"scaleIn"|"fade"} variant
 * @param {React.ElementType} as - element/component to render (default div)
 * @param {number} delay - optional delay in seconds
 */
const Reveal = ({
  children,
  variant = "fadeUp",
  as = "div",
  className = "",
  delay = 0,
  amount = 0.2,
  once = true,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const variants = reduce ? reducedFade : VARIANTS[variant] || VARIANTS.fadeUp;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
