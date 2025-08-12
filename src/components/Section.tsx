"use client";

import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";
import type { JSX } from "react";

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export default function Section({ id, className, title, subtitle, children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -20]);

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 ${className ?? ""}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {subtitle && <p className="text-sm uppercase tracking-wider text-foreground/60">{subtitle}</p>}
          {title && <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>}
        </div>
      )}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ y }}
      >
        {children}
      </motion.div>
    </section>
  );
}


