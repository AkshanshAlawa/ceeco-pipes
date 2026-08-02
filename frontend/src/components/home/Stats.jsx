import { useEffect, useRef, useState } from "react";

/* Astral-style stat wall — aligned separators, optically balanced values. */
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
      className={`relative flex flex-col items-center justify-end text-center px-6 py-10 sm:py-2 ${
        idx > 0 ? "border-t sm:border-t-0 sm:border-l border-[#D8D8D8]" : ""
      }`}
    >
      {/* Fixed-height value box so all three baselines align optically */}
      <div className="flex items-end justify-center h-16 sm:h-24">
        <span
          className={`font-display tracking-[0.01em] leading-none text-black ${
            isText
              ? "text-[clamp(2.25rem,4vw,56px)]"
              : "text-[clamp(3rem,5.5vw,80px)]"
          }`}
        >
          {s.text ? s.text : v}
          {!s.text && s.suffix}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-center gap-3">
        <span className="w-8 h-[2px] bg-brand-green shrink-0" />
        <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-neutral-600 font-black whitespace-nowrap">
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
      className="py-16 sm:py-24 bg-[#F2F2F2] relative"
    >
      {/* Top and bottom red thin lines for framing */}
      <div className="absolute top-0 left-0 h-[3px] w-32 bg-brand-green" />
      <div className="absolute bottom-0 right-0 h-[3px] w-32 bg-brand-green" />

      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatItem key={s.label} s={s} start={start} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
