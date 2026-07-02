// Reusable Framer Motion variants + easing presets.
// Import these everywhere instead of re-declaring inline animations.

// Premium, Apple-ish easing curve
export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// Container that staggers its children (each child should use a variant above)
export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// Reduced-motion-safe variant: opacity only, no transforms.
export const reducedFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

// Map a name -> variant, used by <Reveal variant="fadeLeft" />
export const VARIANTS = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  fade,
};
