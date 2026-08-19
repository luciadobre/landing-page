import { Container } from "@/app/components/@atoms/Container/Container";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionHeader } from "@/app/components/@atoms/SectionHeader/SectionHeader";
import { SkillIcon } from "@/app/components/@molecules/SkillIcon/SkillIcon";
import { SKILLS, TECH_STACK } from "@/app/config/site";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <aside className="border-b border-muted px-4 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-dim lg:border-b-0 lg:border-r lg:px-5 lg:py-7">
            02 / Stack
          </aside>
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
                  <span
                    data-reveal
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary"
                    style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                  >
                    {item.label}
                  </span>
                  <span
                    data-reveal
                    className="text-[clamp(1.05rem,2vw,2rem)] leading-tight tracking-[-0.03em] text-accent"
                    style={{ "--reveal-delay": `${80 + index * 80}ms` } as React.CSSProperties}
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
