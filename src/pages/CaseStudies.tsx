import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import vivocase from "@/assets/clients/vivo_1.png";
import pushticase from "@/assets/clients/pushti_1.png";
import usmanmajidcase from "@/assets/clients/usmanmajid_1.png";
import jkdistrictcase from "@/assets/clients/jkdistrict_1.png";
import jkkpcase from "@/assets/clients/kp_1.png";
import kpccase from "@/assets/clients/thekpc_1.png";

import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Target,
  Zap,
  BarChart3,
  Eye,
  Shield,
  Cpu,
  ArrowUpRight,
  TrendingUp,
  Users,
  Megaphone,
  X,
  Calendar,
  MessageCircle,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  tag: string;
  category: "all" | "turf" | "realestate" | "industrial" | "tech" | "public";
  categoryLabel: string;
  title: string;
  client: string;
  problem: string;
  strategy: string;
  execution: string;
  image: string;
  icon: React.ElementType;
  featured?: boolean;
  kpis: { label: string; value: number; suffix?: string; prefix?: string }[];
  deliverables: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "pushti",
    tag: "Pushti Turf & Farms / 2025",
    category: "turf",
    categoryLabel: "Playground Turf",
    title: "Demand & Conversion System Launch",
    client: "Pushti Turf & Farms",
    problem: "Needed massive local awareness and slot booking turnout in an aggressive 30-day launch window.",
    strategy: "Built a localized paid acquisition funnel on Meta integrated directly with WhatsApp CRM slot booking.",
    execution: "Rapid creative testing with short-form UGC video reels, hyper-local radius targeting, and 1-click automated WhatsApp booking follow-up.",
    image: pushticase,
    icon: TrendingUp,
    featured: true,
    kpis: [
      { label: "Total Reach", value: 1, suffix: "M+" },
      { label: "Verified Inbound Leads", value: 1000, suffix: "+" },
      { label: "Peak Return on Ad Spend", value: 700, suffix: "%", prefix: "~" },
    ],
    deliverables: [
      "Hyper-Local Meta Ad Acquisition",
      "Instant WhatsApp CRM Automation",
      "Short-Form Video & Reel Production",
      "Daily Lead Pipeline Qualification",
    ],
  },
  {
    id: "kapahi",
    tag: "Kapahi Properties / 2023",
    category: "realestate",
    categoryLabel: "Luxury Real Estate",
    title: "Real Estate Lead Generation System",
    client: "Kapahi Properties",
    problem: "High cost-per-lead and low qualification rates through conventional print and legacy portals.",
    strategy: "Engineered an end-to-end conversion system combining a custom property WebApp, luxury landing pages, and geo-targeted ads.",
    execution: "High-net-worth demographic targeting, instant brochure delivery via WhatsApp, and automated CRM lead distribution for site visits.",
    image: jkkpcase,
    icon: TrendingUp,
    kpis: [
      { label: "Lead Growth", value: 3, suffix: "X" },
      { label: "Qualified Pipeline", value: 45, suffix: "Cr+", prefix: "₹" },
    ],
    deliverables: [
      "Custom Listing Web Application",
      "HNW Audience Targeting & Retargeting",
      "Automated Site-Visit Booking",
      "Lead Quality Filtering System",
    ],
  },
  {
    id: "kpc",
    tag: "Kashmir Ply Co / 2025",
    category: "industrial",
    categoryLabel: "Industrial & Timber",
    title: "B2B Lead Generation & Brand Dominance",
    client: "Kashmir Ply Co.",
    problem: "Needed predictable, verified commercial contractor and dealer leads across regional territories.",
    strategy: "Built an acquisition funnel focused on dealer-network expansion and direct contractor inquiries.",
    execution: "High-intent Google Search and Meta B2B distribution paired with automated lead scoring and verification.",
    image: kpccase,
    icon: Target,
    kpis: [
      { label: "B2B Lead Growth", value: 10, suffix: "X" },
      { label: "Verified Dealer Network", value: 150, suffix: "+" },
    ],
    deliverables: [
      "High-Intent Search Infrastructure",
      "B2B Contractor Lead Engine",
      "Specification & Product Catalog Pages",
      "Regional Territory Campaign Logic",
    ],
  },
  {
    id: "vivo",
    tag: "VIVO / 2024",
    category: "tech",
    categoryLabel: "Consumer Tech",
    title: "Custom Promotional Campaign Platform",
    client: "VIVO",
    problem: "Enterprise festival campaign required a high-traffic, frictionless digital submission and verification platform.",
    strategy: "Developed an enterprise-grade responsive promotional WebApp optimized for sub-second mobile loading and high concurrency.",
    execution: "Custom verification API flow, fraud protection logic, and real-time validation for thousands of simultaneous user claims.",
    image: vivocase,
    icon: Megaphone,
    kpis: [
      { label: "Sales Growth", value: 73, suffix: "%", prefix: "+" },
      { label: "Concurrent Entries", value: 50, suffix: "K+" },
    ],
    deliverables: [
      "Custom Promo Submission WebApp",
      "Fraud Detection & IMEI Verification",
      "Enterprise Scalability & CDN Setup",
      "Live Analytics Campaign Dashboard",
    ],
  },
  {
    id: "district-jammu",
    tag: "District Jammu Govt / 2025",
    category: "public",
    categoryLabel: "Public Sector & Govt",
    title: "Government Citizen Engagement Systems",
    client: "District Administration Jammu",
    problem: "Citizen awareness and public participation in Jal Shakti, JAKEDA, and tourism initiatives were lagging.",
    strategy: "Conceptualized and executed multilingual multimedia awareness campaigns with targeted localized community distribution.",
    execution: "Short-form informational videos, regional influencer amplification, and public engagement feedback tracking.",
    image: jkdistrictcase,
    icon: Users,
    kpis: [
      { label: "Engagement Increase", value: 84, suffix: "%", prefix: "+" },
      { label: "Citizens Reached", value: 2, suffix: "M+" },
    ],
    deliverables: [
      "Citizen Awareness Social Campaigns",
      "Infographic & Explainer Creative",
      "Multilingual Distribution Flow",
      "Public Sentiment Tracking",
    ],
  },
  {
    id: "usman-majid",
    tag: "Usman Majid / 2024",
    category: "public",
    categoryLabel: "Political & Public Outreach",
    title: "Full Digital Political Campaign Architecture",
    client: "Usman Majid Campaign",
    problem: "Fragmented digital presence and rapid information cycles in a high-stakes, competitive electoral race.",
    strategy: "Executed round-the-clock digital campaign strategy with cross-platform community mobilization and message dominance.",
    execution: "Real-time speech clipping, rapid response social graphics, ground-level rally live streaming, and targeted voter cohort outreach.",
    image: usmanmajidcase,
    icon: Megaphone,
    kpis: [
      { label: "Reach & Engagement", value: 230, suffix: "%", prefix: "+" },
      { label: "Daily Video Views", value: 500, suffix: "K+" },
    ],
    deliverables: [
      "Rapid Response Creative Team",
      "Live Broadcast & Speech Clips",
      "Voter Cohort Social Distribution",
      "Crisis PR & Message Monitoring",
    ],
  },
];

