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
  { icon: Award, title: "40+ Years Legacy", desc: "Serving customers with trust and reliability since 1984." },
  { icon: ShieldCheck, title: "Trusted Product Quality", desc: "Manufacturing durable HDPE pipes for varied applications." },
  { icon: Users, title: "Customer-Focused", desc: "Long-term relationships built through dependable service." },
  { icon: Factory, title: "Manufacturing Standards", desc: "Consistent production quality and proven durability." },
  { icon: MapPin, title: "Strong Market Presence", desc: "Trusted by dealers, farmers and contractors across Karnataka." },
  { icon: Layers, title: "Wide Product Range", desc: "Available in multiple sizes and pressure ratings." },
  { icon: Crown, title: "Experienced Leadership", desc: "Built on strong values, continued under expert leadership." },
  { icon: Wallet, title: "Affordable & Dependable", desc: "Practical, cost-effective solutions for long-term use." },
];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-white">
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
              className="reveal group relative flex flex-col p-6 rounded-2xl bg-brand-grey border border-border hover:bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <div className="relative w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:border-brand-green transition-colors">
                <it.icon className="w-5 h-5 text-brand-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-navy leading-snug">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
              <div className="mt-auto pt-5 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] text-brand-green font-mono font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 ml-3 bg-border group-hover:bg-brand-green transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
