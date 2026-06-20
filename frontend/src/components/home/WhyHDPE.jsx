import {
  Clock,
  ShieldOff,
  Droplets,
  Wind,
  Wrench,
  Anchor,
  Sun,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { PN_RATINGS } from "@/lib/site";

const leftFeatures = [
  { icon: Clock, title: "Long Lasting", desc: "Decades of reliable performance." },
  { icon: Droplets, title: "Leak Resistant", desc: "Fused joints, zero seepage." },
  { icon: ShieldOff, title: "Corrosion Resistant", desc: "Immune to rust and chemicals." },
  { icon: Wrench, title: "High Strength", desc: "Withstands high pressure loads." },
];
const rightFeatures = [
  { icon: Wind, title: "Flexible Install", desc: "Easy to handle and lay." },
  { icon: Anchor, title: "Underground Ready", desc: "Built for buried use." },
  { icon: Sun, title: "UV Resistant", desc: "Weatherproof outer layer." },
  { icon: Zap, title: "Smooth Flow", desc: "Optimal water velocity." },
];

function FeatureCard({ icon: Icon, title, desc, align = "left" }) {
  return (
    <div
      className={`relative bg-white rounded-xl border border-brand-blue/20 shadow-card hover:shadow-card-hover p-4 sm:p-5 flex items-start gap-3 transition-all ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-light-blue flex items-center justify-center">
        <Icon className="w-5 h-5 text-brand-blue" />
      </div>
      <div>
        <h4 className="font-display font-black uppercase tracking-tight text-brand-navy text-sm sm:text-base">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyHDPE() {
  return (
    <section
      data-testid="why-hdpe"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-brand-grey relative overflow-hidden"
    >
      <div className="absolute inset-0 pipe-pattern" />
      <div className="container-x relative">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Why HDPE"
            title="The smarter choice for modern infrastructure."
            subtitle="Eight properties that make HDPE the material of choice for engineers, farmers and contractors - available in PE 80 & PE 100 grades."
          />
        </div>

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left features column */}
          <div className="lg:col-span-3 space-y-4">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} align="left" />
            ))}
          </div>

          {/* Central HERO oval with PE 80/PE 100 + pipes */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/30 via-brand-green/15 to-brand-navy/30 rounded-[60%] blur-3xl scale-105" />
              <div className="relative aspect-[5/6] rounded-[42%] bg-gradient-to-b from-brand-blue via-brand-navy to-brand-navy-deep shadow-navy overflow-hidden flex flex-col items-center justify-center p-8 sm:p-12">
                {/* Inner border */}
                <div className="absolute inset-3 sm:inset-5 rounded-[40%] border-2 border-white/15" />

                {/* Brand text */}
                <div className="relative text-center text-white z-10">
                  <p className="text-[11px] tracking-[0.4em] uppercase text-brand-blue-soft font-bold">
                    CEECO HDPE
                  </p>
                  <h3 className="mt-3 font-display font-black uppercase text-5xl sm:text-6xl text-white tracking-tight leading-none">
                    PE 80
                  </h3>
                  <p className="mt-2 text-[11px] sm:text-xs tracking-[0.32em] uppercase text-white/70 font-bold">
                    Premium Grade
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40">
                    <span className="text-xs font-bold text-brand-green">+ PE 100</span>
                  </div>
                </div>

                {/* Stylised stacked pipes illustration */}
                <div className="relative mt-6 sm:mt-8 w-full max-w-[260px] z-10">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="flex justify-center gap-1.5 -mt-3 first:mt-0">
                      {Array.from({ length: 4 - row }).map((_, i) => (
                        <div
                          key={i}
                          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-brand-navy-deep to-black border-2 border-brand-blue-soft/40 shadow-lg overflow-hidden"
                        >
                          <div className="absolute inset-1.5 rounded-full border border-brand-blue-soft/30" />
                          <div className="absolute inset-3 rounded-full bg-brand-navy-deep/60" />
                          <div className="absolute top-1 left-1.5 right-1.5 h-px bg-brand-blue-soft/40" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* PN Ratings strip - all 7 */}
                <div className="relative mt-6 sm:mt-8 w-full z-10">
                  <p className="text-center text-[9px] tracking-[0.32em] uppercase text-white/60 font-bold mb-2.5">
                    Pressure Ratings
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {PN_RATINGS.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/25 font-bold text-white backdrop-blur-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right features column */}
          <div className="lg:col-span-3 space-y-4">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} align="right" />
            ))}
          </div>
        </div>

        {/* Application chips */}
        <div className="mt-16 flex flex-wrap justify-center gap-2.5 reveal">
          {["Agriculture", "Irrigation", "Water Supply", "Industrial", "Borewell", "Cable Ducting"].map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full bg-white border border-border text-sm font-bold text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
