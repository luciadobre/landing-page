"use client";

import Image, { type ImageProps } from "next/image";
import { useInViewOnce } from "@/app/hooks/useInViewOnce";

export function LazyImage({ alt, ...props }: ImageProps) {
  const [containerRef, isVisible] = useInViewOnce<HTMLDivElement>({
    rootMargin: "200px 0px",
  });

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
