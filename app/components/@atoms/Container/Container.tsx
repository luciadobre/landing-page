import { cn } from "@/app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-[min(1500px,calc(100%_-_48px))]", className)}>
      {children}
    </div>
  );
}
