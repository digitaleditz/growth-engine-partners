import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Star, Target, Zap, BarChart3, Eye, Shield, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
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

const clients = [
  "VIVO", "MOS P&D Usman Majid", "SKAUST", "Kapahi Properties",
  "Vishwa Guru Bharat Trust", "Muscle Matrix Gym", "Aditya Astro",
  "Kashmir Ply Co.", "Kashi Tours", "Zivara Mart", "Tukra Industries",
  "K.K Collections", "Khalis Oil", "Ceefle Ventures", "Noor",
  "Shivika Infra", "SS Consultants", "Ar. Naveen Vij",
];

const services = [
  {
    title: "Performance Marketing",
    icon: Target,
    image: servicesAds,
    items: ["Paid Media (Meta, Google, LinkedIn)", "AI Performance Ads Optimization", "AI UGC Ad Creation", "ROAS & CPL Tracking"],
    desc: "AI-driven ad ecosystems that optimize themselves for lower costs and higher leads.",
  },
  {
    title: "Social Media Marketing",
    icon: Zap,
    image: servicesContent,
    items: ["AI Content Engine (Reels, Carousels, Hooks)", "Competitor Intelligence Reports", "Creative Direction & Positioning", "Community Building"],
    desc: "We don't post content. We engineer relevance.",
  },
  {
    title: "Web/App Development",
    icon: Cpu,
    image: servicesSystems,
    items: ["High-converting Websites", "Landing Pages & Funnels", "Custom CRM & Automation", "AI Chatbot Integration"],
    desc: "Ads bring traffic. Systems convert it.",
  },
];

const testimonials = [
  { name: "Business Owner", company: "Pushti Turf", text: "DigitalEditz transformed our launch campaign into a record-breaking event. The ROI exceeded expectations.", rating: 5 },
  { name: "Real Estate Client", company: "Kapahi Properties", text: "Their WhatsApp funnel strategy changed how we generate leads.", rating: 5 },
  { name: "Brand Director", company: "Kashmir Ply Co", text: "Professional, data-driven, and creative. Highly recommended.", rating: 5 },
  { name: "Campaign Manager", company: "Government Project", text: "Exceptional digital strategy and execution. Engagement numbers were unprecedented.", rating: 5 },
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
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
              We Build Growth Engines —{" "}
              <span className="text-gradient">Not Just Campaigns.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              People-led strategy. AI-driven execution. We scale brands through intelligent systems, performance marketing, and data that actually moves revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-base font-semibold px-8 py-6 glow-accent">
                Book a Free Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 py-6" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Backed by marketers who've executed campaigns for Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods & Aha OTT.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-muted-foreground" size={28} />
        </motion.div>
      </section>

      {/* Credibility Strip */}
      <section className="py-6 border-y border-border/50 glass-light">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by brands, institutions, and high-growth businesses across India.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Brands & Institutions We've Worked With
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients.map((c, i) => (
              <ScrollReveal key={c} delay={i * 0.03}>
                <div className="glass rounded-lg p-4 text-center text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:glow-accent transition-all duration-300 cursor-default card-hover-lift">
                  {c}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="floating-orb w-[400px] h-[400px] -top-40 -left-40" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">How We Scale Brands</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">We operate across three core pillars of growth.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="group glass rounded-xl overflow-hidden hover:border-primary/40 hover:glow-accent transition-all duration-500 h-full card-hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <s.icon className="absolute bottom-4 left-6 text-primary" size={28} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="text-sm text-secondary-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span> {item}
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
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Featured Case Studies</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">VIVO — 2024</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">Custom Promotional Campaign Platform</h3>
                  <p className="text-muted-foreground mb-6">Built a custom campaign website enabling users to submit purchases and claim rewards effortlessly in J&K.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-lg p-4">
                      <div className="text-primary font-display text-3xl font-bold">+<CountUp end={73} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground mt-1">Sales Growth</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="text-primary font-display text-3xl font-bold">High</div>
                      <p className="text-xs text-muted-foreground mt-1">Campaign Engagement</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl aspect-video overflow-hidden border border-border">
                  <img src={servicesAds} alt="VIVO Campaign" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pushti Turf & Farms — 2025</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">Meta Ads + WhatsApp Funnel</h3>
                  <p className="text-muted-foreground mb-6">High-performance Meta Ads integrated with WhatsApp funnel automation for massive launch turnout.</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass rounded-lg p-4">
                      <div className="text-primary font-display text-2xl font-bold"><CountUp end={1} suffix="M+" /></div>
                      <p className="text-xs text-muted-foreground mt-1">Reach</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="text-primary font-display text-2xl font-bold"><CountUp end={1000} suffix="+" /></div>
                      <p className="text-xs text-muted-foreground mt-1">Leads</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="text-primary font-display text-2xl font-bold">~<CountUp end={700} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground mt-1">ROAS</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl aspect-video overflow-hidden border border-border md:order-1">
                  <img src={servicesContent} alt="Pushti Campaign" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies" className="gap-2">View All Case Studies <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Our 3-Step Growth Framework</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We analyze your market, competitors, audience psychology, and growth bottlenecks. Then we design a system tailored to your business." },
              { step: "02", title: "Implementation", desc: "Campaigns go live. Assets are deployed. Funnels are optimized. Every component works together." },
              { step: "03", title: "Optimization & Scale", desc: "AI insights + human judgment = continuous improvement. We scale what performs and eliminate inefficiencies." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.15}>
                <div className="text-center glass rounded-2xl p-8 card-hover-lift">
                  <div className="text-primary font-display text-5xl font-bold mb-4">{s.step}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-muted-foreground mt-12 text-sm italic">Growth is engineered — not hoped for.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="floating-orb w-[300px] h-[300px] bottom-0 right-0" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Why Brands Choose DigitalEditz</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, text: "People-led thinking, not automated guesswork" },
              { icon: Zap, text: "AI-assisted speed & precision" },
              { icon: BarChart3, text: "Transparent performance reporting" },
              { icon: Shield, text: "Institutional & enterprise experience" },
              { icon: Cpu, text: "Systems-first approach to growth" },
              { icon: Target, text: "Data that connects directly to revenue" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 rounded-xl glass hover:border-primary/30 transition-colors card-hover-lift">
                  <item.icon className="text-primary shrink-0 mt-0.5" size={22} />
                  <p className="text-sm font-medium text-secondary-foreground">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full flex flex-col card-hover-lift">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-secondary-foreground mb-4 flex-1">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden section-texture">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container max-w-3xl relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl px-6">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
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
