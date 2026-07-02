import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { fadeUp, stagger } from "../animations/variants";
import { skills } from "../data";

const TechStack = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <SectionTitle
        index="02"
        title="Tech Stack"
        subtitle="The tools I reach for, grouped by where they live in the stack."
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {skills.map((cat) => (
          <motion.div
            key={cat.group}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-card"
          >
            {/* Soft glow on hover */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-accent">
              {cat.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
