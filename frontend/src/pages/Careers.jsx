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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.role) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! Your application has been received.");
      setForm({ name: "", phone: "", email: "", role: "", message: "" });
      setFile(null);
    }, 900);
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
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Open Roles" title="We're hiring." />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {openRoles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col p-6 rounded-2xl bg-brand-grey border border-border hover:bg-white hover:border-brand-green hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-brand-green" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-brand-green">
                    {r.type}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-black uppercase tracking-tight text-xl text-brand-navy">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {r.loc}
                </p>
                <a
                  href="#apply"
                  data-testid={`apply-now-${r.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green transition-colors"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-brand-grey">
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
            className="mt-12 bg-white p-7 sm:p-10 rounded-3xl border border-border shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  data-testid="careers-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number *</Label>
                <Input
                  id="phone"
                  data-testid="careers-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={SITE.phone}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  data-testid="careers-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label>Preferred Role *</Label>
                <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                  <SelectTrigger data-testid="careers-role-trigger">
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
              <Label htmlFor="resume">Resume (PDF / DOC)</Label>
              <label
                htmlFor="resume"
                className="flex items-center justify-center gap-3 px-4 py-6 rounded-xl border-2 border-dashed border-border bg-brand-grey hover:bg-brand-light-blue cursor-pointer transition-colors"
              >
                <Upload className="w-5 h-5 text-brand-green" />
                <span className="text-sm text-muted-foreground">
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
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                data-testid="careers-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your experience and why you'd like to join CEECO..."
              />
            </div>

            <button
              type="submit"
              data-testid="careers-submit"
              disabled={submitting}
              className="w-full bg-brand-green hover:bg-brand-green-deep text-white rounded-xl py-3.5 px-8 font-bold shadow-cta disabled:opacity-60 transition-colors"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
