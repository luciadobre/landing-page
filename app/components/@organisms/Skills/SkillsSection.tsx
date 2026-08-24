import { Container } from "@/app/components/@atoms/Container/Container";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionHeader } from "@/app/components/@atoms/SectionHeader/SectionHeader";
import { SectionRail } from "@/app/components/@atoms/SectionRail/SectionRail";
import { SkillIcon } from "@/app/components/@molecules/SkillIcon/SkillIcon";
import { SKILLS } from "@/app/config/site";

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills and tools">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <SectionRail>02 / Stack</SectionRail>
          <div>
            <SectionHeader label="Skills & Tools" />
            <RevealScope className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {SKILLS.map((skill, index) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  revealDelay={`${index * 45}ms`}
                />
              ))}
            </RevealScope>
          </div>
        </div>
      </Container>
    </Section>
  );
}
