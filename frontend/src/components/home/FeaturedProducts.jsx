import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const products = [
  {
    title: "Agricultural HDPE Pipes",
    desc: "Durable pipes built for irrigation and farm water-flow systems.",
    img: "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?auto=format&fit=crop&w=900&q=80",
    tag: "Agriculture",
  },
  {
    title: "Water Supply Pipes",
    desc: "High-quality piping for residential and commercial distribution.",
    img: "https://images.pexels.com/photos/32200999/pexels-photo-32200999.jpeg?auto=compress&w=900",
    tag: "Municipal",
  },
  {
    title: "Industrial HDPE Pipes",
    desc: "Strong, dependable pipes engineered for industrial demands.",
    img: "https://images.unsplash.com/photo-1563446135800-1e2c05d07eb1?auto=format&fit=crop&w=900&q=80",
    tag: "Industrial",
  },
  {
    title: "Blue Duct Pipes",
    desc: "Protective ducts for underground electrical and cable lines.",
    img: "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg?auto=compress&w=900",
    tag: "Electrical",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="reveal">
            <SectionHeading
              eyebrow="Our Product Range"
              title="HDPE pipes for every flow."
              subtitle="From farm irrigation to municipal water grids and underground cable ducts — one trusted manufacturer."
              light
            />
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors self-start"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <Link
              to="/products"
              key={p.title}
              className="reveal group flex flex-col rounded-2xl border border-white/15 overflow-hidden hover:border-brand-green hover:-translate-y-1 transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold bg-brand-green text-white rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display font-semibold text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</p>
                <div className="mt-auto pt-5 flex items-center justify-between text-sm font-medium">
                  <span className="text-brand-green">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
