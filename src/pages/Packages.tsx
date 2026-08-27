import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Seo, { SITE_URL } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Cpu,
  Database,
  Eye,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  Palette,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";
import systemDiagram from "@/assets/services-system-diagram.jpg";
import servicesSystems from "@/assets/services-systems.jpg";
import servicesContent from "@/assets/services-content.jpg";
import servicesAds from "@/assets/services-ads.jpg";
import SystemStack from "@/components/SystemStack";
import TestimonialsSection from "@/components/TestimonialsSection";

const journey = [
  { icon: Eye, label: "Discovery" },
  { icon: Palette, label: "Brand" },
  { icon: LayoutTemplate, label: "Website" },
  { icon: Megaphone, label: "Content & Ads" },
  { icon: Database, label: "CRM" },
  { icon: MessageCircle, label: "Follow-Up" },
  { icon: UserCheck, label: "Qualified Lead" },
  { icon: TrendingUp, label: "Revenue" },
];

const capabilities = [
  {
    n: "01",
    icon: Palette,
    title: "Brand & Identity",
    desc: "Positioning, messaging, visual identity and brand guidelines so the business says one clear thing everywhere.",
    points: ["Positioning & messaging", "Logo & visual identity", "Brand guidelines", "Collateral design"],
  },
  {
    n: "02",
    icon: LayoutTemplate,
    title: "Digital Infrastructure",
    desc: "Websites, landing pages and the technical base your marketing runs on — fast, structured and measurable.",
    points: ["Website design & build", "Landing pages", "Technical SEO base", "Tracking setup"],
  },
  {
    n: "03",
    icon: Megaphone,
    title: "Content & Social",
    desc: "Content built to create familiarity and answer real buying questions across search and social.",
    points: ["Content strategy", "Social media management", "UGC & creative production", "SEO content"],
  },
  {
    n: "04",
    icon: Target,
    title: "Paid Acquisition",
    desc: "Meta, Google and LinkedIn campaigns pointed at pages designed to convert, not just to receive traffic.",
    points: ["Campaign strategy", "Creative testing", "Audience & budget management", "Weekly optimization"],
  },
  {
    n: "05",
    icon: Workflow,
    title: "Demand & Conversion",
    desc: "Offers, funnels, forms and follow-up that turn interest into qualified conversations.",
    points: ["Funnel design", "Conversion optimization", "Lead qualification", "Nurture sequences"],
  },
  {
    n: "06",
    icon: Cpu,
    title: "Automation & Analytics",
    desc: "CRM, routing and reporting so nothing is lost and every decision has a number behind it.",
    points: ["CRM implementation", "WhatsApp & email automation", "Dashboards & reporting", "Attribution clarity"],
  },
];

const process = [
  { n: "01", title: "Discovery & Audit", desc: "We map your current brand, website, content, channels and follow-up to find what actually blocks growth." },
  { n: "02", title: "Strategy & Roadmap", desc: "A sequenced plan: which layer is built first, what it must achieve, and how success is measured." },
  { n: "03", title: "Build & Launch", desc: "Brand, website, content and campaign infrastructure built to work together from day one." },
  { n: "04", title: "Optimize", desc: "Weekly review of creative, pages, funnels and follow-up — improving the system rather than chasing tactics." },
  { n: "05", title: "Scale", desc: "Once results are explainable and repeatable, we expand spend, channels and content deliberately." },
];

const models = [
  {
    tag: "Build",
    title: "Foundation",
    desc: "For businesses without a solid digital base. Brand, website and tracking established first so future marketing has somewhere to land.",
    points: ["Brand & positioning", "Website / landing pages", "Analytics & CRM setup", "Launch-ready content"],
  },
  {
    tag: "Grow",
    title: "Momentum",
    desc: "For businesses with a working base that need consistent demand. Content and paid acquisition run against a converting destination.",
    points: ["Content & social execution", "Paid campaign management", "Funnel & CRO work", "Monthly reporting"],
  },
  {
    tag: "Scale",
    title: "Expansion",
    desc: "For businesses with proven results ready to widen the system across channels, markets and offers.",
    points: ["Multi-channel expansion", "Creative testing at volume", "Automation & lifecycle", "Attribution dashboards"],
  },
];

