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

// BIS / ISI first per user request
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
      {/* Red corner accents */}
      <span className="absolute -top-2 -left-2 w-8 h-8 border-t-[3px] border-l-[3px] border-brand-green z-10" />
      <span className="absolute -bottom-2 -right-2 w-8 h-8 border-b-[3px] border-r-[3px] border-brand-green z-10" />
      <div className="relative border border-[#E0E0E0] bg-white shadow-card">
        <div className="aspect-[4/5] bg-black flex flex-col items-center justify-center text-white p-6">
          <div className="w-16 h-16 border-2 border-brand-green flex items-center justify-center">
            <Icon className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
          </div>
          <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-white/50 font-bold">
            Photo Coming Soon
          </p>
        </div>
        <div className="p-5 text-center">
          <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
            {role}
          </p>
          <p className="mt-1.5 font-display font-black tracking-tight text-black text-lg leading-tight">
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
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 reveal-x">
            <SectionHeading
              eyebrow="The Journey"
              title="A family business, a state reputation."
            />
            <div className="mt-8 space-y-5 text-lg text-neutral-600 leading-[1.7]">
              <p>
                Established in <span className="font-bold text-black">1984</span> by{" "}
                <span className="font-bold text-black">
                  Late Shri Damodar S Ruparel
                </span>
                , S D Ruparel Group has built a strong reputation in the piping
                industry through trusted relationships, consistent quality and decades
                of experience. Under the brand{" "}
                <span className="font-bold text-black">CEECO HDPE Pipes</span>, the
                company manufactures reliable HDPE piping solutions widely used across
                agriculture, irrigation, water supply, industrial applications and
                electrical ducting systems.
              </p>
              <p>
                Today the company is proudly led by Director{" "}
                <span className="font-bold text-black">Sameer D Ruparel</span>{" "}
                - carrying forward 40+ years of legacy with modern manufacturing systems
                while preserving the values that built this company.
              </p>
              <p>
                Available in <span className="font-bold text-black">PE 80</span> and{" "}
                <span className="font-bold text-black">PE 100</span> grades, with
                <span className="font-bold text-black"> 9+ sizes</span> from 20mm
                to 110mm and <span className="font-bold text-black">7 PN
                ratings</span> (PN6, PN8, PN10, PN12.5, PN16, PN20, PN25) - our products
                cover every application your project needs.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 reveal-scale">
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
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <div className="p-10 bg-black text-white relative overflow-hidden">
            <span className="absolute top-0 left-0 w-16 h-[3px] bg-brand-green" />
            <div className="relative">
              <Compass className="w-8 h-8 text-brand-green" strokeWidth={1.5} />
              <p className="mt-6 text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Vision
              </p>
              <h3 className="mt-3 font-display font-black tracking-tight text-3xl sm:text-4xl leading-tight">
                To be the most trusted HDPE pipe manufacturer in India.
              </h3>
              <p className="mt-6 text-white/70 leading-[1.7]">
                We aim to remain the reference point for reliability and quality in
                piping solutions for agriculture and infrastructure.
              </p>
            </div>
          </div>

          <div className="p-10 bg-white border border-[#E0E0E0] relative">
            <span className="absolute top-0 left-0 w-16 h-[3px] bg-brand-green" />
            <Target className="w-8 h-8 text-brand-green" strokeWidth={1.5} />
            <p className="mt-6 text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Mission
            </p>
            <h3 className="mt-3 font-display font-black tracking-tight text-3xl sm:text-4xl leading-tight text-black">
              Deliver dependable pipes, every single time.
            </h3>
            <ul className="mt-6 space-y-3 text-neutral-600">
              {[
                "Manufacture HDPE pipes of consistent quality.",
                "Support customers with reliable, long-term service.",
                "Grow responsibly across new markets in India.",
                "Invest in modern systems while preserving values.",
              ].map((m) => (
                <li key={m} className="flex gap-3 leading-[1.7]">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-brand-green shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Core Values" title="What we stand for." />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="industrial-card flex flex-col items-center text-center p-8 bg-[#F2F2F2] group"
              >
                <div className="w-14 h-14 border-2 border-black flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                  <v.icon className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <p className="mt-5 font-display font-black uppercase tracking-wide text-black">
                  {v.title}
                </p>
                <p className="mt-2 text-xs text-neutral-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 reveal-x">
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
                className="reveal industrial-card flex items-start gap-4 p-6 bg-white group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 bg-black text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 group-hover:bg-brand-green transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-display font-black uppercase tracking-tight text-black pt-2">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Future Vision" title="Where we're going next." />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {futureGoals.map((g, i) => (
              <div
                key={g.title}
                className="reveal flex flex-col p-8 bg-black text-white relative overflow-hidden hover:bg-brand-green transition-colors duration-500 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute top-0 left-0 w-full h-[2px] bg-brand-green group-hover:bg-white transition-colors" />
                <span className="relative font-mono text-[10px] tracking-[0.32em] text-brand-green group-hover:text-white transition-colors font-bold">
                  GOAL {String(i + 1).padStart(2, "0")}
                </span>
                <g.icon className="relative mt-5 w-7 h-7 text-brand-green group-hover:text-white transition-colors" strokeWidth={1.5} />
                <p className="relative mt-5 font-display font-black uppercase tracking-tight leading-tight text-lg">
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
