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
  return (
    <article
      className="grid gap-4 border-b border-border py-7 lg:grid-cols-[190px_minmax(0,1fr)_130px] lg:gap-7"
    >
      <div
        data-reveal
        className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-primary"
        style={{ "--reveal-delay": revealDelay } as React.CSSProperties}
      >
        {startDate} - {endDate}
      </div>

      <div>
        <h3
          data-reveal
          className="text-[clamp(2.2rem,4.2vw,4.8rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-accent"
          style={{ "--reveal-delay": `calc(${revealDelay} + 80ms)` } as React.CSSProperties}
        >
          {title}
        </h3>
        <p
          data-reveal
          className="mb-5 mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-dim"
          style={{ "--reveal-delay": `calc(${revealDelay} + 150ms)` } as React.CSSProperties}
        >
          {company}
        </p>
        <ul className="grid max-w-4xl gap-2">
          {bullets.map((bullet, index) => (
            <li
              key={bullet}
              data-reveal
              className="relative pl-5 text-sm leading-relaxed text-accent/80 before:absolute before:left-0 before:text-primary before:content-['-']"
              style={
                {
                  "--reveal-delay": `calc(${revealDelay} + ${220 + index * 55}ms)`,
                } as React.CSSProperties
              }
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div
        data-reveal
        className="hidden text-right font-mono text-[9px] uppercase tracking-[0.12em] text-dim lg:block"
        style={{ "--reveal-delay": `calc(${revealDelay} + 190ms)` } as React.CSSProperties}
      >
        {kind}
      </div>
    </article>
  );
}
