"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "../lib/config";

const SKILLS_BASE = [...new Set(skillCategories.flatMap((category) => category.skills))];
const SKILLS_ROW_A = [...SKILLS_BASE, ...SKILLS_BASE];
const SKILLS_ROW_B = [...[...SKILLS_BASE].reverse(), ...[...SKILLS_BASE].reverse()];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 overflow-hidden" aria-label="Stack tecnológico">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 mb-14"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="flex items-baseline gap-5">
          <h2
            className="font-display leading-none select-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, color: "rgba(255,255,255,0.07)" }}
          >
            Stack
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <ul className="flex gap-3" style={{ animation: "marquee-fwd 38s linear infinite", width: "max-content" }} aria-hidden="true">
          {SKILLS_ROW_A.map((skill, i) => (
            <li
              key={`a-${skill}-${i}`}
              data-cursor-hover=""
              className="font-mono-custom shrink-0 px-5 py-2.5 rounded-full text-white/38 hover:text-white/80 transition-all duration-300 hover:border-violet-500/40 select-none"
              style={{ border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.76rem" }}
            >
              {skill}
            </li>
          ))}
        </ul>

        <ul className="flex gap-3" style={{ animation: "marquee-bwd 44s linear infinite", width: "max-content" }} aria-hidden="true">
          {SKILLS_ROW_B.map((skill, i) => (
            <li
              key={`b-${skill}-${i}`}
              data-cursor-hover=""
              className="font-mono-custom shrink-0 px-5 py-2.5 rounded-full text-white/25 hover:text-white/70 transition-all duration-300 hover:border-violet-500/30 select-none"
              style={{ border: "1px solid rgba(255,255,255,0.05)", fontSize: "0.76rem" }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}