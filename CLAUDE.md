# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Kenny Howard (kennyhoward.com), built with Astro 5. Static site with no backend — pure Astro components, Markdown content, and CSS (no UI framework like React/Vue).

## Commands

- `nvm use` — switch to Node 22.12.0 (required, see .nvmrc)
- `npm run dev` — start dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — preview production build locally

No test runner or linter is configured.

## Architecture

**Content system:** Portfolio work entries live in `src/content/work/*.md` with frontmatter validated by the Zod schema in `src/content.config.ts`. Key fields: `title`, `description`, `publishDate`, `tags`, `img`, `showcasePriority` (controls homepage ordering — lower number = higher priority), and optional `websiteUrl`/`githubUrl`.

**Skills data:** Defined as a TypeScript array in `src/content/skills.ts` (not using Astro content collections). Each skill has `category`, `name`, and `level`. Grouped by category via `src/utils/skillsHelper.ts`.

**Pages:** `src/pages/work/[...slug].astro` dynamically generates a page per work entry. The homepage (`index.astro`) shows the top 4 projects sorted by `showcasePriority`.

**Layout:** Single `BaseLayout.astro` wraps all pages with `MainHead`, `Nav`, and `Footer`. Supports light/dark theme via CSS custom properties and a `.theme-dark` class.

**Images:** Hosted externally on Cloudinary, referenced by URL in content frontmatter and components. Static background assets are in `public/assets/backgrounds/`.
