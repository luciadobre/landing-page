import { cn } from "@/app/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-dim",
        className,
      )}
    >
      {label}
    </span>
  );
}
