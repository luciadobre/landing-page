import { HeroSection } from "@/app/components/@organisms/Hero/HeroSection";
import { ChaptersSection } from "@/app/components/@organisms/Chapters/ChaptersSection";
import { SkillsSection } from "@/app/components/@organisms/Skills/SkillsSection";
import { ExperienceSection } from "@/app/components/@organisms/Experience/ExperienceSection";
import { ContactSection } from "@/app/components/@organisms/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ChaptersSection />
      <ContactSection />
    </>
  );
}
