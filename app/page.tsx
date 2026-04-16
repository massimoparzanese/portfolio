import { Hero, About, Projects, Skills, Contact } from '@/app/(sections)';
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_75%_65%,rgba(168,85,247,0.16),transparent_42%),radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.12),transparent_35%),linear-gradient(180deg,rgba(19,26,44,1)_0%,rgba(12,18,34,1)_45%,rgba(8,12,26,1)_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}