import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Download, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { toast } from "sonner";

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
    img: "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg?auto=compress&w=1200",
  },
];

export default function Products() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our Product Range"
        title="HDPE pipes for every application."
        subtitle="Engineered in our own facility — available in nine sizes and five pressure ratings, all PE 80 grade."
      />

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
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-semibold bg-brand-green text-white rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                  Product {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
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
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-deep text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => toast.success("Specifications download will be available soon.")}
                    className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Spec
                  </button>
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
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                Available Sizes
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "75mm", "90mm", "110mm"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-3.5 py-2 rounded-lg bg-brand-light-blue border border-brand-blue/20 text-sm font-semibold text-brand-navy"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-green font-semibold">
                Pressure Ratings
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["PN 6", "PN 10", "PN 12.5", "PN 16", "PN 20"].map((p) => (
                  <span
                    key={p}
                    className="px-3.5 py-2 rounded-lg bg-brand-navy text-white text-sm font-semibold"
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
                  <TableHead className="text-white font-semibold w-1/3">Specification</TableHead>
                  <TableHead className="text-white font-semibold">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { k: "Material Grade", v: "PE 80 Grade Polyethylene" },
                  { k: "Available Sizes", v: "20mm to 110mm (9 sizes)" },
                  { k: "Pressure Ratings", v: "PN 6, PN 10, PN 12.5, PN 16, PN 20" },
                  {
                    k: "Applications",
                    v: "Agriculture, Irrigation, Water Supply, Industrial, Electrical Cable Ducting",
                  },
                  { k: "Standard Lengths", v: "Coil & Straight lengths available on order" },
                  { k: "Certifications", v: "ISO Certified Manufacturing" },
                ].map((r) => (
                  <TableRow key={r.k}>
                    <TableCell className="font-semibold text-brand-navy">{r.k}</TableCell>
                    <TableCell className="text-muted-foreground">{r.v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => toast.success("Specifications PDF download will be available soon.")}
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-deep text-white px-7 py-3.5 rounded-full font-semibold shadow-cta"
            >
              <Download className="w-4 h-4" />
              Download Full Specifications
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
