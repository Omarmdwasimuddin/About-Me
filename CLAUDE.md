@AGENTS.md
# CLAUDE.md — Online CV Project

## Project Overview

This is a professional online CV (curriculum vitae) for Md. Wasim Uddin, a Fullstack Developer and Software Engineer. The goal is to replicate the structure and feel of a hard copy CV — clean, formal, ATS-friendly layout — but delivered as a web page. It is intended for job applications in software engineering and fullstack development roles.

---

## Owner Information

- **Name:** Md. Wasim Uddin
- **Role:** Fullstack Developer / Software Engineer
- **Experience Level:** Strong — multiple real-world projects completed

---

## CV Sections (in order)

Standard hard-copy CV structure must be followed strictly:

1. **Header** — Full name, job title, contact details (email, phone, GitHub, LinkedIn, location)
2. **Summary / Objective** — 2–3 line professional summary tailored for software engineering roles
3. **Skills** — Grouped by category, concise and scannable
4. **Work Experience** — Job title, company, duration, bullet-point responsibilities/achievements
5. **Projects** — Project name, short description, tech stack used
6. **Education** — Degree, institution, year
7. **Certifications / Courses** *(if any)*

---

## Skills

### Frontend
- React.js, Next.js
- JavaScript (ES6+), TypeScript
- Tailwind CSS, Bootstrap

### Backend
- Node.js, NestJS
- Prisma ORM
- REST API Design

### Databases
- PostgreSQL, MySQL

### Automation & Workflow
- n8n (workflow automation, integrations, custom nodes)

### CMS / E-commerce
- Shopify, WordPress

### DevOps & Infrastructure
- Docker
- CI/CD Pipelines (Jenkins)
- DevOps practices (actively expanding)

---

## Education

- **Degree:** B.Sc (Hons) in Computer Science and Engineering (CSE)
- **Institute:** Bangladesh Institute of Science and Technology (BIST)

---

## Design Direction

- **Tone:** Formal, professional, recruiter-friendly
- **Theme:** Light background (white/off-white) — like a printed CV on paper
- **Layout:** Single-page, top-to-bottom, no hero section, no animations
- **Typography:** Clean serif or sans-serif — optimized for readability
- **No flashy effects** — this should look like a digital hard copy, not a portfolio
- **Print-friendly:** Should render well when printed or exported to PDF

---

## Development Notes

- **Framework:** Next.js (preferred)
- **Styling:** Tailwind CSS
- **No unnecessary dependencies — keep it lean**
- **Mobile responsive** is required
- **Print CSS** (`@media print`) should be included for proper PDF/print output
- **No animations or scroll effects** — keep it static and document-like
- Keep all CV content in a separate `data/cv.ts` config file for easy updates
- Follow Next.js App Router conventions

---

## Conventions

- Use clean, readable code
- Component-based structure (e.g., `<Header />`, `<Skills />`, `<Experience />`, `<Education />`)
- All content lives in `data/cv.ts` — no hardcoded text in components
- Follow Next.js App Router conventions