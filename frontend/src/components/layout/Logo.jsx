import { Link } from "react-router-dom";
import { Droplet, Sprout } from "lucide-react";

export default function Logo({ variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-11 h-11 flex items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            isDark ? "border-brand-navy" : "border-white"
          }`}
        />
        <div
          className={`absolute inset-1 rounded-full ${
            isDark ? "bg-brand-navy" : "bg-white"
          } flex items-center justify-center`}
        >
          <Droplet
            className={`w-4 h-4 ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
            fill="currentColor"
          />
        </div>
        <Sprout className="absolute -top-1 -right-1 w-4 h-4 text-brand-green" fill="currentColor" />
      </div>
      <div className="leading-none">
        <div
          className={`font-display font-bold text-lg sm:text-xl tracking-tight ${
            isDark ? "text-brand-navy" : "text-white"
          }`}
        >
          CEECO
        </div>
        <div
          className={`text-[10px] sm:text-[11px] tracking-[0.25em] font-medium mt-0.5 ${
            isDark ? "text-brand-blue" : "text-brand-light-blue"
          }`}
        >
          HDPE PIPES
        </div>
      </div>
    </Link>
  );
}
