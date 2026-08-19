"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/app/components/@atoms/Container/Container";
import { NAVIGATION_LINKS } from "@/app/config/site";

const sectionTargets = [
  ...NAVIGATION_LINKS.map((link) => ({
    href: link.href,
    id: link.href.slice(1),
  })),
];

export function Header() {
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const getActiveFromScroll = () => {
      const current = sectionTargets
        .map((target) => {
          const element = document.getElementById(target.id);
          if (!element) return null;

          return {
            href: target.href,
            top: Math.abs(element.getBoundingClientRect().top - 120),
          };
        })
        .filter(Boolean)
        .sort((a, b) => a!.top - b!.top)[0];

      if (current) setActiveHref(current.href);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const match = sectionTargets.find(
          (target) => target.id === visible.target.id,
        );

        if (match) setActiveHref(match.href);
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    sectionTargets.forEach((target) => {
      const element = document.getElementById(target.id);
      if (element) observer.observe(element);
    });

    getActiveFromScroll();
    window.addEventListener("scroll", getActiveFromScroll, { passive: true });
    window.addEventListener("resize", getActiveFromScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", getActiveFromScroll);
      window.removeEventListener("resize", getActiveFromScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(185,45,57,0.12)]" />
            <span>Lucia Dobre</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = link.href === activeHref;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className="relative py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-accent"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Link
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center border border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-accent hover:bg-accent hover:text-background"
            >
              Resume
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto flex w-10 flex-col items-end gap-1.5 lg:hidden"
            aria-label="Open navigation"
          >
            <span className="block h-px w-3/4 bg-accent" />
            <span className="block h-px w-full bg-accent" />
            <span className="block h-px w-1/2 bg-accent" />
          </button>
        </div>
      </Container>
    </header>
  );
}
