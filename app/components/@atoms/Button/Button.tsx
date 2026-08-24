import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

const buttonClass =
  "inline-flex items-center justify-center gap-2 border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:border-accent hover:bg-accent hover:text-background";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  download,
  external,
  className,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(buttonClass, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn(buttonClass, className)}>
      {children}
    </button>
  );
}
