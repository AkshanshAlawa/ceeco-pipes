import SectionHeading from "@/components/common/SectionHeading";
import { ASSETS } from "@/lib/site";

export default function WhyHDPE() {
  return (
    <section
      data-testid="why-hdpe"
      className="py-24 sm:py-32 bg-[#F2F2F2] relative overflow-hidden"
    >
      <div className="container-x relative">
        <div className="reveal">
          <SectionHeading
            center
            eyebrow="Why HDPE"
            title="The smarter choice for modern infrastructure."
            subtitle="Eight properties that make HDPE the material of choice for engineers, farmers and contractors - available in PE 80 & PE 100 grades."
            index="06"
          />
        </div>

        {/* Central WHYHDPE.png image — contains the pipe illustration + 8 feature callouts */}
        <div className="mt-16 lg:mt-20 flex justify-center reveal-scale">
          <div className="relative w-full max-w-5xl">
            {/* Red corner accents */}
            <span className="absolute -top-3 -left-3 w-12 h-12 border-t-[3px] border-l-[3px] border-brand-green z-10" />
            <span className="absolute -top-3 -right-3 w-12 h-12 border-t-[3px] border-r-[3px] border-brand-green z-10" />
            <span className="absolute -bottom-3 -left-3 w-12 h-12 border-b-[3px] border-l-[3px] border-brand-green z-10" />
            <span className="absolute -bottom-3 -right-3 w-12 h-12 border-b-[3px] border-r-[3px] border-brand-green z-10" />

            <div className="relative bg-white p-6 sm:p-10 shadow-navy reveal-img">
              <img
                src={ASSETS.whyHdpe}
                alt="Why HDPE - CEECO HDPE pipe properties and features"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Application chips */}
        <div className="mt-16 flex flex-wrap justify-center gap-2.5 reveal">
          {["Agriculture", "Irrigation", "Water Supply", "Industrial", "Borewell", "Cable Ducting"].map((c) => (
            <span
              key={c}
              className="px-5 py-2.5 bg-white border border-[#E0E0E0] text-sm font-bold text-black uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-all cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
