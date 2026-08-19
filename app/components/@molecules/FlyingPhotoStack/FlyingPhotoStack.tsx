"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { FLYING_PHOTOS } from "@/app/config/flyingPhotos";
import styles from "./FlyingPhotoStack.module.css";

type Depth = "front" | "mid" | "back";

const frameStyles = [
  [styles.frameOne, styles.leftCrop],
  [styles.frameTwo, styles.centerCrop],
  [styles.frameThree, styles.rightCrop],
  [styles.frameFour, styles.bottomCrop],
  [styles.frameFive, styles.leftCrop],
  [styles.frameTwo, styles.bottomCrop],
  [styles.frameSix, styles.rightCrop],
  [styles.frameOne, styles.centerCrop],
  [styles.frameThree, styles.leftCrop],
];

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

const frames = FLYING_PHOTOS.map((photo, index) => {
  const [className, cropClass] = frameStyles[index % frameStyles.length];

  return {
    caption: photo.caption,
    src: photo.photoSource,
    fallbackSrc: "/assets/hero-image.jpg",
    className,
    cropClass,
    depth: depthPattern[index % depthPattern.length],
  };
}) as Array<{
  caption: string;
  src: string;
  fallbackSrc: string;
  className: string;
  cropClass: string;
  depth: Depth;
}>;

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

const lanes = [-0.98, 0.82, -0.46, 0.98, -0.76, 0.26, 0.48, -0.22, 0.68];
const starts = [0.06, 0.2, 0.34, 0.48, 0.62, 0.76, 0.9, 1.02, 1.14];

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
    lane: lanes[index] ?? 0,
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
  const stageRef = useRef<HTMLDivElement | null>(null);
  const objectsRef = useRef(frames.map((_, index) => createObject(index)));
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame = 0;

    const recycle = (object: FlyingObject, index: number) => {
      const settings = depthSettings[object.depth];

      object.progress = -0.08 - Math.random() * 0.08;
      object.lane = lanes[index] ?? 0;
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
        const stage = {
          originX: width * -0.28,
          originY: height * 0.02,
          verticalReach: height * 1.05,
          maxSpread: width * 0.58,
        };

      objectsRef.current.forEach((object, index) => {
        if (!object.el) return;
        const settings = depthSettings[object.depth];

        if (object.isDragging) {
          object.vx += (mouseRef.current.x - object.x) * 0.075;
          object.vy += (mouseRef.current.y - object.y) * 0.075;
          object.vz += (0 - object.z) * 0.08;

          object.vx *= 0.85;
          object.vy *= 0.85;
          object.vz *= 0.7;

          object.scale = spring(object.scale, 1.22, 0.34);
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
          (!object.isDragging && !object.isVanishing && object.progress > 1.34) ||
          object.z > 360
        ) {
          recycle(object, index);
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

  const updateMouse = (event: { clientX: number; clientY: number }) => {
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
    object.el?.setPointerCapture(event.pointerId);
  };

  const endDrag = (index: number, event: PointerEvent<HTMLButtonElement>) => {
    const object = objectsRef.current[index];
    object.isDragging = false;
    object.isVanishing = true;
    object.vz = 18;
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
  };

  const blurFrame = (index: number) => {
    const object = objectsRef.current[index];
    object.isDragging = false;
    object.isVanishing = true;
    object.vz = 18;
  };

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      onPointerMove={updateMouse}
    >
      {showSilhouette && (
        <img
          src="/assets/girl-silhouette.png"
          alt=""
          className={styles.silhouette}
          onError={() => setShowSilhouette(false)}
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
          className={`${styles.frame} ${frame.className}`}
          onPointerDown={(event) => startDrag(index, event)}
          onPointerUp={(event) => endDrag(index, event)}
          onPointerCancel={(event) => endDrag(index, event)}
          onFocus={() => focusFrame(index)}
          onBlur={() => blurFrame(index)}
        >
          <img
            src={frame.src}
            alt=""
            className={frame.cropClass}
            onError={(event) => {
              event.currentTarget.src = frame.fallbackSrc;
            }}
          />
          <span className={styles.caption}>{frame.caption}</span>
        </button>
      ))}

      <p className={styles.hint}>catch and hold</p>
    </div>
  );
}
