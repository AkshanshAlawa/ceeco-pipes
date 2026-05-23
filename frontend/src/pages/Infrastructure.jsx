import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Factory, ShieldCheck, Users, Settings, Truck } from "lucide-react";

const highlights = [
  { icon: Factory, title: "HDPE Manufacturing Unit", desc: "Dedicated plant producing pipes from 20mm to 110mm." },
  { icon: ShieldCheck, title: "Quality Checking Process", desc: "Multi-stage QC on every production batch." },
  { icon: Users, title: "Skilled Workforce", desc: "Trained operators with years of industry experience." },
  { icon: Settings, title: "Reliable Production System", desc: "Continuous extrusion lines optimised for consistency." },
  { icon: Truck, title: "Efficient Dispatch", desc: "Organised warehouse and timely deliveries." },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=900&q=80", label: "Manufacturing Unit" },
  { src: "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=900&q=80", label: "Production Floor" },
  { src: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=900&q=80", label: "Machinery" },
  { src: "https://images.unsplash.com/photo-1684667273934-e5d39307eeae?auto=format&fit=crop&w=900&q=80", label: "Inventory" },
  { src: "https://images.unsplash.com/photo-1563446135800-1e2c05d07eb1?auto=format&fit=crop&w=900&q=80", label: "Quality Lab" },
  { src: "https://images.pexels.com/photos/32200999/pexels-photo-32200999.jpeg?auto=compress&w=900", label: "Dispatch" },
];

export default function Infrastructure() {
  return (
    <>
      <PageHero
        crumb="Infrastructure"
        eyebrow="Manufacturing Infrastructure"
        title="A facility built for consistent quality."
        subtitle="From raw material storage to dispatch — every step happens in a controlled environment."
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="flex flex-col p-6 rounded-2xl bg-brand-grey border border-border hover:border-brand-green hover:bg-white shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-brand-green" />
                </div>
                <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-brand-green font-semibold">
                  STAGE {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display font-semibold text-brand-navy leading-snug">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="container-x">
          <SectionHeading center eyebrow="Facility Gallery" title="Inside CEECO." />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <div
                key={g.label}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover"
              >
                <img src={g.src} alt={g.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-semibold">CEECO</p>
                  <p className="mt-1 text-white font-display font-semibold">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
