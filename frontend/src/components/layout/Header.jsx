import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Logo variant="dark" />

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, navLinks.length - 1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-brand-green"
                    : "text-brand-navy hover:text-brand-blue"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-green rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            data-testid="nav-contact-cta"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-cta"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                data-testid="mobile-menu-button"
                className="text-brand-navy hover:bg-brand-light-blue"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md bg-brand-navy border-0 p-0 text-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <Logo variant="light" />
                  <button
                    onClick={() => setOpen(false)}
                    data-testid="mobile-menu-close"
                    className="p-2 rounded-full hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-8">
                  <p className="text-[11px] tracking-[0.3em] text-brand-green font-semibold mb-6">
                    NAVIGATION
                  </p>
                  <ul className="space-y-1">
                    {navLinks.map((l, i) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          end={l.to === "/"}
                          onClick={() => setOpen(false)}
                          data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                          className={({ isActive }) =>
                            `group flex items-center justify-between px-4 py-4 rounded-xl text-2xl font-display font-bold tracking-tight transition-all ${
                              isActive
                                ? "bg-white/10 text-brand-green"
                                : "text-white hover:bg-white/5 hover:translate-x-1"
                            }`
                          }
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-xs text-white/40 font-mono">
                              0{i + 1}
                            </span>
                            {l.label}
                          </span>
                          <span className="text-white/40 group-hover:text-brand-green transition-colors">
                            &rarr;
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="px-6 py-6 border-t border-white/10 space-y-2">
                  <p className="text-[11px] tracking-[0.3em] text-brand-green font-semibold">
                    GET IN TOUCH
                  </p>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex items-center gap-3 text-white hover:text-brand-green"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                  <p className="text-sm text-white/60">{SITE.email}</p>
                  <p className="text-xs text-white/50 pt-2">
                    {SITE.hours.days} · {SITE.hours.time}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
