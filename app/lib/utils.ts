import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS con clsx y las optimiza con tailwind-merge
 * Útil para condicionales y merge de clases Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Función para formatear fechas de forma consistente
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Función para lazy loading de imágenes  
 */
export function getImagePlaceholder(width: number = 400, height: number = 300) {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">
        ${width}×${height}
      </text>
    </svg>`
  )}`;
}