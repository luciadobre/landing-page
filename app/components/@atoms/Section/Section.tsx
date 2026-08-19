interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="border-b border-accent">
      {children}
    </section>
  );
}
