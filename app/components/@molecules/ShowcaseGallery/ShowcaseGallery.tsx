"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { ShowcasePhoto } from "@/app/config/showcase";
import { ShowcaseSlide } from "./ShowcaseSlide";

interface ShowcaseGalleryProps {
  photos: ShowcasePhoto[];
}

const AUTOPLAY_INTERVAL_MS = 4000;

const arrowButtonClass =
  "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-background/40 bg-accent/60 text-background opacity-80 transition-opacity hover:opacity-100";

export function ShowcaseGallery({ photos }: ShowcaseGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }

    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (emblaApi && photos.length > 1) {
      interval = setInterval(() => {
        emblaApi.scrollNext();
      }, AUTOPLAY_INTERVAL_MS);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [emblaApi, photos.length]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const hasPhotos = photos.length > 0;
  const hasControls = photos.length > 1;

  const content = hasPhotos ? (
    <div className="relative overflow-hidden border border-border bg-card">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo) => (
            <ShowcaseSlide key={photo.photoSource} photo={photo} />
          ))}
        </div>
      </div>

      {hasControls && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous photo"
            className={`${arrowButtonClass} left-3`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next photo"
            className={`${arrowButtonClass} right-3`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {photos.map((photo, index) => (
              <button
                key={photo.photoSource}
                type="button"
                aria-label={`Go to photo ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
                  index === selectedIndex ? "bg-background" : "bg-background/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  ) : (
    <p className="text-sm leading-relaxed text-dim">Photos coming soon.</p>
  );

  return content;
}
