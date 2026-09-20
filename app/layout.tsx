import type { Metadata } from "next";
import { Unbounded, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Massimo Parzanese | Full Stack Developer",
  description: "Desarrollador Full Stack especializado en backend con Python, React, TypeScript y PostgreSQL. La Plata, Buenos Aires.",
  keywords: ["portfolio", "desarrollador", "full stack", "react", "nextjs", "typescript", "python", "django"],
  authors: [{ name: "Massimo Parzanese" }],
  openGraph: {
    title: "Massimo Parzanese | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en backend con Python, React, TypeScript y PostgreSQL.",
    type: "website",
    locale: "es_AR",
    siteName: "Massimo Parzanese Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massimo Parzanese | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en backend con Python, React, TypeScript y PostgreSQL.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${unbounded.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
