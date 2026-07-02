import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "../../animations/variants";

// Matches values like "8+", "3.5+", "10x", "~50%" (optional ~ prefix, optional +/%/x suffix)
const SIMPLE = /^(~)?(\d+(?:\.\d+)?)([+%x]?)$/;

/**
 * Counts a numeric value up from 0 when it scrolls into view. Compound strings
 * (e.g. "10s → 2.5ms", "60–70%") are rendered as-is. Respects reduced motion.
 */
const CountUp = ({ value, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const match = SIMPLE.exec(String(value).trim());
  const animatable = match && !reduce;

  const initial = animatable
    ? `${match[1] || ""}${(0).toFixed((match[2].split(".")[1] || "").length)}${match[3] || ""}`
    : value;
  const [display, setDisplay] = useState(initial);

  useEffect(() => {
    if (!animatable || !inView) return;
    const [, prefix = "", numStr, suffix = ""] = match;
    const target = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: EASE,
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
