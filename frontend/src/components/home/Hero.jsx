import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SITE, PN_RATINGS, ASSETS } from "@/lib/site";

// Hero background — user's authentic FACTORY.jpeg showing HDPE pipe coils
const HERO_IMG = ASSETS.factory;

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center bg-black text-white overflow-hidden"
    >
      {/* Background image - dramatic industrial with Ken Burns slow zoom */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="CEECO HDPE pipe manufacturing"
          className="w-full h-full object-cover opacity-55 animate-ken-burns"
        />
        {/* Deep black gradient overlay for text legibility on left half */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
      </div>

      {/* Vertical red measurement bar (left edge) */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-green z-10" />
      {/* Vertical red measurement bar (right edge) */}
      <div className="absolute right-0 top-24 bottom-24 w-[2px] bg-brand-green/60 z-10 hidden lg:block" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="container-x relative pt-28 pb-24 sm:pt-32 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            {/* Eyebrow with red accent bar */}
            <div className="fade-up-1 flex items-center gap-4">
              <span className="accent-line-lg" />
              <span className="text-sm sm:text-base tracking-[0.4em] uppercase text-brand-green font-black">
                {SITE.parent}
              </span>
            </div>

            {/* MONUMENTAL H1 - 80-110px */}
            <h1 className="fade-up-2 mt-8 font-display font-black tracking-[-0.03em] leading-[0.88] text-[clamp(3rem,13vw,112px)] break-words">
              CEECO
              <br />
              <span className="text-white">HDPE </span>
              <span className="text-brand-green">PIPES</span>
            </h1>

            {/* Subtitle */}
            <p className="fade-up-3 mt-8 text-2xl sm:text-3xl font-light text-white/85">
              Built on Trust{" "}
              <span className="text-brand-green font-bold">Since 1984</span>
            </p>

            {/* Description */}
            <p className="fade-up-3 mt-6 text-lg text-white/70 leading-[1.7] max-w-2xl">
              Reliable HDPE pipe solutions engineered for agriculture, water supply
              and industrial applications - manufactured by a company built on four
              decades of trust.
            </p>

            {/* PE Grade emphasis strip */}
            <div className="fade-up-4 mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-2 border-2 border-white/15 bg-white/[0.04] px-5 py-3">
              <ShieldCheck className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.28em] uppercase text-white/60 font-bold">
                Available in
              </span>
              <span className="text-base font-black text-white tracking-wide">PE 80</span>
              <span className="text-white/30">·</span>
              <span className="text-base font-black text-white tracking-wide">PE 100</span>
              <span className="text-white/30">·</span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-brand-green font-bold hidden sm:inline">
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
            <div className="fade-up-5 mt-12 flex flex-col sm:flex-row gap-3">
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

            <p className="fade-up-5 mt-16 text-[10px] tracking-[0.5em] text-white/40 uppercase font-bold">
              {SITE.tagline}
            </p>
          </div>

          {/* Right: Trusted Manufacturer stat card - now 2 stats only */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Card - sharp corners, industrial */}
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/15 p-10">
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-10 h-[3px] bg-brand-green" />
                <span className="absolute top-0 left-0 w-[3px] h-10 bg-brand-green" />
                <span className="absolute bottom-0 right-0 w-10 h-[3px] bg-brand-green" />
                <span className="absolute bottom-0 right-0 w-[3px] h-10 bg-brand-green" />

                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-brand-green" />
                  <div className="text-[11px] tracking-[0.35em] uppercase text-brand-green font-bold">
                    Trusted Manufacturer
                  </div>
                </div>

                {/* 2 stats only: 40+ Years + 9+ Sizes */}
                <div className="mt-12 grid grid-cols-2 divide-x divide-white/10">
                  {[
                    { v: "40+", l: "Years of Legacy" },
                    { v: "9+", l: "Product Sizes" },
                  ].map((s) => (
                    <div key={s.l} className="text-center px-4">
                      <div className="font-display text-6xl sm:text-7xl font-black text-white leading-none tracking-tight">
                        {s.v}
                      </div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mt-4 font-bold">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 border border-brand-green flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 font-bold">
                        Certified Manufacturing
                      </p>
                      <p className="text-sm font-black text-white tracking-wide">
                        ISO 9001:2015 · Udyam MSME
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PE80/PE100 floating tag */}
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="text-[10px] tracking-[0.35em] uppercase font-bold">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-brand-green to-transparent" />
      </div>
    </section>
  );
}
