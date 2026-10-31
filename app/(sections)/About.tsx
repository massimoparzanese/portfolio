"use client";

import Image from "next/image";
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
      <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start mb-14">
        <div className="relative w-full max-w-[240px] aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/massimo-foto.jpeg"
            alt="Massimo Parzanese"
            fill
            priority={false}
            className="object-cover object-[50%_30%]"
            sizes="(max-width: 768px) 240px, 240px"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          />
        </div>

        <div className="space-y-6">
          <p className="font-body text-white/72 leading-[1.7]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}>
            Desarrollador Full Stack con enfoque en backend. Diseño y construyo APIs REST,
            sistemas de bases de datos e interfaces web con{" "}
            <span className="text-white font-medium">Node.js</span>,{" "}
            <span className="text-white font-medium">TypeScript</span>,{" "}
            <span className="text-white font-medium">Python</span> y{" "}
            <span className="text-white font-medium">PostgreSQL</span>.
            Me importa que el código sea limpio, mantenible y que resuelva problemas reales.
          </p>
          <p className="font-body text-white/55 leading-[1.7] text-base">
            Hoy trabajo en <span className="text-white/80">RAFAM II</span> (Ministerio de Economía de la
            Provincia de Buenos Aires), desarrollando stored procedures, índices y migraciones en PostgreSQL
            sobre un stack React + Django. En paralelo soy ayudante alumno en la UNLP y curso el 4to año
            de la Licenciatura en Sistemas.
          </p>
        </div>
      </div>

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