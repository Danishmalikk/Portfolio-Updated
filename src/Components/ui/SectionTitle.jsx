import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable animated section header.
 * @param {string} index - two-digit index e.g. "01"
 * @param {string} title - heading text
 * @param {string} [subtitle] - optional supporting line
 */
const SectionTitle = ({ index, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <div className="flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-2xl font-bold text-slate-100 sm:text-3xl">
        <span className="text-accent">{index}.</span> {title}
      </h2>
      <span className="h-px w-full max-w-xs bg-gradient-to-r from-white/20 to-transparent" />
    </div>
    {subtitle && <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
