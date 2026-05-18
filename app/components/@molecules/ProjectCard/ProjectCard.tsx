import { TechBadge } from "@/app/components/@atoms/TechBadge/TechBadge";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
}

export function ProjectCard({ category, title, description, tech }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
      <div className="aspect-video bg-secondary border-b border-border flex items-center justify-center">
        <span className="text-dim text-xs uppercase tracking-widest">Preview</span>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <TechBadge label={category} className="w-fit bg-primary/10 border-primary/30 text-primary" />
        <h3 className="font-bold text-base">{title}</h3>
        <p className="text-dim text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>
      </div>
    </div>
  );
}
