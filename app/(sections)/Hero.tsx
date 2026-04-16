"use client";

import { Mail, ChevronDown, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Disponible para proyectos</span>
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Massimo
              <br />
              Parzanese
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent"></div>
              <p className="text-2xl md:text-3xl text-slate-200">
                Desarrollador Full Stack
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Especializado en backend con <span className="text-violet-400 font-semibold">Python</span>, <span className="text-fuchsia-400 font-semibold">React</span>, Typescript y PostgreSQL.
              Construyendo aplicaciones web escalables y mantenibles.
            </p>

            {/* Location */}
            <p className="text-slate-500 flex items-center gap-2">
              <span className="text-orange-400">📍</span>
              La Plata, Buenos Aires, Argentina
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/massimoparzanese"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-violet-500/10 hover:bg-violet-500/20 text-violet-100 rounded-xl transition-all duration-300 hover:scale-105 border border-violet-500/20 hover:border-violet-400/50 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/massimoparzanese"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-violet-50 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:massimoparzanese@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-100 rounded-xl transition-all duration-300 hover:scale-105 border border-fuchsia-500/20 hover:border-orange-400/50 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
              Email
            </a>
          </motion.div>
        </div>

        {/* Right side - Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Animated gradient orb */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 via-fuchsia-600/30 to-orange-600/30 blur-3xl"
            ></motion.div>

            {/* Code icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-violet-950/80 to-fuchsia-950/80 backdrop-blur-xl p-12 rounded-3xl border border-violet-500/20">
                  <Code2 className="w-24 h-24 text-violet-400" />
                </div>
              </motion.div>
            </div>

            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-fuchsia-400 rounded-full shadow-lg shadow-fuchsia-400/50"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-violet-400 transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}