import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";

const IMG = "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1200&q=80";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-brand-green" />
            <p className="text-[11px] tracking-[0.3em] font-semibold text-brand-green uppercase">
              About S D Ruparel Group
            </p>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight">
            Four decades of trust in HDPE piping solutions.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Established in 1984, S D Ruparel Group has built a strong reputation in the
            piping industry through trusted relationships, consistent quality and
            decades of experience. Under the brand CEECO HDPE Pipes, we manufacture
            reliable HDPE piping solutions widely used across agriculture, irrigation,
            water supply, industrial applications and electrical ducting systems.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            With over 40 years of industry experience, our commitment has always been
            to deliver durable products that perform — while maintaining the customer
            trust we have earned over generations.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Calendar, label: "Est. 1984" },
              { icon: Users, label: "40+ Years" },
              { icon: Award, label: "ISO Certified" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-brand-grey border border-border"
              >
                <b.icon className="w-5 h-5 text-brand-green mb-2" />
                <p className="text-sm font-semibold text-brand-navy">{b.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-9 text-brand-navy font-semibold border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors"
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-6 reveal">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green/20 to-brand-blue/20 rounded-3xl blur-2xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden shadow-navy aspect-[4/5]">
              <img
                src={IMG}
                alt="CEECO Manufacturing Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green">
                  Karnataka, India
                </p>
                <p className="mt-1 font-display text-xl font-semibold">
                  Manufacturing Excellence
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-card-hover p-5 border border-border max-w-[200px]">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                Built on Trust
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-brand-navy leading-tight">
                Since 1984
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
