/**
 * Industrial section heading — bold, huge (52-64px+), sharp red accent line.
 * light=true → for dark backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
  size = "lg",
}) {
  const sizeClasses = {
    md: "text-4xl sm:text-5xl lg:text-[52px]",
    lg: "text-5xl sm:text-6xl lg:text-[64px]",
    xl: "text-6xl sm:text-7xl lg:text-[80px]",
  };
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-6`}>
          <span className="accent-line" />
          <p className="text-[11px] sm:text-xs tracking-[0.32em] font-bold text-brand-green uppercase">
            {eyebrow}
          </p>
          {center && <span className="accent-line" />}
        </div>
      )}
      <h2
        className={`font-display font-black tracking-tight leading-[0.98] ${sizeClasses[size]} ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base sm:text-lg leading-[1.7] max-w-3xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
