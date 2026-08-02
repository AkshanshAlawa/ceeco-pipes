import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    quote:
      "We have been sourcing CEECO HDPE pipes for our farm irrigation network for over 15 years. The wall consistency, weld quality and zero-leak performance is what keeps us coming back order after order.",
    name: "Ramesh Gowda",
    role: "Progressive Farmer, Mandya",
    initials: "RG",
  },
  {
    quote:
      "As a civil contractor handling government water supply tenders, on-time delivery and certified quality are non-negotiable. CEECO has delivered both - consistently - across every project we have executed.",
    name: "Venkatesh Iyer",
    role: "Civil Contractor, Bengaluru",
    initials: "VI",
  },
  {
    quote:
      "Our industrial unit has been running on CEECO pipes since 2009 - high pressure, continuous duty, zero failures. Their technical team is always reachable. That is what a B2B relationship should look like.",
    name: "Sundararajan & Sons",
    role: "Industrial Buyer, Hosur",
    initials: "SS",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials" className="py-24 sm:py-32 bg-[#F2F2F2]">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="What our clients say."
            subtitle="Honest words from farmers, contractors and industrial buyers - the people who keep coming back to CEECO HDPE Pipes."
            index="08"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal industrial-card flex flex-col bg-white p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-9 h-9 text-brand-green" strokeWidth={1.5} />
              <p className="mt-5 text-base text-black leading-[1.7] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-7 pt-6 border-t border-[#E0E0E0] flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-black text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-wide text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-brand-green text-brand-green" strokeWidth={1.5} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
