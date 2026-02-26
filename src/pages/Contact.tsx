import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SERVICE_OPTIONS = [
  "Performance Marketing",
  "Social Media Marketing",
  "Web/App Development",
  "Custom / Other",
];

const PACKAGE_OPTIONS = [
  "AI Performance Ads Optimization",
  "AI UGC Ads Creation",
  "AI Content Engine SMM",
  "AI Competitor Intelligence Reports",
  "AI-Powered Digital Systems Development",
  "AI Website CRO",
  "Custom / Other",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Custom / Other",
    packageName: "Custom / Other",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      const match = PACKAGE_OPTIONS.find(
        (p) => p.toLowerCase() === decodeURIComponent(pkg).toLowerCase()
      );
      if (match) {
        setForm((prev) => ({ ...prev, packageName: match }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          businessName: form.businessName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          packageName: form.packageName,
          message: form.message.trim(),
        },
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Query received! Our team will contact you soon." });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 section-texture" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[500px] h-[500px] top-20 -right-40" />
        <div className="floating-orb w-[300px] h-[300px] bottom-20 -left-20" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-center mb-6 leading-[1.1]">
              Let's Talk <span className="text-gradient">Growth.</span>
            </h1>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-20 text-lg">
              Tell us about your business, your goals, and your current challenges. We'll recommend a strategy tailored to your scale.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <ScrollReveal>
              {submitted ? (
                <div className="glass-strong rounded-3xl p-8 md:p-10 border-shimmer flex flex-col items-center justify-center min-h-[420px] text-center">
                  <CheckCircle2 size={56} className="text-primary mb-6" />
                  <h3 className="font-display text-2xl font-bold mb-3">Query Received!</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 hours. A confirmation has been sent to <span className="text-primary">{form.email}</span>.
                  </p>
                </div>
              ) : (
                <form className="glass-strong rounded-3xl p-8 md:p-10 space-y-5 border-shimmer" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" required />
                    <Input name="businessName" placeholder="Business Name" value={form.businessName} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
                  </div>
                  <Input name="email" placeholder="Email Address *" type="email" value={form.email} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" required />
                  <Input name="phone" placeholder="Phone Number" type="tel" value={form.phone} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />

                  {/* Service Selection */}
                  <div>
                    <label className="label-mono text-muted-foreground text-xs mb-2 block">Service (Optional)</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full h-12 rounded-xl bg-background/50 border border-border/50 px-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background appearance-none cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="label-mono text-muted-foreground text-xs mb-2 block">Package (Optional)</label>
                    <select
                      name="packageName"
                      value={form.packageName}
                      onChange={handleChange}
                      className="w-full h-12 rounded-xl bg-background/50 border border-border/50 px-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background appearance-none cursor-pointer"
                    >
                      {PACKAGE_OPTIONS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <Textarea name="message" placeholder="Tell us about your goals and challenges..." value={form.message} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl min-h-[120px] focus:border-primary/50" />
                  <Button className="w-full font-semibold rounded-full glow-accent py-6 gap-2 group" size="lg" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Schedule Discovery Call
                        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <p className="label-mono text-primary mb-6">Contact Information</p>
                  <div className="space-y-5 text-sm">
                    {[
                      { icon: MapPin, label: "Gurugram, India", href: "#" },
                      { icon: Mail, label: "info@digitaleditz.com", href: "mailto:info@digitaleditz.com" },
                      { icon: Phone, label: "+91 9149958270", href: "tel:+919149958270" },
                      { icon: Phone, label: "+91 8588894379", href: "tel:+918588894379" },
                      { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/919149958270" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 text-secondary-foreground hover:text-primary transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <item.icon size={16} className="text-primary" />
                        </div>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-strong rounded-2xl p-8 relative overflow-hidden border-shimmer">
                  <div className="floating-orb w-[200px] h-[200px] -bottom-16 -right-16" />
                  <div className="relative z-10">
                    <p className="label-mono text-primary mb-3">Quick Chat</p>
                    <h4 className="font-display text-xl font-bold mb-3">Prefer a quick chat?</h4>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">Message us directly on WhatsApp for a faster response.</p>
                    <Button variant="outline" className="rounded-full gap-2 border-border/50 hover:border-primary/30 group" asChild>
                      <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={16} />
                        Open WhatsApp
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
