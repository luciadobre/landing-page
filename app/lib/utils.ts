import type { CSSProperties } from "react";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ").trim();
}

export function revealDelay(delay: string): CSSProperties {
  return { "--reveal-delay": delay } as CSSProperties;
}

export function shouldUseNativeAnchor(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("#");
}
