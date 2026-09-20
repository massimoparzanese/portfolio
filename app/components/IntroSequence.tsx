"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const INTRO_PHRASES = ["Hola.", "Soy Massimo.", "Construyo en la web.", "Este es mi trabajo."];

type Phase = "wait" | "type" | "hold" | "clear";

export function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("wait");

  const phrase = INTRO_PHRASES[phraseIdx];

  useEffect(() => {
    const t = setTimeout(() => setPhase("type"), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "type") return;
    if (charCount >= phrase.length) {
      const t = setTimeout(() => setPhase("hold"), 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCharCount((c) => c + 1), 68);
    return () => clearTimeout(t);
  }, [phase, charCount, phrase]);

  useEffect(() => {
    if (phase !== "hold") return;
    const isLast = phraseIdx === INTRO_PHRASES.length - 1;
    const t = setTimeout(
      () => {
        if (isLast) {
          onComplete();
        } else {
          setPhase("clear");
        }
      },
      isLast ? 1000 : 900,
    );
    return () => clearTimeout(t);
  }, [phase, phraseIdx, onComplete]);

  useEffect(() => {
    if (phase !== "clear") return;
    const t = setTimeout(() => {
      setPhraseIdx((p) => p + 1);
      setCharCount(0);
      setPhase("type");
    }, 380);
    return () => clearTimeout(t);
  }, [phase]);

  const textVisible = phase !== "wait" && phase !== "clear";

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#08080f" }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 65%)" }}
      />

      <div
        className="px-8 text-center select-none"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: `translateY(${phase === "clear" ? "-1.5rem" : phase === "wait" ? "1rem" : "0"})`,
          transition: "opacity 0.32s ease, transform 0.32s ease",
        }}
      >
        <p
          className="font-display text-white leading-none tracking-tighter"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)", fontWeight: 900 }}
        >
          {phrase.slice(0, charCount)}
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "linear" }}
            className="text-violet-400"
          >
            |
          </motion.span>
        </p>
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {INTRO_PHRASES.map((_, i) => (
          <span
            key={i}
            className="h-[2px] rounded-full transition-all duration-500"
            style={{
              width: i === phraseIdx ? "2rem" : i < phraseIdx ? "1.25rem" : "0.4rem",
              backgroundColor:
                i === phraseIdx
                  ? "white"
                  : i < phraseIdx
                    ? "rgba(139,92,246,0.6)"
                    : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>

      <button
        onClick={onComplete}
        className="font-mono-custom absolute bottom-[3.2rem] right-10 text-white/20 hover:text-white/55 text-xs tracking-widest transition-colors duration-300 cursor-pointer"
      >
        saltar →
      </button>
    </motion.div>
  );
}