const directory = [
  "Brand identity & logo design",
  "Brand positioning & messaging",
  "Website design & development",
  "Landing page design",
  "Technical & on-page SEO",
  "Content strategy & production",
  "Social media management",
  "UGC & performance creative",
  "Meta ads management",
  "Google ads management",
  "LinkedIn ads management",
  "Funnel & conversion optimization",
  "CRM setup & lead tracking",
  "WhatsApp & email automation",
  "Analytics, dashboards & reporting",
  "Competitor & market research",
];

const industries = [
  "Real Estate",
  "Education & EdTech",
  "Healthcare & Wellness",
  "D2C & Retail",
  "Professional Services",
  "Hospitality & Travel",
  "SaaS & Technology",
  "Manufacturing & B2B",
];

const indicators = [
  { value: "3X", label: "Lead Growth" },
  { value: "700%", label: "ROAS" },
  { value: "1000+", label: "Leads Generated" },
];

const differentiators = [
  { icon: Eye, text: "People-led strategy, AI-assisted execution" },
  { icon: Cpu, text: "Systems-first: every asset connects to the next" },
  { icon: BarChart3, text: "Transparent reporting tied to revenue, not vanity metrics" },
  { icon: Shield, text: "Enterprise experience applied to growing businesses" },
  { icon: Workflow, text: "One partner across brand, web, content and acquisition" },
  { icon: Target, text: "Scope agreed per phase, so investment follows results" },
];

