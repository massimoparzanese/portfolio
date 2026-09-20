"use client";

import { Section } from "../components/Section";

const details = [
  {
    label: "FORMACIÓN",
    primary: "Analista Programador Universitario",
    secondary: "UNLP · Graduado · Cursando Licenciatura en Sistemas (4to año)",
    accent: "rgba(139,92,246,0.55)",
  },
  {
    label: "ROL ACTUAL",
    primary: "Ayudante Alumno — Facultad de Informática",
    secondary: "UNLP · Fundamentos de organización de datos · Diseño de bases de datos",
    accent: "rgba(217,70,239,0.5)",
  },
  {
    label: "UBICACIÓN",
    primary: "La Plata, Buenos Aires",
    secondary: "Argentina",
    accent: "rgba(249,115,22,0.5)",
  },
  {
    label: "FOCO",
    primary: "Aplicaciones escalables y mantenibles",
    secondary: "Código limpio. Colaboración. Sistemas que duran.",
    accent: "rgba(255,255,255,0.18)",
  },
];

export function About() {
  return (
    <Section id="about" label="Sobre mí" num="01">
      <p className="font-body text-white/72 leading-[1.7] mb-14" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}>
        Desarrollador Full Stack con enfoque en backend. Diseño y construyo APIs REST,
        sistemas de bases de datos e interfaces web con{" "}
        <span className="text-white font-medium">Node.js</span>,{" "}
        <span className="text-white font-medium">TypeScript</span>,{" "}
        <span className="text-white font-medium">Python</span> y{" "}
        <span className="text-white font-medium">PostgreSQL</span>.
        Me importa que el código sea limpio, mantenible y que resuelva problemas reales.
      </p>

      <div className="grid sm:grid-cols-2 gap-7">
        {details.map(({ label, primary, secondary, accent }) => (
          <div key={label} className="pl-5 py-0.5" style={{ borderLeft: `2px solid ${accent}` }}>
            <p className="font-mono-custom text-white/30 text-[10px] tracking-[0.22em] mb-1.5 uppercase">
              {label}
            </p>
            <p className="font-body text-white/80 text-sm leading-snug mb-0.5">{primary}</p>
            <p className="font-body text-white/38 text-sm">{secondary}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}