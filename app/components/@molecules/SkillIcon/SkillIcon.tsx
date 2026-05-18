import { cn } from "@/app/lib/utils";

interface SkillIconProps {
  name: string;
  abbr: string;
  className?: string;
}

export function SkillIcon({ name, abbr, className }: SkillIconProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 group", className)}>
      <div className="w-14 h-14 border border-border bg-card flex items-center justify-center group-hover:border-primary group-hover:shadow-glow-sm transition-all duration-200">
        <span className="text-xs font-bold text-primary tracking-wider">
          {abbr}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-dim text-center leading-tight">
        {name}
      </span>
    </div>
  );
}
