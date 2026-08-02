const items = [
  "HDPE Pipes",
  "Agriculture",
  "Water Supply",
  "Industrial",
  "Cable Ducting",
  "PE 80 · PE 100",
  "ISO 9001:2015",
  "Since 1984",
];

export default function BrandMarquee() {
  const row = [...items, ...items];
  return (
    <div
      data-testid="brand-marquee"
      className="bg-brand-green text-white py-4 overflow-hidden relative"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className="flex items-center font-display text-base sm:text-xl uppercase tracking-[0.08em] px-10"
          >
            {it}
            <span className="ml-20 w-2 h-2 bg-white/50 rotate-45 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
