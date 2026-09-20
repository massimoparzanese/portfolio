"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const to = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navItems: [string, string][] = [
    ["Sobre mí", "about"],
    ["Proyectos", "projects"],
    ["Stack", "skills"],
    ["Contacto", "contact"],
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(8,8,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer font-display text-white font-black text-xs tracking-[0.25em] uppercase"
        >
          Massimo Parzanese
        </button>

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); to(id); }}
              className="font-body text-white/35 hover:text-white/90 transition-colors duration-300 text-sm tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/massimoparzanese"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body flex items-center gap-2 px-4 py-1.5 rounded-full text-white/40 hover:text-white/80 text-xs tracking-wide transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden cursor-pointer p-2 text-white/60 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 px-6 pb-6 pt-2 bg-[rgba(8,8,15,0.97)] backdrop-blur-xl border-b border-white/5" aria-label="Menú móvil">
          <ul className="flex flex-col gap-4">
            {navItems.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    to(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-body text-white/60 hover:text-white transition-colors text-sm tracking-wide"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/massimoparzanese"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-wide transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.nav>
  );
}