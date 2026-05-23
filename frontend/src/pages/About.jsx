import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Target, Compass, Heart, ShieldCheck, Sprout, TrendingUp, Award, Handshake } from "lucide-react";

const values = [
  { icon: Handshake, title: "Trust", desc: "Earned over decades." },
  { icon: ShieldCheck, title: "Quality", desc: "Never compromised." },
  { icon: Award, title: "Legacy", desc: "40 years strong." },
  { icon: Target, title: "Reliability", desc: "Performance every time." },
  { icon: Heart, title: "Customer Commitment", desc: "At the heart of all we do." },
];

const commitments = [
  "Consistent Product Quality",
  "Honest Business Practices",
  "Reliable Service",
  "Long-Term Relationships",
  "Continuous Improvement",
];

const futureGoals = [
  { icon: TrendingUp, title: "Expansion Across New Markets" },
  { icon: Award, title: "BIS / ISI Certification" },
  { icon: Sprout, title: "Stronger Distribution Network" },
  { icon: ShieldCheck, title: "Improved Manufacturing Systems" },
  { icon: Heart, title: "Continued Customer Satisfaction" },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Built on trust since 1984."
        subtitle="S D Ruparel Group has spent four decades earning the loyalty of farmers, contractors, dealers and industries across Karnataka."
      />

      {/* Story */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="The Journey" title="A family business, a national reputation." />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Established in 1984, S D Ruparel Group has built a strong reputation in the
              piping industry through trusted relationships, consistent quality and decades
              of experience. Under the brand CEECO HDPE Pipes, the company manufactures
              reliable HDPE piping solutions widely used across agriculture, irrigation,
              water supply, industrial applications and electrical ducting systems.
            </p>
            <p>
              With over 40 years of industry experience, our commitment has always been to
              provide durable products that deliver long-lasting performance while
              maintaining customer trust and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="py-20 bg-brand-grey">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="relative">
              <Compass className="w-7 h-7 text-brand-green" />
              <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                Vision
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight">
                To be the most trusted HDPE pipe manufacturer in India.
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                We aim to remain the reference point for reliability and quality in
                piping solutions for agriculture and infrastructure.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border">
            <Target className="w-7 h-7 text-brand-green" />
            <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
              Mission
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-navy">
              Deliver dependable pipes, every single time.
            </h3>
            <ul className="mt-5 space-y-2.5 text-muted-foreground">
              {[
                "Manufacture HDPE pipes of consistent quality.",
                "Support customers with reliable, long-term service.",
                "Grow responsibly across new markets in India.",
                "Invest in modern systems while preserving values.",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Core Values" title="What we stand for." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-card">
                  <v.icon className="w-5 h-5 text-brand-green" />
                </div>
                <p className="mt-4 font-display font-semibold text-brand-navy">{v.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-brand-light-blue">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Commitment"
              title="Promises we keep."
              subtitle="Committed to delivering dependable HDPE piping solutions that support agriculture, water management and infrastructure development."
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {commitments.map((c, i) => (
              <div
                key={c}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-green text-white flex items-center justify-center font-mono font-semibold text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-display font-semibold text-brand-navy pt-1.5">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Future Vision" title="Where we're going next." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {futureGoals.map((g, i) => (
              <div
                key={g.title}
                className="flex flex-col p-6 rounded-2xl bg-brand-navy text-white relative overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-brand-green/15 blur-2xl" />
                <span className="relative font-mono text-[10px] tracking-[0.3em] text-brand-green font-semibold">
                  GOAL {String(i + 1).padStart(2, "0")}
                </span>
                <g.icon className="relative mt-4 w-6 h-6 text-brand-green" />
                <p className="relative mt-4 font-display font-semibold leading-snug">
                  {g.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
