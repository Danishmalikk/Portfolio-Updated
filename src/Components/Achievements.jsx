import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { impact } from "../data";

const Achievements = () => {
  return (
    <section id="impact" className="scroll-mt-24 py-24">
      <SectionTitle
        index="04"
        title="Impact Highlights"
        subtitle="A few numbers that sum up the kind of problems I like to solve."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
            <div className="font-mono text-2xl font-extrabold text-gradient sm:text-3xl">
              {item.metric}
            </div>
            <h3 className="mt-2 font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
