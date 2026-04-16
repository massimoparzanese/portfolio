"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, GraduationCap, Target } from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div className="max-w-6xl mx-auto" variants={sectionVariants}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent"
          variants={itemVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Sobre mí
        </motion.h2>
        <motion.div
          className="w-24 h-1 rounded-full bg-linear-to-r from-violet-400 to-fuchsia-500 mx-auto mb-16"
          variants={itemVariants}
        />
        
        <motion.div className="grid md:grid-cols-3 gap-8" variants={sectionVariants}>
          {/* Who am I */}
          <motion.article
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
            variants={itemVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="bg-violet-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-7 h-7 text-violet-400" />
            </div>
            <h3 className="text-2xl font-bold text-violet-100 mb-4">Quién soy</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              Desarrollador Full Stack con enfoque en backend. Diseño y construyo
              APIs REST, sistemas de bases de datos e interfaces web con diferentes
              tecnologías, como:{" "}
              <span className="text-violet-400 font-medium">Node.js</span>,{" "}
              <span className="text-violet-400 font-medium">TypeScript</span>,{" "}
              <span className="text-violet-400 font-medium">Python</span> y{" "}
              <span className="text-violet-400 font-medium">PostgreSQL</span>.
              Me importa que el código sea limpio, mantenible y que resuelva
              problemas reales.
            </p>
          </motion.article>
          
          {/* What I do */}
          <motion.article
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10"
            variants={itemVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="bg-fuchsia-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-fuchsia-400" />
            </div>
            <h3 className="text-2xl font-bold text-fuchsia-100 mb-4">A qué me dedico</h3>
            <p className="text-slate-300 leading-relaxed mb-4 text-base">
              Actualmente me desempeño como <span className="text-fuchsia-400 font-semibold">Ayudante Alumno</span> en la Facultad de Informática - UNLP, enseñando Fundamentos de organización de datos y Diseño de bases de datos.
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              Graduado en <span className="text-fuchsia-400 font-semibold">Analista Programador Universitario</span>. Actualmente cursando el <span className="text-fuchsia-400 font-semibold">4to año de la Licenciatura en Sistemas</span>.
            </p>
          </motion.article>
          
          {/* My goals */}
          <motion.article
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            variants={itemVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-orange-100 mb-4">Mis objetivos</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              Me interesa construir <span className="text-orange-400 font-medium">aplicaciones escalables</span>, <span className="text-orange-400 font-medium">optimizadas</span> y <span className="text-orange-400 font-medium">mantenibles</span>, trabajando en colaboración con otros desarrolladores y equipos de producto. Busco seguir creciendo profesionalmente y aportar valor en proyectos desafiantes.
            </p>
          </motion.article>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}