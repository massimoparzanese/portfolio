"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { projects, CONTACT_INFO } from "../lib/config";



export function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const featured = projects.filter((p) => !p.academic);
  const academic = projects.filter((p) => p.academic);

  return (
    <section id="projects" className="py-24 md:py-20 px-4 sm:px-6 bg-slate-900/50 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
          Proyectos Destacados
        </h2>
        <div className="w-24 h-1 rounded-full bg-linear-to-r from-violet-400 to-fuchsia-500 mx-auto mb-8" />
        <p className="text-center text-slate-400 mb-12 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Aplicaciones web desarrolladas end-to-end con <span className="text-violet-400 font-medium">tecnologías modernas</span> y mejores prácticas de desarrollo
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {featured.map((project) => (
            <motion.article
              key={project.id}
              className="group relative h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="relative h-full flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-violet-500/40 transition-colors duration-500 ease-out overflow-hidden hover:shadow-xl hover:shadow-violet-500/15"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 md:h-64 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full h-full">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    />
                  </motion.div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Category badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                  >
                    <span className="px-4 py-1.5 bg-fuchsia-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-fuchsia-400/30">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-85 md:opacity-0 md:translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {project.showCode !== false && project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.96 }}
                        className="p-3 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-110 border border-slate-700"
                        title="Ver código"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.96 }}
                        className="p-3 bg-linear-to-r from-violet-600/90 to-fuchsia-600/90 hover:from-violet-500 hover:to-fuchsia-500 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-110 border border-violet-400/30"
                        title="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>{/* END Image Section */}

                {/* Content Section */}
                <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                  {/* Title and Period */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-100 mb-2 group-hover:text-violet-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">{project.description}</p>

                  <AnimatePresence initial={false} mode="wait">
                    {expandedProjectId === project.id && (
                      <motion.div
                        key="long-description"
                        initial={{ height: 0, opacity: 0, y: -4 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -4 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-slate-400 leading-relaxed text-sm sm:text-base">{project.longDescription}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mb-6 mt-4">
                    <motion.button
                      onClick={() =>
                        setExpandedProjectId((current) => (current === project.id ? null : project.id))
                      }
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      {expandedProjectId === project.id ? "Ver menos" : "Ver más"}
                    </motion.button>
                  </div>

                  {project.impact && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-1">
                        Impacto
                      </p>
                      <p className="text-sm text-emerald-100/90 leading-relaxed">{project.impact}</p>
                    </motion.div>
                  )}
                  
                  {/* Technologies */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      Stack Tecnológico
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-300 rounded-lg text-sm border border-violet-500/20 font-medium hover:border-violet-400/50 hover:bg-violet-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Proyecto
                      </motion.a>
                    )}
                    {project.showCode !== false && project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Ver Código
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
        
        {/* Academic projects */}
        {academic.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-400 mb-2">Proyectos Académicos</h3>
            <p className="text-slate-500 mb-8 text-sm">Proyectos desarrollados en el contexto universitario.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {academic.map((project) => (
                <article
                  key={project.id}
                  className="bg-slate-800/30 border border-slate-700 hover:border-slate-600 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-violet-100 font-semibold">{project.title}</h4>
                      <span className="text-xs text-slate-500">{project.period}</span>
                    </div>
                    {project.showCode !== false && (
                      <div className="flex gap-2 shrink-0">
                        {project.githubLinks ? (
                          project.githubLinks.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors text-xs text-slate-300"
                            >
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                              {link.label}
                            </a>
                          ))
                        ) : project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                            title="Ver código"
                          >
                            <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  {project.impact && (
                    <p className="text-xs text-emerald-300 mb-4">Impacto: {project.impact}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-700/50 text-slate-400 rounded-md text-xs border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-fuchsia-100 mb-3">
            ¿Quieres ver más proyectos?
          </h3>
          <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Visita mi perfil de GitHub para explorar más repositorios, contribuciones y código fuente de otros proyectos
          </p>
          <a
            href={CONTACT_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Explorar GitHub
          </a>
        </div>
      </div>
    </section>
  );
}