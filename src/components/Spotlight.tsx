"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

export default function Spotlight(): JSX.Element {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px 500px at ${position.x}px ${position.y}px, rgba(6,182,212,0.04), transparent 60%)`,
      }}
    />
  );
}


