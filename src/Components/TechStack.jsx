import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { EASE, stagger } from "../animations/variants";
import { skills } from "../data";

const marqueeTop = ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Kafka", "Redis", "Docker", "AWS", "Kubernetes"];
const marqueeBottom = ["NestJS", "Node.js", "React", "React Native", "BullMQ", "Hibernate", "REST", "LangChain", "Terraform"];

// A row of skills whose x-offset is tied to scroll position.
const MarqueeRow = ({ items, x, outline }) => (
  <motion.div style={{ x }} className="flex w-max gap-8 whitespace-nowrap">
    {[...items, ...items].map((t, i) => (
      <span
        key={`${t}-${i}`}
        className={`font-mono text-3xl font-extrabold tracking-tight sm:text-5xl ${
          outline ? "text-transparent [-webkit-text-stroke:1px_rgba(148,163,184,0.35)]" : "text-gradient opacity-80"
        }`}
      >
        {t} <span className="text-accent/40">✦</span>
      </span>
    ))}
  </motion.div>
);

const TechStack = () => {
  const bandRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ["start end", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-35%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], reduce ? ["-35%", "-35%"] : ["-35%", "0%"]);

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <SectionTitle
        index="02"
        title="Tech Stack"
        subtitle="The tools I reach for, grouped by where they live in the stack."
      />

      {/* Full-bleed, scroll-driven marquee */}
      <div
        ref={bandRef}
        aria-hidden="true"
        className="relative left-1/2 mb-14 w-screen -translate-x-1/2 -rotate-2 space-y-3 overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-sm"
      >
        <MarqueeRow items={marqueeTop} x={xLeft} />
        <MarqueeRow items={marqueeBottom} x={xRight} outline />
      </div>

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
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: -35 },
              show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            style={{ transformPerspective: 900 }}
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
