import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Full-bleed black page header with red accent, monumental H1.
 */
export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative pt-40 sm:pt-48 pb-28 sm:pb-36 bg-black text-white overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Red accent bars */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-green" />
      <div className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-brand-green" />

      <div className="container-x relative">
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-white/45 uppercase">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <span className="text-brand-green font-semibold">{crumb}</span>
        </div>
        <div className="mt-10 max-w-5xl">
          {eyebrow && (
            <div className="flex items-center gap-4 mb-7">
              <span className="accent-line-lg" />
              <p className="text-sm sm:text-base tracking-[0.4em] text-brand-green font-black uppercase">
                {eyebrow}
              </p>
            </div>
          )}
          <h1
            data-testid="page-hero-title"
            className="font-display font-black tracking-[0.02em] uppercase text-[clamp(2.25rem,10vw,112px)] leading-[0.9]"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-10 text-lg sm:text-xl text-white/70 leading-[1.7] max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
