import Image from "next/image";

interface SkillIconProps {
  name: string;
  icon: string;
  revealDelay?: string;
}

export function SkillIcon({ name, icon, revealDelay = "0ms" }: SkillIconProps) {
  return (
    <div
      className="group flex min-h-28 flex-col justify-between border-r border-b border-border bg-transparent p-4 transition-colors hover:bg-card"
    >
      <div
        data-reveal
        className="flex h-10 w-10 items-center justify-center text-primary"
        style={{ "--reveal-delay": revealDelay } as React.CSSProperties}
      >
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
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
