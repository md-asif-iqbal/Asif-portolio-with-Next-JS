"use client";

import { useRef } from "react";
import type { JSX } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function Magnetic({ children, className, href }: Props): JSX.Element {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </Comp>
  );
}


