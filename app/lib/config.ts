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
    title: "El Club del Filete",
    description: "Plataforma cultural dedicada al arte del fileteado argentino",
    longDescription: "Aplicación web full stack desarrollada para una plataforma cultural relacionada con el fileteado argentino. El proyecto incluye un frontend moderno con React y Tailwind CSS, backend robusto con Node.js implementando APIs REST, y base de datos PostgreSQL. La aplicación maneja autenticación de usuarios, gestión de contenido dinámico y galería de artistas. Actualmente en producción y recibiendo visitas diarias.",
    impact: "Lanzado en producción con uso real diario y arquitectura mantenible para crecimiento de contenido.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "APIs REST", "Git"],
    liveUrl: "https://elclubdelfilete.com.ar/",
    githubUrl: "",
    period: "Oct 2024 - Mar 2025",
    image: "/ElClubDelFilete.png",
    category: "Full Stack",
    showCode: false,
  },
  {
    id: 4,
    title: "RAFAM II - Ministerio de Economía PBA",
    description: "Sistema de gestión integral para los municipios de la Provincia de Buenos Aires.",
    longDescription: "Plataforma que centraliza procesos administrativos y operativos de municipios bonaerense. Actualmente a cargo del desarrollo y optimización de stored procedures en PostgreSQL para lógica de negocio crítica, diseño y mantenimiento de índices para mejorar el rendimiento de consultas pesadas, y migraciones de esquemas. Trabajo con React para el frontend y Django para el backend.",
    impact: "Optimización de procesos de gestión municipal a nivel provincial.",
    technologies: ["React", "Django", "Docker", "PostgreSQL", "Stored Procedures", "Índices"],
    period: "May 2026 - Presente",
    image: "",
    category: "Full Stack",
    showCode: false,
  },
  {
    id: 3,
    title: "Plataforma Interna de Gestion Documental y Novedades",
    description: "Como Desarrollador Fullstack en Aligo Tres Arroyos, desarrolle una plataforma interna para centralizar documentos y novedades corporativas con acceso seguro.",
    longDescription: "Como Desarrollador Fullstack en Aligo Tres Arroyos, desarrolle una plataforma de gestion interna en Next.js (TypeScript) y Tailwind CSS para centralizar la subida de documentos y la publicacion de novedades corporativas. La arquitectura integra Supabase para autenticacion y base de datos, junto con Cloudflare R2 para almacenamiento escalable de archivos de gran volumen. Esta combinacion permitio politicas de acceso granulares y una interfaz optimizada para mejorar la comunicacion interna y la disponibilidad inmediata de informacion critica.",
    impact: "Centralizo documentos internos y novedades en un unico flujo, mejorando acceso y comunicacion operativa.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare R2"],
    liveUrl: "https://www.aligo.com.ar/",
    githubUrl: "https://github.com/ohmia-studio/Aligo",
    period: "Sep 2025 - Dic 2025",
    image: "/globe.svg",
    category: "Full Stack",
    showCode: true,
  },
  {
    id: 2,
    title: "Envy | Clínica de Fertilidad",
    description: "Sistema de gestión integral para una clínica de fertilidad. Pacientes gestionan turnos e historia clínica; médicos registran tratamientos y seguimiento embrionario; operadores de laboratorio registran punciones, fertilizaciones y donaciones.",
    longDescription: "Sistema de gestión integral para una clínica de fertilidad. Pacientes gestionan turnos e historia clínica; médicos registran tratamientos y seguimiento embrionario; operadores de laboratorio registran punciones, fertilizaciones y donaciones.",
    impact: "Se unificaron procesos clinicos y de laboratorio en una plataforma trazable con roles diferenciados.",
    technologies: ["Django", "React", "TypeScript", "Supabase", "Tailwind CSS", "SQLite"],
    githubUrl: "https://github.com/massimoparzanese/envy",
    githubLinks: [
      { label: "Backend", url: "https://github.com/TTPS-Grupo-1/backend-Clinica" },
      { label: "Frontend", url: "https://github.com/TTPS-Grupo-1/frontend-Clinica" },
    ],
    period: "2025",
    image: "",
    category: "Full Stack",
    showCode: true,
    academic: true,
  },
];
/**
 * Categorías de habilidades técnicas
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Flask", "Django", "APIs REST", "Java"],
    color: "blue",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    color: "cyan",
  },
  {
    title: "Bases de Datos",
    skills: [
      "PostgreSQL",
      "Stored Procedures",
      "Índices y optimización",
      "Diseño de bases de datos",
      "Modelado entidad-relación",
      "Optimización de consultas SQL",
    ],
    color: "teal",
  },
  {
    title: "Herramientas & Metodologías",
    skills: ["Git", "Docker", "Linux", "POO", "Refactoring y patrones de diseño", "Tests unitarios"],
    color: "purple",
  },
  {
    title: "Lenguajes",
    skills: ["JavaScript", "Python", "Java", "SQL"],
    color: "pink",
  },
];

export const colorClasses: Record<string, string> = {
  blue: "bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20",
  cyan: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20",
  teal: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20",
  purple: "bg-teal-600/10 text-teal-200 border-teal-600/20 hover:bg-teal-600/20",
  pink: "bg-emerald-600/10 text-emerald-200 border-emerald-600/20 hover:bg-emerald-600/20",
};