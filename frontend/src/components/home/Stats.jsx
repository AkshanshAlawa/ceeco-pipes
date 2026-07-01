import { useEffect, useRef, useState } from "react";

/* Astral-style stat wall — 4 stats, count-up animation on scroll.
 * "500+" replaced with "Thousands". Karnataka text de-duplicated. */
const stats = [
  { num: 1984, suffix: "", label: "Established", isYear: true },
  { num: 40, suffix: "+", label: "Years Experience" },
  { text: "Thousands", label: "Satisfied Customers" },
  { text: "Karnataka", label: "Trusted Across" },
];

function useCountUp(target, duration = 2500, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.floor(target * easeOutExpo(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatItem({ s, start, idx }) {
  const v = useCountUp(s.num || 0, 2500, start);
  const isText = Boolean(s.text);
  return (
    <div
      className="text-center px-4 relative"
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div
        className={`font-display font-black tracking-tight leading-none text-black ${
          isText
            ? "text-3xl sm:text-4xl lg:text-[44px]"
            : "text-5xl sm:text-6xl lg:text-[72px]"
        }`}
      >
        {s.text ? s.text : v}
        {!s.text && s.suffix}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="w-8 h-[2px] bg-brand-green" />
        <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-neutral-500 font-bold">
          {s.label}
        </span>
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="py-20 sm:py-24 bg-[#F2F2F2] relative"
    >
      {/* Top and bottom red thin lines for framing */}
      <div className="absolute top-0 left-0 right-0 h-[2px]">
        <div className="w-24 h-full bg-brand-green" />
      </div>
      <div className="absolute bottom-0 right-0 h-[2px]">
        <div className="w-24 h-full bg-brand-green ml-auto" />
      </div>

      <div className="container-x grid grid-cols-2 sm:grid-cols-4 gap-y-12 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D0D0D0]">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} start={start} idx={i} />
        ))}
      </div>
    </section>
  );
}
