interface SectionProps {
  children: React.ReactNode;
  id?: string;
  label?: string;
}

export function Section({ children, id, label }: SectionProps) {
  return (
    <>
      {id && <span id={id} className="anchor-target" aria-hidden="true" />}
      <section aria-label={label} className="border-b border-accent">
        {children}
      </section>
    </>
  );
}
