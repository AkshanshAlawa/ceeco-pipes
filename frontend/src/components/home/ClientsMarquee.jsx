import SectionHeading from "@/components/common/SectionHeading";

const clients = [
  "Govt of Karnataka",
  "Karnataka Water Board",
  "Rural Dev Dept",
  "AgriCo-op KA",
  "BBMP Works",
  "State Irrigation",
  "Public Works",
  "BDA Infra",
  "KSIIDC",
  "BWSSB",
];

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-x reveal">
        <SectionHeading
          center
          eyebrow="Trusted By"
          title="Institutions that rely on CEECO."
          subtitle="From state agencies to private contractors, our pipes carry critical infrastructure across Karnataka."
        />
      </div>

      <div className="relative mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-4 w-max">
          {doubled.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="w-56 h-24 shrink-0 rounded-xl bg-brand-grey border border-border flex items-center justify-center hover:bg-brand-light-blue hover:border-brand-blue/30 transition-colors"
            >
              <span className="font-display font-semibold text-brand-navy text-center px-4 text-sm tracking-tight">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
