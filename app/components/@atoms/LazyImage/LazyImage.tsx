"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

export function LazyImage({ alt, ...props }: ImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={props.fill ? "absolute inset-0" : undefined}
      style={
        !props.fill && typeof props.width === "number" && typeof props.height === "number"
          ? { width: props.width, height: props.height }
          : undefined
      }
    >
      {isVisible && <Image alt={alt} {...props} />}
    </div>
  );
}
