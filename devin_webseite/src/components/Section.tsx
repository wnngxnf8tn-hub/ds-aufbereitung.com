import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  className,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className ?? ""}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl md:mx-auto md:text-center">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base text-white/70 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
