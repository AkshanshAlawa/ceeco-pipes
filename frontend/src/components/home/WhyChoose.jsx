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
    <section data-testid="why-choose" className="py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            eyebrow="Why Choose CEECO"
            title="Engineered for trust, built for the long run."
            subtitle="Eight reasons why dealers, farmers, contractors and industries have relied on CEECO HDPE Pipes for four decades."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal industrial-card group relative flex flex-col p-8 overflow-hidden"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              {/* Background image lightly transparent, contained within card */}
              <div
                className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 bg-cover bg-center"
                style={{ backgroundImage: `url(${it.img})` }}
              />
              <div className="absolute inset-0 bg-white/85" />

              {/* Content */}
              <div className="relative">
                {/* Number */}
                <span className="text-[10px] tracking-[0.32em] text-brand-green font-mono font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon - line style with red stroke */}
                <div className="mt-4 w-14 h-14 border-2 border-black flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all duration-300">
                  <it.icon
                    className="w-6 h-6 text-black group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-6 font-display font-black tracking-tight text-xl text-black leading-tight">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-[1.7]">
                  {it.desc}
                </p>

                {/* Red underline that expands on hover */}
                <div className="mt-6 h-[2px] w-8 bg-brand-green group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
