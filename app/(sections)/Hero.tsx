'use client';
import { Mail, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../lib/config';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-teal-500/10 border border-teal-500/30 rounded-full">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-teal-400 text-sm font-medium">Disponible para nuevas oportunidades</span>
        </div>

        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Massimo Parzanese
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-300 mb-6">
          Desarrollador Full Stack · Enfoque en Backend
        </p>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Me apasiona transformar ideas en productos reales: desde el diseño de
          la base de datos hasta la interfaz. Escribo código limpio, mantenible
          y con ganas de que escale. Actualmente como Ayudante Alumno en Diseño de Bases de Datos en la{" "}
          <span className="text-blue-400 font-medium">UNLP</span> y buscando
          nuevos desafíos profesionales.
        </p>

        
        {/* Social links */}
        <nav aria-label="Redes sociales" className="flex gap-4 justify-center mb-12">
          <a
            href={CONTACT_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a
            href={CONTACT_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </nav>
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}