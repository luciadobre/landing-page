import dynamic from "next/dynamic";
import { LoadingMark } from "@/app/components/@atoms/PageState/PageState";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { SocialLinks } from "@/app/components/@molecules/SocialLinks/SocialLinks";
import { SITE_CONFIG, SKILLS, SOCIAL_LINKS } from "@/app/config/site";
import { revealDelay } from "@/app/lib/utils";

const FlyingPhotoStack = dynamic(() =>
  import("@/app/components/@molecules/FlyingPhotoStack/FlyingPhotoStack").then(
    (module) => module.FlyingPhotoStack,
  ),
  {
    loading: () => (
      <div className="flex min-h-[420px] items-center justify-center">
        <LoadingMark label="Loading photos" compact />
      </div>
    ),
  },
);

export function HeroSection() {
  const tickerItems = SKILLS.map((skill) => skill.name).join(" / ");

  return (
    <section
      id="hero"
      aria-label="Portfolio introduction"
      className="hero-screen relative grid grid-rows-[1fr_auto] overflow-hidden border-b border-accent"
    >
      <div className="pointer-events-none absolute left-0 top-[30%] h-px w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-70" />

      <RevealScope className="site-shell flex h-full min-h-0 flex-col justify-between py-7">
        <div
          data-reveal
          className="flex justify-between gap-8 font-mono text-[10px] uppercase tracking-[0.13em] text-dim max-sm:grid"
          style={revealDelay("80ms")}
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
              className="display-wordmark hero-wordmark text-accent"
              style={revealDelay("180ms")}
              aria-label="Lucia Dobre"
            >
              <span className="block">Lucia</span>
              <span className="outline-dark block">
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
            style={revealDelay("300ms")}
          >
            Profile / 00
          </div>
          <p
            data-reveal
            className="m-0 max-w-2xl text-[clamp(1.05rem,1.55vw,1.45rem)] leading-snug tracking-[-0.025em]"
            style={revealDelay("380ms")}
          >
            {SITE_CONFIG.description}
          </p>
          <div
            data-reveal
            className="flex flex-wrap justify-start gap-4 lg:justify-end"
            style={revealDelay("460ms")}
          >
            <SocialLinks
              links={SOCIAL_LINKS}
              linkClassName="border-b border-accent py-1 font-mono text-[10px] uppercase tracking-[0.12em] hover:border-primary"
            />
          </div>
        </div>
      </RevealScope>

      <div className="overflow-hidden bg-accent text-background">
        <div className="ticker-track flex w-max">
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
    </section>
  );
}
