import { Link } from "react-router-dom";

/**
 * Official CEECO PIPES wordmark (serif). Two PNG variants:
 * - dark: on light backgrounds (dark red + black text)
 * - light: on dark backgrounds (red preserved + white text)
 */
export default function Logo({ variant = "dark" }) {
  const src =
    variant === "light" ? "/ceeco-logo-light.png" : "/ceeco-logo-dark.png";

  return (
    <Link
      to="/"
      className="inline-flex items-center leading-none group"
      aria-label="CEECO Pipes home"
      data-testid="site-logo"
    >
      <img
        src={src}
        alt="CEECO Pipes"
        className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
        draggable="false"
      />
    </Link>
  );
}
