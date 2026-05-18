import { Container } from "@/app/components/@atoms/Container/Container";
import { Section, SectionHeader } from "@/app/components/@atoms/Section/Section";
import { ProjectCard } from "@/app/components/@molecules/ProjectCard/ProjectCard";

const projects = [
  {
    category: "Full-Stack App",
    title: "DevHub",
    description:
      "Developer collaboration platform with real-time chat, project boards and file sharing.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Node.js", "MySQL"],
  },
  {
    category: "Landing Page",
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

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          label="Featured Projects"
          action={{ label: "View All Projects", href: "#" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
