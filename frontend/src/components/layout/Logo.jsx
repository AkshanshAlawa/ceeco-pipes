import { Link } from "react-router-dom";

/**
 * CEECO wordmark logo — industrial, sharp, red accent.
 * variant: "dark" (for white bg) | "light" (for dark bg)
 */
export default function Logo({ variant = "dark" }) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-black" : "text-white";
  const subColor = isDark ? "text-neutral-500" : "text-white/60";

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="CEECO HDPE Pipes home">
      {/* Sharp square mark: red block with "C" cutout */}
      <div className="relative shrink-0">
        <div className="w-11 h-11 bg-brand-green flex items-center justify-center relative overflow-hidden">
          {/* Diagonal industrial slash */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-white" />
          <span className="font-display font-black text-white text-xl leading-none tracking-tighter">
            C
          </span>
        </div>
      </div>

      <div className="leading-none">
        <div className={`font-display font-black text-xl sm:text-2xl tracking-tight ${textColor}`}>
          CEECO
        </div>
        <div className={`text-[9px] sm:text-[10px] tracking-[0.32em] font-semibold mt-1 ${subColor} uppercase`}>
          HDPE Pipes · Since 1984
        </div>
      </div>
    </Link>
  );
}
