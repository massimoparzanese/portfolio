"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories, colorClasses } from "../lib/config";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent"
          variants={itemVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Habilidades Técnicas
        </motion.h2>
        <motion.div
          className="w-24 h-1 rounded-full bg-linear-to-r from-teal-400 to-emerald-500 mx-auto mb-8"
          variants={itemVariants}
        />
        <motion.p
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed"
          variants={itemVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Tecnologías y herramientas con las que trabajo para crear <span className="text-teal-400 font-medium">soluciones innovadoras</span>
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.article
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              variants={itemVariants}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold text-teal-100 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-300 ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
