import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";
import servicesAds from "@/assets/services-ads.jpg";
import servicesContent from "@/assets/services-content.jpg";
import servicesSystems from "@/assets/services-systems.jpg";
import servicesUgc from "@/assets/services-ugc.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ChevronDown, Target, Zap, BarChart3, Eye, Shield, Cpu, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";



const caseStudies = [
  {
    tag: "VIVO — 2024",
    title: "Custom Promotional Campaign Platform",
    problem: "Reward campaign required seamless digital submission process.",
    strategy: "Developed a custom promotional website optimized for speed, mobile experience, and easy user submission.",
    execution: "Integrated campaign logic, structured product showcase, and streamlined verification flow.",
    image: servicesAds,
    kpis: [
      { label: "Sales Growth", value: 73, suffix: "%", prefix: "+" },
      { label: "Engagement", value: 0, suffix: "", prefix: "High" },
    ],
  },
  {
    tag: "Pushti Turf & Farms — 2025",
    title: "Meta Ads + WhatsApp Funnel Launch",
    problem: "Needed massive awareness and turnout in limited time.",
    strategy: "Localized Meta Ads + WhatsApp integration.",
    execution: "Creative testing + lead funnel optimization.",
    image: servicesContent,
    kpis: [
      { label: "Reach", value: 1, suffix: "M+" },
      { label: "Leads", value: 1000, suffix: "+" },
      { label: "ROAS", value: 700, suffix: "%", prefix: "~" },
    ],
  },
  {
    tag: "Kashmir Ply Co — 2025",
    title: "Lead Generation & Brand Awareness",
    problem: "Needed consistent verified leads and stronger brand recall.",
    strategy: "Performance marketing campaigns focused on local targeting and verified lead generation.",
    execution: "Structured ad campaigns with lead qualification system.",
    image: servicesSystems,
    kpis: [
      { label: "Lead Growth", value: 10, suffix: "X" },
    ],
  },
  {
    tag: "District Jammu Govt — 2025",
    title: "Government Digital Campaigns",
    problem: "Public engagement with government initiatives was low.",
    strategy: "Creative campaigns for Jal Shakti, JAKEDA & Tourism departments.",
    execution: "Social media campaigns with targeted content and community engagement.",
    image: servicesUgc,
    kpis: [
      { label: "Engagement Increase", value: 84, suffix: "%", prefix: "+" },
    ],
  },
  {
    tag: "Usman Majid — 2024",
    title: "Full Digital Political Campaign",
    problem: "Limited digital presence in a competitive political landscape.",
    strategy: "Full digital campaign management with social media dominance strategy.",
    execution: "Content creation, audience targeting, community building across platforms.",
    image: servicesContent,
    kpis: [
      { label: "Reach & Engagement", value: 230, suffix: "%", prefix: "+" },
    ],
  },
  {
    tag: "Kapahi Properties — 2023",
    title: "Real Estate Lead Generation",
    problem: "High cost per lead through traditional marketing channels.",
    strategy: "Landing page + listing WebApp + Meta Ads integration.",
    execution: "Built conversion-optimized landing pages with integrated lead capture and ad campaigns.",
    image: servicesAds,
    kpis: [
      { label: "Lead Growth", value: 3, suffix: "X" },
    ],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    
    {/* Hero */}
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={caseStudiesHero} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="floating-orb w-[500px] h-[500px] top-20 -left-40" />
      <div className="container relative z-10">
        <ScrollReveal>
          <p className="label-mono text-primary text-center mb-4">Case Studies</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-center mb-6 leading-[1.1]">
            Real Results.{" "}
            <span className="text-gradient">Measurable Growth.</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto text-lg">
            Every number here is earned, not estimated.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Case Studies */}
    <section className="pb-28">
      <div className="container space-y-8">
        {caseStudies.map((cs, i) => (
          <ScrollReveal key={i}>
            <div className="glass rounded-3xl overflow-hidden border-shimmer">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image side */}
                <div className={`md:col-span-2 relative h-64 md:h-auto ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-card/60 hidden md:block`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
                </div>

                {/* Content side */}
                <div className={`md:col-span-3 p-8 md:p-12 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="label-mono text-primary">{cs.tag}</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-7">{cs.title}</h2>
                  <div className="grid sm:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Problem", text: cs.problem },
                      { label: "Strategy", text: cs.strategy },
                      { label: "Execution", text: cs.execution },
                    ].map((item) => (
                      <div key={item.label}>
                        <h4 className="label-mono text-primary/70 mb-2">{item.label}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {cs.kpis.map((kpi, j) => (
                      <div key={j} className="glass rounded-xl px-6 py-4 border-shimmer">
                        <div className="text-primary font-display text-3xl font-bold">
                          {kpi.prefix || ""}{kpi.value > 0 ? <CountUp end={kpi.value} suffix={kpi.suffix} /> : kpi.suffix}
                        </div>
                        <p className="text-xs text-muted-foreground/60 mt-1 label-mono">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
    {/* Why Us */}
      <section className="py-28 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Why Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">Why Brands Choose DigitalEditz</h2>
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
                  <p className="text-sm font-medium text-secondary-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

         {/* Testimonials */}
      <TestimonialsSection />

    <CTASection />
    <Footer />
  </div>
);

export default CaseStudies;
