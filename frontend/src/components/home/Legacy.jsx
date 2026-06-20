import { User, Crown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pills = [
  "Customer Trust & Satisfaction",
  "Reliable Product Quality",
  "Long-Term Business Relationships",
  "Growth in Agriculture & Infrastructure",
  "Modern Future · Preserved Legacy",
];

function LeadershipCard({ icon: Icon, role, name, caption, accent }) {
  return (
    <div className="relative">
      <div
        className={`absolute -inset-2 rounded-2xl ${accent} blur-xl opacity-70`}
      />
      <div className="relative flex items-stretch rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm">
        {/* Placeholder photo block */}
        <div className="relative w-32 sm:w-40 shrink-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy-deep flex flex-col items-center justify-center text-white/90 p-4">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Icon className="w-7 h-7 text-brand-green" />
          </div>
          <p className="mt-3 text-[9px] tracking-[0.3em] uppercase text-white/60 font-bold text-center">
            Photo
            <br />
            Coming Soon
          </p>
        </div>
        <div className="flex-1 p-5 sm:p-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-bold">
            {role}
          </p>
          <p className="mt-1.5 font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-white leading-tight">
            {name}
          </p>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Legacy() {
  return (
    <section
      data-testid="legacy-section"
      className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <SectionHeading
              eyebrow="Our Legacy"
              title="Two generations. One commitment."
              light
            />
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
              Founded by{" "}
              <span className="text-white font-bold">
                Late Shri Damodar S Ruparel
              </span>{" "}
              in 1984, S D Ruparel Group was built on a single vision - a
              trusted, dependable business that contributes meaningfully to
              India&apos;s agricultural and water infrastructure. The Group has stayed
              true to those founding values for four decades.
            </p>
            <p className="mt-4 text-base text-white/75 leading-relaxed">
              Today, the company is proudly led by Director{" "}
              <span className="text-white font-bold">Sameer D Ruparel</span>,
              carrying forward the legacy with the same commitment, trust and
              vision - while adapting to modern industry needs and standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/5 border border-white/15 text-white/85 hover:bg-brand-green hover:border-brand-green transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-10 font-display italic font-black text-3xl sm:text-4xl text-brand-green">
              Built on Trust Since 1984.
            </p>
          </div>

          {/* Right: stacked vertical photos */}
          <div className="lg:col-span-5 reveal">
            <div className="space-y-5 max-w-md mx-auto">
              <LeadershipCard
                icon={Crown}
                role="Founder"
                name="Late Shri Damodar S Ruparel"
                caption="Visionary founder who built the company on trust, integrity and uncompromising quality - the values that still define us today."
                accent="bg-gradient-to-br from-brand-green/40 to-brand-blue/30"
              />
              <LeadershipCard
                icon={User}
                role="Director"
                name="Sameer D Ruparel"
                caption="Carrying forward four decades of legacy with modern manufacturing systems, while preserving the values that built this company."
                accent="bg-gradient-to-br from-brand-blue/40 to-brand-green/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
