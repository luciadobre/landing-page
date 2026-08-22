"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FLYING_PHOTOS, type PhotoOrientation } from "@/app/config/flyingPhotos";
import styles from "./FlyingPhotoStack.module.css";

type Depth = "front" | "mid" | "back";

type FlyingFrame = {
  caption: string;
  src: string;
  fallbackSrc: string;
  className: string;
  cropClass: string;
  depth: Depth;
  orientation: PhotoOrientation;
};

const FALLBACK_PHOTO_SOURCE = "/assets/hero-image.jpg";
const MOBILE_BREAKPOINT = 520;
const POINTER_SPRING = 0.075;
const DRAG_DAMPING = 0.85;
const DEPTH_DAMPING = 0.7;
const DESKTOP_PREVIEW_SCALE = 1.55;
const MOBILE_PREVIEW_SCALE = { min: 1, max: 1.12 };
const MOBILE_PREVIEW_PADDING = { x: 28, y: 36 };
const RECYCLE_PROGRESS = 1.34;
const RECYCLE_Z = 360;

const framesByOrientation: Record<PhotoOrientation, string[]> = {
  landscape: [styles.frameTwo, styles.frameFive],
  portrait: [styles.frameOne, styles.frameThree, styles.frameSix],
  square: [styles.frameFour],
};

const cropCycle = [styles.leftCrop, styles.centerCrop, styles.rightCrop, styles.bottomCrop];

const depthPattern: Depth[] = [
  "front",
  "mid",
  "back",
  "front",
  "back",
  "mid",
  "front",
  "mid",
  "back",
];

const buildFrames = (): FlyingFrame[] => {
  const orientationCounts: Record<PhotoOrientation, number> = {
    landscape: 0,
    portrait: 0,
    square: 0,
  };

  return FLYING_PHOTOS.map((photo, index) => {
    const options = framesByOrientation[photo.orientation];
    const className = options[orientationCounts[photo.orientation] % options.length];
    orientationCounts[photo.orientation] += 1;

    return {
      caption: photo.caption,
      src: photo.photoSource,
      fallbackSrc: FALLBACK_PHOTO_SOURCE,
      className,
      cropClass: cropCycle[index % cropCycle.length],
      depth: depthPattern[index % depthPattern.length],
      orientation: photo.orientation,
    };
  });
};

const frames = buildFrames();

const depthSettings: Record<
  Depth,
  { opacity: number; scale: number; spread: number; z: number }
> = {
  front: { opacity: 0.95, scale: 1, spread: 1, z: -210 },
  mid: { opacity: 0.46, scale: 0.66, spread: 0.84, z: -430 },
  back: { opacity: 0.22, scale: 0.44, spread: 0.68, z: -690 },
};

type FlyingObject = {
  el: HTMLButtonElement | null;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  spinX: number;
  spinY: number;
  spinZ: number;
  progress: number;
  speed: number;
  lane: number;
  phase: number;
  depth: Depth;
  scale: number;
  opacity: number;
  isDragging: boolean;
  isVanishing: boolean;
};

const spring = (value: number, target: number, strength: number) =>
  value + (target - value) * strength;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const starts = [0.06, 0.2, 0.34, 0.48, 0.62, 0.76, 0.9, 1.02, 1.14];

const randomDepth = (): Depth =>
  depthPattern[Math.floor(Math.random() * depthPattern.length)];

const randomLane = (): number => {
  const magnitude = 0.2 + Math.random() * 0.78;
  return Math.random() < 0.5 ? -magnitude : magnitude;
};

const createObject = (index: number): FlyingObject => {
  const depth = frames[index].depth;
  const settings = depthSettings[depth];

  return {
    el: null,
    x: 0,
    y: 260,
    z: settings.z - index * 12,
    vx: 0,
    vy: -2,
    vz: 0.12 + index * 0.03,
    rx: index * 19,
    ry: index * -23,
    rz: -16 + index * 11,
    spinX: 0.22 + index * 0.04,
    spinY: -0.18 - index * 0.03,
    spinZ: 0.16 + index * 0.025,
    progress: starts[index] ?? 0,
    speed: 0.0023 + index * 0.00014,
    lane: randomLane(),
    phase: index * 1.7,
    depth,
    scale: settings.scale,
    opacity: settings.opacity,
    isDragging: false,
    isVanishing: false,
  };
};

