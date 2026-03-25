/**
 * Portfolio content — update links here when ready.
 */

export const profile = {
  name: "Md. Wasim Uddin",
  role: "Fullstack Developer / Software Engineer",
  tagline:
    "I build end-to-end web applications with a focus on clean APIs, solid data layers, and thoughtful UI.",
  about:
    "I am a fullstack developer with strong experience shipping real-world projects across the stack. I work comfortably from React and Next.js through Node.js and NestJS, with PostgreSQL and MySQL. I also work with Shopify and WordPress when the product calls for it. Right now I am deepening my skills in DevOps—Docker, CI/CD, and deployment—along with cloud fundamentals.",
  learning:
    "Currently learning DevOps: Docker, CI/CD pipelines, deployment strategies, and cloud infrastructure basics.",
  imageSrc: "/profile-img/Wasim-ai.png",
  imageAlt: "Md. Wasim Uddin",
  /** Replace these placeholders with your real education details. */
  education: [
    {
      degree: "B.Sc (Hon's) in Computer Science and Engineering (CSE)",
      school: "Bangladesh Institute of Science and Technology (BIST)",
      timeframe: "—",
      details: "",
    },
  ],
  skills: {
    Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "NestJS", "Prisma ORM", "REST API design"],
    Databases: ["PostgreSQL", "MySQL"],
    "CMS / E-commerce": ["Shopify", "WordPress"],
    "Infrastructure & DevOps": ["Docker", "DevOps practices (in progress)"],
  },
  projectsSummary:
    "I have completed multiple production-style projects spanning frontend, backend, databases, and integrations—contact me if you would like to discuss specifics.",
  /** Set your public URLs; leave empty to hide a link. */
  contact: {
    github: "https://github.com/Omarmdwasimuddin",
    linkedin: "https://www.linkedin.com/in/mwasimuddin/",
    email: "mdwasimu015@gmail.com", 
  },
} as const;
