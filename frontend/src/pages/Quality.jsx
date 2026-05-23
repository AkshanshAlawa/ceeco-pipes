import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Award, CheckCircle2, Gauge, Ruler, FlaskConical, ShieldCheck, Droplet, Sparkles } from "lucide-react";

const checks = [
  { icon: Gauge, label: "Pressure Testing" },
  { icon: Ruler, label: "Dimensional Accuracy" },
  { icon: FlaskConical, label: "Raw Material Inspection" },
  { icon: ShieldCheck, label: "Durability Testing" },
  { icon: Droplet, label: "Leak Resistance Testing" },
];

export default function Quality() {
  return (
    <>
      <PageHero
        crumb="Quality"
        eyebrow="Quality & Certifications"
        title="Quality you can trust."
        subtitle="At CEECO, quality is not a final check — it's a discipline that runs from raw material to dispatch."
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Standards"
              title="Built around discipline and detail."
              subtitle="We follow ISO-certified manufacturing processes — but our real quality assurance is the responsibility every operator carries on the production floor."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-brand-light-blue to-white border border-border rounded-3xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand-green/15 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-brand-blue/15 blur-3xl" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                  <Award className="w-9 h-9 text-brand-green" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                    Certification
                  </p>
                  <h3 className="mt-1 font-display font-bold text-2xl sm:text-3xl text-brand-navy leading-tight">
                    ISO Certified Manufacturing
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Our processes are audited and certified against international
                    quality management standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="container-x">
          <SectionHeading center eyebrow="Quality Checks" title="Every pipe passes five inspections." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {checks.map((c, i) => (
              <div
                key={c.label}
                className="flex flex-col items-center text-center p-7 rounded-2xl bg-white border border-border hover:bg-brand-navy hover:text-white group transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-green/15 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <c.icon className="w-6 h-6 text-brand-green" />
                </div>
                <p className="mt-5 font-display font-semibold text-brand-navy group-hover:text-white transition-colors">
                  {c.label}
                </p>
                <CheckCircle2 className="mt-3 w-5 h-5 text-brand-green" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Sparkles className="w-7 h-7 text-brand-green" />
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Working towards BIS & ISI certifications.
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-2xl">
              As part of our future quality expansion plans, CEECO is actively
              preparing for additional industry certifications that will further
              strengthen our position in institutional and government supply.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {["BIS", "ISI", "ISO", "PE 80"].map((b) => (
                <div
                  key={b}
                  className="aspect-square rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center font-display font-bold text-2xl text-brand-green"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
