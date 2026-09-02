import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";
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
} from "lucide-react";

const caseStudies = [
  {
    tag: "VIVO / 2024",
    title: "Custom Promotional Campaign Platform",
    problem: "Reward campaign required seamless digital submission process.",
    strategy: "Developed a custom promotional website optimized for speed, mobile experience, and easy user submission.",
    execution: "Integrated campaign logic, structured product showcase, and streamlined verification flow.",
    image: vivocase,
    icon: Megaphone,
    kpis: [
      { label: "Sales Growth", value: 73, suffix: "%", prefix: "+" },
      { label: "Engagement", value: 0, suffix: "", prefix: "High" },
    ],
  },
  {
    tag: "Pushti Turf & Farms / 2025",
    title: "Meta Ads + WhatsApp Funnel Launch",
    problem: "Needed massive awareness and turnout in limited time.",
    strategy: "Localized Meta Ads + WhatsApp integration.",
    execution: "Creative testing + lead funnel optimization.",
    image: pushticase,
    icon: TrendingUp,
    featured: true,
    kpis: [
      { label: "Reach", value: 1, suffix: "M+" },
      { label: "Leads", value: 1000, suffix: "+" },
      { label: "ROAS", value: 700, suffix: "%", prefix: "~" },
    ],
  },
  {
    tag: "Kashmir Ply Co / 2025",
    title: "Lead Generation & Brand Awareness",
    problem: "Needed consistent verified leads and stronger brand recall.",
    strategy: "Performance marketing campaigns focused on local targeting and verified lead generation.",
    execution: "Structured ad campaigns with lead qualification system.",
    image: kpccase,
    icon: Target,
    kpis: [{ label: "Lead Growth", value: 10, suffix: "X" }],
  },
  {
    tag: "District Jammu Govt / 2025",
    title: "Government Digital Campaigns",
    problem: "Public engagement with government initiatives was low.",
    strategy: "Creative campaigns for Jal Shakti, JAKEDA & Tourism departments.",
    execution: "Social media campaigns with targeted content and community engagement.",
    image: jkdistrictcase,
    icon: Users,
    kpis: [{ label: "Engagement Increase", value: 84, suffix: "%", prefix: "+" }],
  },
  {
    tag: "Usman Majid / 2024",
    title: "Full Digital Political Campaign",
    problem: "Limited digital presence in a competitive political landscape.",
    strategy: "Full digital campaign management with social media dominance strategy.",
    execution: "Content creation, audience targeting, community building across platforms.",
    image: usmanmajidcase,
    icon: Megaphone,
    kpis: [{ label: "Reach & Engagement", value: 230, suffix: "%", prefix: "+" }],
  },
  {
    tag: "Kapahi Properties / 2023",
    title: "Real Estate Lead Generation",
    problem: "High cost per lead through traditional marketing channels.",
    strategy: "Landing page + listing WebApp + Meta Ads integration.",
    execution: "Built conversion-optimized landing pages with integrated lead capture and ad campaigns.",
    image: jkkpcase,
    icon: TrendingUp,
    kpis: [{ label: "Lead Growth", value: 3, suffix: "X" }],
  },
];

const featured = caseStudies.find((c) => c.featured)!;
const rest = caseStudies.filter((c) => !c.featured);

const glanceMetrics = [
  { value: "700%", label: "Peak ROAS" },
  { value: "100000+", label: "Leads Generated" },
  { value: "3X", label: "Lead Growth" },
  { value: "230%", label: "Reach & Engagement" },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <PageHero
      eyebrow="Case Studies"
      title={
        <>
          Real Results.<br />
          <span className="text-gradient">Measurable Growth.</span>
        </>
      }
      description="Every number here is earned, not estimated, a look at the campaigns, platforms and systems behind our clients' growth."
      image={caseStudiesHero}
      imageAlt="Case studies"
      stats={[
        { value: "700%", label: "Peak ROAS" },
        { value: "100000+", label: "Leads Generated" },
        { value: "3X", label: "Lead Growth" },
        { value: "6+", label: "Sectors Served" },
      ]}
    />

    {/* Results at a glance */}
    <section className="section-pad-sm relative">
      <div className="container">
        <div className="surface grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {glanceMetrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.06}>
              <div className="p-6 md:p-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{m.value}</p>
                <p className="label-mono text-muted-foreground mt-2">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured case study: magazine style */}
    <section className="section-pad-sm relative">
      <div className="container">
        <SectionHeading eyebrow="Featured Work" title="Our flagship result" align="left" />
        <ScrollReveal>
          <div className="surface overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative min-h-[320px] lg:min-h-full bg-gradient-to-br from-primary/10 via-card to-card">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-contain p-6 md:p-10"
                />
              </div>
              <div className="p-8 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-tile">
                    <featured.icon size={18} />
                  </div>
                  <span className="label-mono text-primary">{featured.tag}</span>
                </div>
                <h3 className="display-md">{featured.title}</h3>
                <div className="grid sm:grid-cols-3 gap-6 my-8">
                  {[
                    { label: "Problem", text: featured.problem },
                    { label: "Strategy", text: featured.strategy },
                    { label: "Execution", text: featured.execution },
                  ].map((item) => (
                    <div key={item.label}>
                      <h4 className="label-mono text-primary/70 mb-2">{item.label}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {featured.kpis.map((kpi, j) => (
                    <div key={j} className="surface px-6 py-4">
                      <div className="text-primary font-display text-3xl font-bold">
                        {kpi.prefix || ""}
                        {kpi.value > 0 ? <CountUp end={kpi.value} suffix={kpi.suffix} /> : kpi.suffix}
                      </div>
                      <p className="text-xs text-muted-foreground/60 mt-1 label-mono">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Bento grid of remaining cases */}
    <section className="section-pad-sm relative">
      <div className="container">
        <SectionHeading eyebrow="More Work" title="Client results across sectors" align="left" />
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((cs, i) => (
            <ScrollReveal key={cs.tag} delay={i * 0.08}>
              <div className="surface surface-hover h-full overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 via-card to-card border-b border-border/50">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 icon-tile">
                    <cs.icon size={18} />
                  </div>
                  <span className="absolute bottom-4 left-4 label-mono text-primary bg-background/70 backdrop-blur px-2 py-1 rounded">
                    {cs.tag}
                  </span>
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold leading-snug">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{cs.strategy}</p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {cs.kpis.map((kpi, j) => (
                      <div key={j} className="eyebrow !text-primary">
                        {kpi.prefix || ""}
                        {kpi.value > 0 ? <CountUp end={kpi.value} suffix={kpi.suffix} /> : kpi.suffix}{" "}
                        <span className="text-muted-foreground normal-case font-normal tracking-normal">
                          {kpi.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

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

export default CaseStudies;
