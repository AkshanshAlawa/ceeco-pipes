import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Award,
  CheckCircle2,
  Gauge,
  Ruler,
  FlaskConical,
  ShieldCheck,
  Droplet,
  Sparkles,
} from "lucide-react";
import { ASSETS, PN_RATINGS } from "@/lib/site";

const checks = [
  { icon: Gauge, label: "Pressure Testing" },
  { icon: Ruler, label: "Dimensional Accuracy" },
  { icon: FlaskConical, label: "Raw Material Inspection" },
  { icon: ShieldCheck, label: "Durability Testing" },
  { icon: Droplet, label: "Leak Resistance Testing" },
];

const workingTowards = [
  {
    code: "BIS",
    title: "Working Towards BIS",
    desc: "Preparing for Bureau of Indian Standards certification to expand our institutional and government supply.",
  },
  {
    code: "ISI",
    title: "Working Towards ISI",
    desc: "Aligning manufacturing processes with ISI quality benchmarks for enhanced product credibility.",
  },
];

export default function Quality() {
  return (
    <>
      <PageHero
        crumb="Quality"
        eyebrow="Quality & Certifications"
        title="Quality you can trust."
        subtitle="At CEECO, quality is not a final check - it's a discipline that runs from raw material to dispatch."
      />

      {/* ISO 9001:2015 + Udyam MSME hero strip */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal-x">
            <SectionHeading
              eyebrow="Our Standards"
              title="Built around discipline and detail."
              subtitle="We follow ISO 9001:2015 certified manufacturing processes - but our real quality assurance is the responsibility every operator carries on the production floor. PE 80 and PE 100 grades, across all 7 PN ratings."
            />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <div className="relative bg-[#F2F2F2] border border-[#E0E0E0] p-8 group hover:border-brand-green transition-colors reveal-scale">
              <span className="absolute top-0 left-0 w-10 h-[2px] bg-brand-green" />
              <div className="aspect-square w-full max-w-[180px] mx-auto bg-white border border-[#E0E0E0] p-3 flex items-center justify-center shadow-card">
                <img
                  src={ASSETS.iso}
                  alt="ISO 9001:2015 Certified"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Certification
                </p>
                <p className="mt-1.5 font-display font-black uppercase tracking-[0.02em] text-xl text-black">
                  ISO 9001:2015
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  International Quality Management Standard
                </p>
              </div>
            </div>

            <div className="relative bg-[#F2F2F2] border border-[#E0E0E0] p-8 group hover:border-brand-green transition-colors reveal-scale">
              <span className="absolute top-0 left-0 w-10 h-[2px] bg-brand-green" />
              <div className="aspect-square w-full max-w-[180px] mx-auto bg-white border border-[#E0E0E0] p-3 flex items-center justify-center shadow-card">
                <img
                  src={ASSETS.msme}
                  alt="Udyam MSME Registered"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] tracking-[0.32em] uppercase text-black font-bold">
                  Government Recognition
                </p>
                <p className="mt-1.5 font-display font-black uppercase tracking-[0.02em] text-xl text-black">
                  Udyam MSME Registered
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Government of India - MSME Ministry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Checks */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Quality Checks"
            title="Every pipe passes five inspections."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {checks.map((c, i) => (
              <div
                key={c.label}
                className="reveal flex flex-col items-center text-center p-8 bg-white border border-[#E0E0E0] hover:bg-black hover:text-white hover:border-black group transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 border-2 border-black group-hover:border-brand-green flex items-center justify-center transition-colors">
                  <c.icon className="w-6 h-6 text-black group-hover:text-brand-green transition-colors" strokeWidth={1.5} />
                </div>
                <p className="mt-6 font-display font-black uppercase tracking-[0.02em] text-black group-hover:text-white transition-colors text-sm">
                  {c.label}
                </p>
                <CheckCircle2 className="mt-4 w-5 h-5 text-brand-green" strokeWidth={1.5} />
              </div>
            ))}
          </div>

          {/* PN strip */}
          <div className="mt-14 text-center">
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Tested across all 7 PN Ratings
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {PN_RATINGS.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 bg-black text-white text-sm font-bold"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Towards BIS & ISI */}
      <section className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-green" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 reveal-x">
              <div className="flex items-center gap-3 mb-6">
                <span className="accent-line-lg" />
                <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Future Certifications
                </p>
              </div>
              <h2 className="font-display font-black tracking-[0.02em] text-[clamp(2rem,6vw,64px)] leading-[0.98]">
                Working towards BIS &amp; ISI certifications.
              </h2>
              <p className="mt-8 text-lg text-white/70 leading-[1.7] max-w-2xl">
                As part of our future quality expansion plans, CEECO is actively
                preparing for additional industry certifications that will further
                strengthen our position in institutional and government supply.
              </p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              {workingTowards.map((w, i) => (
                <div
                  key={w.code}
                  className="reveal-scale relative border border-white/15 bg-white/[0.04] p-8 hover:border-brand-green hover:bg-white/[0.08] transition-all group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="absolute top-0 left-0 w-8 h-[2px] bg-brand-green" />
                  <span className="absolute top-0 left-0 w-[2px] h-8 bg-brand-green" />
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border-2 border-brand-green flex items-center justify-center group-hover:bg-brand-green transition-colors">
                      <Award className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="font-display font-black text-4xl text-brand-green tracking-[0.02em]">
                      {w.code}
                    </span>
                  </div>
                  <p className="mt-6 font-display font-black uppercase tracking-[0.02em] text-xl text-white">
                    {w.title}
                  </p>
                  <p className="mt-3 text-sm text-white/70 leading-[1.7]">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
