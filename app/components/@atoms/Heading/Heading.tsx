import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn, revealDelay } from "@/app/lib/utils";

const labelVariant = "font-mono text-[11px] uppercase tracking-[0.13em] text-primary";

const displayVariants = {
  displayXl:
    "text-[clamp(2rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-accent",
  displayLg:
    "text-[clamp(2.5rem,5vw,5.8rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-accent",
  displayMd:
    "text-[clamp(2.2rem,4.2vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-accent",
  displaySm:
    "text-[clamp(1.5rem,2.6vw,2.4rem)] font-bold uppercase leading-none tracking-[-0.045em] text-accent",
  displayHero:
    "text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]",
} as const;

type DisplayVariant = keyof typeof displayVariants;
type HeadingVariant = "label" | DisplayVariant;

const defaultTagByVariant: Record<HeadingVariant, ElementType> = {
  label: "p",
  displayXl: "h2",
  displayLg: "h2",
  displayMd: "h3",
  displaySm: "h3",
  displayHero: "h1",
};

interface HeadingProps extends Omit<HTMLAttributes<HTMLElement>, "className" | "children"> {
  children: ReactNode;
  variant?: HeadingVariant;
  tagName?: ElementType;
  className?: string;
  reveal?: boolean;
  delay?: string;
}

export function Heading({
  children,
  variant = "label",
  tagName,
  className,
  reveal = false,
  delay,
  ...rest
}: HeadingProps) {
  const Tag = tagName ?? defaultTagByVariant[variant];

  const variantClass = variant === "label" ? labelVariant : displayVariants[variant];

  return (
    <Tag
      {...rest}
      {...(reveal ? { "data-reveal": true } : {})}
      style={reveal && delay ? revealDelay(delay) : undefined}
      className={cn(variantClass, className)}
    >
      {children}
    </Tag>
  );
}
