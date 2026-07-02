import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LeetCodeIcon from "./ui/LeetCodeIcon";
import { navLinks, profile } from "../data";

const Rightmenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-slate-200 transition hover:text-accent"
        aria-label="Open menu"
      >
        <MenuIcon fontSize="large" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-slate-200 transition hover:text-accent"
              aria-label="Close menu"
            >
              <CloseIcon fontSize="large" />
            </button>

            {navLinks.map((link, i) => (
              <a
                key={link.url}
                href={`#${link.url}`}
                onClick={() => setOpen(false)}
                className="font-mono text-2xl text-slate-200 transition hover:text-accent"
              >
                <span className="text-accent">0{i + 1}.</span> {link.title}
              </a>
            ))}

            <a
              href={require(`../resources/${profile.resume}`)}
              download
              onClick={() => setOpen(false)}
              className="rounded-lg border border-accent/40 px-6 py-2.5 font-mono text-accent transition hover:bg-accent/10"
            >
              Resume
            </a>

            <div className="mt-6 flex gap-8 text-slate-400">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                <GitHubIcon />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                <LinkedInIcon />
              </a>
              <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-accent">
                <LeetCodeIcon size={24} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-accent">
                <TwitterIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rightmenu;
