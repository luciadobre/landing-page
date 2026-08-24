export const SITE_CONFIG = {
  name: "LC.DEV",
  title: "Lucia-Corina Dobre - Frontend Developer",
  description:
    "I'm passionate about any project that looks interesting, lets me develop cool skills or makes a positive impact in society. So far I've loved coding and tech the most.",
  author: "Dobre Lucia-Corina",
  year: 2024,
  email: "lucia.dobre@proton.me",
  location: "Bucharest, Romania",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/dobre-lucia-corina",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero", activeClassName: "nav-link-home" },
  {
    label: "Experience",
    href: "#experience",
    activeClassName: "nav-link-experience",
  },
  { label: "Skills", href: "#skills", activeClassName: "nav-link-skills" },
  {
    label: "Chapters",
    href: "#chapters",
    activeClassName: "nav-link-chapters",
  },
  { label: "Contact", href: "#contact", activeClassName: "nav-link-contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: "/icons/github.svg" },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "/icons/email.svg",
  },
];

export const HERO_COPY = {
  tagline: "I have lots of dreams",
  profileLabel: "Profile / 00",
};

export const CONTACT_COPY = {
  sectionLabel: "04 / Contact",
  headingFirstLine: "Let's",
  headingSecondLine: "connect.",
  message: "If your company has a cool project, I want to be a part of it.",
};

export const SKILLS = [
  { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
  { name: "JavaScript", icon: "/icons/skills/javascript.svg" },
  { name: "React", icon: "/icons/skills/react.svg" },
  { name: "Next.js", icon: "/icons/skills/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/skills/tailwindcss.svg" },
  { name: "Zustand", icon: "/icons/skills/zustand.svg" },
  { name: "jQuery", icon: "/icons/skills/jquery.svg" },
  { name: "Node.js", icon: "/icons/skills/nodejs.svg" },
  { name: "NestJS", icon: "/icons/skills/nestjs.svg" },
  { name: "Express", icon: "/icons/skills/express.svg" },
  { name: "Strapi", icon: "/icons/skills/strapi.svg" },
  { name: "GraphQL", icon: "/icons/skills/graphql.svg" },
  { name: "Apollo", icon: "/icons/skills/apollo.svg" },
  { name: "tRPC", icon: "/icons/skills/trpc.svg" },
  { name: "Prisma", icon: "/icons/skills/prisma.svg" },
  { name: "MySQL", icon: "/icons/skills/mysql.svg" },
  { name: "MSSQL", icon: "/icons/skills/mssql.svg" },
  { name: "Git", icon: "/icons/skills/git.svg" },
  { name: "Docker", icon: "/icons/skills/docker.svg" },
  { name: "Jest", icon: "/icons/skills/jest.svg" },
  { name: "GitHub Actions", icon: "/icons/skills/github-actions.svg" },
  { name: "Jenkins", icon: "/icons/skills/jenkins.svg" },
  { name: "Python", icon: "/icons/skills/python.svg" },
  { name: "Photoshop", icon: "/icons/skills/photoshop.svg" },
  { name: "Premiere", icon: "/icons/skills/premiere.svg" },
  { name: "Source Filmmaker", icon: "/icons/skills/source-filmmaker.svg" },
  { name: "CorelDRAW", icon: "/icons/skills/coreldraw.svg" },
  { name: "AutoCAD", icon: "/icons/skills/autocad.svg" },
  { name: "Revit", icon: "/icons/skills/revit.svg" },
  { name: "Tableau", icon: "/icons/skills/tableau.svg" },
];

export const SKILLS_STRIP = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "Strapi",
  "GraphQL",
  "tRPC",
  "Prisma",
  "Git",
  "Docker",
  "Jenkins",
  "CI/CD",
  "Jest",
  "Express",
  "Photoshop",
  "Premiere",
  "Tableau",
  "R",
  "Economics",
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
