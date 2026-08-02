import { User, Crown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pills = [
  "Customer Trust & Satisfaction",
  "Reliable Product Quality",
  "Long-Term Business Relationships",
  "Growth in Agriculture & Infrastructure",
  "Modern Future · Preserved Legacy",
];

function LeadershipCard({ icon: Icon, role, name, caption }) {
  return (
    <div className="relative group">
      <div className="flex items-stretch bg-white/[0.04] border border-white/15 overflow-hidden hover:border-brand-green transition-colors">
        {/* Sharp red corner accent */}
        <span className="absolute top-0 left-0 w-6 h-[2px] bg-brand-green" />
        <span className="absolute top-0 left-0 w-[2px] h-6 bg-brand-green" />

        {/* Placeholder portrait */}
        <div className="relative w-32 sm:w-40 shrink-0 bg-black flex flex-col items-center justify-center text-white/85 p-4 border-r border-white/10">
          <div className="w-14 h-14 border border-brand-green flex items-center justify-center">
            <Icon className="w-6 h-6 text-brand-green" strokeWidth={1.5} />
          </div>
          <p className="mt-3 text-[9px] tracking-[0.32em] uppercase text-white/50 font-bold text-center">
            Photo
            <br />
            Coming Soon
          </p>
        </div>
        <div className="flex-1 p-6">
          <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
            {role}
          </p>
          <p className="mt-2 font-display font-black tracking-tight text-xl sm:text-2xl text-white leading-tight">
            {name}
          </p>
          <p className="mt-3 text-sm text-white/65 leading-[1.7]">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Legacy() {
  return (
    <section
      data-testid="legacy-section"
      className="py-24 sm:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <SectionHeading
              eyebrow="Our Legacy"
              title="Three generations. One commitment."
              light
              index="02"
            />
            <p className="mt-8 text-lg text-white/75 leading-[1.7]">
              Founded by{" "}
              <span className="text-white font-bold">
                Late Shri Damodar S Ruparel
              </span>{" "}
              in 1984, S D Ruparel Group was built on a single vision - a
              trusted, dependable business that contributes meaningfully to
              India&apos;s agricultural and water infrastructure. The Group has stayed
              true to those founding values for four decades.
            </p>
            <p className="mt-5 text-base text-white/70 leading-[1.7]">
              Today, the company is proudly led by Director{" "}
              <span className="text-white font-bold">Sameer D Ruparel</span>,
              carrying forward the legacy with the same commitment, trust and
              vision - while adapting to modern industry needs and standards.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold bg-white/5 border border-white/15 text-white/85 hover:bg-brand-green hover:border-brand-green transition-colors uppercase tracking-wider"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-12 font-display italic font-black text-3xl sm:text-4xl text-brand-green">
              Built on Trust Since 1984.
            </p>
          </div>

          {/* Right: stacked founder + director */}
          <div className="lg:col-span-5 reveal-scale">
            <div className="space-y-5 max-w-md mx-auto">
              <LeadershipCard
                icon={Crown}
                role="Founder"
                name="Late Shri Damodar S Ruparel"
                caption="Visionary founder who built the company on trust, integrity and uncompromising quality - the values that still define us today."
              />
              <LeadershipCard
                icon={User}
                role="Director"
                name="Sameer D Ruparel"
                caption="Carrying forward four decades of legacy with modern manufacturing systems, while preserving the values that built this company."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
