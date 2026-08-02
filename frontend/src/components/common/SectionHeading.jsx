/**
 * MONUMENTAL industrial section heading — dramatically larger to match
 * Astral / Supreme brand authority. Optional ghost index number for depth.
 *
 * light=true → for dark backgrounds
 * index → optional "01" / "02" ghost number that sits behind the eyebrow
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
  size = "lg",
  index,
}) {
  const sizeClasses = {
    md: "text-[clamp(2rem,4.5vw,56px)]",
    lg: "text-[clamp(2.125rem,7vw,88px)]",
    xl: "text-[clamp(2.375rem,8vw,104px)]",
  };
  return (
    <div className={`relative ${center ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}`}>
      {/* Ghost index number */}
      {index && (
        <span
          aria-hidden="true"
          className={`absolute font-display font-black leading-none select-none pointer-events-none ${
            center ? "left-1/2 -translate-x-1/2" : "left-0"
          } -top-8 sm:-top-10 text-[80px] sm:text-[110px] lg:text-[140px] ${
            light ? "text-white/[0.05]" : "text-black/[0.04]"
          }`}
        >
          {index}
        </span>
      )}

      {eyebrow && (
        <div className={`relative flex items-center gap-4 ${center ? "justify-center" : ""} mb-7`}>
          <span className="accent-line-lg" />
          <p className={`text-sm sm:text-base tracking-[0.4em] font-black uppercase text-brand-green`}>
            {eyebrow}
          </p>
          {center && <span className="accent-line-lg" />}
        </div>
      )}
      <h2
        className={`relative font-display font-black tracking-[0.02em] uppercase leading-[0.92] ${sizeClasses[size]} ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`relative mt-8 text-base sm:text-lg leading-[1.7] max-w-3xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
