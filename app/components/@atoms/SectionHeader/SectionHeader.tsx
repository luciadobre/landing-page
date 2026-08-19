import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { revealDelay } from "@/app/lib/utils";

interface SectionHeaderProps {
  label: string;
  action?: { label: string; href: string };
}

export function SectionHeader({ label, action }: SectionHeaderProps) {
  return (
    <header className="border-b border-border px-4 py-10 sm:px-7 sm:py-14">
      <RevealScope>
        <p
          data-reveal
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary"
          style={revealDelay("60ms")}
        >
          {label}
        </p>
        <h2
          data-reveal
          className="max-w-5xl text-[clamp(3.2rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-accent"
          style={revealDelay("140ms")}
        >
          {label.replace("&", "/")}
        </h2>
        {action && (
          <a
            data-reveal
            href={action.href}
            className="mt-8 inline-block border-b border-accent pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:border-primary hover:text-primary"
            style={revealDelay("220ms")}
          >
            {action.label}
          </a>
        )}
      </RevealScope>
    </header>
  );
}
