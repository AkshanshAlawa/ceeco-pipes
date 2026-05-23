export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-4`}>
          <span className="h-px w-8 bg-brand-green" />
          <p className="text-[11px] tracking-[0.3em] font-semibold text-brand-green uppercase">
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-brand-green" />
        </div>
      )}
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
