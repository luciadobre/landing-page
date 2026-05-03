import { cn } from "@/app/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

export function Section({ children, className, id, title }: SectionProps) {
  return (
    <section id={id} className={cn("pt-10 lg:pt-16", className)}>
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      {children}
    </section>
  );
}
