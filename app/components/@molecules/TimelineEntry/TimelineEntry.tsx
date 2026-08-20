import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { revealDelay as revealDelayStyle } from "@/app/lib/utils";

interface TimelineEntryProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  kind?: string;
  bullets: string[];
  revealDelay?: string;
}

export function TimelineEntry({
  startDate,
  endDate,
  title,
  company,
  kind = "History",
  bullets,
  revealDelay = "0ms",
}: TimelineEntryProps) {
  const delay = revealDelay;

  return (
    <article
      className="grid gap-4 border-b border-border py-7 lg:grid-cols-[190px_minmax(0,1fr)_130px] lg:gap-7"
    >
      <Heading tagName="div" red reveal delay={delay} className="leading-relaxed">
        {startDate} - {endDate}
      </Heading>

      <div>
        <Heading
          variant="displayMd"
          reveal
          delay={`calc(${delay} + 80ms)`}
        >
          {title}
        </Heading>
        <Heading tagName="p" reveal delay={`calc(${delay} + 150ms)`} className="mb-5 mt-2">
          {company}
        </Heading>
        <ul className="grid max-w-4xl gap-2">
          {bullets.map((bullet, index) => (
            <li
              key={bullet}
              data-reveal
              className="relative pl-5 text-sm leading-relaxed text-accent/80 before:absolute before:left-0 before:text-primary before:content-['-']"
              style={revealDelayStyle(`calc(${delay} + ${220 + index * 55}ms)`)}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <Heading tagName="div" reveal delay={`calc(${delay} + 190ms)`} className="hidden text-right lg:block">
        {kind}
      </Heading>
    </article>
  );
}
