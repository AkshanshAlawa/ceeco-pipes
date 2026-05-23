import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 1984, suffix: "", label: "Established", isYear: true },
  { num: 40, suffix: "+", label: "Years Experience" },
  { num: 1000, suffix: "s", label: "Satisfied Customers", text: "Thousands" },
  { num: 1, suffix: "", label: "Trusted Across Karnataka", text: "Karnataka" },
  { num: 200, suffix: "+", label: "Dealer Network" },
];

function useCountUp(target, duration = 1500, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatItem({ s, start }) {
  const v = useCountUp(s.num, 1600, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-brand-navy">
        {s.text ? s.text : v}
        {!s.text && s.suffix}
      </div>
      <div className="mt-2 text-xs sm:text-sm tracking-wider uppercase text-muted-foreground font-medium">
        {s.label}
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
    <section ref={ref} className="py-14 sm:py-16 bg-brand-light-blue relative">
      <div className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} s={s} start={start} />
        ))}
      </div>
    </section>
  );
}
