import { Container } from "@/app/components/@atoms/Container/Container";
import { Section, SectionHeader } from "@/app/components/@atoms/Section/Section";
import { TimelineEntry } from "@/app/components/@molecules/TimelineEntry/TimelineEntry";

const experience = [
  {
    startDate: "Oct 2023",
    endDate: "Dec 2025",
    title: "Web Developer",
    company: "IOS Services",
    bullets: [
      "Built and deployed a full-stack application using React, Next.js, TypeScript, Strapi CMS, and Tailwind CSS.",
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
    bullets: [
      "Managed social media content creation and scheduling using Photoshop and various platforms.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader label="Work Experience" />
        <div className="flex flex-col">
          {experience.map((entry) => (
            <TimelineEntry key={entry.company} {...entry} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
