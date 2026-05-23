import { Headphones, ShieldCheck, Smile } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  {
    icon: Headphones,
    title: "Reliable Service",
    desc: "Quick response and dedicated assistance whenever our customers need us.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    desc: "Ongoing technical guidance for the life of your CEECO installation.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    desc: "Decades of repeat customers — proof of how seriously we take service.",
  },
];

export default function AfterSales() {
  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="After Sales Support"
            title="Beyond the sale — we stand by every pipe."
            subtitle="Our commitment doesn't end when the pipe leaves the factory. It begins there."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal text-center p-8 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-border flex items-center justify-center shadow-card">
                <p.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
