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
    <section data-testid="clients-section" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container-x reveal">
        <SectionHeading
          center
          eyebrow="Institutions That Rely On CEECO"
          title="Trusted by the institutions that shape Karnataka."
          subtitle="From state agencies to private contractors, our pipes carry critical infrastructure across Karnataka - powering municipal supply, state irrigation projects, and large public works for over four decades."
        />
      </div>

      <div className="container-x mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              data-testid={`client-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative flex flex-col items-center justify-start text-center p-6 bg-white border border-[#E0E0E0] hover:border-brand-green hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 min-h-[220px]"
            >
              {/* Sharp red corner accents on hover */}
              <span className="absolute top-0 left-0 w-6 h-[2px] bg-transparent group-hover:bg-brand-green transition-colors" />
              <span className="absolute top-0 left-0 w-[2px] h-6 bg-transparent group-hover:bg-brand-green transition-colors" />
              <span className="absolute bottom-0 right-0 w-6 h-[2px] bg-transparent group-hover:bg-brand-green transition-colors" />
              <span className="absolute bottom-0 right-0 w-[2px] h-6 bg-transparent group-hover:bg-brand-green transition-colors" />

              {/* Real logo - grayscale until hover */}
              <div className="w-24 h-24 flex items-center justify-center p-2 mb-4">
                <img
                  src={c.logo}
                  alt={`${c.full} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="font-display font-black tracking-tight text-lg text-black leading-tight uppercase">
                {c.name}
              </p>
              {c.note && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green font-bold mt-1">
                  {c.note}
                </span>
              )}
              <p className="mt-2 text-[10px] sm:text-xs text-neutral-500 leading-tight px-1">
                {c.full}
              </p>
            </div>
          ))}
        </div>

        {/* State Irrigation pill */}
        <div className="mt-12 flex justify-center reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-black text-white border border-black">
            <ShieldCheck className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
            <span className="text-sm font-bold tracking-[0.1em] uppercase">
              Supplier to State Irrigation Projects across Karnataka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
