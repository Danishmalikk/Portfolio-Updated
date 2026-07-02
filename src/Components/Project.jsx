import React from "react";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionTitle from "./ui/SectionTitle";
import { projects } from "../data";

// Statically require project images from the images folder
import Fimyworld from "../images/Fimyworld.png";
import PizzaSizza from "../images/Pizza-sizza.png";

const imageMap = {
  "Fimyworld.png": Fimyworld,
  "Pizza-sizza.png": PizzaSizza,
};

const Field = ({ label, children }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-wider text-accent/80">{label}</p>
    <p className="mt-1 text-sm leading-relaxed text-slate-400">{children}</p>
  </div>
);

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
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="group glass overflow-hidden rounded-2xl md:grid md:grid-cols-2 md:items-stretch"
          >
            {/* Image */}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`relative block overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-60 transition group-hover:opacity-30" />
              <img
                src={imageMap[p.image]}
                alt={p.name}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full"
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
        ))}
      </div>
    </section>
  );
};

export default Project;
