import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LeetCodeIcon from "./ui/LeetCodeIcon";
import { profile } from "../data";

const socials = [
  { label: "GitHub", icon: <GitHubIcon />, url: profile.socials.github },
  { label: "LinkedIn", icon: <LinkedInIcon />, url: profile.socials.linkedin },
  { label: "LeetCode", icon: <LeetCodeIcon />, url: profile.socials.leetcode },
  { label: "Twitter", icon: <TwitterIcon />, url: profile.socials.twitter },
];

const LeftContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-0 left-8 z-30 hidden flex-col items-center gap-5 md:flex"
    >
      {socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          whileHover={{ y: -4, scale: 1.15, rotate: 6 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-slate-500 transition-colors hover:text-accent"
        >
          {s.icon}
        </motion.a>
      ))}
      <span className="h-24 w-px bg-gradient-to-b from-white/25 to-transparent" />
    </motion.div>
  );
};

export default LeftContent;
