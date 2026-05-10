import { Container } from "@/app/components/@atoms/Container/Container";
import { Section } from "@/app/components/@atoms/Section/Section";

const features = [
  {
    title: "Simple Design",
    description:
      "Clean and minimalist UI that focuses on content and user experience.",
  },
  {
    title: "Fast Performance",
    description: "Built with Next.js for optimal loading speeds and SEO.",
  },
  {
    title: "Type Safe",
    description:
      "Full TypeScript support for better code quality and maintainability.",
  },
  {
    title: "Responsive",
    description: "Mobile-first design that works beautifully on all devices.",
  },
  {
    title: "Atomic Design",
    description: "Scalable component architecture for easy maintenance.",
  },
  {
    title: "Best Practices",
    description:
      "Follows industry standards and modern web development patterns.",
  },
];

export function FeaturesSection() {
  return (
    <Section title="Features" id="features">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-8 flex flex-col gap-3"
            >
              <h3 className="font-bold text-xl">{feature.title}</h3>
              <p className="text-secondaryTextColor">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
