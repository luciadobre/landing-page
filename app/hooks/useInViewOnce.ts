"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type UseInViewOnceOptions = IntersectionObserverInit & {
  delay?: number;
};

export function useInViewOnce<T extends Element>({
  delay = 0,
  root = null,
  rootMargin,
  threshold,
}: UseInViewOnceOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    let timeoutId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        timeoutId = window.setTimeout(() => setIsVisible(true), delay);
      },
      { root, rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, isVisible, root, rootMargin, threshold]);

  return [ref, isVisible];
}
