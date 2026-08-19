interface SectionRailProps {
  children: React.ReactNode;
}

export function SectionRail({ children }: SectionRailProps) {
  return (
    <aside
      aria-hidden="true"
      className="border-b border-muted px-4 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-dim lg:border-b-0 lg:border-r lg:px-5 lg:py-7"
    >
      {children}
    </aside>
  );
}
