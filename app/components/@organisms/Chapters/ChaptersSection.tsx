"use client";

import { useState } from "react";
import { Button } from "@/app/components/@atoms/Button/Button";
import { Container } from "@/app/components/@atoms/Container/Container";
import { Heading } from "@/app/components/@atoms/Heading/Heading";
import { RevealScope } from "@/app/components/@atoms/RevealScope/RevealScope";
import { Section } from "@/app/components/@atoms/Section/Section";
import { SectionRail } from "@/app/components/@atoms/SectionRail/SectionRail";
import { TechBadge } from "@/app/components/@atoms/TechBadge/TechBadge";
import { ShowcaseGallery } from "@/app/components/@molecules/ShowcaseGallery/ShowcaseGallery";
import { SHOWCASE_CHAPTERS } from "@/app/config/showcase";
import { cn, revealDelay } from "@/app/lib/utils";

export function ChaptersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="chapters" label="Chapters from my journey so far">
      <Container className="border-x border-muted">
        <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">
          <SectionRail>03 / Chapters</SectionRail>
          <div className="grid lg:grid-cols-[minmax(0,0.42fr)_minmax(320px,1fr)]">
            <RevealScope className="border-b border-border px-4 py-10 sm:px-7 lg:border-b-0">
              <div className="grid gap-3">
                {SHOWCASE_CHAPTERS.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    data-reveal
                    data-active={index === activeIndex}
                    style={revealDelay(`${120 + index * 90}ms`)}
                    className={cn(
                      "group relative grid gap-4 border border-border bg-transparent p-5 transition-colors hover:bg-card",
                      "data-[active=true]:border-primary/40 data-[active=true]:bg-card",
                    )}
                  >
                    <button
                      type="button"
                      aria-label={`View ${chapter.title}`}
                      onClick={() => setActiveIndex(index)}
                      className="absolute inset-0 cursor-pointer"
                    />
                    <TechBadge
                      label={chapter.category}
                      className={cn(
                        "w-fit border-primary/40 bg-transparent",
                        index === activeIndex && "text-primary!",
                      )}
                    />
                    <Heading variant="displaySm">{chapter.title}</Heading>
                    <div className="flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <TechBadge key={tag} label={tag} />
                      ))}
                    </div>
                    {chapter.link && (
                      <div className="relative z-10 w-fit">
                        <Button href={chapter.link.href} external>
                          {chapter.link.label}
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealScope>

            <RevealScope className="px-4 py-10 sm:px-7 lg:pl-0">
              <div className="grid">
                {SHOWCASE_CHAPTERS.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    aria-hidden={index !== activeIndex}
                    className={cn(
                      "col-start-1 row-start-1",
                      index === activeIndex
                        ? "opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    <ShowcaseGallery photos={chapter.photos} />
                  </div>
                ))}
              </div>
            </RevealScope>
          </div>
        </div>
      </Container>
    </Section>
  );
}
