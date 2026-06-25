export const cvData = {
  personalInfo: {
    name: "Md. Wasim Uddin",
    title: "Fullstack Developer / Software Engineer",
    email: "mdwasimu015@gmail.com",
    phone: "01878594002",
    location: "Dhaka, Bangladesh",
    github: "https://github.com/Omarmdwasimuddin",
    linkedin: "https://www.linkedin.com/in/mwasimuddin/",
    website: "https://wasim-uddin-portfolio.vercel.app/",
    imageSrc: "/profile-img/Wasim-ai.png",
  },
  summary:
    "Detail-oriented Full-Stack Developer with hands-on project and freelance experience building scalable web applications using React.js, Next.js, Prisma, and PostgreSQL. Delivered complete web solutions for local businesses including websites, admin dashboards, and billing systems. Proficient in RESTful APIs, responsive UI design, and containerized deployments with Docker. Actively seeking opportunities to bring technical skills and client delivery experience to a professional team.",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "Prisma ORM", "REST API Design"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL"],
    },
    {
      category: "Automation & Workflow",
      items: ["n8n (workflow automation, integrations, custom nodes)"],
    },
    {
      category: "CMS / E-commerce",
      items: ["Shopify", "WordPress"],
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "CI/CD Pipelines (Jenkins)", "DevOps practices"],
    },
  ],
  experience: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      duration: "2025 – Present",
      description: [
        "Developed and delivered complete web solutions for local businesses, including a tax and trade services firm (Tax & Trade Solutions).",
        "Built a business website with modern UI, service listings, and contact system using Next.js and Tailwind CSS.",
        "Designed and implemented an Admin Dashboard for internal management including client records and reporting.",
        "Created an Invoice & Billing System enabling automated invoice generation and payment tracking.",
        "Managed full project lifecycle — from client requirement gathering to deployment and post-launch support.",
      ],
    },
  ],
  projects: [
    {
      name: "Tax & Trade Solutions — Client Project",
      status: "Completed",
      liveUrl: "https://tax-and-trade-solutions.vercel.app/",
      description: "Full-stack platform for publishing and selling legal/tax reference books. Features a yearly subscription system, SSLCommerz integration, and a secure PDF reader with content protection. Currently integrating n8n-powered RAG (Retrieval-Augmented Generation) workflow for intelligent document search and automation.",
      techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "SSLCommerz", "GSAP", "Framer Motion", "n8n"],
    },
    {
      name: "Nazim Enterprise — Inventory Management System (Client Project)",
      status: "Completed",
      liveUrl: "https://nazim-enterprise.vercel.app/",
      description: "Building a full-featured multi-branch shop management system with POS, barcode scanning, and expiry tracking. Includes modules for employee management, automated stock adjustment, and detailed sales/profit reports with PDF/Excel export.",
      techStack: ["Next.js", "TypeScript", "shadcn/ui", "Prisma v6", "PostgreSQL (NeonDB)", "NextAuth.js", "Uploadthing", "Zustand", "TanStack Query"],
    },
  ],
  education: [
    {
      degree: "B.Sc (Hons) in Computer Science and Engineering (CSE)",
      institution: "Bangladesh Institute of Science and Technology (BIST)",
      year: "2024",
    },
  ],
  certifications: [
    {
      name: "DevOps Engineering (Ongoing)",
      institution: "Interactive Cares",
      duration: "4-month course",
      details: "CI/CD pipelines, container orchestration, version control, and cloud deployment.",
    },
    {
      name: "Mastering Next.js & Prisma",
      institution: "Ostad",
      duration: "4-month course",
      details: "Hands-on full-stack course covering API integration, authentication, and deployment workflows.",
    },
  ],
};
