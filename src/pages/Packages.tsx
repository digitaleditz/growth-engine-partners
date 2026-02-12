import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter Growth Engine",
    price: "₹25,000",
    period: "/month",
    ideal: "Ideal for local businesses beginning performance marketing.",
    features: [
      "AI Performance Ads Optimization",
      "10–20 AI-generated ad copies",
      "Basic funnel setup",
      "Monthly performance report",
    ],
    highlight: false,
  },
  {
    name: "Scale Accelerator",
    price: "₹60,000",
    period: "/month",
    ideal: "Built for growing brands ready to dominate.",
    features: [
      "Advanced Paid Media Management",
      "10 AI UGC Ad Videos",
      "AI Content Engine",
      "Weekly Optimization",
      "ROAS Tracking Dashboard",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Growth System",
    price: "Custom",
    period: " Pricing",
    ideal: "For institutions, funded brands & serious operators.",
    features: [
      "Full Paid Media Ecosystem",
      "30 AI UGC Videos",
      "CRO Optimization",
      "Competitor Intelligence Report",
      "Automation & CRM Integration",
      "Custom Reporting Dashboard",
    ],
    highlight: false,
  },
];

const Packages = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Growth Packages <span className="text-gradient">Built for Scale</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Choose a package or let us build a custom growth roadmap for your business.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative bg-card border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:glow-accent ${
                  pkg.highlight ? "border-primary glow-accent" : "border-border"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{pkg.ideal}</p>
                <div className="mb-6">
                  <span className="font-display text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-semibold ${pkg.highlight ? "glow-accent" : ""}`}>
                  Get Started
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-20 bg-secondary border border-border rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-3">Not sure what your brand needs?</h3>
            <p className="text-muted-foreground text-sm mb-6">Book a free discovery call and we'll design a tailored growth roadmap.</p>
            <Button size="lg" className="font-semibold px-8 glow-accent">Book a Free Discovery Call</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <Footer />
  </div>
);

export default Packages;
