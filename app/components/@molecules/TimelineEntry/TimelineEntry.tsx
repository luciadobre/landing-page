import { cn } from "@/app/lib/utils";

interface TimelineEntryProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  bullets: string[];
  className?: string;
}

export function TimelineEntry({
  startDate,
  endDate,
  title,
  company,
  bullets,
  className,
}: TimelineEntryProps) {
  return (
    <div
      className={cn("grid grid-cols-[100px_auto_1fr] gap-x-6", className)}
    >
      <div className="flex flex-col items-end gap-1 pt-1.5 text-right">
        <span className="text-[10px] uppercase tracking-widest text-primary">
          {startDate}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-dim">
          {endDate}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-7 h-7 border border-primary bg-card flex items-center justify-center shrink-0">
          <div className="w-1.5 h-1.5 bg-primary" />
        </div>
        <div className="flex-1 w-px bg-border mt-1" />
      </div>

      <div className="pb-12">
        <h3 className="font-bold text-sm uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-primary text-xs uppercase tracking-widest mt-1 mb-4">
          {company}
        </p>
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-dim text-sm leading-relaxed flex gap-2"
            >
              <span className="text-primary mt-1 shrink-0">•</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
