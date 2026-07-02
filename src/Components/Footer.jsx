import React from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm from "./ContactForm";
import SectionTitle from "./ui/SectionTitle";
import LeetCodeIcon from "./ui/LeetCodeIcon";
import { profile } from "../data";

const socials = [
  { icon: <GitHubIcon />, url: profile.socials.github, label: "GitHub" },
  { icon: <LinkedInIcon />, url: profile.socials.linkedin, label: "LinkedIn" },
  { icon: <LeetCodeIcon />, url: profile.socials.leetcode, label: "LeetCode" },
  { icon: <EmailIcon />, url: `mailto:${profile.email}`, label: "Email" },
  {
    icon: <WhatsAppIcon />,
    url: `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`,
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <SectionTitle
        index="07"
        title="Get in Touch"
        subtitle="I'm open to backend / full-stack roles and freelance work. Have a role in mind or just want to talk shop?"
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
            Let's build something <span className="text-gradient">reliable</span>.
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
            Whether it's scaling an API, untangling a monolith, or shipping a new product surface —
            drop a message and I'll get back to you as soon as I can.
          </p>

          <div className="mt-6 space-y-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="block text-slate-300 transition hover:text-accent">
              ✉ {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-300 transition hover:text-accent"
            >
              ☎ {profile.phone}
            </a>
            <p className="text-slate-500">📍 {profile.location}</p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {socials.map((s) => {
              const isMail = s.url.startsWith("mailto:");
              return (
              <motion.a
                key={s.label}
                href={s.url}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noreferrer"}
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.12, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.icon}
              </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <p className="mt-16 border-t border-white/5 pt-8 text-center font-mono text-xs text-slate-600">
        Designed &amp; built by {profile.name} · {new Date().getFullYear()} · React · Tailwind · Framer Motion
      </p>
    </section>
  );
};

export default Footer;
