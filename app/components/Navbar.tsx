"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg md:bg-transparent md:border-0 md:shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-5">
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer text-xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-fuchsia-300 transition-all"
          >
            MP
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer p-2 text-slate-300 hover:text-white transition-colors"
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

        <div className="hidden md:flex justify-center">
          <motion.div
            initial={false}
            animate={isScrolled ? { y: 0, scale: 1 } : { y: 6, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 shadow-2xl transition-colors duration-300 ${
              isScrolled
                ? "border-slate-700 bg-slate-950/90 backdrop-blur-xl shadow-black/30"
                : "border-slate-800 bg-slate-950/70 backdrop-blur-xl"
            }`}
          >
            <motion.button
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer px-3 py-2 text-xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-fuchsia-300 transition-all"
            >
              MP
            </motion.button>

            <div className="mx-1 h-6 w-px bg-slate-700" />

            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer px-4 py-2 text-violet-200 hover:text-fuchsia-300 hover:bg-slate-800/60 rounded-full transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-1 px-4 py-2 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 cursor-pointer text-white rounded-full transition-all duration-300"
            >
              Hablemos
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-4 pb-4 pt-4 px-2 rounded-2xl border border-slate-800/80 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/30"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer px-4 py-2 text-violet-200 hover:text-fuchsia-300 hover:bg-slate-800/70 rounded-lg transition-all duration-300 text-left"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 px-4 py-2 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg transition-all duration-300 text-center"
                >
                  Hablemos
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}