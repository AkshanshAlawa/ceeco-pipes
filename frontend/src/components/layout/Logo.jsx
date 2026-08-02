import { Link } from "react-router-dom";

/**
 * "The Stenciled Monolith" — custom CEECO wordmark built from raw SVG
 * geometry (no fonts, no text nodes). Chamfered C/O plates, stencil-gap
 * E spines with detached arms; both E mid-arms carry the brand red.
 * variant: "dark" (for white bg) | "light" (for dark bg)
 */
function CeecoWordmark({ className }) {
  const red = { fill: "hsl(var(--brand-green))" };
  return (
    <svg
      viewBox="0 0 434 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {/* C */}
      <path d="M12 0 H70 V26 H26 V74 H70 V100 H12 L0 88 V12 Z" />
      {/* E — stencil spine + detached arms */}
      <rect x="86" y="0" width="26" height="100" />
      <rect x="120" y="0" width="44" height="22" />
      <rect x="120" y="39" width="36" height="22" style={red} />
      <rect x="120" y="78" width="44" height="22" />
      {/* E */}
      <rect x="180" y="0" width="26" height="100" />
      <rect x="214" y="0" width="44" height="22" />
      <rect x="214" y="39" width="36" height="22" style={red} />
      <rect x="214" y="78" width="44" height="22" />
      {/* C */}
      <path d="M286 0 H344 V26 H300 V74 H344 V100 H286 L274 88 V12 Z" />
      {/* O — chamfered plate with square counter */}
      <path
        fillRule="evenodd"
        d="M372 0 H422 L434 12 V88 L422 100 H372 L360 88 V12 Z M386 26 H408 V74 H386 Z"
      />
    </svg>
  );
}

export default function Logo({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <Link
      to="/"
      className="flex flex-col leading-none group"
      aria-label="CEECO HDPE Pipes home"
      data-testid="site-logo"
    >
      <CeecoWordmark
        className={`h-[22px] sm:h-[26px] w-auto transition-colors ${
          isDark ? "text-black group-hover:text-brand-green" : "text-white"
        }`}
      />
      <span
        className={`text-[8px] sm:text-[9px] tracking-[0.28em] font-semibold mt-2 uppercase ${
          isDark ? "text-neutral-500" : "text-white/60"
        }`}
      >
        HDPE Pipes · Since 1984
      </span>
    </Link>
  );
}
