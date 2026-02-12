import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24 relative overflow-hidden section-texture">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="floating-orb w-[400px] h-[400px] top-20 -right-40" />
      <div className="container relative z-10">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Talk <span className="text-gradient">Growth.</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Tell us about your business, your goals, and your current challenges. We'll analyze your position and recommend a strategy tailored to your scale.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal>
            <form className="space-y-5 glass-strong rounded-2xl p-8" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" className="bg-background/50 border-border" />
              <Input placeholder="Business Name" className="bg-background/50 border-border" />
              <Input placeholder="Email Address" type="email" className="bg-background/50 border-border" />
              <Input placeholder="Phone Number" type="tel" className="bg-background/50 border-border" />
              <Textarea placeholder="Tell us about your goals and challenges..." className="bg-background/50 border-border min-h-[120px]" />
              <Button className="w-full font-semibold glow-accent" size="lg">Schedule Discovery Call</Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MapPin size={18} className="text-primary shrink-0" /> Gurugram, India
                  </a>
                  <a href="mailto:info@digitaleditz.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary shrink-0" /> info@digitaleditz.com
                  </a>
                  <a href="tel:+919149958270" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary shrink-0" /> +91 9149958270
                  </a>
                  <a href="tel:+918588894379" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary shrink-0" /> +91 8588894379
                  </a>
                  <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={18} className="text-primary shrink-0" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="glass-strong rounded-xl p-6 relative overflow-hidden">
                <div className="floating-orb w-[150px] h-[150px] -bottom-10 -right-10" />
                <div className="relative z-10">
                  <h4 className="font-display font-semibold mb-2">Prefer a quick chat?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Message us directly on WhatsApp for a faster response.</p>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} /> Open WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default Contact;
