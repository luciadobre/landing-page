export const SITE_CONFIG = {
  name: "LC.DEV",
  title: "Lucia-Corina Dobre - Frontend Developer",
  description:
    "Frontend Developer building fast, responsive and modern web interfaces with React, Next.js, TypeScript and Tailwind CSS.",
  author: "Dobre Lucia-Corina",
  year: 2024,
  email: "lucia.dobre@proton.me",
  phone: "+40 726 418 998",
  location: "Bucharest, Romania",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/dobre-lucia-corina",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: "/icons/github.svg" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "/icons/linkedin.svg" },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "/icons/email.svg" },
];

export const SKILLS = [
  { name: "TypeScript", abbr: "TS" },
  { name: "JavaScript", abbr: "JS" },
  { name: "React", abbr: "Re" },
  { name: "Next.js", abbr: "Nx" },
  { name: "Tailwind CSS", abbr: "TW" },
  { name: "Node.js", abbr: "No" },
  { name: "Strapi", abbr: "St" },
  { name: "GraphQL", abbr: "GQ" },
  { name: "MySQL", abbr: "DB" },
  { name: "Git", abbr: "Gt" },
  { name: "Docker", abbr: "Dk" },
  { name: "Jest", abbr: "Jt" },
];

export const TECH_STACK = [
  { label: "Languages", value: "TypeScript, JavaScript" },
  { label: "Frontend", value: "React, Next.js, Tailwind, Zustand, Framer Motion" },
  { label: "Backend", value: "Node.js, Strapi" },
  { label: "Database", value: "MySQL, MSSQL" },
  { label: "APIs & Data", value: "GraphQL, REST" },
  { label: "CI/CD", value: "GitHub Actions, Vercel" },
  { label: "Tooling", value: "Git, Jest, Docker" },
  { label: "Design", value: "Adobe Photoshop, Adobe Premiere" },
];

export const EXPERIENCE = [
  {
    startDate: "Oct 2023",
    endDate: "Dec 2025",
    title: "Frontend Developer",
    company: "IOS Services",
    kind: "Work",
    bullets: [
      "Built and deployed application interfaces with React, Next.js, TypeScript, Strapi CMS, and Tailwind CSS.",
      "Managed client-side state with Zustand.",
      "Developed marketing campaign features and landing pages.",
      "Contributed to internal CMS development.",
      "Integrated GraphQL and REST APIs using Apollo Client and Node.js.",
      "Wrote unit tests with Jest to ensure code quality.",
    ],
  },
  {
    startDate: "Jan 2020",
    endDate: "Feb 2023",
    title: "Social Media Manager",
    company: "Smart Gaming",
    kind: "Work",
    bullets: [
      "Managed social media content creation and scheduling using Photoshop and various platforms.",
    ],
  },
  {
    startDate: "2023",
    endDate: "2026",
    title: "Economic Informatics",
    company: "Babes-Bolyai University, Cluj-Napoca",
    kind: "Education",
    bullets: [
      "Studying economic informatics with a focus on software, data, business systems, and practical web development foundations.",
    ],
  },
];

export const PROJECTS = [
  {
    category: "Application UI",
    title: "DevHub",
    description:
      "Developer collaboration interface with project boards, chat flows and file-sharing screens.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Node.js", "MySQL"],
  },
  {
    category: "Campaign UI",
    title: "Smart Gaming Campaign",
    description:
      "Marketing campaign landing page for a gaming brand with animations and responsive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    category: "CMS / Dashboard",
    title: "ContentFlow CMS",
    description:
      "Headless CMS built with Strapi to manage articles, users and media assets.",
    tech: ["Strapi", "GraphQL", "React", "TypeScript", "REST", "MySQL"],
  },
];

export const WORKED_ON = [
  "Application dashboards and reusable frontend flows",
  "Landing pages and marketing campaign features",
  "Internal CMS screens and content management tooling",
  "GraphQL and REST API integrations with Apollo Client",
  "Photoshop-led content work for Smart Gaming social channels",
];

export const CONTACT_INFO = [
  { label: "Location", value: SITE_CONFIG.location },
  { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  {
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replaceAll(" ", "")}`,
  },
  { label: "LinkedIn", value: "/in/dobre-lucia-corina", href: SITE_CONFIG.linkedin },
];
