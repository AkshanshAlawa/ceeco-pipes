import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Target,
  Compass,
  Heart,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Award,
  Handshake,
  User,
  Crown,
} from "lucide-react";

const values = [
  { icon: Handshake, title: "Trust", desc: "Earned over decades." },
  { icon: ShieldCheck, title: "Quality", desc: "Never compromised." },
  { icon: Award, title: "Legacy", desc: "40+ years strong." },
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

// Vision goals: BIS / ISI first per user request
const futureGoals = [
  { icon: Award, title: "BIS / ISI Certification" },
  { icon: TrendingUp, title: "Expansion Across New Markets" },
  { icon: Sprout, title: "Stronger Distribution Network" },
  { icon: ShieldCheck, title: "Improved Manufacturing Systems" },
  { icon: Heart, title: "Continued Customer Satisfaction" },
];

function LeaderPlaceholder({ icon: Icon, role, name }) {
  return (
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-br from-brand-green/30 to-brand-blue/30 rounded-2xl blur-xl opacity-70" />
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
        <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy-deep flex flex-col items-center justify-center text-white p-6">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-brand-green" />
          </div>
          <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">
            Photo Coming Soon
          </p>
        </div>
        <div className="bg-white p-5 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-bold">
            {role}
          </p>
          <p className="mt-1.5 font-display font-black uppercase tracking-tight text-brand-navy text-lg">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Built on trust since 1984."
        subtitle="S D Ruparel Group has spent four decades earning the loyalty of farmers, contractors, dealers and industries across Karnataka."
      />

      {/* Story + Leadership stacked photos */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The Journey"
              title="A family business, a state reputation."
            />
            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in <span className="font-bold text-brand-navy">1984</span> by{" "}
                <span className="font-bold text-brand-navy">
                  Late Shri Damodar S Ruparel
                </span>
                , S D Ruparel Group has built a strong reputation in the piping
                industry through trusted relationships, consistent quality and decades
                of experience. Under the brand{" "}
                <span className="font-bold text-brand-navy">CEECO HDPE Pipes</span>, the
                company manufactures reliable HDPE piping solutions widely used across
                agriculture, irrigation, water supply, industrial applications and
                electrical ducting systems.
              </p>
              <p>
                Today the company is proudly led by Director{" "}
                <span className="font-bold text-brand-navy">Sameer D Ruparel</span>{" "}
                - carrying forward 40+ years of legacy with modern manufacturing systems
                while preserving the values that built this company.
              </p>
              <p>
                Available in <span className="font-bold text-brand-navy">PE 80</span> and{" "}
                <span className="font-bold text-brand-navy">PE 100</span> grades, with
                <span className="font-bold text-brand-navy"> 9+ sizes</span> from 20mm
                to 110mm and <span className="font-bold text-brand-navy">7 PN
                ratings</span> (PN6, PN8, PN10, PN12.5, PN16, PN20, PN25) - our products
                cover every application your project needs.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 max-w-md lg:max-w-xs mx-auto">
              <LeaderPlaceholder
                icon={Crown}
                role="Founder"
                name="Late Shri Damodar S Ruparel"
              />
              <LeaderPlaceholder
                icon={User}
                role="Director"
                name="Sameer D Ruparel"
              />
            </div>
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
              <p className="mt-5 text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Vision
              </p>
              <h3 className="mt-2 font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-tight">
                To be the most trusted HDPE pipe manufacturer in India.
              </h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                We aim to remain the reference point for reliability and quality in
                piping solutions for agriculture and infrastructure.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border">
            <Target className="w-7 h-7 text-brand-green" />
            <p className="mt-5 text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Mission
            </p>
            <h3 className="mt-2 font-display font-black uppercase tracking-tight text-3xl sm:text-4xl leading-tight text-brand-navy">
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
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-card">
                  <v.icon className="w-5 h-5 text-brand-green" />
                </div>
                <p className="mt-4 font-display font-bold uppercase tracking-tight text-brand-navy">
                  {v.title}
                </p>
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
                <div className="w-9 h-9 rounded-lg bg-brand-green text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-display font-bold text-brand-navy pt-1.5">{c}</p>
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
                <span className="relative font-mono text-[10px] tracking-[0.3em] text-brand-green font-bold">
                  GOAL {String(i + 1).padStart(2, "0")}
                </span>
                <g.icon className="relative mt-4 w-6 h-6 text-brand-green" />
                <p className="relative mt-4 font-display font-bold uppercase tracking-tight leading-snug">
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
