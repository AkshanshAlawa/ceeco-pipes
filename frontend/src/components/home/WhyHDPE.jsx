import {
  Clock,
  ShieldOff,
  Droplets,
  Wind,
  Wrench,
  Anchor,
  Sun,
  Zap,
  Sprout,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

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

const chips = ["Agriculture", "Irrigation", "Water Supply", "Industrial", "Borewell", "Cable Ducting"];

export default function WhyHDPE() {
  return (
    <section className="py-20 sm:py-28 bg-brand-grey relative overflow-hidden">
      <div className="absolute inset-0 pipe-pattern" />
      <div className="container-x relative">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Why HDPE"
            title="The smarter choice for modern infrastructure."
            subtitle="Nine properties that make HDPE the material of choice for engineers, farmers and contractors."
          />
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left features */}
          <div className="lg:col-span-4 space-y-4">
            {leftFeatures.map((f, i) => (
              <div
                key={f.title}
                className="reveal flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-brand-green transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-light-blue flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-navy">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center pipe illustration */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-brand-green/10 to-brand-navy/15 rounded-full blur-3xl scale-110" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[180px] bg-gradient-to-b from-brand-blue via-brand-navy to-brand-blue shadow-navy overflow-hidden flex items-center justify-center">
                <div className="absolute inset-3 rounded-[170px] border-2 border-white/15" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative text-center text-white px-6">
                  <Sprout className="w-8 h-8 text-brand-green mx-auto" />
                  <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                    CEECO HDPE
                  </p>
                  <p className="mt-1 font-display font-bold text-2xl">PE 80</p>
                  <p className="text-[10px] tracking-widest uppercase text-white/60 mt-1">
                    Premium Grade
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                    {["PN6", "PN10", "PN16"].map((p) => (
                      <span
                        key={p}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20 font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="lg:col-span-4 space-y-4">
            {rightFeatures.map((f, i) => (
              <div
                key={f.title}
                className="reveal flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-brand-green transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-light-blue flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-navy">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5 reveal">
          {chips.map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
