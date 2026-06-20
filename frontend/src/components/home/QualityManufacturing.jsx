import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Ruler, FlaskConical, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const checks = [
  {
    icon: Gauge,
    title: "Pressure Testing",
    desc: "Verified against all PN ratings - PN6 to PN25.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Ruler,
    title: "Dimensional Accuracy",
    desc: "Tight tolerance on every batch, every size.",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: FlaskConical,
    title: "Material Inspection",
    desc: "Premium PE 80 & PE 100 raw material only.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Durability Testing",
    desc: "Engineered for decades of service life.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function QualityManufacturing() {
  return (
    <section data-testid="quality-manufacturing" className="py-20 sm:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <SectionHeading
            eyebrow="Quality Manufacturing"
            title="Every pipe, built to perform."
            subtitle="At CEECO, every pipe is manufactured with attention to durability, strength and consistent performance. Our ISO 9001:2015 certified processes ensure that every product meets the standards our customers rely on."
          />
          <Link
            to="/quality"
            data-testid="quality-manufacturing-cta"
            className="inline-flex items-center gap-2 mt-8 text-brand-navy font-bold border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {checks.map((c, i) => (
              <div
                key={c.title}
                className="reveal relative flex flex-col p-7 rounded-2xl border border-border overflow-hidden bg-white hover:shadow-card-hover transition-shadow group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-white/85" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-card border border-border">
                    <c.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="mt-5 font-display font-black uppercase tracking-tight text-lg text-brand-navy">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
