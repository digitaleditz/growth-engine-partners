import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden section-texture">
    <div className="absolute inset-0 grid-pattern opacity-50" />
    <div className="floating-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Let's Build Your <span className="text-gradient">Growth Engine.</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          If you're serious about scaling, we should talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base font-semibold px-10 py-6 glow-accent-strong">
            Book a Free Discovery Call
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold px-10 py-6" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
