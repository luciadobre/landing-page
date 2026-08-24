import Link from "next/link";
import { Button } from "@/app/components/@atoms/Button/Button";
import { Container } from "@/app/components/@atoms/Container/Container";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/app/config/site";
import { cn } from "@/app/lib/utils";

const navLinkClass =
  "site-nav-link relative py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-accent";

export function Header() {
  return (
    <header className="nav-shadow sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
            aria-label={`${SITE_CONFIG.author} home`}
          >
            <span className="brand-dot-shadow h-2.5 w-2.5 rounded-full bg-primary" />
            <span>Lucia Dobre</span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary navigation"
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(navLinkClass, link.activeClassName)}
              >
                {link.label}
                <span className="site-nav-indicator absolute bottom-0 left-0 h-px w-full bg-primary" />
              </a>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button href="/resume.pdf" download>
              Resume
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
