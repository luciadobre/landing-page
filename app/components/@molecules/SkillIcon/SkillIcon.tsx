interface SkillIconProps {
  name: string;
  abbr: string;
}

export function SkillIcon({ name, abbr }: SkillIconProps) {
  return (
    <div className="group flex min-h-28 flex-col justify-between border-r border-b border-border bg-transparent p-4 transition-colors hover:bg-card">
      <div className="flex h-10 w-10 items-center justify-center text-primary">
        <span className="font-mono text-xl font-bold tracking-wider text-primary">
          {abbr}
        </span>
      </div>
      <span className="text-left text-[11px] uppercase leading-tight tracking-[0.08em] text-dim">
        {name}
      </span>
    </div>
  );
}
