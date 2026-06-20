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

/* Realistic head-on HDPE pipe cross-section — concentric rings representing
 * the outer wall, a signature blue identification stripe, the inner wall,
 * and the hollow cavity. */
function PipeCrossSection() {
  return (
    <div className="relative w-full max-w-[460px] aspect-square mx-auto">
      {/* Ambient outer glow */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-green/15 to-brand-navy/30 blur-3xl opacity-80" />

      {/* OUTER WALL (HDPE black material) */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-navy-deep via-black to-brand-navy-deep shadow-navy"
        style={{
          boxShadow:
            "inset 0 0 60px rgba(0,0,0,0.65), 0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 4px rgba(255,255,255,0.04)",
        }}
      >
        {/* Tiny highlight ring on the very top edge for 3D feel */}
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 35% at 50% 6%, rgba(255,255,255,0.18), transparent 60%)",
          }}
        />

        {/* SIGNATURE BLUE STRIPE - thin identification band */}
        <div className="absolute inset-[7%] rounded-full bg-gradient-to-br from-brand-blue via-brand-blue-soft to-brand-blue shadow-inner">
          <div className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 80% 40% at 50% 10%, rgba(255,255,255,0.22), transparent 55%)",
            }}
          />

          {/* INNER WALL */}
          <div
            className="absolute inset-[5%] rounded-full bg-gradient-to-br from-brand-navy-deep via-black to-brand-navy-deep"
            style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.7)" }}
          >
            {/* HOLLOW CAVITY (the interior of the pipe) */}
            <div
              className="absolute inset-[8%] rounded-full bg-gradient-radial from-black via-brand-navy-deep to-black flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, #050a14 0%, #0a1729 55%, #000 100%)",
                boxShadow:
                  "inset 0 0 100px rgba(0,0,0,0.95), inset 0 8px 40px rgba(0,0,0,0.6)",
              }}
            >
              {/* Cavity content - brand text deep inside the pipe */}
              <div className="relative text-center text-white px-5">
                <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-brand-blue-soft font-bold">
                  CEECO HDPE
                </p>
                <h3 className="mt-2 font-display font-black uppercase text-5xl sm:text-6xl text-white tracking-tight leading-none">
                  PE 80
                </h3>
                <p className="mt-2 text-[10px] sm:text-xs tracking-[0.32em] uppercase text-white/65 font-bold">
                  Premium Grade
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-sm">
                  <span className="text-xs font-bold text-brand-green tracking-wide">
                    + PE 100
                  </span>
                </div>

                {/* PN Ratings strip in the cavity */}
                <div className="mt-5 sm:mt-6">
                  <p className="text-[9px] tracking-[0.32em] uppercase text-white/55 font-bold mb-2">
                    Pressure Ratings
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 max-w-[280px] mx-auto">
                    {PN_RATINGS.map((p) => (
                      <span
                        key={p}
                        className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20 font-bold text-white"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle measurement tick marks (annotation feel) */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-brand-blue font-bold">
        &middot; PIPE CROSS-SECTION &middot;
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

          {/* CENTRAL PIPE CROSS-SECTION */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <PipeCrossSection />
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
