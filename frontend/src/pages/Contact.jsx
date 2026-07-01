import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Phone, Mail, Globe, Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 900);
  };

  const locations = [
    {
      key: "office",
      label: "Corporate Office",
      addressLines: SITE.address.office.lines,
      mapUrl: SITE.address.office.mapUrl,
      embedQuery: SITE.address.office.embedQuery,
    },
    {
      key: "factory",
      label: "Manufacturing Unit",
      addressLines: SITE.address.factory.lines,
      mapUrl: SITE.address.factory.mapUrl,
      embedQuery: SITE.address.factory.embedQuery,
    },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="We'd love to hear from you."
        subtitle="Send us a message, request a quote, or visit us at our office or manufacturing unit."
      />

      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-5 reveal-x">
            <div className="flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                {SITE.parent}
              </p>
            </div>
            <h2 className="font-display font-black tracking-tight text-4xl sm:text-5xl lg:text-[52px] text-black leading-[1]">
              CEECO HDPE Pipes
            </h2>
            <p className="mt-4 text-neutral-600 leading-[1.7]">
              Reach out for product enquiries, dealership opportunities or general questions.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={SITE.address.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-office-link"
                className="flex items-start gap-4 p-5 bg-[#F2F2F2] border border-[#E0E0E0] hover:border-brand-green transition-colors group"
              >
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                  <MapPin className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                    Corporate Office
                  </p>
                  <p className="mt-1.5 font-semibold text-black text-sm leading-relaxed">
                    {SITE.address.office.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-brand-green uppercase tracking-wider">
                    View on Maps <ExternalLink className="w-3 h-3" strokeWidth={2} />
                  </span>
                </div>
              </a>

              <a
                href={SITE.address.factory.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-factory-link"
                className="flex items-start gap-4 p-5 bg-[#F2F2F2] border border-[#E0E0E0] hover:border-brand-green transition-colors group"
              >
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                  <MapPin className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                    Manufacturing Unit
                  </p>
                  <p className="mt-1.5 font-semibold text-black text-sm leading-relaxed">
                    {SITE.address.factory.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-brand-green uppercase tracking-wider">
                    View on Maps <ExternalLink className="w-3 h-3" strokeWidth={2} />
                  </span>
                </div>
              </a>

              {[
                { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Globe, label: "Website", value: SITE.website },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: `${SITE.hours.days}\n${SITE.hours.time}`,
                },
              ].map((item) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-start gap-4 p-5 bg-[#F2F2F2] border border-[#E0E0E0] hover:border-brand-green transition-colors group"
                  >
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center shrink-0 group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                      <item.icon className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                        {item.label}
                      </p>
                      <p className="mt-1.5 font-bold text-black whitespace-pre-line text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact-form" className="btn-sharp btn-outline-black">
                <MapPin className="w-4 h-4" strokeWidth={2} /> Find Store
              </a>
              <a href="#contact-form" className="btn-sharp btn-outline-red">
                Become a Dealer <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 reveal" id="contact-form">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-black text-white p-8 sm:p-12 shadow-navy relative overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-16 h-[3px] bg-brand-green" />
              <span className="absolute bottom-0 right-0 w-16 h-[3px] bg-brand-green" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="accent-line" />
                  <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                    Send a message
                  </p>
                </div>
                <h3 className="font-display font-black tracking-tight text-4xl sm:text-5xl leading-[1]">
                  Let&apos;s start a conversation.
                </h3>

                <div className="mt-10 grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="c-name" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Name *</Label>
                    <Input
                      id="c-name"
                      data-testid="contact-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-transparent border-0 border-b-2 border-white/20 rounded-none text-white placeholder:text-white/30 focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-phone" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Phone Number</Label>
                    <Input
                      id="c-phone"
                      data-testid="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-transparent border-0 border-b-2 border-white/20 rounded-none text-white placeholder:text-white/30 focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 text-base"
                      placeholder={SITE.phone}
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="c-email" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Email *</Label>
                  <Input
                    id="c-email"
                    data-testid="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none text-white placeholder:text-white/30 focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 text-base"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="c-message" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Message *</Label>
                  <Textarea
                    id="c-message"
                    data-testid="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none text-white placeholder:text-white/30 focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 resize-none text-base"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={submitting}
                  className="mt-10 w-full btn-sharp btn-red justify-center disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Visit Us"
            title="Find our office and manufacturing unit."
            subtitle="Two locations across Bengaluru - our corporate office in Nagarathpete and our manufacturing facility in Peenya."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            {locations.map((m) => (
              <div
                key={m.key}
                data-testid={`map-card-${m.key}`}
                className="overflow-hidden border border-[#E0E0E0] shadow-card bg-white flex flex-col relative reveal"
              >
                <span className="absolute top-0 left-0 w-full h-[3px] bg-brand-green z-10" />
                <div className="p-6 flex items-start gap-4 border-b border-[#E0E0E0]">
                  <div className="w-11 h-11 border-2 border-black flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-brand-green font-bold">
                      CEECO HDPE Pipes
                    </p>
                    <p className="font-display font-black uppercase tracking-tight text-black text-lg">
                      {m.label}
                    </p>
                    <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                      {m.addressLines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </p>
                  </div>
                </div>
                <iframe
                  title={`${m.label} - CEECO HDPE Pipes`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(m.embedQuery)}&output=embed`}
                  className="w-full h-80 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={m.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`map-open-${m.key}`}
                  className="flex items-center justify-center gap-2 py-4 bg-black text-white font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-green transition-colors"
                >
                  Open in Google Maps <ExternalLink className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
