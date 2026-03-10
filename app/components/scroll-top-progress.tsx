"use client";

import { useEffect, useMemo, useState } from "react";

export function ScrollTopProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const radius = 18;
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const offset = circumference - (progress / 100) * circumference;
  const visible = progress > 12;

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg viewBox="0 0 48 48" className="scroll-progress" aria-hidden>
        <circle cx="24" cy="24" r={radius} className="scroll-track" />
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="scroll-indicator"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="scroll-arrow" aria-hidden>
        ↑
      </span>
    </button>
  );
}
