import Link from "next/link";
import { Heading } from "@/app/components/@atoms/Heading/Heading";

interface LoadingMarkProps {
  label?: string;
  compact?: boolean;
}

interface PageStateProps {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function LoadingMark({ label = "Loading", compact = false }: LoadingMarkProps) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-dim ${
        compact ? "justify-center" : "viewport-minus-header justify-center"
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="relative h-4 w-4 rounded-full border border-accent/25">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-pulse" />
      </span>
      <span>{label}</span>
    </div>
  );
}

export function PageState({ eyebrow, title, description, action }: PageStateProps) {
  const actionClass =
    "mt-8 inline-flex border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background";

  return (
    <main className="viewport-minus-header flex items-center bg-background text-accent">
      <section className="state-shell py-16">
        <Heading red className="mb-6">{eyebrow}</Heading>
        <Heading variant="displayHero">{title}</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug tracking-[-0.025em] text-dim">
          {description}
        </p>
        {action?.href ? (
          <Link href={action.href} className={actionClass}>
            {action.label}
          </Link>
        ) : null}
        {action?.onClick ? (
          <button type="button" onClick={action.onClick} className={actionClass}>
            {action.label}
          </button>
        ) : null}
      </section>
    </main>
  );
}
