import { cn } from "@/app/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-primary via-accent to-white bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
