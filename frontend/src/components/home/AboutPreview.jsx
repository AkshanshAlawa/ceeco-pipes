import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { ASSETS, SITE } from "@/lib/site";

export default function AboutPreview() {
  return (
    <section data-testid="about-preview" className="py-20 sm:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-brand-green" />
            <p className="text-[11px] tracking-[0.32em] font-bold text-brand-green uppercase">
              About {SITE.parent}
            </p>
          </div>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-[1.02]">
            Four decades of trust in HDPE piping.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <span className="font-bold text-brand-navy">{SITE.parent}</span> - the
            parent company of CEECO HDPE Pipes - was established in{" "}
            <span className="font-bold text-brand-navy">1984</span>. For over four
            decades the Group has built a strong reputation in the piping industry
            through trusted relationships, consistent quality and deep manufacturing
            expertise.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Under the <span className="font-bold text-brand-navy">CEECO HDPE</span>{" "}
            brand we manufacture reliable HDPE piping solutions used across
            agriculture, irrigation, water supply, industrial applications and
            electrical ducting systems - in PE 80 and PE 100 grades.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Calendar, label: "Est. 1984" },
              { icon: Users, label: "40+ Years" },
              { icon: Award, label: "ISO 9001:2015" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-brand-grey border border-border"
              >
                <b.icon className="w-5 h-5 text-brand-green mb-2" />
                <p className="text-sm font-bold text-brand-navy">{b.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            data-testid="about-preview-cta"
            className="inline-flex items-center gap-2 mt-9 text-brand-navy font-bold border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors"
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-6 reveal">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green/25 to-brand-blue/25 rounded-3xl blur-2xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden shadow-navy aspect-[4/5]">
              <img
                src={ASSETS.factory}
                alt="CEECO Manufacturing Facility - Karnataka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Karnataka, India
                </p>
                <p className="mt-1 font-display text-2xl font-black uppercase tracking-tight">
                  Manufacturing Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
