import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, Award, Factory } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1684667273934-e5d39307eeae?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="HDPE Pipes"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep via-brand-navy/95 to-brand-navy/80" />
      </div>
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="container-x relative pt-28 pb-20 sm:pt-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                S D Ruparel Group
              </span>
            </div>

            <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              CEECO
              <br />
              <span className="text-white">HDPE</span>{" "}
              <span className="text-brand-green">Pipes</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-light text-brand-light-blue">
              Built on Trust <span className="text-brand-green font-semibold">Since 1984</span>
            </p>

            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              Reliable HDPE pipe solutions engineered for agriculture, water supply
              and industrial applications — manufactured by a company built on four
              decades of trust.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-deep text-white px-7 py-3.5 rounded-full font-semibold shadow-cta hover:scale-[1.02] transition-transform"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy px-7 py-3.5 rounded-full font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>

            <p className="mt-10 text-[11px] tracking-[0.4em] text-white/50 uppercase">
              Water · Fields · Future
            </p>
          </div>

          {/* Right floating stat card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-green/30 blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 shadow-navy">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                    Trusted Manufacturer
                  </div>
                  <Award className="w-5 h-5 text-brand-green" />
                </div>
                <div className="mt-8 grid grid-cols-3 divide-x divide-white/10">
                  {[
                    { v: "40+", l: "Years" },
                    { v: "9", l: "Sizes" },
                    { v: "5", l: "PN Ratings" },
                  ].map((s) => (
                    <div key={s.l} className="text-center px-2">
                      <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                        {s.v}
                      </div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-white/60 mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">ISO Certified</p>
                      <p className="text-xs text-white/55">Quality assured</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">In-House</p>
                      <p className="text-xs text-white/55">Manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 bg-brand-green text-white rounded-2xl px-5 py-4 shadow-cta animate-float-slow">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-display font-bold">PE80</span>
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] tracking-widest uppercase opacity-80">Material</p>
                  <p className="font-semibold">PE 80 Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
