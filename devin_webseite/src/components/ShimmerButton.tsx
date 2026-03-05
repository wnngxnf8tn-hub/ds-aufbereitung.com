import type { AnchorHTMLAttributes, ReactNode } from "react";

type ShimmerButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function ShimmerButton({
  children,
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <a
      {...props}
      className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#3ac6cd]/35 bg-[linear-gradient(130deg,#1b2a31,#0d1419)] px-6 text-sm font-semibold text-white shadow-[0_14px_35px_-18px_rgba(58,198,205,0.75)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-18px_rgba(58,198,205,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ac6cd] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d10] ${className ?? ""}`.trim()}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <span className="absolute inset-y-0 -left-1/2 w-1/2 animate-[shimmer_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
      </span>
    </a>
  );
}
