import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Check, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ASSETS, PN_RATINGS, PIPE_SIZES, PE_GRADES } from "@/lib/site";

const products = [
  {
    title: "HDPE Agricultural Pipes",
    tag: "Agriculture",
    desc: "Reliable and durable pipes suitable for irrigation and agricultural water flow systems.",
    features: ["Long service life", "Smooth water flow", "Easy to install", "UV resistant"],
    img: "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Water Supply HDPE Pipes",
    tag: "Municipal",
    desc: "High-quality piping solutions for residential, commercial and water distribution applications.",
    features: ["Leak resistant", "Potable water grade", "High pressure ratings", "Long lasting"],
    img: "https://images.unsplash.com/photo-1692369584496-3216a88f94c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial HDPE Pipes",
    tag: "Industrial",
    desc: "Strong and durable HDPE pipes designed for industrial fluid transport and process requirements.",
    features: ["Chemical resistant", "High strength", "Custom lengths", "Multiple PN ratings"],
    img: "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blue Duct Pipes",
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
      <section className="py-10 bg-brand-navy text-white">
        <div className="container-x flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              Material Grades
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PE_GRADES.map((g) => (
                <span
                  key={g}
                  className="px-4 py-1.5 rounded-md bg-brand-green text-white font-bold text-sm tracking-wide"
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
            <div className="mt-2 flex flex-wrap gap-2">
              {PN_RATINGS.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white font-bold text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x space-y-16 lg:space-y-24">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-brand-blue/20 to-brand-green/15 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-navy">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-bold bg-brand-green text-white rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Product {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display font-black uppercase tracking-tight text-4xl sm:text-5xl text-brand-navy leading-tight">
                  {p.title}
                </h2>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    data-testid={`product-${i}-request-quote`}
                    className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-deep text-white px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-20 bg-brand-grey">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Technical Specifications"
            title="Sizes, ratings and applications."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Available Sizes (9+)
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PIPE_SIZES.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-2 rounded-lg bg-brand-light-blue border border-brand-blue/20 text-sm font-bold text-brand-navy"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                Pressure Ratings (7)
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PN_RATINGS.map((p) => (
                  <span
                    key={p}
                    className="px-3.5 py-2 rounded-lg bg-brand-navy text-white text-sm font-bold"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-brand-navy hover:bg-brand-navy">
                  <TableHead className="text-white font-bold w-1/3">Specification</TableHead>
                  <TableHead className="text-white font-bold">Details</TableHead>
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
                    <TableCell className="font-bold text-brand-navy">{r.k}</TableCell>
                    <TableCell className="text-muted-foreground">{r.v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section data-testid="certifications" className="py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Certifications & Recognition"
            title="Quality you can verify."
            subtitle="Our manufacturing operations are certified to international quality standards and recognised by the Government of India."
          />

          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-border bg-brand-grey overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={ASSETS.iso}
                  alt="ISO 9001:2015 Certified"
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-green text-white flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-bold">
                      Certification
                    </p>
                    <p className="mt-0.5 font-display font-black uppercase tracking-tight text-xl text-brand-navy">
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Manufacturing processes audited and certified against international
                  quality management standards.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-border bg-brand-grey overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={ASSETS.msme}
                  alt="Udyam MSME Registered"
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-blue font-bold">
                      Government Recognition
                    </p>
                    <p className="mt-0.5 font-display font-black uppercase tracking-tight text-xl text-brand-navy">
                      Udyam MSME Registered
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
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
