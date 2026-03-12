import { Hero, About, Projects, Skills, Contact } from '@/app/(sections)';
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}