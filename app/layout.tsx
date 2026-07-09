import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
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
        className={`${bricolage.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
