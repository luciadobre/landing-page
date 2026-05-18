import Link from "next/link";
import { Frame } from "@/app/components/@atoms/Frame/Frame";
import { SITE_CONFIG } from "@/app/config/site";

const socialLinks = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: "/icons/github.svg" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "/icons/linkedin.svg" },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "/icons/email.svg" },
];

export function HeroSection() {
  return (
    <Frame
      as="section"
      id="hero"
      variant="bottom"
      className="mb-4 w-full border-t border-border/70 bg-background"
    >
      <div className="grid min-h-[470px] grid-cols-1 overflow-hidden lg:grid-cols-[80px_minmax(380px,430px)_1fr]">
        <aside className="hidden border-r border-border/70 px-6 py-14 lg:flex lg:flex-col lg:items-center lg:justify-between">
          <p className="font-mono text-2xl leading-none text-primary" style={{ writingMode: "vertical-rl" }}>
            フルスタック開発者
          </p>

          <div className="space-y-3">
            <p className="font-mono text-xl text-primary">01</p>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-primary" />
              <span className="block h-0.5 w-5 bg-border" />
              <span className="block h-0.5 w-5 bg-border" />
            </div>
          </div>
        </aside>

        <div className="relative z-10 flex flex-col justify-center px-8 py-14 lg:px-16">
          <p className="mb-5 font-mono text-sm text-primary">こんにちは、私は</p>

          <h1 className="font-mono text-5xl font-bold uppercase leading-[1.08] tracking-wider text-white lg:text-[56px]">
            Dobre
            <br />
            Lucia-Corina
          </h1>

          <p className="mt-5 font-mono text-2xl uppercase tracking-widest text-primary">
            Full Stack Developer_
          </p>

          <p className="mt-6 max-w-[330px] text-base leading-7 text-white/70">
            I build fast, scalable and modern web applications with clean code
            and beautiful interfaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Link
              href="#projects"
              className="border border-primary px-7 py-3 font-mono text-sm uppercase tracking-widest text-white shadow-glow-sm transition-colors hover:bg-primary/15"
            >
              View Projects ↓
            </Link>

            <div className="flex items-center gap-7">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-block h-7 w-7 bg-primary transition-colors [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [webkit-mask-position:center] [webkit-mask-repeat:no-repeat] [webkit-mask-size:contain] hover:bg-white"
                  style={{
                    maskImage: `url(${link.icon})`,
                    WebkitMaskImage: `url(${link.icon})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[470px]">
          <img
            src="/assets/hero-image.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/35 to-transparent" />
          <p
            className="absolute right-10 top-8 hidden font-mono text-3xl leading-none text-primary lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            未来を創る
          </p>
        </div>
      </div>
    </Frame>
  );
}
