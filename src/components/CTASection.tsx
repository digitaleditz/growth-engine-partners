import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 section-texture" />
    <div className="floating-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute inset-0 grid-pattern opacity-30" />
    
    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <p className="label-mono text-primary mb-6">Ready to Scale?</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-3xl mx-auto leading-[1.1]">
          Let's Build Your{" "}
          <span className="text-gradient">Growth Engine.</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto text-lg">
          If you're serious about scaling, we should talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base font-semibold px-10 py-7 rounded-full glow-accent-strong group gap-2">
            Book a Free Discovery Call
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold px-10 py-7 rounded-full border-border/50 hover:border-primary/30" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
