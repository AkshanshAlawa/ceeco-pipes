import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Ruler, FlaskConical, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const checks = [
  { icon: Gauge, title: "Pressure Testing", desc: "Verified against all PN ratings." },
  { icon: Ruler, title: "Dimensional Accuracy", desc: "Tight tolerance on every batch." },
  { icon: FlaskConical, title: "Material Inspection", desc: "Premium PE 80 raw material only." },
  { icon: ShieldCheck, title: "Durability Testing", desc: "Engineered for long service life." },
];

export default function QualityManufacturing() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <SectionHeading
            eyebrow="Quality Manufacturing"
            title="Every pipe, built to perform."
            subtitle="At CEECO, every pipe is manufactured with attention to durability, strength and consistent performance. Our ISO-certified processes ensure that every product meets the standards our customers rely on."
          />
          <Link
            to="/quality"
            className="inline-flex items-center gap-2 mt-8 text-brand-navy font-semibold border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors"
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
                className="reveal flex flex-col p-7 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-card border border-border">
                  <c.icon className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
