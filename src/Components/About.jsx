import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import profileImg from "../images/web_image.jpeg";
import SectionTitle from "./ui/SectionTitle";
import { fadeLeft, fadeRight } from "../animations/variants";
import { about, journey, profile } from "../data";

const About = () => {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <SectionTitle index="01" title="About Me" />

      <div className="grid items-start gap-12 md:grid-cols-[1.6fr_1fr]">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 text-base leading-relaxed text-slate-400"
        >
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          {/* Journey timeline */}
          <div className="mt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">My journey</p>
            <ol className="relative space-y-4 border-l border-white/10 pl-6">
              {journey.map((j) => (
                <li key={j.year} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                  <span className="font-mono text-sm text-accent-soft">{j.year}</span>
                  <p className="text-sm text-slate-400">{j.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative mx-auto w-full max-w-xs"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow behind the image */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/40 to-iris/40 opacity-40 blur-xl transition group-hover:opacity-70" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={profileImg}
                alt={profile.name}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:grayscale"
              />
            </div>
          </motion.div>
          <div className="mt-4 text-center font-mono text-sm text-slate-500">📍 {profile.location}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
