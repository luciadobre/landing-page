import Link from "next/link";
import dynamic from "next/dynamic";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { SITE_CONFIG, SKILLS, SOCIAL_LINKS } from "@/app/config/site";

const FlyingPhotoStack = dynamic(() =>
  import("@/app/components/@molecules/FlyingPhotoStack/FlyingPhotoStack").then(
    (module) => module.FlyingPhotoStack,
  ),
);

export function HeroSection() {
  const tickerItems = SKILLS.map((skill) => skill.name).join(" / ");

  return (
    <section
      id="hero"
      className="relative grid min-h-[calc(100svh-64px)] grid-rows-[1fr_auto] overflow-hidden border-b border-accent"
    >
      <div className="pointer-events-none absolute left-0 top-[30%] h-px w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-70" />

      <RevealScope className="mx-auto flex h-full min-h-0 w-[min(1500px,calc(100%_-_48px))] flex-col justify-between py-7 max-sm:w-[calc(100%_-_28px)]">
        <div
          data-reveal
          className="flex justify-between gap-8 font-mono text-[10px] uppercase tracking-[0.13em] text-dim max-sm:grid"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <span>
            {SITE_CONFIG.author} / {SITE_CONFIG.location}
          </span>
          <span className="text-right max-sm:text-left">Frontend Developer</span>
        </div>

        <div className="grid min-h-0 flex-1 items-center gap-8 py-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(620px,0.72fr)]">
          <div>
            <h1
              data-reveal
              className="origin-left scale-x-[0.92] text-[clamp(5.2rem,14vw,13rem)] font-black uppercase leading-[0.68] tracking-[-0.095em] text-accent"
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
              aria-label="Lucia Dobre"
            >
              <span className="block">Lucia</span>
              <span className="block text-transparent [-webkit-text-stroke:1.25px_#111212]">
                Dobre
              </span>
            </h1>
          </div>
          <FlyingPhotoStack />
        </div>

        <div className="grid items-end gap-7 border-t border-border pt-5 lg:grid-cols-[160px_minmax(0,650px)_auto]">
          <div
            data-reveal
            className="font-mono text-[10px] uppercase tracking-[0.13em] text-primary"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            Profile / 00
          </div>
          <p
            data-reveal
            className="m-0 max-w-2xl text-[clamp(1.05rem,1.55vw,1.45rem)] leading-snug tracking-[-0.025em]"
            style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
          >
            {SITE_CONFIG.description}
          </p>
          <div
            data-reveal
            className="flex flex-wrap justify-start gap-4 lg:justify-end"
            style={{ "--reveal-delay": "460ms" } as React.CSSProperties}
          >
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              className="border-b border-accent py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
            >
              Email me
            </Link>
            {SOCIAL_LINKS.filter((link) => link.label !== "Email").map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="border-b border-accent py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </RevealScope>

      <div className="overflow-hidden bg-accent text-background">
        <div className="flex w-max animate-[ticker_32s_linear_infinite]">
          {[tickerItems, tickerItems].map((items, index) => (
            <span
              key={index}
              className="whitespace-nowrap px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em]"
            >
              {items} / {items} /
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes ticker { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
