import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, Zap, Video, PenTool, BarChart3, Search, Code2, ArrowUpRight } from "lucide-react";
import servicesAds from "@/assets/services-ads.jpg";
import servicesUgc from "@/assets/services-ugc.jpg";
import servicesContent from "@/assets/services-content.jpg";
import servicesSystems from "@/assets/services-systems.jpg";

const categories = [
  {
    category: "Acquire Customers",
    subtitle: "Ads & Performance",
    services: [
      {
        icon: Zap,
        name: "AI Performance Ads Optimization",
        tagline: "Meta + Google",
        pitch: "We use AI to continuously optimize your ads for lower cost & higher leads.",
        image: servicesAds,
        aiDoes: [
          "Ad copy variations (headlines, CTAs)",
          "Creative angle testing (offers, hooks)",
          "Budget redistribution (winning ad sets)",
          "Audience expansion ideas",
        ],
        deliverables: [
          "10–20 AI-generated ad copies",
          "Weekly AI-based optimization report",
          "ROAS / CPL improvement tracking",
        ],
        pricing: "₹15k – ₹50k+/month",
      },
      {
        icon: Video,
        name: "AI UGC Ads Creation",
        tagline: "High ROI Service",
        pitch: "UGC-style ads without hiring creators.",
        image: servicesUgc,
        aiDoes: [
          "AI scripts (hooks + CTAs)",
          "AI avatars or AI voiceovers",
          "AI video editing & captions",
          "Multiple variations for A/B testing",
        ],
        deliverables: [
          "10–30 UGC ad videos/month",
          "Reels + Ads versions",
          "Hook testing set (3–5 hooks/video)",
        ],
        pricing: "₹25k – ₹1L/month",
      },
    ],
  },
  {
    category: "Build Brand & Content Systems",
    subtitle: "Social Media + Strategy",
    services: [
      {
        icon: PenTool,
        name: "AI Content Engine SMM",
        tagline: "Social Media + Ads",
        pitch: "AI-powered content that converts, not generic posts.",
        image: servicesContent,
        aiDoes: [
          "Caption writing",
          "Reel ideas",
          "Carousel frameworks",
          "Trend adaptation",
        ],
        deliverables: [
          "30 post captions",
          "10 reel scripts",
          "5 ad creatives",
          "Posting calendar",
        ],
        pricing: "₹12k – ₹50k/month",
      },
      {
        icon: Search,
        name: "AI Competitor Intelligence Reports",
        tagline: "Strategic Intel",
        pitch: "We analyze your competitors using AI.",
        image: null,
        aiDoes: [
          "Ad copy breakdown",
          "Offer analysis",
          "Content strategy decoding",
        ],
        deliverables: [
          "PDF report",
          "Winning angles",
          "Content ideas",
          "Ad suggestions",
        ],
        pricing: "₹10k – ₹40k/report",
      },
    ],
  },
  {
    category: "Build Digital Assets & Systems",
    subtitle: "Development + Automation",
    services: [
      {
        icon: Code2,
        name: "AI-Powered Digital Systems Development",
        tagline: "Full-Stack Solutions",
        pitch: "Smart digital systems — from websites to full platforms.",
        image: servicesSystems,
        aiDoes: [
          "Business website with AI chatbot",
          "Custom CRM system",
          "Automation dashboard",
          "E-commerce with AI features",
          "Lead management software",
        ],
        deliverables: [
          "Frontend & Backend",
          "AI integration",
          "Automation workflows",
          "Admin dashboard",
          "Payment & API integrations",
        ],
        pricing: "₹25k – ₹2.5L+",
      },
      {
        icon: BarChart3,
        name: "AI Website CRO",
        tagline: "Conversion Optimization",
        pitch: "We use AI to improve your website's conversion rate.",
        image: null,
        aiDoes: [
          "Heatmap analysis insights",
          "Copy improvement",
          "CTA optimization",
          "Funnel drop-off analysis",
        ],
        deliverables: [
          "CRO audit",
          "Revised copy",
          "Conversion-focused layouts",
          "Before/after metrics",
        ],
        pricing: "₹30k – ₹80k/project",
      },
    ],
  },
];

const Packages = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 section-texture" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="floating-orb w-[500px] h-[500px] top-20 right-0" />
      <div className="container relative z-10">
        <ScrollReveal>
          <p className="label-mono text-primary text-center mb-4">Our Services</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-center mb-6 leading-[1.1]">
            Growth Packages{" "}
            <span className="text-gradient">Built for Scale</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg">
            Every service is powered by AI to deliver better results at lower costs.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Service Categories */}
    {categories.map((cat, ci) => (
      <section key={ci} className={`py-20 relative overflow-hidden ${ci % 2 === 0 ? 'section-texture' : 'section-texture-alt'}`}>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mb-14">
              <span className="label-mono text-primary">
                {String(ci + 1).padStart(2, '0')} — {cat.subtitle}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">{cat.category}</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {cat.services.map((svc, si) => (
              <ScrollReveal key={si} delay={si * 0.1}>
                <div className="glass rounded-3xl overflow-hidden card-hover-lift border-shimmer">
                  <div className={`grid ${svc.image ? 'lg:grid-cols-5' : 'lg:grid-cols-1'} gap-0`}>
                    {/* Image */}
                    {svc.image && (
                      <div className="lg:col-span-2 relative h-64 lg:h-auto">
                        <img src={svc.image} alt={svc.name} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
                      </div>
                    )}

                    {/* Content */}
                    <div className={`${svc.image ? 'lg:col-span-3' : ''} p-8 md:p-12`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <svc.icon className="text-primary" size={22} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold">{svc.name}</h3>
                          <span className="label-mono text-primary/60">{svc.tagline}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-8 text-sm italic leading-relaxed">"{svc.pitch}"</p>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="label-mono text-primary/70 mb-4">What AI Does</h4>
                          <ul className="space-y-3">
                            {svc.aiDoes.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="label-mono text-primary/70 mb-4">Deliverables</h4>
                          <ul className="space-y-3">
                            {svc.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-border/30">
                        <div>
                          <span className="label-mono text-muted-foreground/50">Starting at</span>
                          <p className="font-display text-2xl font-bold text-primary mt-1">{svc.pricing}</p>
                        </div>
                        <Button className="font-semibold rounded-full glow-accent gap-2 group">
                          Get Started
                          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* Discovery CTA */}
    <ScrollReveal>
      <section className="py-20">
        <div className="container">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden border-shimmer">
            <div className="floating-orb w-[400px] h-[400px] -top-40 -right-40" />
            <div className="relative z-10">
              <p className="label-mono text-primary mb-4">Custom Solutions</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Not sure what your brand needs?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Book a free discovery call and we'll design a tailored growth roadmap for your business.
              </p>
              <Button size="lg" className="font-semibold px-10 py-7 rounded-full glow-accent-strong gap-2 group">
                Book a Free Discovery Call
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* <CTASection /> */}
    <Footer />
  </div>
);

export default Packages;
