import Link from "next/link";
import { CONTACT_INFO, SITE_CONFIG } from "@/app/config/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[72svh] items-stretch bg-accent text-background"
    >
      <div className="mx-auto flex w-[min(1500px,calc(100%_-_48px))] flex-col justify-between py-14 max-sm:w-[calc(100%_-_28px)]">
        <div>
          <div className="flex justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/60 max-sm:grid">
            <span>04 / Contact</span>
            <span>{SITE_CONFIG.location}</span>
          </div>

          <h2 className="my-12 origin-left scale-x-[0.94] text-[clamp(5rem,14vw,15rem)] font-black uppercase leading-[0.68] tracking-[-0.085em]">
            Let&apos;s
            <span className="block text-transparent [-webkit-text-stroke:1px_#e8e5de]">
              connect.
            </span>
          </h2>

          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="block border-y border-background/25 py-5 text-[clamp(1.6rem,4.6vw,5rem)] leading-none tracking-[-0.055em] transition-colors hover:text-primary"
          >
            {SITE_CONFIG.email}
          </Link>

          <ul className="mt-7 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/75">
            {CONTACT_INFO.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.value}
                  </Link>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
