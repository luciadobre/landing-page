import { Container } from "@/app/components/@atoms/Container/Container";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { ProjectCard } from "@/app/components/@molecules/ProjectCard/ProjectCard";
import { PROJECTS, WORKED_ON } from "@/app/config/site";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <aside className="border-b border-muted px-4 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-dim lg:border-b-0 lg:border-r lg:px-5 lg:py-7">
            01 / Work
          </aside>
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
            <RevealScope className="border-b border-border px-4 py-10 sm:px-7 lg:border-b-0 lg:border-r">
              <p
                data-reveal
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-primary"
              >
                Selected buttons
              </p>
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
              <p
                data-reveal
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-primary"
              >
                What I worked on before
              </p>
              <h2
                data-reveal
                className="mb-8 max-w-xl text-[clamp(2.5rem,5vw,5.8rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-accent"
                style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              >
                Frontend,
                <span className="block text-transparent [-webkit-text-stroke:1px_#111212]">
                  campaigns,
                </span>
                CMS.
              </h2>
              <ul className="grid gap-3">
                {WORKED_ON.map((item, index) => (
                  <li
                    key={item}
                    data-reveal
                    className="border-t border-border pt-3 text-sm leading-relaxed text-dim"
                    style={{ "--reveal-delay": `${180 + index * 70}ms` } as React.CSSProperties}
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
