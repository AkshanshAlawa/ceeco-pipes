import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Phone, Mail, Globe, Clock, MapPin, ArrowRight } from "lucide-react";
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

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="We'd love to hear from you."
        subtitle="Send us a message, request a quote, or visit us at our office or factory."
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          {/* Left Info */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
              {SITE.parent}
            </p>
            <h2 className="mt-3 font-display font-black uppercase tracking-tight text-4xl sm:text-5xl text-brand-navy leading-tight">
              CEECO HDPE Pipes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Reach out for product enquiries, dealership opportunities or general questions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Corporate Office",
                  value: SITE.address.office,
                },
                {
                  icon: MapPin,
                  label: "Factory Address",
                  value: SITE.address.factory,
                },
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
                    className="flex items-start gap-4 p-4 rounded-2xl bg-brand-grey border border-border hover:bg-brand-light-blue transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.25em] uppercase text-brand-green font-bold">
                        {item.label}
                      </p>
                      <p className="mt-1 font-bold text-brand-navy whitespace-pre-line text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                <MapPin className="w-4 h-4" /> Find Store
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                Become a Dealer <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7" id="contact-form">
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-brand-navy text-white p-7 sm:p-10 rounded-3xl shadow-navy relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl" />
              <div className="relative">
                <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Send a message
                </p>
                <h3 className="mt-2 font-display font-black uppercase tracking-tight text-3xl sm:text-4xl">
                  Let&apos;s start a conversation.
                </h3>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="c-name" className="text-white/80">Name *</Label>
                    <Input
                      id="c-name"
                      data-testid="contact-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-brand-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-phone" className="text-white/80">Phone Number</Label>
                    <Input
                      id="c-phone"
                      data-testid="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-brand-green"
                      placeholder={SITE.phone}
                    />
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="c-email" className="text-white/80">Email *</Label>
                  <Input
                    id="c-email"
                    data-testid="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-brand-green"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="c-message" className="text-white/80">Message *</Label>
                  <Textarea
                    id="c-message"
                    data-testid="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-brand-green resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={submitting}
                  className="mt-6 w-full bg-brand-green hover:bg-brand-green-deep text-white rounded-xl py-3.5 font-bold shadow-cta disabled:opacity-60 transition-colors"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 bg-brand-grey">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Visit Us"
            title="Find our office and factory."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { label: "Corporate Office Location", q: "Bangalore Karnataka" },
              { label: "Factory Location", q: "Karnataka India" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-3xl overflow-hidden border border-border shadow-card bg-white"
              >
                <div className="p-5 flex items-center gap-3 border-b border-border">
                  <div className="w-9 h-9 rounded-lg bg-brand-light-blue flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green font-bold">
                      CEECO
                    </p>
                    <p className="font-display font-bold text-brand-navy">{m.label}</p>
                  </div>
                </div>
                <iframe
                  title={m.label}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(m.q)}&output=embed`}
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
