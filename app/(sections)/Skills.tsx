import { skillCategories, colorClasses } from '../lib/config';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Habilidades Técnicas
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Tecnologías y herramientas con las que trabajo para crear <span className="text-blue-400 font-medium">soluciones innovadoras</span>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-300 ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}