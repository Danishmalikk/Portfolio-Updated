import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

const RightContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      className="fixed bottom-0 right-8 z-30 hidden flex-col items-center gap-6 md:flex"
    >
      <a
        href={`mailto:${profile.email}`}
        className="font-mono text-xs tracking-widest text-slate-500 transition hover:-translate-y-1 hover:text-accent [writing-mode:vertical-rl]"
      >
        {profile.email}
      </a>
      <span className="h-24 w-px bg-gradient-to-b from-white/25 to-transparent" />
    </motion.div>
  );
};

export default RightContent;
