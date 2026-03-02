"use client";

import { motion, useAnimation, useInView } from "framer-motion";
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

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 ${className ?? ""}`}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {subtitle && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70 mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              <span className="gradient-text">{title}</span>
            </h2>
          )}
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-cyan-500/60 to-transparent" />
        </motion.div>
      )}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}


