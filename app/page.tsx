import { HeroSection } from "@/app/components/@organisms/Hero/HeroSection";
import { FeaturesSection } from "@/app/components/@organisms/Features/FeaturesSection";
import { ContactSection } from "@/app/components/@organisms/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
    </>
  );
}
