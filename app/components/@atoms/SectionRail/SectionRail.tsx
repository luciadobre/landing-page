import { Heading } from "@/app/components/@atoms/Heading/Heading";

interface SectionRailProps {
  children: React.ReactNode;
}

export function SectionRail({ children }: SectionRailProps) {
  return (
    <Heading
      tagName="aside"
      aria-hidden="true"
      className="border-b border-muted px-4 py-4 lg:border-b-0 lg:border-r lg:px-5 lg:py-7"
    >
      {children}
    </Heading>
  );
}
