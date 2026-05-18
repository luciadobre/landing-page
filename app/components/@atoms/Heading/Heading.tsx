import { cn } from "@/app/lib/utils";

interface HeadingProps {
  level?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

const styles = {
  h1: "text-5xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-tight",
  h2: "text-2xl font-bold uppercase tracking-widest",
  h3: "text-base font-bold",
};

export function Heading({ level = "h2", children, className }: HeadingProps) {
  const Element = level;

  return <Element className={cn(styles[level], className)}>{children}</Element>;
}
