import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Rightmenu from "./Rightmenu";
import { navLinks, profile } from "../data";
import useActiveSection from "../hooks/useActiveSection";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navLinks.map((l) => l.url), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink/70 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-center gap-2 font-mono text-lg font-bold">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-iris font-black text-ink shadow-glow"
          >
            D
          </motion.span>
          <span className="text-slate-100 transition group-hover:text-accent">
            danish<span className="text-accent">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const isActive = active === link.url;
            return (
              <a
                key={link.url}
                href={`#${link.url}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 font-mono text-sm transition-colors ${
                  isActive ? "text-accent" : "text-slate-400 hover:text-accent"
                }`}
              >
                <span className="text-accent/70">0{i + 1}.</span> {link.title}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-px rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={require(`../resources/${profile.resume}`)}
            download
            className="ml-3 rounded-lg border border-accent/40 px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent/10 hover:shadow-glow"
          >
            Resume
          </a>
        </nav>

        <div className="md:hidden">
          <Rightmenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
