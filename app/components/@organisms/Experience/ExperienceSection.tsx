import { Container } from "@/app/components/@atoms/Container/Container";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionHeader } from "@/app/components/@atoms/SectionHeader/SectionHeader";
import { TimelineEntry } from "@/app/components/@molecules/TimelineEntry/TimelineEntry";
import { EXPERIENCE } from "@/app/config/site";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <aside className="border-b border-muted px-4 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-dim lg:border-b-0 lg:border-r lg:px-5 lg:py-7">
            03 / Bottom
          </aside>
          <div>
            <SectionHeader label="Jobs & Education" />
            <div className="px-4 pb-12 sm:px-7">
              {EXPERIENCE.map((entry) => (
                <TimelineEntry key={entry.company} {...entry} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
