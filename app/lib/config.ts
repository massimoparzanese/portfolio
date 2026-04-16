import type { Project, SkillCategory, ContactInfo } from "@/app/interfaces";

/**
 * Información de contacto
 * Actualiza esto con tus datos reales
 */
export const CONTACT_INFO: ContactInfo = {
  email: "massimoparzanese@gmail.com",
  phone: "+54 2346 602440",
  location: "La Plata, Buenos Aires, Argentina",
  social: {
    github: "https://github.com/massimoparzanese",
    linkedin: "https://www.linkedin.com/in/massimo-parzanese-b05509344/",
  },
};

/**
 * Lista de proyectos destacados
 * Reemplaza con tus proyectos reales desde el Figma
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'El Club del Filete',
    description: 'Plataforma cultural dedicada al arte del fileteado argentino',
    longDescription: 'Aplicación web full stack desarrollada para una plataforma cultural relacionada con el fileteado argentino. El proyecto incluye un frontend moderno con React y Tailwind CSS, backend robusto con Node.js implementando APIs REST, y base de datos PostgreSQL. La aplicación maneja autenticación de usuarios, gestión de contenido dinámico y galería de artistas. Actualmente en producción y recibiendo visitas diarias.',
    impact: 'Lanzado en producción con uso real diario y arquitectura mantenible para crecimiento de contenido.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'APIs REST', 'Git'],
    liveUrl: 'https://elclubdelfilete.com.ar/',
    githubUrl: '',
    period: 'Oct 2024 - Mar 2025',
    image: '/ElClubDelFilete.png',
    category: 'Full Stack',
    showCode: false,
  },
  {
    id: 3,
    title: 'Plataforma Interna de Gestion Documental y Novedades',
    description: 'Como Desarrollador Fullstack en Aligo Tres Arroyos, desarrolle una plataforma interna para centralizar documentos y novedades corporativas con acceso seguro.',
    longDescription: 'Como Desarrollador Fullstack en Aligo Tres Arroyos, desarrolle una plataforma de gestion interna en Next.js (TypeScript) y Tailwind CSS para centralizar la subida de documentos y la publicacion de novedades corporativas. La arquitectura integra Supabase para autenticacion y base de datos, junto con Cloudflare R2 para almacenamiento escalable de archivos de gran volumen. Esta combinacion permitio politicas de acceso granulares y una interfaz optimizada para mejorar la comunicacion interna y la disponibilidad inmediata de informacion critica.',
    impact: 'Centralizo documentos internos y novedades en un unico flujo, mejorando acceso y comunicacion operativa.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Cloudflare R2'],
    liveUrl: 'https://www.aligo.com.ar/',
    githubUrl: 'https://github.com/ohmia-studio/Aligo',
    period: 'Sep 2025 - Dic 2025',
    image: '/globe.svg',
    category: 'Full Stack',
    showCode: true,
  },
  {
    id: 2,
    title: 'Envy | Clínica de Fertilidad',
    description: 'Sistema de gestión integral para una clínica de fertilidad. Pacientes gestionan turnos e historia clínica; médicos registran tratamientos y seguimiento embrionario; operadores de laboratorio registran punciones, fertilizaciones y donaciones.',
    longDescription: 'Sistema de gestión integral para una clínica de fertilidad. Pacientes gestionan turnos e historia clínica; médicos registran tratamientos y seguimiento embrionario; operadores de laboratorio registran punciones, fertilizaciones y donaciones.',
    impact: 'Se unificaron procesos clinicos y de laboratorio en una plataforma trazable con roles diferenciados.',
    technologies: ['Django', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'SQLite'],
    githubUrl: 'https://github.com/massimoparzanese/envy',
    githubLinks: [
      { label: 'Backend', url: 'https://github.com/TTPS-Grupo-1/backend-Clinica' },
      { label: 'Frontend', url: 'https://github.com/TTPS-Grupo-1/frontend-Clinica' },
    ],
    period: '2025',
    image: '',
    category: 'Full Stack',
    showCode: true,
    academic: true,
  },
];
/**
 * Categorías de habilidades técnicas
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Flask', 'Django', 'APIs REST', 'Java'],
    color: 'blue',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
    color: 'cyan',
  },
  {
    title: 'Bases de Datos',
    skills: ['PostgreSQL', 'SQL', 'Diseño de bases de datos', 'Modelado entidad-relación', 'Optimización de consultas SQL'],
    color: 'teal',
  },
  {
    title: 'Herramientas & Metodologías',
    skills: ['Git', 'Docker', 'Linux', 'POO', 'Refactoring y patrones de diseño', 'Tests unitarios'],
    color: 'purple',
  },
  {
    title: 'Lenguajes',
    skills: ['JavaScript', 'Python', 'Java', 'SQL'],
    color: 'pink',
  },
];

export const colorClasses: Record<string, string> = {
  blue: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20',
  cyan: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20 hover:bg-fuchsia-500/20',
  teal: 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:bg-orange-500/20',
  purple: 'bg-violet-600/10 text-violet-200 border-violet-600/20 hover:bg-violet-600/20',
  pink: 'bg-fuchsia-600/10 text-fuchsia-200 border-fuchsia-600/20 hover:bg-fuchsia-600/20',
};

/**
 * Configuración del sitio
 */
export const SITE_CONFIG = {
  name: "Massimo Portfolio",
  description: "Portfolio personal de Massimo - Desarrollador Full Stack",
  author: "Massimo",
  year: new Date().getFullYear(),
  theme: "dark" as const,
};