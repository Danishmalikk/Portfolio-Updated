import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-ink/80 text-accent backdrop-blur transition hover:-translate-y-1 hover:shadow-glow"
        >
          <KeyboardArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
