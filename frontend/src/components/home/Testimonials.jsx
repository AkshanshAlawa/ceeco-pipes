import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    quote:
      "We have been using CEECO HDPE pipes on our farms for over 15 years. The durability and consistent water flow has been exceptional — never a single failure.",
    name: "Rajesh Patil",
    role: "Farmer, Karnataka",
    initials: "RP",
    color: "bg-brand-green",
  },
  {
    quote:
      "As a contractor I supply pipes to dozens of projects every year. CEECO is the brand my clients trust — quality and delivery are always on point.",
    name: "Mahesh Kumar",
    role: "Civil Contractor",
    initials: "MK",
    color: "bg-brand-blue",
  },
  {
    quote:
      "For our industrial water lines we needed pipes that perform under pressure for years. CEECO delivered — and their team backed every order.",
    name: "Suresh Industries",
    role: "Industrial Buyer",
    initials: "SI",
    color: "bg-brand-navy",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-brand-light-blue">
      <div className="container-x">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="What our clients say."
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
                “{t.quote}”
              </p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.color} text-white flex items-center justify-center font-display font-semibold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">{t.name}</p>
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
