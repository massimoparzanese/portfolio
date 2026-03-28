import { Code2, GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Sobre mí
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Who am I */}
          <article className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quién soy</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              Desarrollador Full Stack con enfoque en backend. Diseño y construyo
              APIs REST, sistemas de bases de datos e interfaces web con diferentes
              tecnologías, como:{" "}
              <span className="text-blue-400 font-medium">Node.js</span>,{" "}
              <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
              <span className="text-blue-400 font-medium">Python</span> y{" "}
              <span className="text-blue-400 font-medium">PostgreSQL</span>.
              Me importa que el código sea limpio, mantenible y que resuelva
              problemas reales.
            </p>
          </article>
          
          {/* What I do */}
          <article className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">A qué me dedico</h3>
            <p className="text-slate-300 leading-relaxed mb-4 text-base">
              Actualmente me desempeño como <span className="text-cyan-400 font-semibold">Ayudante Alumno</span> en la Facultad de Informática - UNLP, enseñando Fundamentos de organización de datos y Diseño de bases de datos.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Graduado en <span className="text-cyan-400 font-semibold">Analista Programador Universitario</span>. Actualmente cursando el <span className="text-cyan-400 font-semibold">4to año de la Licenciatura en Sistemas</span>.
            </p>
          </article>
          
          {/* My goals */}
          <article className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="bg-teal-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mis objetivos</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              Me interesa construir <span className="text-teal-400 font-medium">aplicaciones escalables</span>, <span className="text-teal-400 font-medium">optimizadas</span> y <span className="text-teal-400 font-medium">mantenibles</span>, trabajando en colaboración con otros desarrolladores y equipos de producto. Busco seguir creciendo profesionalmente y aportar valor en proyectos desafiantes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}