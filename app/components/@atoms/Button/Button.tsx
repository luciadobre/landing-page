import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { cn, shouldUseNativeAnchor } from "@/app/lib/utils";

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
  const isNativeAnchor = Boolean(
    href && (external || download || shouldUseNativeAnchor(href)),
  );
  const Component: ElementType = href ? (isNativeAnchor ? "a" : Link) : "button";
  const componentProps = href
    ? {
        href,
        ...(isNativeAnchor && {
          download,
          target: external ? "_blank" : undefined,
          rel: external ? "noopener noreferrer" : undefined,
        }),
      }
    : {
        type: "button",
        onClick,
      };

  return (
    <Component {...componentProps} className={cn(buttonClass, className)}>
      {children}
    </Component>
  );
}
