import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="container-x relative">
        <div className="flex items-center gap-2 text-xs tracking-widest text-white/60 uppercase">
          <Link to="/" className="hover:text-brand-green">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-green">{crumb}</span>
        </div>
        <div className="mt-5 max-w-4xl">
          {eyebrow && (
            <p className="text-[11px] sm:text-xs tracking-[0.32em] text-brand-green font-bold uppercase mb-4">
              {eyebrow}
            </p>
          )}
          <h1
            data-testid="page-hero-title"
            className="font-display font-black uppercase tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.02]"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
