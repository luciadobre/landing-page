import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { revealDelay as revealDelayStyle } from "@/app/lib/utils";

const renderBulletText = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-accent">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );

interface TimelineEntryProps {
  startDate: string;
  endDate?: string;
  dateNote?: string;
  title: string;
  company: string;
  bullets: string[];
  revealDelay?: string;
}

export function TimelineEntry({
  startDate,
  endDate,
  dateNote,
  title,
  company,
  bullets,
  revealDelay = "0ms",
}: TimelineEntryProps) {
  const delay = revealDelay;

  return (
    <article
      className="grid gap-4 border-b border-border py-7 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-7"
    >
      <div>
        <Heading tagName="div" reveal delay={delay} className="leading-relaxed">
          {endDate ? `${startDate} - ${endDate}` : startDate}
        </Heading>
        {dateNote && (
          <Heading
            tagName="div"
            reveal
            delay={`calc(${delay} + 40ms)`}
            className="mt-1 leading-relaxed"
          >
            {dateNote}
          </Heading>
        )}
      </div>

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
              className="relative pl-5 text-base leading-relaxed text-accent/80 before:absolute before:left-0 before:text-primary before:content-['-']"
              style={revealDelayStyle(`calc(${delay} + ${220 + index * 55}ms)`)}
            >
              {renderBulletText(bullet)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
