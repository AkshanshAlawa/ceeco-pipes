import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export default function ContactPreview() {
  return (
    <section className="py-20 bg-brand-green-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-green/30 blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold text-white/80">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl leading-tight">
            Let's talk about your project.
          </h2>
          <p className="mt-4 text-white/85 text-lg">
            From dealer enquiries to bulk orders — our team is ready to help.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto reveal">
          {[
            { icon: Phone, label: "Call Us", value: "+91 XXXXXXXXXX" },
            { icon: Mail, label: "Email Us", value: "info@ceecopipes.com" },
            { icon: Clock, label: "Working Hours", value: "Mon–Sat · 9AM–7PM" },
          ].map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15"
            >
              <c.icon className="w-5 h-5" />
              <p className="mt-3 text-xs tracking-widest uppercase text-white/70">{c.label}</p>
              <p className="mt-1 font-semibold">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-green-deep px-7 py-3.5 rounded-full font-semibold hover:scale-[1.02] transition-transform shadow-lg"
          >
            <MapPin className="w-4 h-4" />
            Find Store
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-green-deep px-7 py-3.5 rounded-full font-semibold transition-colors"
          >
            Become a Dealer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-white/80 flex items-center justify-center gap-2 reveal">
          <MessageCircle className="w-4 h-4" />
          Or chat with us on{" "}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="underline underline-offset-4 hover:text-white font-semibold"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
