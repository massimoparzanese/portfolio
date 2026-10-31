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
├── images/           # Image assets
└── massimo-foto.jpeg # Profile photo used in the About section
```

## Getting Started

The project uses [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

`pnpm start` serves the existing production build, so run `pnpm build` first whenever the code changes.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server (requires a previous build) |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run the TypeScript compiler without emitting files |
