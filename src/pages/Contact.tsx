import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container">
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
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" className="bg-secondary border-border" />
              <Input placeholder="Business Name" className="bg-secondary border-border" />
              <Input placeholder="Email Address" type="email" className="bg-secondary border-border" />
              <Input placeholder="Phone Number" type="tel" className="bg-secondary border-border" />
              <Textarea placeholder="Tell us about your goals and challenges..." className="bg-secondary border-border min-h-[120px]" />
              <Button className="w-full font-semibold glow-accent" size="lg">Schedule Discovery Call</Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MapPin size={18} className="text-primary shrink-0" /> Jammu & Kashmir, India
                  </a>
                  <a href="mailto:hello@digitaleditz.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary shrink-0" /> hello@digitaleditz.com
                  </a>
                  <a href="tel:+919000000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary shrink-0" /> +91 90000 00000
                  </a>
                  <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={18} className="text-primary shrink-0" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-xl p-6">
                <h4 className="font-display font-semibold mb-2">Prefer a quick chat?</h4>
                <p className="text-sm text-muted-foreground mb-4">Message us directly on WhatsApp for a faster response.</p>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} /> Open WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
