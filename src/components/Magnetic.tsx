"use client";

import { useRef } from "react";
import type { JSX } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function Magnetic({ children, className, href }: Props): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * 0.08}px, ${relY * 0.08}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}


