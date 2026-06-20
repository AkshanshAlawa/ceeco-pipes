import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    quote:
      "We have been sourcing CEECO HDPE pipes for our farm irrigation network for over 15 years. The wall consistency, weld quality and zero-leak performance is what keeps us coming back order after order.",
    name: "Ramesh Gowda",
    role: "Progressive Farmer, Mandya",
    initials: "RG",
    color: "bg-brand-green",
  },
  {
    quote:
      "As a civil contractor handling government water supply tenders, on-time delivery and certified quality are non-negotiable. CEECO has delivered both - consistently - across every project we have executed.",
    name: "Venkatesh Iyer",
    role: "Civil Contractor, Bengaluru",
    initials: "VI",
    color: "bg-brand-blue",
  },
  {
    quote:
      "Our industrial unit has been running on CEECO pipes since 2009 - high pressure, continuous duty, zero failures. Their technical team is always reachable. That is what a B2B relationship should look like.",
    name: "Sundararajan & Sons",
    role: "Industrial Buyer, Hosur",
    initials: "SS",
    color: "bg-brand-navy",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials" className="py-20 sm:py-28 bg-brand-light-blue">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="What our clients say."
            subtitle="Honest words from farmers, contractors and industrial buyers - the people who keep coming back to CEECO HDPE Pipes."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal flex flex-col bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-shadow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="w-8 h-8 text-brand-green" />
              <p className="mt-4 text-base text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.color} text-white flex items-center justify-center font-display font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-brand-green text-brand-green" />
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
