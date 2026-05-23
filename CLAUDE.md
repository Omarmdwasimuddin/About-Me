@AGENTS.md
# CLAUDE.md — Online CV Project

## Project Overview

This is a professional online CV (curriculum vitae) for Md. Wasim Uddin, a Fullstack Developer and Software Engineer. The goal is to replicate the structure and feel of a hard copy CV — clean, formal, ATS-friendly layout — but delivered as a web page. It is intended for job applications in software engineering and fullstack development roles.

---

## Owner Information

- **Name:** Md. Wasim Uddin
- **Role:** Fullstack Developer / Software Engineer
- **Experience Level:** Strong — multiple real-world projects completed
- **Phone:** 01878594002
- **GitHub:** https://github.com/Omarmdwasimuddin
- **Portfolio:** https://wasim-uddin-portfolio.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/mwasimuddin/

---

## Professional Summary

Detail-oriented Full-Stack Developer with hands-on project and freelance experience building scalable web applications using React.js, Next.js, Prisma, and PostgreSQL. Delivered complete web solutions for local businesses including websites, admin dashboards, and billing systems. Proficient in RESTful APIs, responsive UI design, and containerized deployments with Docker. Actively seeking opportunities to bring technical skills and client delivery experience to a professional team.

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

## Work Experience

### Freelance Full-Stack Developer
**Self-Employed | 2025 – Present**

- Developed and delivered complete web solutions for local businesses, including a tax and trade services firm (Tax & Trade Solutions).
- Built a business website with modern UI, service listings, and contact system using Next.js and Tailwind CSS.
- Designed and implemented an Admin Dashboard for internal management including client records and reporting.
- Created an Invoice & Billing System enabling automated invoice generation and payment tracking.
- Managed full project lifecycle — from client requirement gathering to deployment and post-launch support.

---

## Projects

### Tax & Trade Solutions — Client Project
**Status:** 90% Completed
**Live URL:** https://tax-and-trade-solutions.vercel.app/

- Built a full-stack platform for publishing and selling legal/tax reference books (VAT, Customs, Bond, Exam guides) in Bangladesh.
- Implemented a **yearly subscription system** allowing users to read soft-copy books online via SSLCommerz payment gateway.
- Developed a **PDF reader** with content protection — no-download enforcement, watermarking, and copy-paste blocking.
- Built an **Admin Dashboard** for managing books, users, subscriptions, orders, blog posts, and consultancy requests.
- Integrated **Supabase Auth** for user authentication and role-based access control (Admin, Writer, Reader).
- Designed a **Blog System** with nested comments, admin moderation, and category/tag filtering.
- Configured **PWA support** via `next-pwa` for an app-like mobile experience.
- Applied **GSAP** and **Framer Motion** for scroll-triggered animations and smooth UI transitions.
- Integrating **n8n-powered RAG (Retrieval-Augmented Generation)** workflow for intelligent document search and automation.
- **Tech Stack:** Next.js (App Router), Tailwind CSS, Prisma ORM, PostgreSQL, Supabase Auth & Storage, SSLCommerz, GSAP, Framer Motion, n8n

---

### Ayesha Maryam Store — Inventory Management System
**Status:** In Progress (Client Project)

- Building a full-featured multi-branch shop management system for a grocery/general store (2 branches, Chattogram).
- Includes product management with barcode scanning, batch/lot tracking, and expiry date alerts.
- POS (Point of Sale) interface with auto stock deduction on sale and auto stock increment on purchase.
- Invoice PDF generation for both sales and purchases with branch-specific headers.
- Employee management module — hiring, salary records, document uploads, and status tracking (Active / Resigned / Terminated).
- Sales, Purchase, and Profit/Loss reports with PDF and Excel export.
- Role-based access control — Admin (full access) and Sales Staff (limited access).
- Low stock alert system with configurable reorder levels per product.
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Prisma ORM v6, PostgreSQL (NeonDB), NextAuth.js, Uploadthing, jsPDF, Recharts, Zustand, TanStack Query

---

## Education

- **Degree:** B.Sc (Hons) in Computer Science and Engineering (CSE)
- **Institute:** Bangladesh Institute of Science and Technology (BIST)

---

## Certifications & Courses

### DevOps Engineering *(Ongoing)*
**Interactive Cares**
- 4-month course covering CI/CD pipelines, container orchestration, version control, and cloud deployment.

### Mastering Next.js & Prisma
**Ostad**
- 4-month hands-on full-stack course covering API integration, authentication, and deployment workflows.

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