import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.18_255)] mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
