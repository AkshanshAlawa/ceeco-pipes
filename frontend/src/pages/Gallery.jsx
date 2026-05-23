import { useState } from "react";
import PageHero from "@/components/common/PageHero";

const categories = [
  "All",
  "Manufacturing Unit",
  "HDPE Pipe Production",
  "Product Inventory",
  "Agricultural Applications",
  "Water Supply Installations",
  "Blue Duct Pipe Applications",
  "Factory Operations",
  "Team & Infrastructure",
];

const images = [
  { src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1000&q=80", cat: "Manufacturing Unit" },
  { src: "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=1000&q=80", cat: "HDPE Pipe Production" },
  { src: "https://images.unsplash.com/photo-1684667273934-e5d39307eeae?auto=format&fit=crop&w=1000&q=80", cat: "Product Inventory" },
  { src: "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?auto=format&fit=crop&w=1000&q=80", cat: "Agricultural Applications" },
  { src: "https://images.unsplash.com/photo-1743742566156-f1745850281a?auto=format&fit=crop&w=1000&q=80", cat: "Agricultural Applications" },
  { src: "https://images.unsplash.com/photo-1692369584496-3216a88f94c1?auto=format&fit=crop&w=1000&q=80", cat: "Water Supply Installations" },
  { src: "https://images.pexels.com/photos/32200999/pexels-photo-32200999.jpeg?auto=compress&w=1000", cat: "Water Supply Installations" },
  { src: "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg?auto=compress&w=1000", cat: "Blue Duct Pipe Applications" },
  { src: "https://images.unsplash.com/photo-1563446135800-1e2c05d07eb1?auto=format&fit=crop&w=1000&q=80", cat: "Factory Operations" },
  { src: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1000&q=80", cat: "Team & Infrastructure" },
  { src: "https://images.unsplash.com/photo-1610891015188-5369212db097?auto=format&fit=crop&w=1000&q=80", cat: "Manufacturing Unit" },
  { src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1000&q=80", cat: "Factory Operations" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Our Work & Operations"
        title="A look inside CEECO."
        subtitle="From the factory floor to the farms — see where our pipes are made and where they serve."
      />

      <section className="py-12 bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === c
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-border hover:border-brand-green hover:text-brand-green"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover ${
                  i % 5 === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.cat}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-semibold">CEECO</p>
                  <p className="mt-1 text-white font-display font-semibold">{img.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
