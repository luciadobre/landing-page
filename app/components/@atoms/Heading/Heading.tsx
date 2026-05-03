import { cn } from "@/app/lib/utils";

interface HeadingProps {
  level?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = "h2", children, className }: HeadingProps) {
  const baseStyles = "font-bold tracking-tight";

  const sizes = {
    h1: "text-5xl lg:text-7xl",
    h2: "text-4xl lg:text-5xl",
    h3: "text-2xl lg:text-3xl",
  };

  const Element = level;

  return (
    <Element className={cn(baseStyles, sizes[level], className)}>
      {children}
    </Element>
  );
}
