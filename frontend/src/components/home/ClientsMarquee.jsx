import SectionHeading from "@/components/common/SectionHeading";
import { Landmark, ShieldCheck } from "lucide-react";

const clients = [
  { name: "BBMP", note: "(formerly)", full: "Bruhat Bengaluru Mahanagara Palike" },
  { name: "BDA", note: "", full: "Bangalore Development Authority" },
  { name: "Govt of Karnataka", note: "", full: "Government of Karnataka" },
  { name: "GBA", note: "", full: "Greater Bangalore Authority" },
  { name: "BWSSB", note: "", full: "Bangalore Water Supply & Sewerage Board" },
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
              className="group relative flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 min-h-[170px]"
            >
              {/* Placeholder logo space */}
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-dashed border-brand-blue/30 flex items-center justify-center mb-3">
                <Landmark className="w-6 h-6 text-brand-blue" />
              </div>
              <p className="font-display font-black uppercase tracking-tight text-base sm:text-lg text-brand-navy leading-tight">
                {c.name}
              </p>
              {c.note && (
                <span className="text-[10px] uppercase tracking-widest text-brand-green font-bold mt-0.5">
                  {c.note}
                </span>
              )}
              <p className="mt-2 text-[10px] sm:text-xs text-muted-foreground leading-tight px-1">
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
