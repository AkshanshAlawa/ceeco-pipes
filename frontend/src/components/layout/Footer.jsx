import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Logo from "./Logo";
import { SITE, COPYRIGHT_YEAR } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-black text-white relative">
      {/* Top red accent line */}
      <div className="h-1 w-full bg-brand-green" />

      <div className="container-x pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <div className="mt-6 flex items-center gap-3">
              <span className="accent-line" />
              <p className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                {SITE.tagline}
              </p>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              {SITE.brand} by {SITE.parent} - reliable HDPE piping
              solutions trusted since {SITE.established}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <h4 className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                Quick Links
              </h4>
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              {quickLinks.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    data-testid={`footer-link-${it.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-brand-green transition-colors uppercase font-semibold tracking-wider text-xs"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <h4 className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                Contact Info
              </h4>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand-green shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  data-testid="footer-phone"
                  className="text-white/80 hover:text-brand-green"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-green shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-brand-green">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-brand-green shrink-0" strokeWidth={1.5} />
                <span className="text-white/80" data-testid="footer-hours">
                  {SITE.hours.days}
                  <br />
                  {SITE.hours.time}
                </span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <h4 className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                Locations
              </h4>
            </div>
            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href={SITE.address.office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-office-map-link"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-brand-green transition-colors">
                      Corporate Office
                    </p>
                    <p className="text-white/60 leading-relaxed mt-1.5 text-xs">
                      {SITE.address.office.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </p>
                    <span className="mt-1.5 inline-block text-[9px] tracking-[0.25em] uppercase text-brand-green font-bold">
                      View on Maps &rarr;
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SITE.address.factory.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-factory-map-link"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-brand-green transition-colors">
                      Manufacturing Unit
                    </p>
                    <p className="text-white/60 leading-relaxed mt-1.5 text-xs">
                      {SITE.address.factory.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </p>
                    <span className="mt-1.5 inline-block text-[9px] tracking-[0.25em] uppercase text-brand-green font-bold">
                      View on Maps &rarr;
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/45">
          <p data-testid="footer-copyright">© {COPYRIGHT_YEAR} {SITE.parent}. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase text-white/60">{SITE.builtOn}</p>
        </div>
      </div>
    </footer>
  );
}
