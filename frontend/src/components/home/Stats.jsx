import { useEffect, useRef, useState } from "react";

/* Astral-style stat wall — 3 stats now (Karnataka stat removed). */
const stats = [
  { num: 1984, suffix: "", label: "Established" },
  { num: 40, suffix: "+", label: "Years Experience" },
  { text: "Thousands", label: "of Satisfied Customers" },
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
      className="text-center px-6 relative"
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div
        className={`font-display font-black tracking-[-0.02em] leading-none text-black ${
          isText
            ? "text-[clamp(2.25rem,10vw,72px)]"
            : "text-[clamp(3rem,12vw,96px)]"
        }`}
      >
        {s.text ? s.text : v}
        {!s.text && s.suffix}
      </div>
      <div className="mt-5 flex items-center justify-center gap-3">
        <span className="w-10 h-[2px] bg-brand-green" />
        <span className="text-xs sm:text-sm tracking-[0.32em] uppercase text-neutral-600 font-black">
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
      <div className="absolute top-0 left-0 h-[3px] w-32 bg-brand-green" />
      <div className="absolute bottom-0 right-0 h-[3px] w-32 bg-brand-green" />

      <div className="container-x grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D0D0D0]">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} start={start} idx={i} />
        ))}
      </div>
    </section>
  );
}
