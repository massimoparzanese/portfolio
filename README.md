# Massimo Parzanese — Portfolio

Personal portfolio website built with Next.js 16, React 19, TypeScript, and TailwindCSS v4.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS v4
- **Linting**: ESLint 9

## Project Structure

```
app/
├── (sections)/       # Page sections (Hero, Projects, Skills, About, Contact)
├── components/       # Reusable components (Navbar, UI)
├── interfaces/       # TypeScript interfaces
├── lib/              # Config data and utilities
└── page.tsx          # Root page
public/               # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
