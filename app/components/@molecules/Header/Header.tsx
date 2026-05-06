"use client";

import Link from "next/link";
import { Container } from "@/app/components/@atoms/Container/Container";
import { Button } from "@/app/components/@atoms/Button/Button";
import { SITE_CONFIG, NAVIGATION_LINKS } from "@/app/config/site";

export function Header() {
  return (
    <header className="py-5 lg:pt-11">
      <Container className="flex items-center gap-12 text-xl">
        <Link href="/" className="font-bold text-xl lg:text-2xl shrink-0">
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden lg:flex gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-sm lg:text-base transition-colors hover:text-primary/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5 ml-auto">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-bold w-min"
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button asChild size="lg" className="font-bold w-min">
            <Link href="#features">Explore</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden ml-auto flex flex-col items-end gap-2 w-12.5 relative z-50"
        >
          <span className="block h-1 rounded-full bg-primary w-3/4" />
          <span className="block h-1 rounded-full bg-primary w-full" />
          <span className="block h-1 rounded-full bg-primary w-1/2" />
        </button>
      </Container>
    </header>
  );
}
