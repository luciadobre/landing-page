"use client";

import { useInViewOnce } from "@/app/hooks/useInViewOnce";

export function RevealScope({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, visible] = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -18% 0px",
    threshold: 0.12,
  });

  return (
    <div
      ref={ref}
      className={`${className} reveal-scope${visible ? " is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
