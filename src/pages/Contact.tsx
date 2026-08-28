import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  FileText,
  PhoneCall,
  Rocket,
} from "lucide-react";
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

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@digitaleditz.com",
    href: "mailto:info@digitaleditz.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 70652 06690",
    href: "https://wa.me/917065206690",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Gurugram, India",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
  },
];

const nextSteps = [
  {
    icon: FileText,
    title: "Share your details",
    description: "Fill out the form with your goals, business, and current challenges.",
  },
  {
    icon: PhoneCall,
    title: "We review & reach out",
    description: "Our team reviews your submission and schedules a discovery call within 24 hours.",
  },
  {
    icon: Rocket,
    title: "We map your strategy",
    description: "We recommend a tailored growth system built around your scale and goals.",
  },
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
  const [honeypot, setHoneypot] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"details" | "verify">("details");
  const [sendingCode, setSendingCode] = useState(false);
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

  const sendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    if (honeypot.trim() !== "") return;
    setSendingCode(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-verification-code", {
        body: { email: form.email.trim() },
      });
      if (error || (data as any)?.error) throw new Error((data as any)?.error || "failed");
      setStep("verify");
      toast({ title: `Verification code sent to ${form.email.trim()}` });
    } catch (err) {
      console.error(err);
      toast({ title: "Could not send the code. Please check your email and try again.", variant: "destructive" });
    } finally {
      setSendingCode(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(code.trim())) {
      toast({ title: "Enter the 6-digit code from your email.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          businessName: form.businessName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          packageName: form.packageName,
          message: form.message.trim(),
          code: code.trim(),
          honeypot,
        },
      });
      if (error || (data as any)?.error) throw new Error((data as any)?.error || "failed");
      setSubmitted(true);
      toast({ title: "Query received! Our team will contact you soon." });
    } catch (err: any) {
      console.error(err);
      toast({
        title: err?.message && err.message !== "failed" ? err.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's Talk <span className="text-gradient">Growth.</span>
          </>
        }
        description="Tell us about your business, your goals, and your current challenges. We'll recommend a strategy tailored to your scale."
        align="center"
      />

      <section className="section-pad-sm relative overflow-hidden">
        <div className="absolute inset-0 section-texture" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 max-w-6xl mx-auto">
            <ScrollReveal>
              {submitted ? (
                <div className="surface p-8 md:p-10 flex flex-col items-center justify-center min-h-[480px] text-center">
                  <CheckCircle2 size={56} className="text-primary mb-6" />
                  <h3 className="display-md">Query Received!</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mt-3">
                    Thank you for reaching out. Our team will contact you within 24 hours. A confirmation has been sent to <span className="text-primary">{form.email}</span>.
                  </p>
                </div>
              ) : step === "verify" ? (
                <form className="surface p-8 md:p-10 space-y-5" onSubmit={handleSubmit}>
                  <span className="eyebrow">Verify Email</span>
                  <h2 className="display-md mt-4 mb-2">Enter your verification code</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We sent a 6-digit code to <span className="text-primary">{form.email}</span>. Enter it below to send your enquiry. The code expires in 10 minutes.
                  </p>
                  <Input
                    name="code"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="6-digit code"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="bg-background/50 border-border/50 rounded-xl h-14 text-center text-xl tracking-[0.5em] focus:border-primary/50"
                    required
                  />
                  <Button className="w-full font-semibold rounded-full glow-accent py-6 gap-2 group" size="lg" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify & Submit
                        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <button type="button" onClick={() => setStep("details")} className="text-muted-foreground hover:text-foreground transition-colors">
                      Edit details
                    </button>
                    <button
                      type="button"
                      onClick={sendCode}
                      disabled={sendingCode}
                      className="text-primary hover:opacity-80 transition-opacity disabled:opacity-50"
                    >
                      {sendingCode ? "Sending..." : "Resend code"}
                    </button>
                  </div>
                </form>
              ) : (
                <form className="surface p-8 md:p-10 space-y-5" onSubmit={sendCode}>
                  <span className="eyebrow">Discovery Call</span>
                  <h2 className="display-md mt-4 mb-2">Tell us about your business</h2>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <Input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" required />
                    <Input name="businessName" placeholder="Business Name" value={form.businessName} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
                  </div>
                  <Input name="email" placeholder="Email Address *" type="email" value={form.email} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" required />
                  <Input name="phone" placeholder="Phone Number" type="tel" value={form.phone} onChange={handleChange} className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />

                  {/* Bot trap: hidden from real users */}
                  <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
                    <input
                      type="text"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

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
                  <Button className="w-full font-semibold rounded-full glow-accent py-6 gap-2 group" size="lg" disabled={sendingCode}>
                    {sendingCode ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending code...
                      </>
                    ) : (
                      <>
                        Send Verification Code
                        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll email you a 6-digit code to confirm your address before submitting.
                  </p>
                </form>
              )}

            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <span className="eyebrow">Contact Information</span>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {contactCards.map((item) => {
                    const Wrapper: any = item.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={item.label}
                        href={item.href}
                        target={item.href?.startsWith("http") ? "_blank" : undefined}
                        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="surface surface-hover p-6 flex flex-col gap-4 group"
                      >
                        <div className="icon-tile">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <p className="label-mono text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>

                <div className="surface p-8 relative overflow-hidden">
                  <div className="floating-orb w-[200px] h-[200px] -bottom-16 -right-16" />
                  <div className="relative z-10">
                    <p className="label-mono text-primary mb-3">Quick Chat</p>
                    <h4 className="display-md">Prefer a quick chat?</h4>
                    <p className="text-sm text-muted-foreground mb-5 mt-3 leading-relaxed">
                      Message us directly on WhatsApp for a faster response.
                    </p>
                    <Button variant="outline" className="rounded-full gap-2 border-border/50 hover:border-primary/30 group" asChild>
                      <a href="https://wa.me/917065206690" target="_blank" rel="noopener noreferrer">
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

      {/* What happens next */}
      <section className="section-pad relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">What Happens Next</span>
            <h2 className="display-lg mt-5">From message to strategy in three steps</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nextSteps.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="surface surface-hover p-7 h-full text-center">
                  <div className="icon-tile mx-auto mb-5">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
