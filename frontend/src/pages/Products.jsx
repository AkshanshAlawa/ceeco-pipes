import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Check, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ASSETS, PN_RATINGS, PIPE_SIZES, PE_GRADES } from "@/lib/site";

const products = [
  {
    title: "HDPE Agricultural Pipes",
    slug: "agricultural",
    tag: "Agriculture",
    desc: "Reliable and durable pipes suitable for irrigation and agricultural water flow systems.",
    features: ["Long service life", "Smooth water flow", "Easy to install", "UV resistant"],
    img: "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Water Supply HDPE Pipes",
    slug: "water-supply",
    tag: "Municipal",
    desc: "High-quality piping solutions for residential, commercial and water distribution applications.",
    features: ["Leak resistant", "Potable water grade", "High pressure ratings", "Long lasting"],
    img: "https://images.unsplash.com/photo-1692369584496-3216a88f94c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial HDPE Pipes",
    slug: "industrial",
    tag: "Industrial",
    desc: "Strong and durable HDPE pipes designed for industrial fluid transport and process requirements.",
    features: ["Chemical resistant", "High strength", "Custom lengths", "Multiple PN ratings"],
    img: "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blue Duct Pipes",
    slug: "blue-duct",
    tag: "Electrical",
    desc: "Protective duct pipes used for underground electrical and cable wire installations.",
    features: ["Underground rated", "Crush resistant", "Easy joints", "Bright identification"],
    img: ASSETS.blueDuct,
  },
];

export default function Products() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our Product Range"
        title="HDPE pipes for every application."
        subtitle="Engineered in our own facility - available in 9+ sizes and 7 PN ratings, in PE 80 & PE 100 grades."
      />

      {/* Grade & PN ratings strip */}
      <section className="py-12 bg-black text-white border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Material Grades
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PE_GRADES.map((g) => (
                <span
                  key={g}
                  className="px-4 py-2 bg-brand-green text-white font-black text-sm tracking-wide uppercase"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Pressure Ratings (PN)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PN_RATINGS.map((p) => (
                <span
                  key={p}
                  className="px-3 py-2 bg-white/10 border border-white/25 text-white font-bold text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x space-y-20 lg:space-y-28">
          {products.map((p, i) => (
            <div
              key={p.title}
              id={`product-${p.slug}`}
              data-testid={`product-section-${p.slug}`}
              className={`scroll-mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Red corner accents */}
                  <span className="absolute -top-2 -left-2 w-10 h-10 border-t-[3px] border-l-[3px] border-brand-green z-10" />
                  <span className="absolute -bottom-2 -right-2 w-10 h-10 border-b-[3px] border-r-[3px] border-brand-green z-10" />

                  <div className="relative overflow-hidden aspect-[4/3] shadow-navy reveal-img group">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase font-bold bg-brand-green text-white">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Product {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display font-bold tracking-[-0.01em] text-4xl sm:text-5xl lg:text-[52px] text-black leading-[1]">
                  {p.title}
                </h2>
                <p className="mt-6 text-lg text-neutral-600 leading-[1.7]">
                  {p.desc}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-black font-medium">
                      <span className="w-6 h-6 bg-brand-green flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    to="/contact#enquiry-form"
                    state={{ product: p.title }}
                    data-testid={`product-${i}-request-quote`}
                    className="btn-sharp bg-black text-white border-2 border-black hover:bg-brand-green hover:border-brand-green transition-all"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Technical Specifications"
            title="Sizes, ratings and applications."
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E0E0E0] p-8">
              <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Available Sizes (9+)
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PIPE_SIZES.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-2 bg-[#F2F2F2] border border-[#E0E0E0] text-sm font-bold text-black"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#E0E0E0] p-8">
              <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Pressure Ratings (7)
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PN_RATINGS.map((p) => (
                  <span
                    key={p}
                    className="px-3.5 py-2 bg-black text-white text-sm font-bold"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white border border-[#E0E0E0] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-black hover:bg-black border-b-0">
                  <TableHead className="text-white font-bold uppercase tracking-wider text-xs w-1/3">Specification</TableHead>
                  <TableHead className="text-white font-bold uppercase tracking-wider text-xs">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { k: "Material Grades", v: "PE 80 and PE 100 Polyethylene" },
                  { k: "Available Sizes", v: "20mm to 110mm (9+ sizes)" },
                  { k: "Pressure Ratings", v: "PN6, PN8, PN10, PN12.5, PN16, PN20, PN25" },
                  {
                    k: "Applications",
                    v: "Agriculture, Irrigation, Water Supply, Industrial, Electrical Cable Ducting",
                  },
                  { k: "Standard Lengths", v: "Coil & Straight lengths available on order" },
                  { k: "Certifications", v: "ISO 9001:2015 Certified · Udyam MSME Registered" },
                ].map((r) => (
                  <TableRow key={r.k}>
                    <TableCell className="font-bold text-black">{r.k}</TableCell>
                    <TableCell className="text-neutral-600">{r.v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section data-testid="certifications" className="py-24 bg-white">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Certifications & Recognition"
            title="Quality you can verify."
            subtitle="Our manufacturing operations are certified to international quality standards and recognised by the Government of India."
          />

          <div className="mt-16 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="relative border border-[#E0E0E0] bg-[#F2F2F2] overflow-hidden hover:border-brand-green transition-colors group">
              {/* Red corner accents */}
              <span className="absolute top-0 left-0 w-8 h-[2px] bg-brand-green" />
              <span className="absolute top-0 left-0 w-[2px] h-8 bg-brand-green" />
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={ASSETS.iso}
                  alt="ISO 9001:2015 Certified"
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white border-t border-[#E0E0E0]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-brand-green text-white flex items-center justify-center">
                    <Award className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                      Certification
                    </p>
                    <p className="mt-1 font-display font-bold normal-case tracking-[-0.01em] text-xl text-black">
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-[1.7]">
                  Manufacturing processes audited and certified against international
                  quality management standards.
                </p>
              </div>
            </div>

            <div className="relative border border-[#E0E0E0] bg-[#F2F2F2] overflow-hidden hover:border-brand-green transition-colors group">
              <span className="absolute top-0 left-0 w-8 h-[2px] bg-brand-green" />
              <span className="absolute top-0 left-0 w-[2px] h-8 bg-brand-green" />
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={ASSETS.msme}
                  alt="Udyam MSME Registered"
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white border-t border-[#E0E0E0]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-black text-white flex items-center justify-center">
                    <Award className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.32em] uppercase text-black font-bold">
                      Government Recognition
                    </p>
                    <p className="mt-1 font-display font-bold normal-case tracking-[-0.01em] text-xl text-black">
                      Udyam MSME Registered
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-[1.7]">
                  Officially recognised as a Micro, Small &amp; Medium Enterprise by
                  the Government of India under the Udyam registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
