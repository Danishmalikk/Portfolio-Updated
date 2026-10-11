import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../animations/variants";

/**
 * Reusable animated section header. On scroll-in the heading rises out of a
 * clipping mask, the divider line draws itself and the subtitle fades up.
 * @param {string} index - two-digit index e.g. "01"
 * @param {string} title - heading text
 * @param {string} [subtitle] - optional supporting line
 */
const SectionTitle = ({ index, title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className="mb-12"
  >
    <div className="flex items-center gap-4">
      <h2 className="overflow-hidden whitespace-nowrap py-1 font-mono text-2xl font-bold text-slate-100 sm:text-3xl">
        <motion.span
          className="inline-block"
          variants={{
            hidden: { y: "110%", rotate: 3 },
            show: { y: 0, rotate: 0, transition: { duration: 0.7, ease: EASE } },
          }}
        >
          <span className="text-accent">{index}.</span> {title}
        </motion.span>
      </h2>
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.9, delay: 0.25, ease: EASE } },
        }}
        className="h-px w-full max-w-xs origin-left bg-gradient-to-r from-accent/60 via-white/20 to-transparent"
      />
    </div>
    {subtitle && (
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 12 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: EASE } },
        }}
        className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionTitle;
