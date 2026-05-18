import { Container } from "@/app/components/@atoms/Container/Container";
import { SITE_CONFIG } from "@/app/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <Container>
        <p className="text-[10px] uppercase tracking-widest text-center text-dim">
          © {SITE_CONFIG.year} {SITE_CONFIG.author} - All rights reserved
        </p>
      </Container>
    </footer>
  );
}