const glanceMetrics = [
  { value: "700%", label: "Peak ROAS Recorded" },
  { value: "100K+", label: "Verified Inbound Leads" },
  { value: "10X", label: "Max Lead Growth Multiplier" },
  { value: "6+", label: "Specialized Industry Sectors" },
];

const CATEGORIES = [
  { id: "all", label: "All Sectors" },
  { id: "turf", label: "Playground Turf" },
  { id: "realestate", label: "Real Estate" },
  { id: "industrial", label: "Industrial & Timber" },
  { id: "tech", label: "Consumer Tech" },
  { id: "public", label: "Public & Outreach" },
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Proven Case Studies"
        title={
          <>
            Real Results.<br />
            <span className="text-gradient">Measurable Growth.</span>
          </>
        }
        description="Every number here is earned, not estimated. A transparent look at the acquisition funnels, platforms, and automated systems behind our clients' growth."
        stats={[
          { value: "700%", label: "Peak ROAS" },
          { value: "100K+", label: "Leads Generated" },
          { value: "10X", label: "Max Lead Multiplier" },
          { value: "6+", label: "Sectors Scaled" },
        ]}
      />

      {/* Results at a glance */}
      <section className="section-pad-sm relative">
        <div className="container">
          <div className="surface grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/40 rounded-2xl overflow-hidden shadow-lg">
            {glanceMetrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.06}>
                <div className="p-6 md:p-8 text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{m.value}</p>
                  <p className="label-mono text-muted-foreground mt-2 text-xs sm:text-sm">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter size={15} className="text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Filter by Sector ({filteredStudies.length} Cases)
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-secondary/40 rounded-xl border border-border/50">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bento Grid of Case Studies */}
      <section className="section-pad relative">
        <div className="container">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredStudies.map((cs) => {
                const Icon = cs.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={cs.id}
                    className="group"
                  >
                    <div
                      onClick={() => setActiveStudy(cs)}
                      className="surface surface-hover h-full overflow-hidden flex flex-col rounded-2xl cursor-pointer border border-border/60 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl relative"
                    >
                      {/* Card Visual Header */}
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-card via-card/90 to-secondary/40 border-b border-border/50 flex items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
                        <img
                          src={cs.image}
                          alt={cs.client}
                          loading="lazy"
                          className="max-h-24 max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 icon-tile">
                          <Icon size={16} />
                        </div>
                        <span className="absolute bottom-4 left-4 text-[11px] font-mono text-primary bg-background/80 backdrop-blur px-2.5 py-1 rounded-md border border-border/50">
                          {cs.categoryLabel}
                        </span>
                        <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/80 flex items-center gap-1 group-hover:text-primary transition-colors">
                          <span>Details</span>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                            {cs.tag}
                          </p>
                          <h3 className="font-display text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                            {cs.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                            {cs.strategy}
                          </p>
                        </div>

                        {/* KPI Highlights */}
                        <div className="pt-6 mt-6 border-t border-border/40">
                          <div className="flex flex-wrap gap-2.5">
                            {cs.kpis.map((kpi, j) => (
                              <div
                                key={j}
                                className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/60 text-xs font-mono"
                              >
                                <span className="text-primary font-bold">
                                  {kpi.prefix || ""}
                                  {kpi.value > 0 ? (
                                    <CountUp end={kpi.value} suffix={kpi.suffix} />
                                  ) : (
                                    kpi.suffix
                                  )}{" "}
                                </span>
                                <span className="text-muted-foreground text-[11px]">
                                  {kpi.label}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 flex items-center justify-between text-xs font-medium text-primary">
                            <span>View Strategy Breakdown</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Interactive Case Study Detail Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-primary/40 shadow-2xl p-6 sm:p-10 text-foreground"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.client}
                  className="w-16 h-16 object-contain p-2 rounded-xl bg-secondary/50 border border-border"
                />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">
                    {activeStudy.categoryLabel} • {activeStudy.tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1">
                    {activeStudy.title}
                  </h3>
                </div>
              </div>

              {/* Verified KPI Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/60 mb-8">
                {activeStudy.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 text-center sm:text-left">
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-primary">
                      {kpi.prefix || ""}
                      {kpi.value > 0 ? <CountUp end={kpi.value} suffix={kpi.suffix} /> : kpi.suffix}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">{kpi.label}</p>
                  </div>
                ))}
              </div>

              {/* Deep Dive Breakdown */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    01. The Core Growth Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed bg-secondary/20 p-4 rounded-xl border border-border/40">
                    {activeStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    02. Acquisition &amp; Conversion Strategy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed bg-secondary/20 p-4 rounded-xl border border-border/40">
                    {activeStudy.strategy}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    03. Execution Architecture
                  </h4>
                  <p className="text-muted-foreground leading-relaxed bg-secondary/20 p-4 rounded-xl border border-border/40">
                    {activeStudy.execution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
                    04. Key Deliverables Deployed
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeStudy.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground/90 p-2.5 rounded-lg bg-secondary/30 border border-border/30">
                        <CheckCircle2 size={15} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion Action Footer */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://calendly.com/digitaleditz01/free-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1"
                >
                  <Button className="w-full rounded-full glow-accent gap-2 py-5 font-semibold">
                    <Calendar size={16} />
                    <span>Book Discovery Call For {activeStudy.categoryLabel}</span>
                  </Button>
                </a>
                <a
                  href={`https://wa.me/918920524078?text=${encodeURIComponent(
                    `Hi DigitalEditz, I reviewed your ${activeStudy.client} case study and want similar lead generation results for my brand.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full rounded-full gap-2 py-5 text-emerald-400 border-border hover:bg-emerald-500/10">
                    <MessageCircle size={16} />
                    <span>WhatsApp Inquiry</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Why Us */}
      <section className="section-pad relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <SectionHeading eyebrow="Why Us" title="Why brands choose DigitalEditz" />
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
                <div className="flex items-start gap-5 p-7 surface surface-hover">
                  <div className="icon-tile">
                    <item.icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground leading-relaxed">{item.text}</p>
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
}
