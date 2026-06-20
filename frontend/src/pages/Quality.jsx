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
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Standards"
              title="Built around discipline and detail."
              subtitle="We follow ISO 9001:2015 certified manufacturing processes - but our real quality assurance is the responsibility every operator carries on the production floor. PE 80 and PE 100 grades, across all 7 PN ratings."
            />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <div className="relative bg-gradient-to-br from-brand-light-blue to-white border border-border rounded-3xl p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-green/15 blur-3xl" />
              <div className="relative">
                <div className="aspect-square w-full max-w-[180px] mx-auto bg-white rounded-2xl border border-border p-2 flex items-center justify-center shadow-card">
                  <img
                    src={ASSETS.iso}
                    alt="ISO 9001:2015 Certified"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-bold">
                    Certification
                  </p>
                  <p className="mt-1 font-display font-black uppercase tracking-tight text-xl text-brand-navy">
                    ISO 9001:2015
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    International Quality Management Standard
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-brand-grey to-white border border-border rounded-3xl p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-blue/15 blur-3xl" />
              <div className="relative">
                <div className="aspect-square w-full max-w-[180px] mx-auto bg-white rounded-2xl border border-border p-2 flex items-center justify-center shadow-card">
                  <img
                    src={ASSETS.msme}
                    alt="Udyam MSME Registered"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-blue font-bold">
                    Government Recognition
                  </p>
                  <p className="mt-1 font-display font-black uppercase tracking-tight text-xl text-brand-navy">
                    Udyam MSME Registered
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Government of India - MSME Ministry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Checks */}
      <section className="py-20 bg-brand-grey">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Quality Checks"
            title="Every pipe passes five inspections."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {checks.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center text-center p-7 rounded-2xl bg-white border border-border hover:bg-brand-navy hover:text-white group transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-green/15 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <c.icon className="w-6 h-6 text-brand-green" />
                </div>
                <p className="mt-5 font-display font-bold uppercase tracking-tight text-brand-navy group-hover:text-white transition-colors">
                  {c.label}
                </p>
                <CheckCircle2 className="mt-3 w-5 h-5 text-brand-green" />
              </div>
            ))}
          </div>

          {/* PN strip */}
          <div className="mt-12 text-center">
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Tested across all 7 PN Ratings
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {PN_RATINGS.map((p) => (
                <span
                  key={p}
                  className="px-3.5 py-2 rounded-lg bg-brand-navy text-white text-sm font-bold"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Towards BIS & ISI */}
      <section className="py-20 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <Sparkles className="w-7 h-7 text-brand-green" />
              <h2 className="mt-4 font-display font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                Working towards BIS &amp; ISI certifications.
              </h2>
              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
                As part of our future quality expansion plans, CEECO is actively
                preparing for additional industry certifications that will further
                strengthen our position in institutional and government supply.
              </p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              {workingTowards.map((w) => (
                <div
                  key={w.code}
                  className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-brand-green/15 blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-brand-green" />
                      </div>
                      <span className="font-display font-black text-3xl text-brand-green tracking-tight">
                        {w.code}
                      </span>
                    </div>
                    <p className="mt-5 font-display font-black uppercase tracking-tight text-xl text-white">
                      {w.title}
                    </p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
