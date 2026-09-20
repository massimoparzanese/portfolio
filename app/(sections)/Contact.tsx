"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { CONTACT_INFO } from "../lib/config";

export function Contact() {
  const cards = [
    {
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      external: false,
    },
    {
      href: CONTACT_INFO.social.linkedin as string,
      icon: Linkedin,
      label: "LinkedIn",
      value: "massimoparzanese",
      external: true,
    },
    {
      href: CONTACT_INFO.social.github as string,
      icon: Github,
      label: "GitHub",
      value: "massimoparzanese",
      external: true,
    },
    {
      href: null,
      icon: MapPin,
      label: "Ubicación",
      value: "La Plata, Buenos Aires",
      external: false,
    },
  ];

  return (
    <Section id="contact" label="Contacto" num="04">
      <h2
        className="font-display text-white leading-[0.88] tracking-tighter mb-14"
        style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 900 }}
      >
        Hablemos.
      </h2>

      <div className="grid sm:grid-cols-2 gap-3 mb-14">
        {cards.map(({ href, icon: Icon, label, value, external }) => {
          const inner = (
            <>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(139,92,246,0.09)" }}
              >
                <Icon className="w-4 h-4 text-violet-400" />
              </div>
              <div className="min-w-0">
                <p className="font-mono-custom text-white/28 text-[10px] tracking-[0.2em] uppercase mb-0.5">
                  {label}
                </p>
                <p className="font-body text-white/75 text-sm truncate">{value}</p>
              </div>
            </>
          );

          const baseClass = "flex items-center gap-4 p-5 rounded-xl transition-all duration-300";
          const styleBase = { border: "1px solid rgba(255,255,255,0.07)" };

          if (!href) {
            return (
              <div key={label} className={baseClass} style={styleBase}>
                {inner}
              </div>
            );
          }

          return (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`${baseClass} hover:border-violet-500/35 hover:bg-white/[0.015]`}
              style={styleBase}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              {inner}
            </a>
          );
        })}
      </div>

      <footer className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="font-mono-custom text-white/18 text-xs">© 2026 Massimo Parzanese</p>
      </footer>
    </Section>
  );
}