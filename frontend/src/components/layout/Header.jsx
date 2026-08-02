import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
  const location = useLocation();

  // Only Home has a fully dark hero — on other pages, keep navbar solid from the start.
  const forceSolid = location.pathname !== "/";
  const isSolid = scrolled || forceSolid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isSolid
          ? "bg-white shadow-nav-scrolled"
          : "bg-transparent"
      }`}
    >
      {/* Top thin red line for industrial feel */}
      <div className={`h-[3px] w-full bg-brand-green transition-opacity duration-500 ${isSolid ? "opacity-100" : "opacity-0"}`} />

      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Logo variant={isSolid ? "dark" : "light"} />

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, navLinks.length - 1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `nav-underline text-sm font-semibold tracking-[0.05em] uppercase transition-colors ${
                  isActive ? "is-active" : ""
                } ${isSolid
                  ? "text-black hover:text-brand-green"
                  : "text-white hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            data-testid="nav-contact-cta"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-deep text-white text-xs font-semibold tracking-[0.08em] uppercase px-6 py-3 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Contact Us
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                data-testid="mobile-menu-button"
                className={`hover:bg-black/5 lg:hidden ${isSolid ? "text-black" : "text-white"}`}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md bg-black border-0 p-0 text-white [&>button]:hidden"
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <Logo variant="light" />
                  <button
                    onClick={() => setOpen(false)}
                    data-testid="mobile-menu-close"
                    className="p-2 hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="accent-line" />
                    <p className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                      Navigation
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {navLinks.map((l, i) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          end={l.to === "/"}
                          onClick={() => setOpen(false)}
                          data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                          className={({ isActive }) =>
                            `group flex items-center justify-between px-4 py-4 text-2xl font-display font-black tracking-tight uppercase transition-all border-b border-white/5 ${
                              isActive
                                ? "text-brand-green"
                                : "text-white hover:text-brand-green hover:translate-x-1"
                            }`
                          }
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-[10px] text-white/30 font-mono">
                              0{i + 1}
                            </span>
                            {l.label}
                          </span>
                          <span className="text-white/30 group-hover:text-brand-green transition-colors">
                            &rarr;
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="px-6 py-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="accent-line" />
                    <p className="text-[10px] tracking-[0.32em] text-brand-green font-bold uppercase">
                      Get In Touch
                    </p>
                  </div>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex items-center gap-3 text-white hover:text-brand-green font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                  <p className="text-sm text-white/60">{SITE.email}</p>
                  <p className="text-xs text-white/50">
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
