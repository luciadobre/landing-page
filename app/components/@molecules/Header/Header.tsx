"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/@atoms/Button/Button";
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
    <header className="sticky top-4 z-50">
      <Container className="bg-background/90 backdrop-blur-sm">
        <div className="grid h-[76px] grid-cols-[170px_1fr_170px] items-center px-8">
          <Link href="/" className="font-mono text-2xl font-bold tracking-widest">
            <span className="text-primary">LC</span>
            <span className="text-white">.DEV</span>
          </Link>

          <nav className="hidden h-full items-center justify-center gap-10 lg:flex">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = link.href === activeHref;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className="relative flex h-full min-w-20 items-center justify-center px-3 font-mono text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-primary"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 bg-primary shadow-glow-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button asChild variant="ghost" size="md">
              <Link href="/resume.pdf" download>
                Resume ↓
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="col-start-3 ml-auto flex w-10 flex-col items-end gap-1.5 lg:hidden"
            aria-label="Open navigation"
          >
            <span className="block h-0.5 w-3/4 bg-white" />
            <span className="block h-0.5 w-full bg-white" />
            <span className="block h-0.5 w-1/2 bg-white" />
          </button>
        </div>
      </Container>
    </header>
  );
}
