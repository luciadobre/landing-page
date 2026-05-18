import { Container } from "@/app/components/@atoms/Container/Container";
import { Section, SectionHeader } from "@/app/components/@atoms/Section/Section";
import { SkillIcon } from "@/app/components/@molecules/SkillIcon/SkillIcon";

const skills = [
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

const techStack = [
  { label: "Languages", value: "TypeScript, JavaScript" },
  { label: "Frontend", value: "React, Next.js, Tailwind, Zustand, Framer Motion" },
  { label: "Backend", value: "Node.js, Strapi" },
  { label: "Database", value: "MySQL, MSSQL" },
  { label: "APIs & Data", value: "GraphQL, REST" },
  { label: "CI/CD", value: "GitHub Actions, Vercel" },
  { label: "Tooling", value: "Git, Jest, Docker" },
  { label: "Design", value: "Adobe Photoshop, Adobe Premiere" },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader label="Skills & Tools" />
            <div className="grid grid-cols-6 gap-6">
              {skills.map((skill) => (
                <SkillIcon key={skill.name} name={skill.name} abbr={skill.abbr} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader label="Tech Stack" />
            <div className="flex flex-col divide-y divide-border">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[130px_1fr] gap-4 py-3"
                >
                  <span className="text-xs uppercase tracking-widest text-primary">
                    {item.label}
                  </span>
                  <span className="text-sm text-dim">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
