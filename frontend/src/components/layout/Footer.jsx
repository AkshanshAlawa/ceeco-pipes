import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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
    <footer data-testid="site-footer" className="bg-brand-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-[11px] tracking-[0.32em] text-brand-green font-semibold">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {SITE.brand} by {SITE.parent} - reliable HDPE piping
              solutions trusted since {SITE.established}.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] text-brand-green font-semibold mb-5 uppercase">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              {quickLinks.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    data-testid={`footer-link-${it.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/75 hover:text-brand-green transition-colors"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.25em] text-brand-green font-semibold mb-5 uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  data-testid="footer-phone"
                  className="text-white/80 hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
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
            <h4 className="text-xs tracking-[0.25em] text-brand-green font-semibold mb-5 uppercase">
              Locations
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Corporate Office</p>
                    <p className="text-white/70 leading-relaxed mt-1 whitespace-pre-line">
                      {SITE.address.office}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Factory Address</p>
                    <p className="text-white/70 leading-relaxed mt-1 whitespace-pre-line">
                      {SITE.address.factory}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/55">
          <p data-testid="footer-copyright">© {COPYRIGHT_YEAR} {SITE.parent}. All rights reserved.</p>
          <p className="tracking-widest uppercase">{SITE.builtOn}</p>
        </div>
      </div>
    </footer>
  );
}
