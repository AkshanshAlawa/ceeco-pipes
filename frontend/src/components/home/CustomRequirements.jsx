import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SectionHeading from "@/components/common/SectionHeading";
import { submitLead } from "@/lib/formspree";

const inputClass =
  "bg-transparent border-0 border-b-2 border-white/20 rounded-none text-white placeholder:text-white/30 focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 text-base";

export default function CustomRequirements() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await submitLead("custom-enquiry", form);
      toast.success("Enquiry received! Our engineering team will get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="custom-enquiry"
      data-testid="custom-enquiry-section"
      className="py-24 sm:py-32 bg-[#F2F2F2] relative scroll-mt-24"
    >
      <div className="absolute top-0 left-0 h-[3px] w-32 bg-brand-green" />

      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 reveal-x">
          <SectionHeading
            eyebrow="Custom Manufacturing"
            title="Have custom requirements?"
            size="md"
          />
          <p className="mt-8 text-lg text-neutral-600 leading-[1.7]">
            We specialize in manufacturing custom HDPE pipes tailored to your
            exact specifications. Whether you need unique diameters, pressure
            ratings, or specialized applications, our engineering team is ready
            to assist. Contact us to discuss your project.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Custom Diameters", "Pressure Ratings", "Special Applications"].map((p) => (
              <span
                key={p}
                className="px-4 py-2 text-xs font-bold bg-white border border-[#E0E0E0] text-black uppercase tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <form
            id="enquiry-form"
            onSubmit={handleSubmit}
            data-testid="enquiry-form"
            className="bg-black text-white p-8 sm:p-12 shadow-navy relative overflow-hidden scroll-mt-24"
          >
            <span className="absolute top-0 left-0 w-16 h-[3px] bg-brand-green" />
            <span className="absolute bottom-0 right-0 w-16 h-[3px] bg-brand-green" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="accent-line" />
                <p className="text-[11px] tracking-[0.32em] uppercase text-brand-green font-bold">
                  Enquiry Form
                </p>
              </div>
              <h3 className="font-display font-black tracking-[0.02em] text-3xl sm:text-4xl leading-[1.05]">
                Tell us what you need.
              </h3>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="e-name" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Name *</Label>
                  <Input
                    id="e-name"
                    data-testid="enquiry-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="e-phone" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Phone</Label>
                  <Input
                    id="e-phone"
                    data-testid="enquiry-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Label htmlFor="e-email" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Email *</Label>
                <Input
                  id="e-email"
                  data-testid="enquiry-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-6 space-y-2">
                <Label htmlFor="e-message" className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-semibold">Message *</Label>
                <Textarea
                  id="e-message"
                  data-testid="enquiry-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your requirement - sizes, PN rating, application, quantity..."
                />
              </div>
              <button
                type="submit"
                data-testid="enquiry-submit"
                disabled={submitting}
                className="mt-10 w-full btn-sharp btn-red justify-center disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Enquiry"}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
