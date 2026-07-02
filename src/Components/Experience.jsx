import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { experience } from "../data";

const Experience = () => {
  const trackRef = useRef(null);
  // Progress of the timeline through the viewport → drives the spine "draw".
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <SectionTitle
        index="03"
        title="Experience Roadmap"
        subtitle="Three roles, one throughline: shipping backend systems that create measurable impact."
      />

      <div ref={trackRef} className="relative">
        {/* Static spine track */}
        <span className="absolute left-4 top-2 bottom-2 w-px bg-white/10 md:left-1/2" />
        {/* Animated spine that "draws" as you scroll */}
        <motion.span
          style={{ scaleY: spineScale }}
          className="absolute left-4 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-iris to-accent-deep md:left-1/2"
        />

        <div className="space-y-10">
          {experience.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Node dot */}
                <span
                  className={`absolute top-2 grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-ink shadow-glow left-0 md:left-auto ${
                    left ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  <span
                    className={`h-3 w-3 rounded-full ${
                      job.current ? "animate-pulse bg-accent" : "bg-iris"
                    }`}
                  />
                </span>

                <div className="glass rounded-2xl p-6 text-left transition hover:-translate-y-1 hover:shadow-card">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-accent">{job.period}</span>
                    {job.current && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-slate-100">{job.role}</h3>
                  <p className="text-sm font-semibold text-accent-soft">
                    {job.company} <span className="text-slate-500">· {job.domain}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h.slice(0, 32)} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
