import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Target,
  Zap,
  BarChart3,
  Eye,
  Shield,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
import ClientMarquee from "@/components/ClientMarquee";
import PartnersBanner from "@/components/PartnersBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroVideo from "@/assets/hero-video.mp4";
import servicesAds from "@/assets/services-ads.jpg";
import servicesContent from "@/assets/services-content.jpg";

import vivocase from "@/assets/clients/vivo_1.png";
import pushticase from "@/assets/clients/pushti_1.png";
import servicesSystems from "@/assets/services-systems.jpg";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Performance Marketing",
    icon: Target,
    image: servicesAds,
    items: [
      "Paid Media (Meta, Google, LinkedIn)",
      "AI Performance Ads Optimization",
      "AI UGC Ad Creation",
      "ROAS & CPL Tracking",
    ],
    desc: "AI-driven ad ecosystems that optimize themselves for lower costs and higher leads.",
    label: "01",
  },
  {
    title: "Social Media Marketing",
    icon: Zap,
    image: servicesContent,
    items: [
      "AI Content Engine (Reels, Carousels, Hooks)",
      "Competitor Intelligence Reports",
      "Creative Direction & Positioning",
      "Community Building",
    ],
    desc: "We don't post content. We engineer relevance.",
    label: "02",
  },
  {
    title: "Web/App Development",
    icon: Cpu,
    image: servicesSystems,
    items: [
      "High-converting Websites",
      "Landing Pages & Funnels",
      "Custom CRM & Automation",
      "AI Chatbot Integration",
    ],
    desc: "Ads bring traffic. Systems convert it.",
    label: "03",
  },
];

const faqs = [
  {
    q: "How do you use AI in campaigns?",
    a: "AI assists in creative testing, budget optimization, audience expansion, data analysis, and performance forecasting. Final strategic decisions are always human-led.",
  },
  {
    q: "What industries do you work with?",
    a: "Real estate, retail, government institutions, political campaigns, service businesses, gyms, e-commerce, and growing brands.",
  },
  {
    q: "What is your minimum engagement?",
    a: "We typically work with businesses ready to invest in consistent growth, not one-time experiments.",
  },
  {
    q: "Do you offer custom software solutions?",
    a: "Yes. From websites to CRMs and automation dashboards, we build scalable digital systems.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "We build systems that scale, not campaigns that expire.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, if they are ready to commit to a systematic growth approach and have a clear product-market direction.",
  },
];

const Index = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {});
    };

    attemptPlay();

    const handleScroll = () => {
      attemptPlay();
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={heroVideo}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="hero-video w-full h-full object-cover brightness-[0.55] opacity-60"
          />
          <div className="hero-veil absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          <div className="hero-veil absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        </div>

        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="floating-orb w-[520px] h-[520px] top-1/4 -left-40 animate-float" />
        <div
          className="floating-orb w-[420px] h-[420px] bottom-0 -right-40 animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">
                <Sparkles size={12} />
                Brand &amp; Growth Systems Partner
              </span>

              <h1 className="display-xl mt-7">
                We Build Growth Engines{" "}
                <span className="text-gradient">Not Just Campaigns.</span>
              </h1>

              <p className="body-lg mt-7 max-w-xl">
                People-led strategy. AI-driven execution. We build the complete
                digital foundation, brand, website, content, acquisition and
                automation, as one connected growth system.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/digitaleditz01/free-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base font-semibold px-7 sm:px-9 py-6 sm:py-7 rounded-full glow-accent-strong group gap-2"
                  >
                    Book a Free Discovery Call
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base font-semibold px-7 sm:px-9 py-6 sm:py-7 rounded-full border-border/60 hover:border-primary/40"
                  asChild
                >
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>

              <p className="mt-10 text-muted-foreground/60 max-w-md label-mono leading-relaxed">
                Backed by marketers who've executed campaigns for Indigo, Urban
                Company, Royal Enfield, M3M and more
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: "700%", label: "Peak ROAS Delivered" },
                { value: "100000+", label: "Qualified Leads Generated" },
                { value: "1M+", label: "Campaign Reach" },
                { value: "3X", label: "Average Lead Growth" },
              ].map((s) => (
                <div key={s.label} className="surface surface-hover p-6">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="label-mono text-muted-foreground mt-2 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted-foreground/40" size={24} />
        </motion.div>
      </section>


      <ClientMarquee />
      <PartnersBanner />
      {/* Services */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="What We Do"
            title="How We Scale Brands"
            description="Three core pillars. One unified growth system."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="group surface surface-hover h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <span className="absolute top-5 right-6 label-mono text-muted-foreground/60">
                      {s.label}
                    </span>
                  </div>
                  <div className="p-7 -mt-9 relative">
                    <div className="icon-tile mb-5">
                      <s.icon size={20} />
                    </div>
                    <h3 className="display-md">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mt-3 mb-6 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="hairline mb-5" />
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-secondary-foreground/80 flex items-start gap-3"
                        >
                          <Check size={14} className="text-primary mt-0.5 shrink-0" />
                          {item}
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
      <section className="section-pad relative overflow-hidden section-texture">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Proven Results"
            title="Featured Case Studies"
            description="Real systems, real pipelines, real revenue outcomes."
          />

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden mb-8 border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                  <span className="label-mono text-primary mb-4 block">VIVO / 2024</span>
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
                <div className="relative h-72 md:h-auto overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <img
                    src={vivocase}
                    alt="VIVO Campaign"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden md:order-1 bg-gradient-to-br from-primary/10 via-card to-card">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <img
                    src={pushticase}
                    alt="Pushti Campaign"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center md:order-2">
                  <span className="label-mono text-primary mb-4 block">Pushti Turf & Farms / 2025</span>
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
      <section className="section-pad relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Our Process"
            title="Our 3-Step Growth Framework"
            description="A repeatable path from diagnosis to scale."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We analyze your market, competitors, audience psychology, and growth bottlenecks. Then we design a system tailored to your business." },
              { step: "02", title: "Implementation", desc: "Campaigns go live. Assets are deployed. Funnels are optimized. Every component works together." },
              { step: "03", title: "Optimization & Scale", desc: "AI insights + human judgment = continuous improvement. We scale what performs and eliminate inefficiencies." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.15}>
                <div className="surface surface-hover p-9 h-full">
                  <div className="flex items-center justify-between mb-7">
                    <span className="font-display text-5xl font-bold text-primary/25">{s.step}</span>
                    <div className="icon-tile">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                  <h3 className="display-md mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-muted-foreground/50 mt-16 text-sm italic font-display">Growth is engineered, not hoped for.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-pad relative overflow-hidden section-texture">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Brands Choose DigitalEditz"
            description="Strategy led by people. Execution accelerated by AI."
          />
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
                <div className="flex items-start gap-5 p-7 surface surface-hover h-full">
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
};

export default Index;
