"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  num: string;
  children: ReactNode;
}

export function Section({ id, label, num, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className="py-32 px-6">
      <div
        className="max-w-7xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className="grid lg:grid-cols-[200px_1fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28 pt-3">
            <span
              className="font-display block leading-none mb-3 select-none"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                color: "rgba(255,255,255,0.07)",
              }}
            >
              {num}
            </span>
            <h2 className="font-display text-white/70 font-bold" style={{ fontSize: "1rem", letterSpacing: "0.05em" }}>
              {label}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}