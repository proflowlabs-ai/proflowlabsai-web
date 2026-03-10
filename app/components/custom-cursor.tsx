"use client";

import { useEffect, useRef, useState } from "react";

function canUseCustomCursor(): boolean {
  if (typeof window === "undefined") return false;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return finePointer && !reducedMotion;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled] = useState(canUseCustomCursor);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const update = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(update);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden>
      <span className="custom-cursor-dot" />
    </div>
  );
}
