import Link from "next/link";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { JourneyLine } from "@/app/components/@molecules/JourneyLine/JourneyLineLoader";
import { SocialLinks } from "@/app/components/@molecules/SocialLinks/SocialLinks";
import { CONTACT_COPY, SITE_CONFIG, SOCIAL_LINKS } from "@/app/config/site";
import { revealDelay } from "@/app/lib/utils";

export function ContactSection() {
  return (
    <>
      <span id="contact" className="anchor-target" aria-hidden="true" />
      <section
        aria-label="Contact Lucia"
        className="contact-screen flex items-stretch bg-accent text-background"
      >
        <RevealScope className="site-shell flex flex-col justify-center py-10">
        <div className="relative grid gap-8">
          <div
            data-reveal
            className="flex justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/60 max-sm:grid"
            style={revealDelay("80ms")}
          >
            <span>{CONTACT_COPY.sectionLabel}</span>
            <span>{SITE_CONFIG.location}</span>
          </div>

          <JourneyLine />

          <h2
            data-reveal
            className="display-wordmark contact-wordmark my-12"
            style={revealDelay("180ms")}
          >
            {CONTACT_COPY.headingFirstLine}
            <span className="outline-light block">
              {CONTACT_COPY.headingSecondLine}
            </span>
          </h2>

          <p
            data-reveal
            className="max-w-none whitespace-nowrap border-t border-background/25 pb-2 pt-8 text-[clamp(1rem,1.45vw,1.65rem)] leading-snug tracking-[-0.035em] text-background/80 max-lg:whitespace-normal"
            style={revealDelay("300ms")}
          >
            {CONTACT_COPY.message}
          </p>

          <div>
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              data-reveal
              className="block border-y border-background/25 py-5 text-[clamp(0.95rem,4.6vw,5rem)] leading-none tracking-[-0.055em] transition-colors hover:text-primary"
              style={revealDelay("420ms")}
            >
              {SITE_CONFIG.email}
            </Link>

            <div
              data-reveal
              className="mt-7 flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-[0.13em] text-background/75"
              style={revealDelay("520ms")}
            >
              <span>{SITE_CONFIG.location}</span>
              <SocialLinks
                links={SOCIAL_LINKS.filter((link) => link.label !== "Email")}
                iconClassName="invert"
              />
            </div>
          </div>
        </div>
        </RevealScope>
      </section>
    </>
  );
}
