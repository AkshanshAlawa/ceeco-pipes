import SectionHeading from "@/components/common/SectionHeading";
import { ShieldCheck } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/site";

const clients = [
  {
    name: "BBMP",
    note: "(formerly)",
    full: "Bruhat Bengaluru Mahanagara Palike",
    logo: CLIENT_LOGOS.BBMP,
  },
  {
    name: "BDA",
    full: "Bangalore Development Authority",
    logo: CLIENT_LOGOS.BDA,
  },
  {
    name: "Govt of Karnataka",
    full: "Government of Karnataka",
    logo: CLIENT_LOGOS.GOVTOFKARNATAKA,
  },
  {
    name: "GBA",
    full: "Greater Bengaluru Authority",
    logo: CLIENT_LOGOS.GBA,
  },
  {
    name: "BWSSB",
    full: "Bangalore Water Supply & Sewerage Board",
    logo: CLIENT_LOGOS.BWSSB,
  },
];

export default function ClientsMarquee() {
  return (
    <section data-testid="clients-section" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container-x reveal">
        <SectionHeading
          center
          eyebrow="Trusted By"
          title="Institutions that rely on CEECO."
          subtitle="CEECO HDPE Pipes have been supplied to state agencies, municipal bodies and state irrigation projects across Karnataka - powering critical water and infrastructure for over four decades."
        />
      </div>

      <div className="container-x mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              data-testid={`client-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative flex flex-col items-center justify-start text-center p-5 rounded-2xl bg-white border border-border hover:border-brand-blue/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 min-h-[210px]"
            >
              {/* Real logo */}
              <div className="w-24 h-24 rounded-2xl bg-white border border-border flex items-center justify-center p-2 mb-3 shadow-card">
                <img
                  src={c.logo}
                  alt={`${c.full} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="font-display font-black uppercase tracking-tight text-base sm:text-lg text-brand-navy leading-tight">
                {c.name}
              </p>
              {c.note && (
                <span className="text-[10px] uppercase tracking-widest text-brand-green font-bold mt-0.5">
                  {c.note}
                </span>
              )}
              <p className="mt-1.5 text-[10px] sm:text-xs text-muted-foreground leading-tight px-1">
                {c.full}
              </p>
            </div>
          ))}
        </div>

        {/* State Irrigation pill */}
        <div className="mt-10 flex justify-center reveal">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-brand-navy text-white border border-brand-navy">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-bold tracking-wide">
              Supplier to State Irrigation Projects across Karnataka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
