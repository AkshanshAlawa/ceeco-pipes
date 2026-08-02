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
    <section data-testid="quality-manufacturing" className="py-24 sm:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal-x">
          <SectionHeading
            eyebrow="Quality Manufacturing"
            title="Every pipe, built to perform."
            subtitle="At CEECO, every pipe is manufactured with attention to durability, strength and consistent performance. Our ISO 9001:2015 certified processes ensure that every product meets the standards our customers rely on."
            index="05"
          />
          <Link
            to="/quality"
            data-testid="quality-manufacturing-cta"
            className="inline-flex items-center gap-2 mt-10 text-black font-bold text-sm uppercase tracking-[0.1em] border-b-2 border-brand-green pb-1.5 hover:text-brand-green transition-colors group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            {checks.map((c, i) => (
              <div
                key={c.title}
                className="reveal industrial-card relative flex flex-col p-8 overflow-hidden group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-white/88" />
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                    <c.icon className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display font-black tracking-[0.02em] text-xl text-black leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-[1.7]">
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
