import SectionHeading from "@/components/common/SectionHeading";

const pills = [
  "Customer Trust & Satisfaction",
  "Reliable Product Quality",
  "Long-Term Business Relationships",
  "Growth in Agriculture & Infrastructure",
  "Modern Future · Preserved Legacy",
];

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=900&q=80";

export default function Legacy() {
  return (
    <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <SectionHeading eyebrow="Our Legacy" title="Two generations. One commitment." light />
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
              Founded by{" "}
              <span className="text-white font-semibold">
                Late Shri Damodar S. Ruparel
              </span>{" "}
              in the late 1980s with a vision to build a trusted, dependable business
              contributing to the agricultural and water infrastructure sector — the
              company has stayed true to its founding values for four decades.
            </p>
            <p className="mt-4 text-base text-white/70 leading-relaxed">
              Today, the company is proudly led by Director{" "}
              <span className="text-white font-semibold">Sameer D. Ruparel</span>,
              carrying forward the legacy with the same commitment, trust and vision —
              while adapting to modern industry needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/15 text-white/85 hover:bg-brand-green hover:border-brand-green transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-10 font-display italic text-3xl sm:text-4xl text-brand-green">
              Built on Trust Since 1984.
            </p>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-green/40 to-brand-blue/40 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-navy">
                <img
                  src={FOUNDER_IMG}
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                    Director
                  </p>
                  <p className="mt-1 font-display font-bold text-xl text-white">
                    Sameer D. Ruparel
                  </p>
                  <p className="text-sm text-white/70">
                    Carrying forward the legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
