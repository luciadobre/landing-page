import Link from "next/link";
import dynamic from "next/dynamic";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { CONTACT_INFO, SITE_CONFIG } from "@/app/config/site";

const JourneyLine = dynamic(() =>
  import("@/app/components/@molecules/JourneyLine/JourneyLine").then(
    (module) => module.JourneyLine,
  ),
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex h-[calc(100svh-9rem)] scroll-mt-16 items-stretch bg-accent text-background"
    >
      <RevealScope className="mx-auto flex w-[min(1500px,calc(100%_-_48px))] flex-col justify-center py-10 max-sm:w-[calc(100%_-_28px)]">
        <div className="relative">
          <div
            data-reveal
            className="flex justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/60 max-sm:grid"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <span>04 / Contact</span>
            <span>{SITE_CONFIG.location}</span>
          </div>

          <JourneyLine />

          <h2
            data-reveal
            className="my-12 origin-left scale-x-[0.94] text-[clamp(5rem,14vw,15rem)] font-black uppercase leading-[0.68] tracking-[-0.085em]"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            Let&apos;s
            <span className="block text-transparent [-webkit-text-stroke:1px_#e8e5de]">
              connect.
            </span>
          </h2>

          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            data-reveal
            className="block border-y border-background/25 py-5 text-[clamp(1.6rem,4.6vw,5rem)] leading-none tracking-[-0.055em] transition-colors hover:text-primary"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            {SITE_CONFIG.email}
          </Link>

          <ul
            data-reveal
            className="mt-7 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/75"
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
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
      </RevealScope>
    </section>
  );
}
