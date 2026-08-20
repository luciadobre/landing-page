import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { TechBadge } from "@/app/components/@atoms/TechBadge/TechBadge";
import { revealDelay } from "@/app/lib/utils";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
  revealDelay?: string;
}

export function ProjectCard({
  category,
  title,
  description,
  tech,
  revealDelay: delay = "0ms",
}: ProjectCardProps) {
  return (
    <article
      className="group border border-border bg-transparent transition-colors hover:bg-card"
    >
      <div className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <div
            data-reveal
            style={revealDelay(delay)}
          >
            <TechBadge
              label={category}
              className="w-fit border-primary/40 bg-transparent text-primary"
            />
          </div>
          <Heading
            variant="displaySm"
            reveal
            delay={`calc(${delay} + 70ms)`}
            className="mt-4"
          >
            {title}
          </Heading>
          <p
            data-reveal
            className="mt-3 max-w-xl text-sm leading-relaxed text-dim"
            style={revealDelay(`calc(${delay} + 140ms)`)}
          >
            {description}
          </p>
        </div>
        <div
          data-reveal
          className="flex max-w-xs flex-wrap gap-2 sm:justify-end"
          style={revealDelay(`calc(${delay} + 210ms)`)}
        >
          {tech.slice(0, 4).map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
