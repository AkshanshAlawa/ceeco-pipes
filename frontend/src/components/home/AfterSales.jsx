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
    desc: "Decades of repeat customers - proof of how seriously we take service.",
  },
];

export default function AfterSales() {
  return (
    <section data-testid="after-sales" className="py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="After Sales Support"
            title="Beyond the sale - we stand by every pipe."
            subtitle="Our commitment doesn't end when the pipe leaves the factory. It begins there."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal industrial-card text-center p-10 bg-[#F2F2F2] group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto border-2 border-black flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                <p.icon className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display font-black tracking-tight text-2xl text-black">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-[1.7]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
