import { Container } from "@/app/components/@atoms/Container/Container";
import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionRail } from "@/app/components/@atoms/SectionRail/SectionRail";
import { ProjectCard } from "@/app/components/@molecules/ProjectCard/ProjectCard";
import { PROJECTS, WORKED_ON } from "@/app/config/site";
import { revealDelay } from "@/app/lib/utils";

export function ProjectsSection() {
  return (
    <Section id="projects" label="Selected projects and previous work">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <SectionRail>03 / Work</SectionRail>
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
            <RevealScope className="border-b border-border px-4 py-10 sm:px-7 lg:border-b-0 lg:border-r">
              <Heading red reveal className="mb-6">
                Selected buttons
              </Heading>
              <div className="grid gap-3">
                {PROJECTS.slice(0, 2).map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    revealDelay={`${120 + index * 90}ms`}
                  />
                ))}
              </div>
            </RevealScope>

            <RevealScope className="px-4 py-10 sm:px-7">
              <Heading red reveal className="mb-6">
                What I worked on before
              </Heading>
              <Heading variant="displayLg" reveal delay="100ms" className="mb-8 max-w-xl">
                Frontend,
                <span className="outline-dark block">
                  campaigns,
                </span>
                CMS.
              </Heading>
              <ul className="grid gap-3">
                {WORKED_ON.map((item, index) => (
                  <li
                    key={item}
                    data-reveal
                    className="border-t border-border pt-3 text-sm leading-relaxed text-dim"
                    style={revealDelay(`${180 + index * 70}ms`)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealScope>
          </div>
        </div>
      </Container>
    </Section>
  );
}
