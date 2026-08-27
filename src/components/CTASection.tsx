import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section className="section-pad relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 mesh-bg" />
    <div className="floating-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute inset-0 dot-grid opacity-25" />
    
    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <span className="eyebrow mb-6">Ready to Scale?</span>
        <h2 className="display-xl mt-6 mb-6 max-w-3xl mx-auto">
          Let's Build Your{" "}
          <span className="text-gradient">Growth Engine.</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto text-lg">
          If you're serious about scaling, we should talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/digitaleditz01/free-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
          <Button size="lg" className="text-base font-semibold px-10 py-7 rounded-full glow-accent-strong group gap-2">
            Book a Free Discovery Call
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
          </a>
          <Button size="lg" variant="outline" className="text-base font-semibold px-10 py-7 rounded-full border-border/50 hover:border-primary/30" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
