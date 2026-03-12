'use client';

import { useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import type { Project } from '../interfaces';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { projects, CONTACT_INFO } from '../lib/config';



export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featured = projects.filter((p) => !p.academic);
  const academic = projects.filter((p) => p.academic);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Proyectos Destacados
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Aplicaciones web desarrolladas end-to-end con <span className="text-blue-400 font-medium">tecnologías modernas</span> y mejores prácticas de desarrollo
        </p>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image Section */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-blue-400/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.showCode !== false && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-110 border border-slate-700"
                        title="Ver código"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-110 border border-blue-400/30"
                        title="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>{/* END Image Section */}

                {/* Content Section */}
                <div className="p-8">
                  {/* Title and Period */}
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      Stack Tecnológico
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20 font-medium hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Proyecto
                      </a>
                    )}
                    {project.showCode !== false && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c.98.005 1.97.138 2.89.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Ver Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
                      <h4 className="text-white font-semibold">{project.title}</h4>
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
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Quieres ver más proyectos?
          </h3>
          <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Visita mi perfil de GitHub para explorar más repositorios, contribuciones y código fuente de otros proyectos
          </p>
          <a
            href={CONTACT_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-600"
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