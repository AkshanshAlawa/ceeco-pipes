import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactPreview() {
  return (
    <section
      data-testid="contact-preview"
      className="py-20 bg-brand-green-deep text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-green/30 blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-[11px] tracking-[0.32em] uppercase font-bold text-white/85">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-5 text-white/85 text-lg">
            From dealer enquiries to bulk orders - our team is ready to help.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto reveal">
          {[
            { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
            { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: Clock, label: "Working Hours", value: SITE.hours.compact },
          ].map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href } : {})}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors"
              >
                <c.icon className="w-5 h-5" />
                <p className="mt-3 text-xs tracking-widest uppercase text-white/75 font-bold">
                  {c.label}
                </p>
                <p className="mt-1 font-bold">{c.value}</p>
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <Link
            to="/contact"
            data-testid="contact-preview-find-store"
            className="inline-flex items-center gap-2 bg-white text-brand-green-deep px-7 py-3.5 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-lg"
          >
            <MapPin className="w-4 h-4" />
            Find Store
          </Link>
          <Link
            to="/contact"
            data-testid="contact-preview-become-dealer"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-green-deep px-7 py-3.5 rounded-full font-bold transition-colors"
          >
            Become a Dealer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-white/85 flex items-center justify-center gap-2 reveal">
          <MessageCircle className="w-4 h-4" />
          Or chat with us on{" "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white font-bold"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
