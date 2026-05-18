interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  action?: { label: string; href: string };
}

export function SectionHeader({ label, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <p>
        <span>//</span> {label}
      </p>
      {action && <a href={action.href}>{action.label} {"->"}</a>}
    </div>
  );
}
