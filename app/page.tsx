"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero, About, Projects, Skills, Contact } from "@/app/(sections)";
import Navbar from "./components/Navbar";
import { IntroSequence } from "./components/IntroSequence";
import { CustomCursor } from "./components/CustomCursor";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#08080f" }}>
      <style>{`
        * { cursor: none !important; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <CustomCursor />

      <AnimatePresence mode="wait">
        {!ready ? (
          <IntroSequence key="intro" onComplete={() => setReady(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}