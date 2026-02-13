import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="floating-orb w-[400px] h-[400px] top-40 -right-40" />
      <div className="container max-w-4xl relative z-10">
        <ScrollReveal>
          <p className="label-mono text-primary mb-6">About Us</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            We Don't Run Ads.{" "}
            <span className="text-gradient">We Build Systems.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            <p>
              DigitalEditz was founded with a simple belief:{" "}
              <strong className="text-foreground font-semibold">Growth should be engineered.</strong>
            </p>
            <p>
              We combine strategic thinking with AI-driven execution to create scalable marketing infrastructures. From paid acquisition to automation systems, every solution is built with measurable performance in mind.
            </p>
            <p>
              Our marketers have hands-on experience executing campaigns for{" "}
              <span className="text-primary font-medium">Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods, and Aha OTT</span>{" "}
              — bringing enterprise-level thinking to every project.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-20 glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden border-shimmer">
            <div className="floating-orb w-[250px] h-[250px] -bottom-20 -right-20" />
            <div className="relative z-10">
              <p className="label-mono text-primary mb-6">Our Ideal Partners</p>
              <h2 className="font-display text-3xl font-bold mb-8">We work best with businesses that:</h2>
              <ul className="space-y-5">
                {[
                  "Value performance over vanity",
                  "Want systems over shortcuts",
                  "Are ready to scale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-secondary-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted-foreground italic font-display">If that sounds like you, we'll get along well.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default About;
