import { cn } from "@/app/lib/utils";

interface FrameProps {
  children: React.ReactNode;
  as?: "div" | "header" | "section";
  variant?: "full" | "top" | "bottom";
  id?: string;
  className?: string;
}

const base =
  "border border-[rgba(176,38,255,0.35)]";

const variants = {
  full:
    "[clip-path:polygon(14px_0,calc(100%_-_14px)_0,100%_14px,100%_calc(100%_-_14px),calc(100%_-_14px)_100%,14px_100%,0_calc(100%_-_14px),0_14px)]",
  top:
    "[clip-path:polygon(14px_0,calc(100%_-_14px)_0,100%_14px,100%_100%,0_100%,0_14px)]",
  bottom:
    "[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_14px),calc(100%_-_14px)_100%,14px_100%,0_calc(100%_-_14px))]",
};

export function Frame({
  children,
  as: Element = "div",
  variant = "full",
  id,
  className,
}: FrameProps) {
  return (
    <Element id={id} className={cn(base, variants[variant], className)}>
      {children}
    </Element>
  );
}
