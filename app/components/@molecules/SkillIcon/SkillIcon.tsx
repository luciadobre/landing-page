interface SkillIconProps {
  name: string;
  abbr: string;
  revealDelay?: string;
}

export function SkillIcon({ name, abbr, revealDelay = "0ms" }: SkillIconProps) {
  return (
    <div
      className="group flex min-h-28 flex-col justify-between border-r border-b border-border bg-transparent p-4 transition-colors hover:bg-card"
    >
      <div
        data-reveal
        className="flex h-10 w-10 items-center justify-center text-primary"
        style={{ "--reveal-delay": revealDelay } as React.CSSProperties}
      >
        <span className="font-mono text-xl font-bold tracking-wider text-primary">
          {abbr}
        </span>
      </div>
      <span
        data-reveal
        className="text-left text-[11px] uppercase leading-tight tracking-[0.08em] text-dim"
        style={{ "--reveal-delay": `calc(${revealDelay} + 70ms)` } as React.CSSProperties}
      >
        {name}
      </span>
    </div>
  );
}
