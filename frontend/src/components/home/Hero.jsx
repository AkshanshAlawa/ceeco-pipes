import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SITE, ASSETS, PN_RATINGS } from "@/lib/site";

const HERO_IMG = ASSETS.factory;

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center bg-black text-white overflow-hidden"
    >
      {/* Background image (more visible - 65% opacity, Ken Burns slow zoom) */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="CEECO HDPE pipe manufacturing"
          className="w-full h-full object-cover opacity-65 animate-ken-burns"
        />
        {/* Deep black gradient overlay for text legibility on left half */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Vertical red measurement bar (left edge) */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-green z-10" />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="container-x relative pt-28 pb-20 sm:pt-32 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            {/* Eyebrow with accent */}
            <div className="fade-up-1 flex items-center gap-3">
              <span className="accent-line-lg" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-brand-green font-bold">
                {SITE.parent}
              </span>
            </div>

            {/* Massive H1 - 72-96px */}
            <h1 className="fade-up-2 mt-6 font-display font-black tracking-tight leading-[0.9] text-[64px] sm:text-[80px] lg:text-[96px]">
              CEECO
              <br />
              <span className="text-white">HDPE </span>
              <span className="text-brand-green">PIPES</span>
            </h1>

            {/* Subtitle */}
            <p className="fade-up-3 mt-6 text-xl sm:text-2xl font-light text-white/80">
              Built on Trust{" "}
              <span className="text-brand-green font-bold">Since 1984</span>
            </p>

            {/* Description */}
            <p className="fade-up-3 mt-5 text-base sm:text-lg text-white/70 leading-[1.7] max-w-2xl">
              Reliable HDPE pipe solutions engineered for agriculture, water supply
              and industrial applications - manufactured by a company built on four
              decades of trust.
            </p>

            {/* PE Grade emphasis strip */}
            <div className="fade-up-4 mt-7 inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.28em] uppercase text-white/60 font-bold">
                Available in
              </span>
              <span className="text-sm font-black text-white tracking-wide">PE 80</span>
              <span className="text-white/30">·</span>
              <span className="text-sm font-black text-white tracking-wide">PE 100</span>
              <span className="text-white/30">·</span>
              <span className="text-[11px] tracking-[0.15em] uppercase text-brand-green font-bold">
                Premium Grades
              </span>
            </div>

            {/* PN Ratings chips - all 7 */}
            <div className="fade-up-4 mt-4 flex flex-wrap gap-2">
              {PN_RATINGS.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 border border-white/20 bg-white/5 text-white text-xs font-bold tracking-wider"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs - sharp corners, industrial */}
            <div className="fade-up-5 mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                data-testid="hero-explore-products"
                className="btn-sharp btn-red"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-contact-us"
                className="btn-sharp btn-outline-white"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                Contact Us
              </Link>
            </div>

            <p className="fade-up-5 mt-14 text-[10px] tracking-[0.5em] text-white/40 uppercase font-bold">
              {SITE.tagline}
            </p>
          </div>

          {/* Right: Trusted Manufacturer stat card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Card - sharp corners, industrial */}
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/15 p-8">
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-8 h-[3px] bg-brand-green" />
                <span className="absolute top-0 left-0 w-[3px] h-8 bg-brand-green" />
                <span className="absolute bottom-0 right-0 w-8 h-[3px] bg-brand-green" />
                <span className="absolute bottom-0 right-0 w-[3px] h-8 bg-brand-green" />

                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                    Trusted Manufacturer
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-3 divide-x divide-white/10">
                  {[
                    { v: "40+", l: "Years" },
                    { v: "9+", l: "Sizes" },
                    { v: "7", l: "PN Ratings" },
                  ].map((s) => (
                    <div key={s.l} className="text-center px-3">
                      <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                        {s.v}
                      </div>
                      <div className="text-[10px] tracking-[0.28em] uppercase text-white/60 mt-2 font-bold">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-brand-green flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                        Certified Manufacturing
                      </p>
                      <p className="text-sm font-black text-white tracking-wide">
                        ISO 9001:2015 · Udyam MSME
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PE80/PE100 floating tag - LOWERED so it does not obscure content */}
              <div className="hidden sm:flex absolute -bottom-10 right-6 items-center gap-3 bg-brand-green text-white px-5 py-3.5 shadow-cta animate-float-slow z-10">
                <div className="w-9 h-9 bg-white/20 flex items-center justify-center">
                  <span className="font-display font-black text-xs">PE</span>
                </div>
                <div className="leading-tight">
                  <p className="text-[9px] tracking-[0.28em] uppercase opacity-90 font-bold">
                    Premium Grade
                  </p>
                  <p className="font-black text-sm">PE 80 / PE 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="text-[10px] tracking-[0.35em] uppercase font-bold">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-brand-green to-transparent" />
      </div>
    </section>
  );
}
