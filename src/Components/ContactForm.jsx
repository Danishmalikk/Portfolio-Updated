import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { profile } from "../data";

const inputBase =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/40";

const ContactForm = () => {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [ripples, setRipples] = useState([]);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const focusProps = reduce ? {} : { whileFocus: { scale: 1.01 } };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const addRipple = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 600);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 text-left sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-slate-400">
            Name
          </label>
          <motion.input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update}
            placeholder="Jane Doe"
            className={inputBase}
            {...focusProps}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-slate-400">
            Email
          </label>
          <motion.input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            placeholder="jane@company.com"
            className={inputBase}
            {...focusProps}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-slate-400">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={update}
          placeholder="Hi Danish, we're hiring for a backend role and…"
          className={`${inputBase} resize-none`}
          {...focusProps}
        />
      </div>

      <motion.button
        type="submit"
        onClick={addRipple}
        whileHover={reduce ? undefined : { scale: 1.03 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        className="relative mt-5 w-full overflow-hidden rounded-lg bg-gradient-to-r from-accent to-iris px-6 py-3 font-semibold text-ink shadow-glow sm:w-auto"
      >
        <span className="relative z-10">Send Message</span>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ left: r.x, top: r.y }}
            className="pointer-events-none absolute -ml-8 -mt-8 h-16 w-16 rounded-full bg-white/40"
          />
        ))}
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-2 font-mono text-xs text-accent"
          >
            <CheckCircleIcon fontSize="inherit" /> Opening your email client — thanks for reaching out!
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-3 font-mono text-[11px] text-slate-500">
        Opens your email app pre-filled — or reach me directly at {profile.email}
      </p>
    </form>
  );
};

export default ContactForm;
