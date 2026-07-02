import React from "react";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import SectionTitle from "./ui/SectionTitle";
import { education } from "../data";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <SectionTitle index="06" title="Education" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="glass flex items-start gap-5 rounded-2xl p-6 sm:p-8"
      >
        <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-iris/20 text-accent">
          <SchoolIcon />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-slate-100">{education.degree}</h3>
            <span className="font-mono text-xs text-accent">{education.period}</span>
          </div>
          <p className="mt-1 font-semibold text-accent-soft">{education.school}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{education.detail}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
