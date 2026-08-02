import { Link } from "react-router-dom";

/**
 * CEECO typography-only wordmark - premium, industrial, minimal.
 * variant: "dark" (for white bg) | "light" (for dark bg)
 */
export default function Logo({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <Link
      to="/"
      className="flex flex-col leading-none group"
      aria-label="CEECO HDPE Pipes home"
      data-testid="site-logo"
    >
      <span
        className={`font-display font-black text-2xl sm:text-[27px] tracking-[0.1em] uppercase transition-colors ${
          isDark ? "text-black group-hover:text-brand-green" : "text-white"
        }`}
      >
        CEECO
      </span>
      <span
        className={`text-[8px] sm:text-[9px] tracking-[0.28em] font-semibold mt-1.5 uppercase ${
          isDark ? "text-neutral-500" : "text-white/60"
        }`}
      >
        HDPE Pipes · Since 1984
      </span>
    </Link>
  );
}
