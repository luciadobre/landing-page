import { Container } from "@/app/components/@atoms/Container/Container";
import { SITE_CONFIG } from "@/app/config/site";

export function Footer() {
  return (
    <footer className="bg-accent pb-5 text-background">
      <Container>
        <p className="border-t border-background/20 py-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-background/50">
          (c) {SITE_CONFIG.year} {SITE_CONFIG.author} / LC.DEV
        </p>
      </Container>
    </footer>
  );
}