export function FlyingPhotoStack() {
  const [showSilhouette, setShowSilhouette] = useState(true);
  const [caughtIndex, setCaughtIndex] = useState<number | null>(null);
  const [fallbackIndexes, setFallbackIndexes] = useState<Set<number>>(
    () => new Set(),
  );
  const stageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const objectsRef = useRef(frames.map((_, index) => createObject(index)));
  const mouseRef = useRef({ x: 0, y: 0 });
  const portalRoot = useSyncExternalStore(
    () => () => undefined,
    () => document.body,
    () => null,
  );

  useEffect(() => {
    let animationFrame = 0;

    const recycle = (object: FlyingObject) => {
      object.depth = randomDepth();
      const settings = depthSettings[object.depth];

      object.progress = -0.08 - Math.random() * 0.08;
      object.lane = randomLane();
      object.speed = 0.0022 + Math.random() * 0.001;
      object.phase = Math.random() * Math.PI * 2;
      object.x = 0;
      object.y = 280;
      object.z = settings.z - Math.random() * 80;
      object.vx = 0;
      object.vy = -2;
      object.vz = 0.08 + Math.random() * 0.12;
      object.scale = settings.scale;
      object.opacity = 0;
      object.rx = Math.random() * 80 - 40;
      object.ry = Math.random() * 80 - 40;
      object.rz = Math.random() * 60 - 30;
      object.isDragging = false;
      object.isVanishing = false;
    };

    const tick = () => {
      const rect = stageRef.current?.getBoundingClientRect();
      const width = rect?.width ?? 720;
      const height = rect?.height ?? 520;
      const isCompact = width < MOBILE_BREAKPOINT;
      const stage = {
        originX: width * (isCompact ? -0.18 : -0.28),
        originY: height * (isCompact ? 0.5 : 0.02),
        verticalReach: height * (isCompact ? 0.98 : 1.05),
        maxSpread: width * (isCompact ? 0.54 : 0.58),
      };

      objectsRef.current.forEach((object) => {
        if (!object.el) return;
        const settings = depthSettings[object.depth];

        if (object.isDragging) {
          const frameWidth = object.el.offsetWidth || 120;
          const frameHeight = object.el.offsetHeight || 150;
          const maxMobileScale = Math.min(
            (width - MOBILE_PREVIEW_PADDING.x) / frameWidth,
            (height - MOBILE_PREVIEW_PADDING.y) / frameHeight,
          );
          const mobilePreviewScale = clamp(
            maxMobileScale,
            MOBILE_PREVIEW_SCALE.min,
            MOBILE_PREVIEW_SCALE.max,
          );
          const targetX = isCompact ? -frameWidth / 2 : mouseRef.current.x;
          const targetY = isCompact ? -frameHeight / 2 : mouseRef.current.y;

          object.vx += (targetX - object.x) * POINTER_SPRING;
          object.vy += (targetY - object.y) * POINTER_SPRING;
          object.vz += (0 - object.z) * 0.08;

          object.vx *= DRAG_DAMPING;
          object.vy *= DRAG_DAMPING;
          object.vz *= DEPTH_DAMPING;

          object.scale = spring(
            object.scale,
            isCompact ? mobilePreviewScale : DESKTOP_PREVIEW_SCALE,
            0.34,
          );
          object.opacity = spring(object.opacity, 1, 0.34);
          object.x += object.vx;
          object.y += object.vy;
          object.z += object.vz;
          object.ry = spring(object.ry, object.vx * 0.08, 0.18);
          object.rx = spring(object.rx, -object.vy * 0.08, 0.18);
          object.rz = spring(object.rz, 0, 0.18);
        } else if (object.isVanishing) {
          object.vz += 5.5;
          object.vz *= 0.84;
          object.z += object.vz;
          object.y -= 5;
          object.opacity *= 0.9;
          object.rx += object.spinX * 4.2;
          object.ry += object.spinY * 4.2;
          object.rz += object.spinZ * 5.4;
        } else {
          object.progress += object.speed;
          const clampedProgress = Math.max(0, Math.min(object.progress, 1));
          const fan = clampedProgress * clampedProgress;
          const wobble = Math.sin(clampedProgress * 8 + object.phase) * 24;
          const fade = object.progress <= 0.92
            ? 1
            : Math.max(0, 1 - (object.progress - 0.92) / 0.42);

          object.x = stage.originX + object.lane * stage.maxSpread * settings.spread * fan + wobble * settings.spread;
          object.y = stage.originY - stage.verticalReach * object.progress;
          object.z = settings.z + clampedProgress * 150;
          object.scale = spring(object.scale, settings.scale, 0.08);
          object.opacity = settings.opacity * fade;
          object.rx += object.spinX;
          object.ry += object.spinY;
          object.rz += object.spinZ;
        }

        if (
          (!object.isDragging &&
            !object.isVanishing &&
            object.progress > RECYCLE_PROGRESS) ||
          object.z > RECYCLE_Z
        ) {
          recycle(object);
        }

        object.el.dataset.caught = String(object.isDragging);
        object.el.dataset.vanishing = String(object.isVanishing);
        object.el.dataset.depth = object.depth;
        object.el.style.opacity = String(object.opacity);
        object.el.style.transform = `
          translate3d(${object.x}px, ${object.y}px, ${object.z}px)
          rotateX(${object.rx}deg)
          rotateY(${object.ry}deg)
          rotateZ(${object.rz}deg)
          scale(${object.scale})
        `;
      });

      animationFrame = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const positionOverlay = (x: number, y: number) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.style.setProperty("--preview-x", `${x}px`);
    overlay.style.setProperty("--preview-y", `${y}px`);
    overlay.style.setProperty("--preview-rotate", "0deg");
  };

  useEffect(() => {
    if (caughtIndex === null) return;

    const frameEl = objectsRef.current[caughtIndex]?.el;
    if (!frameEl) return;

    const rect = frameEl.getBoundingClientRect();
    positionOverlay(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [caughtIndex]);

  const updateMouse = (event: { clientX: number; clientY: number }) => {
    positionOverlay(event.clientX, event.clientY);

    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseRef.current.x = event.clientX - rect.left - rect.width / 2;
    mouseRef.current.y = event.clientY - rect.top - rect.height / 2;
  };

  const startDrag = (index: number, event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateMouse(event);

    const object = objectsRef.current[index];
    object.isDragging = true;
    object.isVanishing = false;
    setCaughtIndex(index);
    object.el?.setPointerCapture(event.pointerId);
  };

  const endDrag = (index: number, event: PointerEvent<HTMLButtonElement>) => {
    const object = objectsRef.current[index];
    object.isDragging = false;
    object.isVanishing = true;
    object.vz = 18;
    setCaughtIndex(null);
    if (object.el?.hasPointerCapture(event.pointerId)) {
      object.el.releasePointerCapture(event.pointerId);
    }
  };

  const focusFrame = (index: number) => {
    const object = objectsRef.current[index];
    object.isDragging = true;
    object.isVanishing = false;
    object.vx = 0;
    object.vy = 0;
    setCaughtIndex(index);
  };

  const blurFrame = (index: number) => {
    const object = objectsRef.current[index];
    object.isDragging = false;
    object.isVanishing = true;
    object.vz = 18;
    setCaughtIndex(null);
  };

  return (
    <>
      <div
        ref={stageRef}
        className={styles.stage}
        onPointerMove={updateMouse}
      >
        {showSilhouette && (
          <Image
            src="/assets/girl-silhouette.png"
            alt=""
            width={440}
            height={620}
            className={styles.silhouette}
            onError={() => setShowSilhouette(false)}
            priority
          />
        )}

        {frames.map((frame, index) => (
          <button
            key={`${frame.caption}-${index}`}
            ref={(element) => {
              objectsRef.current[index].el = element;
            }}
            type="button"
            aria-label={`Catch and hold photo: ${frame.caption}`}
            data-orientation={frame.orientation}
            data-preview-source={caughtIndex === index ? "true" : undefined}
            className={`${styles.frame} ${frame.className}`}
            onPointerDown={(event) => startDrag(index, event)}
            onPointerUp={(event) => endDrag(index, event)}
            onPointerCancel={(event) => endDrag(index, event)}
            onFocus={() => focusFrame(index)}
            onBlur={() => blurFrame(index)}
          >
            <span className={styles.imageWrap}>
              <Image
                src={fallbackIndexes.has(index) ? frame.fallbackSrc : frame.src}
                alt=""
                fill
                sizes="(max-width: 1023px) 300px, 280px"
                className={frame.cropClass}
                onError={() => {
                  setFallbackIndexes((current) => {
                    if (current.has(index)) return current;

                    const next = new Set(current);
                    next.add(index);
                    return next;
                  });
                }}
              />
            </span>
            <span className={styles.caption}>{frame.caption}</span>
          </button>
        ))}

        <p className={styles.hint}>catch and hold</p>
      </div>

      {caughtIndex !== null && portalRoot && createPortal(
        <div
          ref={overlayRef}
          className={styles.previewOverlay}
          data-orientation={frames[caughtIndex].orientation}
          aria-hidden="true"
        >
          <span className={styles.imageWrap}>
            <Image
              src={
                fallbackIndexes.has(caughtIndex)
                  ? frames[caughtIndex].fallbackSrc
                  : frames[caughtIndex].src
              }
              alt=""
              fill
              sizes="(max-width: 1023px) 360px"
              onError={() => {
                setFallbackIndexes((current) => {
                  if (current.has(caughtIndex)) return current;

                  const next = new Set(current);
                  next.add(caughtIndex);
                  return next;
                });
              }}
            />
          </span>
          <span className={styles.caption}>{frames[caughtIndex].caption}</span>
        </div>,
        portalRoot,
      )}
    </>
  );
}
