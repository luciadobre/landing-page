interface TimelineEntryProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  kind?: string;
  bullets: string[];
}

export function TimelineEntry({
  startDate,
  endDate,
  title,
  company,
  kind = "History",
  bullets,
}: TimelineEntryProps) {
  return (
    <article className="grid gap-4 border-b border-border py-7 lg:grid-cols-[190px_minmax(0,1fr)_130px] lg:gap-7">
      <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-primary">
        {startDate} - {endDate}
      </div>

      <div>
        <h3 className="text-[clamp(2.2rem,4.2vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-accent">
          {title}
        </h3>
        <p className="mb-5 mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
          {company}
        </p>
        <ul className="grid max-w-4xl gap-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 text-sm leading-relaxed text-accent/80 before:absolute before:left-0 before:text-primary before:content-['-']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden text-right font-mono text-[9px] uppercase tracking-[0.12em] text-dim lg:block">
        {kind}
      </div>
    </article>
  );
}
