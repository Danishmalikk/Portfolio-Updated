import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionTitle from "./ui/SectionTitle";
import { projects } from "../data";

// Statically require project images from the images folder
import VeerFitness from "../images/VeerFitness.png";
import PizzaSizza from "../images/Pizza-sizza.png";
import OceanEvoke from "../images/OceanEvoke.png";

const imageMap = {
  "VeerFitness.png": VeerFitness,
  "Pizza-sizza.png": PizzaSizza,
  "OceanEvoke.png": OceanEvoke,
};

const Field = ({ label, children }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-wider text-accent/80">{label}</p>
    <p className="mt-1 text-sm leading-relaxed text-slate-400">{children}</p>
  </div>
);

// Each card tilts back in perspective and straightens out as it scrolls
// into view, while its screenshot drifts at a slower parallax speed.
const ProjectCard = ({ p, i }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      ref={ref}
      style={reduce ? undefined : { rotateX, scale, opacity, transformPerspective: 1100 }}
      className="group glass origin-bottom overflow-hidden rounded-2xl md:grid md:grid-cols-2 md:items-stretch"
    >
      {/* Image */}
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className={`relative block overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-60 transition group-hover:opacity-30" />
        <motion.img
          src={imageMap[p.image]}
          alt={p.name}
          loading="lazy"
          style={reduce ? undefined : { y: imgY, scale: 1.15 }}
          className="h-56 w-full object-cover md:h-full"
        />
      </a>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.tag}</p>
        <h3 className="mt-2 flex items-center gap-2 text-xl font-bold text-slate-100">
          {p.name}
        </h3>

        <div className="mt-4 space-y-3">
          <Field label="Problem">{p.problem}</Field>
          <Field label="Solution">{p.solution}</Field>
          <Field label="My role">{p.role}</Field>
        </div>

        {p.demo && (
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-xs text-slate-400">
            <span className="text-accent">Demo account →</span>
            {p.demo.map((d) => (
              <div key={d} className="mt-1">
                {d}
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Live Demo <OpenInNewIcon fontSize="inherit" />
          </motion.a>
          <motion.a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-mono text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <GitHubIcon fontSize="inherit" /> Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <SectionTitle
        index="05"
        title="Featured Projects"
        subtitle="Personal builds where I owned the whole stack — problem, solution and delivery."
      />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Project;
