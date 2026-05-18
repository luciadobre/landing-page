import { cn } from "@/app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const cutCornerShape =
  "[clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full bg-border/70 p-px", cutCornerShape, className)}>
      <div className={cn("h-full w-full bg-background", cutCornerShape)}>
        {children}
      </div>
    </div>
  );
}
