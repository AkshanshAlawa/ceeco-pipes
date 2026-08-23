import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Briefcase, MapPin, ArrowRight, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { SITE } from "@/lib/site";
import { submitLead } from "@/lib/formspree";

const openRoles = [
  { title: "Sales Executive", type: "Full-time", loc: "Karnataka" },
  { title: "Machine Operator", type: "Full-time", loc: "Factory" },
  { title: "Factory Staff", type: "Full-time", loc: "Factory" },
  { title: "Marketing Executive", type: "Full-time", loc: "Office" },
  { title: "Accountant", type: "Full-time", loc: "Office" },
  { title: "Production Staff", type: "Full-time", loc: "Factory" },
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.role) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await submitLead("careers", { ...form, resume_filename: file?.name || "Not attached" });
      toast.success("Thank you! Your application has been received.");
      setForm({ name: "", phone: "", email: "", role: "", message: "" });
      setFile(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Join Our Team"
        title="Build your career with CEECO."
        subtitle="Be part of a legacy that has been building India's water and agricultural infrastructure for 40+ years."
      />

      {/* Open Roles */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Open Roles" title="We're hiring." />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {openRoles.map((r, i) => (
              <div
                key={r.title}
                className="reveal industrial-card flex flex-col p-8 bg-[#F2F2F2] group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all">
                    <Briefcase className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] tracking-[0.28em] uppercase font-bold text-brand-green">
                    {r.type}
                  </span>
                </div>
                <h3 className="mt-6 font-display font-bold normal-case tracking-[-0.01em] text-xl text-black">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {r.loc}
                </p>
                <a
                  href="#apply"
                  data-testid={`apply-now-${r.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-black hover:text-brand-green transition-colors border-b-2 border-brand-green pb-1.5 self-start"
                >
                  Apply Now <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-[#F2F2F2]">
        <div className="container-x max-w-3xl">
          <SectionHeading
            center
            eyebrow="Application Form"
            title="Apply to join CEECO."
            subtitle="Tell us a little about yourself. We'll get back to you over email."
          />

          <form
            onSubmit={handleSubmit}
            data-testid="careers-form"
            className="mt-16 bg-white p-8 sm:p-12 border border-[#E0E0E0] shadow-card space-y-6 relative"
          >
            <span className="absolute top-0 left-0 w-16 h-[3px] bg-brand-green" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Full Name *</Label>
                <Input
                  id="name"
                  data-testid="careers-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="rounded-none border-0 border-b-2 border-[#E0E0E0] focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Contact Number *</Label>
                <Input
                  id="phone"
                  data-testid="careers-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={SITE.phone}
                  className="rounded-none border-0 border-b-2 border-[#E0E0E0] focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Email Address *</Label>
                <Input
                  id="email"
                  data-testid="careers-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="rounded-none border-0 border-b-2 border-[#E0E0E0] focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Preferred Role *</Label>
                <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                  <SelectTrigger data-testid="careers-role-trigger" className="rounded-none border-0 border-b-2 border-[#E0E0E0] focus:border-brand-green focus:ring-0 px-0 py-3 h-auto">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {openRoles.map((r) => (
                      <SelectItem key={r.title} value={r.title}>
                        {r.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Resume (PDF / DOC)</Label>
              <label
                htmlFor="resume"
                className="flex items-center justify-center gap-3 px-4 py-6 border-2 border-dashed border-[#E0E0E0] bg-[#F2F2F2] hover:bg-white hover:border-brand-green cursor-pointer transition-colors"
              >
                <Upload className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                <span className="text-sm text-neutral-600">
                  {file ? file.name : "Click to upload (.pdf, .doc, .docx)"}
                </span>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[11px] tracking-[0.2em] uppercase font-semibold text-neutral-500">Message</Label>
              <Textarea
                id="message"
                data-testid="careers-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your experience and why you'd like to join CEECO..."
                className="rounded-none border-0 border-b-2 border-[#E0E0E0] focus-visible:border-brand-green focus-visible:ring-0 px-0 py-3 resize-none"
              />
            </div>

            <button
              type="submit"
              data-testid="careers-submit"
              disabled={submitting}
              className="w-full btn-sharp btn-red justify-center disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
