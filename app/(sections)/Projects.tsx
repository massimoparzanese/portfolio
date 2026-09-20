"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "../components/Section";
import { projects, CONTACT_INFO } from "../lib/config";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="projects" label="Proyectos" num="02">
      <div>
        {projects.map((p, index) => {
          const isHovered = hovered === p.id;
          const codeUrl =
            p.showCode !== false
              ? p.githubUrl || p.githubLinks?.[0]?.url || undefined
              : undefined;

          return (
            <article
              key={p.id}
              className="group relative py-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute inset-x-0 inset-y-0 rounded-xl pointer-events-none transition-opacity duration-300"
                style={{
                  background: "rgba(139,92,246,0.025)",
                  opacity: isHovered ? 1 : 0,
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-baseline gap-5 min-w-0">
                    <span className="font-mono-custom text-white/20 text-xs shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-display font-bold leading-tight transition-all duration-300"
                      style={{
                        fontSize: "clamp(1.7rem, 4.5vw, 3rem)",
                        color: isHovered ? "#a78bfa" : "white",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>

                  <div
                    className="flex gap-2 shrink-0 mt-1 transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateX(0)" : "translateX(8px)",
                    }}
                  >
                    {codeUrl && (
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Código fuente"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                        style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver en vivo"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:brightness-110"
                        style={{ backgroundColor: "rgba(139,92,246,0.85)" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isHovered ? "220px" : "0px" }}
                >
                  <p className="font-body text-white/48 text-sm leading-relaxed mb-5">{p.description}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
                    {p.technologies.map((t) => (
                      <li
                        key={t}
                        className="font-mono-custom text-violet-400/65 rounded-full px-3 py-1 text-[11px]"
                        style={{ border: "1px solid rgba(139,92,246,0.2)" }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {p.impact && (
                    <p className="font-body text-white/30 text-xs leading-relaxed mt-5">{p.impact}</p>
                  )}
                  <span className="font-mono-custom text-white/18 text-[11px] mt-5 block">{p.period}</span>
                </div>
              </div>
            </article>
          );
        })}

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

        <div className="pt-9">
          <a
            className="group font-body inline-flex items-center gap-3 text-white/32 hover:text-white/80 transition-colors duration-300 text-sm"
            href={CONTACT_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más en GitHub
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}