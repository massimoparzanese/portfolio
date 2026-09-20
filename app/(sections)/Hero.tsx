"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { CONTACT_INFO } from "../lib/config";

const socials = [
  { href: CONTACT_INFO.social.github as string, icon: Github, label: "GitHub" },
  { href: CONTACT_INFO.social.linkedin as string, icon: Linkedin, label: "LinkedIn" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden">
      <div
        className="absolute top-1/3 left-1/4 w-[700px] h-[500px] rounded-full pointer-events-none blur-[180px]"
        style={{ background: "rgba(139,92,246,0.05)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/5 w-[500px] h-[400px] rounded-full pointer-events-none blur-[140px]"
        style={{ background: "rgba(217,70,239,0.03)" }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block h-px w-8" style={{ backgroundColor: "rgba(139,92,246,0.8)" }} />
          <span className="font-mono-custom text-violet-400 text-xs tracking-[0.3em] uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[0.88] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 13vw, 13.5rem)", fontWeight: 900 }}
          >
            MASSIMO
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.58, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[0.88] tracking-tighter"
            style={{
              fontSize: "clamp(2.5rem, 13vw, 13.5rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
            }}
          >
            PARZANESE
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.75 }}
          className="flex flex-col md:flex-row gap-10 items-start md:items-end justify-between"
        >
          <p className="font-body text-white/50 leading-relaxed max-w-xs" style={{ fontSize: "1.05rem" }}>
            Especializado en backend con <span className="text-white/80">Python</span>,{" "}
            <span className="text-white/80">React</span>, TypeScript y PostgreSQL. Construyendo
            aplicaciones web escalables y mantenibles.
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white/45 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.55)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)")}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body px-7 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: "rgba(139,92,246,0.85)" }}
            >
              Hablemos →
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <span className="font-mono-custom text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.span>
      </motion.div>
    </section>
  );
}