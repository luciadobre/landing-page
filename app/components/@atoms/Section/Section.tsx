interface SectionProps {
  children: React.ReactNode;
  id?: string;
  label?: string;
}

export function Section({ children, id, label }: SectionProps) {
  return (
    <section id={id} aria-label={label} className="border-b border-accent">
      {children}
    </section>
  );
}