const Packages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Brand, Website, Content & Growth Services | DigitalEditz"
        description="DigitalEditz builds the complete digital foundation and growth system behind modern businesses — brand, website, content, paid acquisition, conversion and automation."
        path="/packages"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Digital brand and growth system",
          provider: { "@type": "Organization", name: "DigitalEditz", url: SITE_URL },
          areaServed: "IN",
          description:
            "Brand, digital infrastructure, content, paid acquisition, conversion and automation delivered as one connected growth system.",
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
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
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center mt-3 leading-[1.1] max-w-4xl mx-auto">
              We build the complete{" "}
              <span className="text-gradient">digital system</span> behind modern businesses
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg mt-6">
              Brand, website, content, acquisition, conversion and automation — designed as
              one connected system instead of disconnected services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="https://calendly.com/digitaleditz01/free-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="font-semibold rounded-full glow-accent-strong gap-2 group px-8">
                  Book a Free Discovery Call
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold rounded-full border-border/50 hover:border-primary/30 px-8"
                asChild
              >
                <Link to="/case-studies">See our work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Connected system positioning */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <p className="label-mono text-primary mb-4">The Approach</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
                Marketing rarely fails in one place. It fails in the gaps.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Most businesses buy marketing in pieces — a brand from one place, a website
                  from another, content and ads from somewhere else. Each piece works on its
                  own terms, but nothing compounds.
                </p>
                <p>
                  We work the other way. Positioning defines the website. The website defines
                  where content and campaigns send people. CRM and analytics close the loop so
                  every decision has evidence behind it.
                </p>
                <p className="text-secondary-foreground/85">
                  Performance marketing is one component of that system — not the whole company.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Customer journey flow */}
          <ScrollReveal delay={0.15}>
            <div className="mt-16 glass rounded-3xl p-8 md:p-10 border-shimmer">
              <h3 className="label-mono text-primary/70 mb-6">The Customer Journey We Build</h3>
              <div className="flex flex-wrap items-center gap-3 md:gap-2">
                {journey.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 md:gap-2">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm">
                      <step.icon size={14} className="text-primary" />
                      <span className="text-xs md:text-sm font-medium text-secondary-foreground whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < journey.length - 1 && (
                      <ArrowRight size={14} className="text-primary/50 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The growth stack diagram */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-orb w-[460px] h-[460px] top-10 right-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="label-mono text-primary mb-4">The Growth Stack</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
                  Every layer feeds the next
                </h2>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  This is the order we build in. Each layer produces a specific business
                  outcome, and each one makes the layer beneath it cheaper and more effective
                  to run.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <div className="mt-8 rounded-3xl overflow-hidden border border-border/40 relative">
                  <img
                    src={systemDiagram}
                    alt="Connected nodes representing an integrated digital growth system"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-56 md:h-72 object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <SystemStack />
            </div>
          </div>
        </div>
      </section>



      {/* Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-orb w-[420px] h-[420px] top-1/3 left-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">Capabilities</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.1]">
              Six layers that make up the system
            </h2>
          </ScrollReveal>

          <div className="mt-14 border-t border-border/30">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.n} delay={i * 0.05}>
                <div className="grid md:grid-cols-12 gap-6 py-10 border-b border-border/30">
                  <div className="md:col-span-1">
                    <span className="label-mono text-primary/60">{c.n}</span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <c.icon className="text-primary" size={18} />
                    </div>
                    <h3 className="font-display text-2xl font-bold leading-tight">{c.title}</h3>
                  </div>
                  <div className="md:col-span-4 text-muted-foreground text-sm leading-relaxed">
                    {c.desc}
                  </div>
                  <ul className="md:col-span-3 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-secondary-foreground/85">
                        <Check size={14} className="text-primary shrink-0 mt-1" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship engagement */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden border-shimmer max-w-5xl mx-auto">
              <div className="relative h-44 md:h-56 overflow-hidden">
                <img
                  src={systemDiagram}
                  alt="Layered diagram of a connected digital growth system"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-8 md:p-14 pt-0 md:pt-0 -mt-6">

                <p className="label-mono text-primary mb-4">Flagship Engagement</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
                  The Digital Brand & Growth System
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
                  Our integrated engagement, where the capabilities above are delivered as one
                  connected build and managed together. Scope is defined per business after
                  discovery — not every component is required by every company.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-10">
                  {[
                    "Positioning & brand foundation",
                    "Website & landing page infrastructure",
                    "Content and creative production",
                    "Paid acquisition management",
                    "Funnel & conversion optimization",
                    "CRM, automation & follow-up",
                    "Analytics, dashboards & reporting",
                    "Ongoing strategy & optimization",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary-foreground/85">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 mt-10 border-t border-border/30">
                  <p className="text-sm text-muted-foreground max-w-md">
                    Engagements are scoped after a discovery call, so the plan matches the
                    layers your business actually needs next.
                  </p>
                  <Button
                    size="lg"
                    className="font-semibold rounded-full glow-accent-strong gap-2 group px-8 shrink-0"
                    onClick={() =>
                      navigate(
                        `/contact?package=${encodeURIComponent("The Digital Brand & Growth System")}`
                      )
                    }
                  >
                    Discuss your scope
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.1]">
              A five-step path from audit to scale
            </h2>
          </ScrollReveal>
          <div
            aria-hidden
            className="hidden md:block h-px mt-14 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          <div className="grid md:grid-cols-5 gap-4 mt-6 md:mt-8">
            
            {process.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.07}>
                <div className="h-full p-7 rounded-2xl glass border-shimmer card-hover-lift">
                  <span className="label-mono text-primary/60">{s.n}</span>
                  <h3 className="font-display text-xl font-bold mt-4 leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery models */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">Delivery Models</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.1]">
              Build, Grow, Scale
            </h2>
            <p className="text-muted-foreground mt-5 max-w-2xl">
              Where you start depends on what already works. Most businesses move through
              these stages rather than buying all of them at once.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {models.map((m, i) => (
              <ScrollReveal key={m.tag} delay={i * 0.08}>
                <div className="h-full glass rounded-3xl border-shimmer card-hover-lift flex flex-col overflow-hidden">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={modelImages[i]}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <span className="label-mono text-primary absolute bottom-4 left-8">{m.tag}</span>
                  </div>
                  <div className="p-8 pt-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl font-bold">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">{m.desc}</p>
                    <ul className="space-y-2.5 mt-6">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-secondary-foreground/85">
                          <Check size={14} className="text-primary shrink-0 mt-1" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Individual services directory */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">Individual Services</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.1]">
              Need one capability, not the whole system?
            </h2>
            <p className="text-muted-foreground mt-5 max-w-2xl">
              When the rest of your setup already works, we take on individual mandates too.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
            {directory.map((s, i) => (
              <ScrollReveal key={s} delay={i * 0.02}>
                <div className="px-5 py-4 rounded-xl border border-border/40 bg-card/30 text-sm text-secondary-foreground/85">
                  {s}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">Industries</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
              Sectors we work across
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3 mt-10">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full border border-primary/15 bg-primary/5 text-sm text-secondary-foreground"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Performance indicators */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary mb-4">Performance Indicators</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.1]">
              Results from past engagements
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12 max-w-4xl">
            {indicators.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-7 text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gradient leading-none">
                    {m.value}
                  </p>
                  <p className="label-mono text-muted-foreground mt-3 text-[10px] md:text-xs">
                    {m.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-xs text-muted-foreground/60 mt-6 max-w-2xl leading-relaxed">
              Figures reflect outcomes from specific past engagements and depend on industry,
              offer, budget and market conditions. They are indicative, not a guarantee of
              future results.
            </p>
            <Button
              variant="outline"
              className="mt-8 font-semibold rounded-full border-border/50 hover:border-primary/30"
              asChild
            >
              <Link to="/case-studies">Read the case studies</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Why Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
              Why Brands Choose DigitalEditz
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((item, i) => (
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

      {/* Engagement models */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-12 border-shimmer max-w-4xl mx-auto">
              <p className="label-mono text-primary mb-4">Flexible Engagement Models</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Project, retainer or integrated partnership
              </h2>
              <div className="grid sm:grid-cols-3 gap-5 mt-10">
                {[
                  { t: "Project", d: "A defined build — brand, website or campaign launch — with a fixed scope and timeline." },
                  { t: "Retainer", d: "Ongoing execution of one or more capabilities with monthly reporting." },
                  { t: "Integrated Partnership", d: "The full growth system, managed together across every layer." },
                ].map((e) => (
                  <div key={e.t} className="p-6 rounded-2xl border border-border/40 bg-card/30">
                    <p className="font-display text-lg font-bold">{e.t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{e.d}</p>
                  </div>
                ))}
              </div>
              <div className="pt-8 mt-8 border-t border-border/30">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                  Starting from $1,000/month
                </p>
                <p className="text-xs text-muted-foreground/70 mt-3 max-w-2xl leading-relaxed">
                  Actual investment depends on the scope agreed after discovery — the number of
                  layers involved, delivery pace and level of ongoing management. Advertising
                  spend and third-party tooling are billed separately.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategy assessment */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container">
            <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden border-shimmer">
              <div className="floating-orb w-[400px] h-[400px] -top-40 -right-40" />
              <div className="relative z-10">
                <p className="label-mono text-primary mb-4">Strategy Assessment</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Every business has different growth bottlenecks.
                </h2>
                <p className="text-muted-foreground mb-3 max-w-xl mx-auto">
                  Our discovery calls are designed to identify:
                </p>
                <ul className="text-secondary-foreground/85 mb-10 max-w-md mx-auto space-y-2 text-left inline-block">
                  {[
                    "which layer of your digital foundation is missing,",
                    "where prospects drop off between click and conversation,",
                    "and what to build first to make growth repeatable.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm">
                      <Check size={14} className="text-primary shrink-0 mt-1" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <a
                    href="https://calendly.com/digitaleditz01/free-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="font-semibold px-10 py-7 rounded-full glow-accent-strong gap-2 group">
                      Book a Free Discovery Call
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Packages;
