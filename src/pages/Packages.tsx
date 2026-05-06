import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Check,
  Eye,
  Zap,
  BarChart3,
  Shield,
  Cpu,
  Target,
  ArrowUpRight,
  ArrowRight,
  Megaphone,
  LayoutTemplate,
  Database,
  MessageCircle,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";

const included = [
  "Meta Ads Management",
  "Landing Page Optimization",
  "Funnel Strategy",
  "WhatsApp Automation",
  "CRM Lead Tracking",
  "Conversion Optimization",
  "Lead Qualification System",
  "Weekly Performance Optimization",
  "Reporting & Scaling Support",
];

const flow = [
  { icon: Megaphone, label: "Ads" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: Database, label: "CRM" },
  { icon: MessageCircle, label: "WhatsApp Follow-Up" },
  { icon: UserCheck, label: "Qualified Leads" },
  { icon: TrendingUp, label: "Conversion" },
];

const metrics = [
  { value: "3X", label: "Lead Growth" },
  { value: "700%", label: "ROAS" },
  { value: "1000+", label: "Leads Generated" },
];

const Packages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={caseStudiesHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="absolute inset-0 section-texture" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[500px] h-[500px] top-20 right-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Our Services</p>
            <span className="label-mono text-primary block text-center">01 — Flagship Offer</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center mt-3 leading-[1.1]">
              Our <span className="text-gradient">Growth System</span>
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg mt-5">
              A complete lead generation and conversion system designed for businesses that want predictable growth — not random marketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Flagship Offer */}
      <section className="py-10 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative z-10">

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden border-shimmer card-hover-lift max-w-5xl mx-auto">
              <div className="p-8 md:p-14">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <Zap className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight">
                      Growth System Management
                    </h3>
                    <span className="label-mono text-primary/60">
                      Ads + Funnels + Automation + Optimization
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
                  We build and manage complete customer acquisition systems that generate qualified leads through performance marketing, landing pages, CRM tracking, and WhatsApp automation.
                </p>

                {/* What's Included */}
                <div className="mb-12">
                  <h4 className="label-mono text-primary/70 mb-5">What's Included</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary-foreground/85">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Flow */}
                <div className="mb-12">
                  <h4 className="label-mono text-primary/70 mb-5">The System Flow</h4>
                  <div className="flex flex-wrap items-center gap-3 md:gap-2">
                    {flow.map((step, i) => (
                      <div key={step.label} className="flex items-center gap-3 md:gap-2">
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm">
                          <step.icon size={14} className="text-primary" />
                          <span className="text-xs md:text-sm font-medium text-secondary-foreground whitespace-nowrap">
                            {step.label}
                          </span>
                        </div>
                        {i < flow.length - 1 && (
                          <ArrowRight size={14} className="text-primary/50 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-12">
                  <h4 className="label-mono text-primary/70 mb-5">Proven Results</h4>
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-primary/15 bg-primary/5 p-5 md:p-6 text-center"
                      >
                        <p className="font-display text-3xl md:text-5xl font-bold text-gradient leading-none">
                          {m.value}
                        </p>
                        <p className="label-mono text-muted-foreground mt-3 text-[10px] md:text-xs">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing + CTA */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-border/30">
                  <div>
                    <span className="label-mono text-muted-foreground/60">Pricing</span>
                    <p className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">
                      Starting at $1000/month
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Ad spend billed separately.</p>
                  </div>
                  <Button
                    size="lg"
                    className="font-semibold rounded-full glow-accent-strong gap-2 group px-8"
                    onClick={() =>
                      navigate(`/contact?package=${encodeURIComponent("Growth System Management")}`)
                    }
                  >
                    Book Strategy Call
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Discovery CTA */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container">
            <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden border-shimmer">
              <div className="floating-orb w-[400px] h-[400px] -top-40 -right-40" />
              <div className="relative z-10">
                <p className="label-mono text-primary mb-4">Custom Strategy</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Every business has different growth bottlenecks.
                </h3>
                <p className="text-muted-foreground mb-3 max-w-xl mx-auto">
                  Our strategy calls are designed to identify:
                </p>
                <ul className="text-secondary-foreground/85 mb-10 max-w-md mx-auto space-y-2 text-left inline-block">
                  <li className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-primary shrink-0 mt-1" />
                    where leads are leaking,
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-primary shrink-0 mt-1" />
                    what's limiting conversions,
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-primary shrink-0 mt-1" />
                    and how to build a scalable acquisition system.
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="https://calendly.com/digitaleditz01/free-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="font-semibold px-10 py-7 rounded-full glow-accent-strong gap-2 group"
                    >
                      Book a Free Discovery Call
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Us */}
      <section className="py-28 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Why Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">
              Why Brands Choose DigitalEditz
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Eye, text: "People-led thinking, not automated guesswork" },
              { icon: Zap, text: "AI-assisted speed & precision" },
              { icon: BarChart3, text: "Transparent performance reporting" },
              { icon: Shield, text: "Institutional & enterprise experience" },
              { icon: Cpu, text: "Systems-first approach to growth" },
              { icon: Target, text: "Data that connects directly to revenue" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-7 rounded-2xl glass hover:border-primary/20 transition-all duration-500 card-hover-lift border-shimmer">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Packages;
