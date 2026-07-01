import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Full-bleed black page header with red accent — inner page hero.
 */
export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 bg-black text-white overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Red diagonal accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-green" />
      <div className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-brand-green" />

      <div className="container-x relative">
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-white/45 uppercase">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          <span className="text-brand-green font-semibold">{crumb}</span>
        </div>
        <div className="mt-8 max-w-4xl">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <p className="text-[11px] sm:text-xs tracking-[0.32em] text-brand-green font-bold uppercase">
                {eyebrow}
              </p>
            </div>
          )}
          <h1
            data-testid="page-hero-title"
            className="font-display font-black tracking-tight text-6xl sm:text-7xl lg:text-[88px] leading-[0.95]"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 text-base sm:text-lg text-white/70 leading-[1.7] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
