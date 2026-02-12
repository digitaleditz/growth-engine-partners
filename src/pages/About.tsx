import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero with image */}
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container max-w-3xl relative z-10">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            We Don't Run Ads.{" "}
            <span className="text-gradient">We Build Systems.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-muted-foreground">
            <p>DigitalEditz was founded with a simple belief: <strong className="text-foreground">Growth should be engineered.</strong></p>
            <p>We combine strategic thinking with AI-driven execution to create scalable marketing infrastructures. From paid acquisition to automation systems, every solution is built with measurable performance in mind.</p>
            <p>Our marketers have hands-on experience executing campaigns for <span className="text-primary font-medium">Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods, and Aha OTT</span> — bringing enterprise-level thinking to every project.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 glass-strong rounded-2xl p-8 relative overflow-hidden">
            <div className="floating-orb w-[200px] h-[200px] -bottom-20 -right-20" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold mb-6">We work best with businesses that:</h2>
              <ul className="space-y-4">
                {[
                  "Value performance over vanity",
                  "Want systems over shortcuts",
                  "Are ready to scale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground">
                    <Check size={18} className="text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">If that sounds like you, we'll get along well.</p>
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
