import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-accent to-iris text-2xl font-black text-ink shadow-glow">
              D
            </div>
            <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
