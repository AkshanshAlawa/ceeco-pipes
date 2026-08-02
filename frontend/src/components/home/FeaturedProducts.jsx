import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { ASSETS } from "@/lib/site";

const products = [
  {
    title: "Agricultural HDPE Pipes",
    slug: "agricultural",
    desc: "Durable pipes built for irrigation and farm water-flow systems.",
    img: "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?auto=format&fit=crop&w=900&q=80",
    tag: "Agriculture",
  },
  {
    title: "Water Supply Pipes",
    slug: "water-supply",
    desc: "High-quality piping for residential and commercial distribution.",
    img: "https://images.pexels.com/photos/32200999/pexels-photo-32200999.jpeg?auto=compress&w=900",
    tag: "Municipal",
  },
  {
    title: "Industrial HDPE Pipes",
    slug: "industrial",
    desc: "Strong, dependable pipes engineered for industrial demands.",
    img: "https://images.unsplash.com/photo-1563446135800-1e2c05d07eb1?auto=format&fit=crop&w=900&q=80",
    tag: "Industrial",
  },
  {
    title: "Blue Duct Pipes",
    slug: "blue-duct",
    desc: "Protective ducts for underground electrical and cable lines.",
    img: ASSETS.blueDuct,
    tag: "Electrical",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      data-testid="featured-products"
      className="py-24 sm:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="reveal">
            <SectionHeading
              eyebrow="Our Product Range"
              title="HDPE pipes for every flow."
              subtitle="From farm irrigation to municipal water grids and underground cable ducts - one trusted manufacturer."
              light
              index="04"
            />
          </div>
          <Link
            to="/products"
            data-testid="featured-products-view-all"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white border-b-2 border-brand-green pb-1.5 hover:text-brand-green transition-colors self-start"
          >
            View all products <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {products.map((p, i) => (
            <Link
              to={`/products#product-${p.slug}`}
              key={p.title}
              data-testid={`featured-product-${p.slug}`}
              className="reveal group flex flex-col overflow-hidden bg-black transition-all duration-500 relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase font-bold bg-brand-green text-white">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6 bg-black">
                <h3 className="font-display font-black tracking-[0.02em] text-lg leading-tight text-white group-hover:text-brand-green transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-[1.7]">{p.desc}</p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-brand-green font-bold text-xs uppercase tracking-[0.1em]">
                    Learn more
                  </span>
                  <span className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
