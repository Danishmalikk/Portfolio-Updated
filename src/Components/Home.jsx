import React from "react";
import { motion } from "framer-motion";
import { profile, stats } from "../data";
import MagneticButton from "./ui/MagneticButton";
import CountUp from "./ui/CountUp";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center pt-28 pb-16"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-sm text-accent"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </motion.p>

        <motion.p variants={item} className="font-mono text-accent">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 text-2xl font-bold tracking-tight text-slate-400 sm:text-4xl lg:text-5xl"
        >
          I build things for the <span className="text-gradient">backend</span> &amp; the web.
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.blurb} Strong in <span className="text-slate-200">Java, Spring Boot, REST APIs &amp; microservices</span>,
          with hands-on Node.js, NestJS, React and PostgreSQL.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton
            href="#projects"
            className="inline-block rounded-lg bg-gradient-to-r from-accent to-iris px-6 py-3 font-semibold text-ink shadow-glow"
          >
            View my work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-block rounded-lg border border-white/15 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
          >
            Get in touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            className="glass rounded-xl p-4 transition hover:-translate-y-1"
          >
            <CountUp value={s.value} className="font-mono text-xl font-bold text-gradient sm:text-2xl" />
            <div className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
