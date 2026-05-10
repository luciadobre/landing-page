import { Container } from "@/app/components/@atoms/Container/Container";
import { Section } from "@/app/components/@atoms/Section/Section";
import { Button } from "@/app/components/@atoms/Button/Button";
import { GradientText } from "@/app/components/@atoms/GradientText/GradientText";
import Link from "next/link";

export function HeroSection() {
  return (
    <Section id="hero">
      <Container>
        <div className="flex flex-col justify-center gap-5 py-16 lg:py-24 max-w-4xl">
          <h1 className="leading-[1.3]! text-5xl lg:text-7xl font-bold">
            Clean & <GradientText>simple</GradientText> by design
          </h1>
          <p className="md:text-xl md:leading-9 font-light max-w-2xl text-secondaryTextColor">
            A minimalist landing page built with Next.js, TypeScript, and
            Tailwind CSS. Fast, clean, and focused on what matters.
          </p>
          <div className="flex gap-5 mt-5">
            <Button asChild size="lg" className="text-xl font-bold">
              <Link href="#features">Explore</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
