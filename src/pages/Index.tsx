import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Target, Zap, BarChart3, Eye, Shield, Cpu, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
import ClientMarquee from "@/components/ClientMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import servicesAds from "@/assets/services-ads.jpg";
import servicesContent from "@/assets/services-content.jpg";
import servicesSystems from "@/assets/services-systems.jpg";

const services = [
  {
    title: "Performance Marketing",
    icon: Target,
    image: servicesAds,
    items: ["Paid Media (Meta, Google, LinkedIn)", "AI Performance Ads Optimization", "AI UGC Ad Creation", "ROAS & CPL Tracking"],
    desc: "AI-driven ad ecosystems that optimize themselves for lower costs and higher leads.",
    label: "01",
  },
  {
    title: "Social Media Marketing",
    icon: Zap,
    image: servicesContent,
    items: ["AI Content Engine (Reels, Carousels, Hooks)", "Competitor Intelligence Reports", "Creative Direction & Positioning", "Community Building"],
    desc: "We don't post content. We engineer relevance.",
    label: "02",
  },
  {
    title: "Web/App Development",
    icon: Cpu,
    image: servicesSystems,
    items: ["High-converting Websites", "Landing Pages & Funnels", "Custom CRM & Automation", "AI Chatbot Integration"],
    desc: "Ads bring traffic. Systems convert it.",
    label: "03",
  },
];

const faqs = [
  { q: "How do you use AI in campaigns?", a: "AI assists in creative testing, budget optimization, audience expansion, data analysis, and performance forecasting. Final strategic decisions are always human-led." },
  { q: "What industries do you work with?", a: "Real estate, retail, government institutions, political campaigns, service businesses, gyms, e-commerce, and growing brands." },
  { q: "What is your minimum engagement?", a: "We typically work with businesses ready to invest in consistent growth, not one-time experiments." },
  { q: "Do you offer custom software solutions?", a: "Yes. From websites to CRMs and automation dashboards, we build scalable digital systems." },
  { q: "What makes you different from other agencies?", a: "We build systems that scale, not campaigns that expire." },
  { q: "Do you work with startups?", a: "Yes, if they are ready to commit to a systematic growth approach and have a clear product-market direction." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="floating-orb w-[500px] h-[500px] top-1/4 -left-40 animate-float" />
        <div className="floating-orb w-[400px] h-[400px] bottom-1/4 -right-40 animate-float" style={{ animationDelay: '3s' }} />

        <div className="container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 justify-center mb-8">
              <span className="label-mono text-primary flex items-center gap-2">
                <Sparkles size={12} />
                AI-Powered Growth Partner
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-center">
              We Build Growth{" "}
              <br className="hidden md:block" />
              Engines —{" "}
              <span className="text-gradient">Not Just{" "}
              <br className="hidden md:block" />
              Campaigns.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center leading-relaxed">
              People-led strategy. AI-driven execution. We scale brands through intelligent systems, performance marketing, and data that actually moves revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-base font-semibold px-10 py-7 rounded-full glow-accent-strong group gap-2">
                Book a Free Discovery Call
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-10 py-7 rounded-full border-border/50 hover:border-primary/30" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground/60 max-w-lg mx-auto label-mono leading-relaxed">
              Backed by marketers who've executed campaigns for Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods & Aha OTT.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted-foreground/40" size={24} />
        </motion.div>
      </section>

      {/* Credibility Strip */}
      <section className="py-5 relative">
        <div className="divider-glow" />
        <div className="container text-center py-3">
          <p className="label-mono text-muted-foreground/50">
            Trusted by brands, institutions, and high-growth businesses across India
          </p>
        </div>
        <div className="divider-glow" />
      </section>

      {/* Clients Marquee */}
      <ClientMarquee />

      {/* Services */}
      <section className="py-28 relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="floating-orb w-[500px] h-[500px] -top-60 -left-60" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">What We Do</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">How We Scale Brands</h2>
            <p className="text-muted-foreground text-center mb-20 max-w-xl mx-auto">Three core pillars. One unified growth system.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.12}>
                <div className="group glass rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-700 h-full card-hover-lift border-shimmer">
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center">
                        <s.icon className="text-primary" size={20} />
                      </div>
                      <span className="label-mono text-muted-foreground/60">{s.label}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
                    <ul className="space-y-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="text-sm text-secondary-foreground/70 flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> {item}
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

      {/* Case Studies */}
      <section className="py-28 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Proven Results</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">Featured Case Studies</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden mb-8 border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <span className="label-mono text-primary mb-4 block">VIVO — 2024</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">Custom Promotional Campaign Platform</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">Built a custom campaign website enabling users to submit purchases and claim rewards effortlessly in J&K.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-5">
                      <div className="text-primary font-display text-4xl font-bold">+<CountUp end={73} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Sales Growth</p>
                    </div>
                    <div className="glass rounded-xl p-5">
                      <div className="text-primary font-display text-4xl font-bold">High</div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Engagement</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <img src={servicesAds} alt="VIVO Campaign" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/40" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden md:order-1">
                  <img src={servicesContent} alt="Pushti Campaign" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center md:order-2">
                  <span className="label-mono text-primary mb-4 block">Pushti Turf & Farms — 2025</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">Meta Ads + WhatsApp Funnel</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">High-performance Meta Ads integrated with WhatsApp funnel automation for massive launch turnout.</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold"><CountUp end={1} suffix="M+" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Reach</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold"><CountUp end={1000} suffix="+" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Leads</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold">~<CountUp end={700} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">ROAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-full border-border/50 hover:border-primary/30 gap-2 group" asChild>
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-28 relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">Our Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">Our 3-Step Growth Framework</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We analyze your market, competitors, audience psychology, and growth bottlenecks. Then we design a system tailored to your business." },
              { step: "02", title: "Implementation", desc: "Campaigns go live. Assets are deployed. Funnels are optimized. Every component works together." },
              { step: "03", title: "Optimization & Scale", desc: "AI insights + human judgment = continuous improvement. We scale what performs and eliminate inefficiencies." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.15}>
                <div className="text-center glass rounded-2xl p-10 card-hover-lift border-shimmer h-full">
                  <div className="text-primary/30 font-display text-7xl font-bold mb-6">{s.step}</div>
                  <h3 className="font-display text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-muted-foreground/50 mt-16 text-sm italic font-display">Growth is engineered — not hoped for.</p>
          </ScrollReveal>
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

      {/* FAQ */}
      <section className="py-28 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container max-w-3xl relative z-10">
          <ScrollReveal>
            <p className="label-mono text-primary text-center mb-4">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">Frequently Asked Questions</h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-2xl px-7 border-shimmer border-none">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
