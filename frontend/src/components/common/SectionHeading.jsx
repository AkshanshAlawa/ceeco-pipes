export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
  size = "lg",
}) {
  const sizeClasses = {
    md: "text-3xl sm:text-4xl lg:text-5xl",
    lg: "text-4xl sm:text-5xl lg:text-6xl",
    xl: "text-5xl sm:text-6xl lg:text-7xl",
  };
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-5`}>
          <span className="h-px w-10 bg-brand-green" />
          <p className="text-[11px] sm:text-xs tracking-[0.32em] font-bold text-brand-green uppercase">
            {eyebrow}
          </p>
          <span className="h-px w-10 bg-brand-green" />
        </div>
      )}
      <h2
        className={`font-display font-black uppercase tracking-tight leading-[1.02] ${sizeClasses[size]} ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
