"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./JourneyLine.module.css";

type Point = { x: number; y: number };
type Segment = [Point, Point, Point, Point];
type Milestone = Point & {
  label: string;
  delay: number;
  align?: "right" | "bottom";
};

const segments: Segment[] = [
  [
    { x: 6, y: 14 },
    { x: 22, y: 14 },
    { x: 32, y: 11 },
    { x: 48, y: 14 },
  ],
  [
    { x: 48, y: 14 },
    { x: 61, y: 16 },
    { x: 65, y: 18 },
    { x: 63, y: 34 },
  ],
  [
    { x: 63, y: 34 },
    { x: 61, y: 49 },
    { x: 68, y: 58 },
    { x: 81, y: 58 },
  ],
  [
    { x: 81, y: 58 },
    { x: 94, y: 58 },
    { x: 104, y: 47 },
    { x: 118, y: 50 },
  ],
  [
    { x: 118, y: 50 },
    { x: 130, y: 53 },
    { x: 134, y: 72 },
    { x: 146, y: 86 },
  ],
];

const cubicPoint = ([a, b, c, d]: Segment, t: number): Point => {
  const mt = 1 - t;

  return {
    x: mt ** 3 * a.x + 3 * mt ** 2 * t * b.x + 3 * mt * t ** 2 * c.x + t ** 3 * d.x,
    y: mt ** 3 * a.y + 3 * mt ** 2 * t * b.y + 3 * mt * t ** 2 * c.y + t ** 3 * d.y,
  };
};

const distance = (a: Point, b: Point) => Math.hypot(b.x - a.x, b.y - a.y);

const lerpPoint = (a: Point, b: Point, t: number): Point => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
});

const sampledRoute = segments.flatMap((segment, segmentIndex) =>
  Array.from({ length: 28 }, (_, step) => {
    if (segmentIndex > 0 && step === 0) return null;
    return cubicPoint(segment, step / 27);
  }).filter(Boolean),
) as Point[];

const routeLength = sampledRoute.reduce((total, point, index) => {
  if (index === 0) return total;
  return total + distance(sampledRoute[index - 1], point);
}, 0);

const pointAtDistance = (targetDistance: number): Point => {
  let traveled = 0;

  for (let index = 1; index < sampledRoute.length; index += 1) {
    const previous = sampledRoute[index - 1];
    const current = sampledRoute[index];
    const segmentLength = distance(previous, current);

    if (traveled + segmentLength >= targetDistance) {
      return lerpPoint(
        previous,
        current,
        (targetDistance - traveled) / segmentLength,
      );
    }

    traveled += segmentLength;
  }

  return sampledRoute[sampledRoute.length - 1];
};

const routeDots = Array.from({ length: 58 }, (_, index) => ({
  ...pointAtDistance((routeLength * index) / 57),
  delay: index * 0.038,
}));

const milestones: Milestone[] = [
  { ...routeDots[10], label: "Social Media Manager", delay: routeDots[10].delay },
  {
    ...routeDots[22],
    label: "Informatics economics degree",
    delay: routeDots[22].delay,
    align: "right",
  },
  {
    ...routeDots[39],
    label: "Frontend Developer",
    delay: routeDots[39].delay,
  },
  { ...routeDots[57], label: "Next journey?", delay: routeDots[57].delay },
];

export function JourneyLine() {
  const lineRef = useRef<SVGSVGElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) return;

    const trigger = document.querySelector("footer") ?? lineRef.current;
    if (!trigger) return;

    let timeoutId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        timeoutId = window.setTimeout(() => setIsActive(true), 700);
      },
      { threshold: 0.08 },
    );

    observer.observe(trigger);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isActive]);

  return (
    <svg
      ref={lineRef}
      className={`${styles.line} ${isActive ? styles.active : ""}`}
      viewBox="0 0 152 96"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {routeDots.map((dot, index) => (
        <circle
          key={`${dot.x}-${dot.y}-${index}`}
          className={styles.routeDot}
          style={{ animationDelay: `${dot.delay}s` }}
          cx={dot.x}
          cy={dot.y}
          r="1.05"
        />
      ))}

      {milestones.map((point) => (
        <g
          key={point.label}
          className={styles.milestone}
          style={{ animationDelay: `${point.delay}s` }}
        >
          <circle className={styles.milestoneOuter} cx={point.x} cy={point.y} r="3.7" />
          <circle className={styles.milestoneInner} cx={point.x} cy={point.y} r="1.7" />
          <text
            className={point.align === "right" ? styles.labelRight : undefined}
            x={point.align === "right" ? point.x + 6 : point.x}
            y={
              point.align === "right"
                ? point.y + 1.1
                : point.align === "bottom"
                  ? point.y + 8.2
                  : point.y - 6.2
            }
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
