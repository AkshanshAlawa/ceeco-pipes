import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactPreview() {
  return (
    <section
      data-testid="contact-preview"
      className="py-24 bg-brand-green text-white relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      {/* Diagonal accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black" />

      <div className="container-x relative">
        <div className="text-center max-w-4xl mx-auto reveal">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-white" />
            <p className="text-sm sm:text-base tracking-[0.4em] uppercase font-black text-white">
              Get In Touch
            </p>
            <span className="w-12 h-[2px] bg-white" />
          </div>
          <h2 className="font-display font-black tracking-[0.02em] uppercase text-[clamp(2.125rem,7vw,88px)] leading-[0.92]">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-8 text-white/90 text-lg">
            From dealer enquiries to bulk orders - our team is ready to help.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto reveal">
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
                className="flex flex-col items-center text-center p-6 bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-black/30 hover:border-white/40 transition-all"
              >
                <c.icon className="w-5 h-5" strokeWidth={1.5} />
                <p className="mt-3 text-[10px] tracking-[0.28em] uppercase text-white/75 font-bold">
                  {c.label}
                </p>
                <p className="mt-1.5 font-bold">{c.value}</p>
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <Link
            to="/contact"
            data-testid="contact-preview-find-store"
            className="btn-sharp bg-white text-brand-green border-2 border-white hover:bg-transparent hover:text-white transition-all"
          >
            <MapPin className="w-4 h-4" strokeWidth={2} />
            Find Store
          </Link>
          <Link
            to="/contact#enquiry-form"
            data-testid="contact-preview-become-dealer"
            className="btn-sharp btn-outline-white"
          >
            Become a Dealer
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        <p className="mt-10 text-center text-sm text-white/85 flex items-center justify-center gap-2 reveal">
          <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
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
