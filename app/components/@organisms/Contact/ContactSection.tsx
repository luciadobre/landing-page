import Link from "next/link";
import { SectionHeader } from "@/app/components/@atoms/Section/Section";
import { SITE_CONFIG } from "@/app/config/site";

const contactInfo = [
  { label: "Location", value: SITE_CONFIG.location },
  { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replaceAll(" ", "")}` },
  { label: "LinkedIn", value: "/in/dobre-lucia-corina", href: SITE_CONFIG.linkedin },
];

export function ContactSection() {
  return (
    <section id="contact">
      <SectionHeader label="Let's Connect" />

      <ul>
        {contactInfo.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>{" "}
            {item.href ? <Link href={item.href}>{item.value}</Link> : item.value}
          </li>
        ))}
      </ul>
    </section>
  );
}
