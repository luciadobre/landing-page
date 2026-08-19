interface SectionHeaderProps {
  label: string;
  action?: { label: string; href: string };
}

export function SectionHeader({ label, action }: SectionHeaderProps) {
  return (
    <header className="border-b border-border px-4 py-10 sm:px-7 sm:py-14">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
        {label}
      </p>
      <h2 className="max-w-5xl text-[clamp(3.2rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-accent">
        {label.replace("&", "/")}
      </h2>
      {action && (
        <a
          href={action.href}
          className="mt-8 inline-block border-b border-accent pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:border-primary hover:text-primary"
        >
          {action.label}
        </a>
      )}
    </header>
  );
}
