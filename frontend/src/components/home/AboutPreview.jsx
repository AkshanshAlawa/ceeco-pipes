import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { ASSETS, SITE } from "@/lib/site";

export default function AboutPreview() {
  return (
    <section data-testid="about-preview" className="py-24 sm:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 reveal-x">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line-lg" />
            <p className="text-[11px] tracking-[0.32em] font-bold text-brand-green uppercase">
              About S D Ruparel Group
            </p>
          </div>
          <h2 className="font-display font-black tracking-tight text-5xl sm:text-6xl lg:text-[64px] text-black leading-[0.98]">
            Four decades of trust in HDPE piping.
          </h2>
          <p className="mt-8 text-lg text-neutral-600 leading-[1.7]">
            <span className="font-bold text-black">{SITE.parent}</span> - the
            parent company behind the CEECO brand - was established in{" "}
            <span className="font-bold text-black">1984</span>. For over four
            decades the Group has built a strong reputation in the piping industry
            through trusted relationships, consistent quality and deep manufacturing
            expertise.
          </p>
          <p className="mt-5 text-lg text-neutral-600 leading-[1.7]">
            Under the <span className="font-bold text-black">CEECO HDPE</span>{" "}
            brand we manufacture reliable HDPE piping solutions used across
            agriculture, irrigation, water supply, industrial applications and
            electrical ducting systems - in <span className="font-bold text-black">PE 80</span> and{" "}
            <span className="font-bold text-black">PE 100</span> grades.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { icon: Calendar, label: "Est. 1984" },
              { icon: Users, label: "40+ Years" },
              { icon: Award, label: "ISO 9001:2015" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center text-center p-5 bg-[#F2F2F2] border border-[#E0E0E0]"
              >
                <b.icon className="w-5 h-5 text-brand-green mb-3" strokeWidth={1.5} />
                <p className="text-sm font-black uppercase tracking-wide text-black">{b.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            data-testid="about-preview-cta"
            className="inline-flex items-center gap-2 mt-10 text-black font-bold text-sm uppercase tracking-[0.1em] border-b-2 border-brand-green pb-1.5 hover:text-brand-green transition-colors group"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>

        <div className="lg:col-span-6 reveal-scale">
          <div className="relative">
            {/* Red frame corner accents */}
            <span className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-brand-green z-10" />
            <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-brand-green z-10" />

            <div className="relative overflow-hidden aspect-[4/5] group">
              <img
                src={ASSETS.factory}
                alt="CEECO Manufacturing Facility - Peenya, Karnataka"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2px] bg-brand-green" />
                  <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                    Peenya, Karnataka, India
                  </p>
                </div>
                <p className="font-display text-3xl font-black tracking-tight">
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
