import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { revealDelay } from "@/app/lib/utils";

interface SectionHeaderProps {
  label: string;
  action?: { label: string; href: string };
}

export function SectionHeader({ label, action }: SectionHeaderProps) {
  return (
    <div className="border-b border-border px-4 pb-10 pt-4 sm:px-7 sm:pb-14 lg:pt-7">
      <RevealScope>
        <Heading variant="displayXl" reveal delay="60ms" className="max-w-5xl">
          {label.replace("&", "/")}
        </Heading>
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
    </div>
  );
}
