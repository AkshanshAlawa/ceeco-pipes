import {
  Award,
  ShieldCheck,
  Users,
  Factory,
  MapPin,
  Layers,
  Crown,
  Wallet,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const items = [
  {
    icon: Award,
    title: "40+ Years Legacy",
    desc: "Serving customers with trust and reliability since 1984.",
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Product Quality",
    desc: "Manufacturing durable HDPE pipes for varied applications.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Users,
    title: "Customer-Focused",
    desc: "Long-term relationships built through dependable service.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Factory,
    title: "Manufacturing Standards",
    desc: "Consistent production quality and proven durability.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: MapPin,
    title: "Strong Market Presence",
    desc: "Trusted by dealers, farmers and contractors across Karnataka.",
    img: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Layers,
    title: "Wide Product Range",
    desc: "9+ sizes and 7 PN ratings - PE 80 & PE 100 grades.",
    img: "https://images.unsplash.com/photo-1581093458791-9d2b11a0a8c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Crown,
    title: "Experienced Leadership",
    desc: "Built on strong values, continued under expert leadership.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Wallet,
    title: "Affordable & Dependable",
    desc: "Practical, cost-effective solutions for long-term use.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WhyChoose() {
  return (
    <section data-testid="why-choose" className="py-20 sm:py-28 bg-white">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            eyebrow="Why Choose CEECO"
            title="Engineered for trust, built for the long run."
            subtitle="Eight reasons why dealers, farmers, contractors and industries have relied on CEECO HDPE Pipes for four decades."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group relative flex flex-col p-6 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden bg-white"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              {/* Background image (lightly transparent) */}
              <div
                className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${it.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-white/85" />

              {/* Content */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-5 shadow-card group-hover:bg-brand-green group-hover:border-brand-green transition-colors">
                  <it.icon className="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-black uppercase tracking-tight text-lg text-brand-navy leading-snug">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
                <div className="mt-6 pt-5 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-brand-green font-mono font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 ml-3 bg-border group-hover:bg-brand-green transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
