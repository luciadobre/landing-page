import { Container } from "@/app/components/@atoms/Container/Container";
import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionHeader } from "@/app/components/@atoms/SectionHeader/SectionHeader";
import { SectionRail } from "@/app/components/@atoms/SectionRail/SectionRail";
import { SkillIcon } from "@/app/components/@molecules/SkillIcon/SkillIcon";
import { SKILLS, TECH_STACK } from "@/app/config/site";
import { revealDelay } from "@/app/lib/utils";

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills and tools">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <SectionRail>02 / Stack</SectionRail>
          <div>
            <SectionHeader label="Skills & Tools" />
            <RevealScope className="grid grid-cols-2 border-b border-border sm:grid-cols-3 lg:grid-cols-6">
              {SKILLS.map((skill, index) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  revealDelay={`${index * 45}ms`}
                />
              ))}
            </RevealScope>

            <RevealScope className="px-4 py-8 sm:px-7">
              {TECH_STACK.map((item, index) => (
                <div
                  key={item.label}
                  className="grid gap-4 border-b border-border py-5 sm:grid-cols-[170px_1fr]"
                >
                  <Heading tagName="span" red reveal delay={`${index * 80}ms`}>
                    {item.label}
                  </Heading>
                  <span
                    data-reveal
                    className="text-[clamp(1.05rem,2vw,2rem)] leading-tight tracking-[-0.03em] text-accent"
                    style={revealDelay(`${80 + index * 80}ms`)}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </RevealScope>
          </div>
        </div>
      </Container>
    </Section>
  );
}
