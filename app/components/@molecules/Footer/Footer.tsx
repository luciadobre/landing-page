import { Container } from "@/app/components/@atoms/Container/Container";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { SITE_CONFIG } from "@/app/config/site";

export function Footer() {
  return (
    <footer className="flex h-20 items-start bg-accent text-background">
      <Container>
        <RevealScope>
          <p
            data-reveal
            className="border-t border-background/20 py-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-background/50"
          >
            (c) {SITE_CONFIG.year} {SITE_CONFIG.author} / LC.DEV
          </p>
        </RevealScope>
      </Container>
    </footer>
  );
}
