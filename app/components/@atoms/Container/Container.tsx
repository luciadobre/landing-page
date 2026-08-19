import { cn } from "@/app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("site-shell", className)}>
      {children}
    </div>
  );
}
