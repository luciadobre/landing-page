import { Container } from "@/app/components/@atoms/Container/Container";
import { Section } from "@/app/components/@atoms/Section/Section";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/config/site";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <Section id="footer" className="mb-10">
      <footer>
        <Container className="flex flex-col gap-10">
          <div className="h-px bg-primary/20" />
          <div className="grid grid-cols-4 lg:grid-cols-12 items-center gap-10">
            <div className="flex justify-center gap-10 col-span-4 lg:col-span-8 lg:col-start-3 lg:row-start-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-secondaryTextColor hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="col-span-4 flex justify-center lg:justify-start lg:col-start-1 lg:row-start-1">
              <span className="font-bold">{SITE_CONFIG.name}</span>
            </div>
          </div>
          <div className="h-px bg-primary/20" />
          <p className="text-sm text-center text-secondaryTextColor">
            © {new Date().getFullYear()}, {SITE_CONFIG.title}. All rights
            reserved.
          </p>
        </Container>
      </footer>
    </Section>
  );
}
