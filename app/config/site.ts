export const SITE_CONFIG = {
  description:
    "I'm passionate about any project that looks interesting, lets me develop cool skills or makes a positive impact in society. So far I've loved coding and tech the most.",
  author: "Dobre Lucia-Corina",
  email: "lucia.dobre@proton.me",
  location: "Bucharest, Romania",
  github: "https://github.com/luciadobre",
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
  roleLabel: "Frontend Dev",
  tagline: "I have lots of dreams",
  profileLabel: "00 / Profile",
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
    bullets: [
      "The job I loved the most and where I **grew the fastest**, going from no experience to developing a **fullstack application**.",
      "I loved working **agile**, the tickets I got felt **gamified** and it was fun.",
      "I was **obsessed with bugs** and loved figuring them out by myself, but I also really enjoyed using **new tech** or getting new features, especially ones where I had to go through documentation and learn a new tool.",
      "The team was pretty small so I got to learn some **backend**, some **testing**, **ci/cd and deploys**, as well as working with other non technical teams and understanding their needs.",
      "I really **loved working with the team** too. Working with someone on a problem, going back and forth on ideas, trying different things and eventually discovering the solution together was the best. I also always kept in mind that the code I wrote had to make their life easier too, so it was **easy to read, well documented** and not something they would struggle to understand.",
    ],
  },
  {
    startDate: "Jan 2020",
    endDate: "Feb 2023",
    title: "Social Media Manager",
    company: "Smart Gaming",
    bullets: [
      "Did social media for **Vikin.gg**, a small Dota 2 team. The main platform was Twitter but we expanded to other platforms like Discord, Facebook and even YouTube.",
      "I was the only person in my team and had **almost 0 budget**, but it was overall a success. Teams with similar performance and results to us had around 1k-2k followers and I **reached over 5k**, with many **viral posts**, community events and a lot of interactions with fans, other teams and people in the industry, like event casters. I made sure we had a presence everywhere our fans were, even on places like Reddit, and also involved our players for fun interactions while also being considerate of their training.",
      "One of my earliest coding projects was for this community, a **Discord bot in Python** called Jeffy that scraped Liquipedia and informed fans of the team's upcoming games.",
      "I was **VERY diligent** with posts. Sometimes I would spend a few hours **rigging a model** for a single meme. If I had a great idea for a post, it didn't matter how hard it was, I would make it happen no matter what.",
      "I learned **A LOT**, like **Photoshop and Premiere**, but even **3D model rigging with Source Filmmaker** for the videos.",
    ],
  },
  {
    startDate: "2022",
    endDate: "2024",
    dateNote: "Bachelors in 2026",
    title: "Economic Informatics",
    company: "Babes-Bolyai University, Cluj-Napoca",
    bullets: [
      "I liked this angle of adding **business and economics** studies to my programming understanding.",
      "While I loved the fullstack understanding I got, subjects like **algorithms and Big Data** were my favorite.",
      "It **strengthened my foundation** for sure, but I also learned a lot of new things.",
    ],
  },
  {
    startDate: "Before 2020",
    title: "Various Projects",
    company: "Freelance",
    bullets: [
      "I had some early design jobs using tools like **CorelDRAW, Maya, AutoCAD and Revit**.",
    ],
  },
];
