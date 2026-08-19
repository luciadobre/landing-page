import { TechBadge } from "@/app/components/@atoms/TechBadge/TechBadge";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
}

export function ProjectCard({
  category,
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <article className="group border border-border bg-transparent transition-colors hover:bg-card">
      <div className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
        <TechBadge
          label={category}
          className="w-fit border-primary/40 bg-transparent text-primary"
        />
        <h3 className="mt-4 text-[clamp(1.5rem,2.6vw,2.4rem)] font-bold uppercase leading-none tracking-[-0.045em] text-accent">
          {title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim">
          {description}
        </p>
        </div>
        <div className="flex max-w-xs flex-wrap gap-2 sm:justify-end">
          {tech.slice(0, 4).map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
