import { cn } from "@/app/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "text-[10px] uppercase tracking-widest text-dim border border-border px-2 py-1 bg-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
