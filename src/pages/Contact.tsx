import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, Send } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-28 relative overflow-hidden">
      <div className="absolute inset-0 section-texture" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="floating-orb w-[500px] h-[500px] top-20 -right-40" />
      <div className="floating-orb w-[300px] h-[300px] bottom-20 -left-20" />
      <div className="container relative z-10">
        <ScrollReveal>
          <p className="label-mono text-primary text-center mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-center mb-6 leading-[1.1]">
            Let's Talk <span className="text-gradient">Growth.</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-20 text-lg">
            Tell us about your business, your goals, and your current challenges. We'll recommend a strategy tailored to your scale.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <form className="glass-strong rounded-3xl p-8 md:p-10 space-y-5 border-shimmer" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
                <Input placeholder="Business Name" className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
              <Input placeholder="Phone Number" type="tel" className="bg-background/50 border-border/50 rounded-xl h-12 focus:border-primary/50" />
              <Textarea placeholder="Tell us about your goals and challenges..." className="bg-background/50 border-border/50 rounded-xl min-h-[140px] focus:border-primary/50" />
              <Button className="w-full font-semibold rounded-full glow-accent py-6 gap-2 group" size="lg">
                Schedule Discovery Call
                <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <p className="label-mono text-primary mb-6">Contact Information</p>
                <div className="space-y-5 text-sm">
                  {[
                    { icon: MapPin, label: "Gurugram, India", href: "#" },
                    { icon: Mail, label: "info@digitaleditz.com", href: "mailto:info@digitaleditz.com" },
                    { icon: Phone, label: "+91 9149958270", href: "tel:+919149958270" },
                    { icon: Phone, label: "+91 8588894379", href: "tel:+918588894379" },
                    { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/919149958270" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 text-secondary-foreground hover:text-primary transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8 relative overflow-hidden border-shimmer">
                <div className="floating-orb w-[200px] h-[200px] -bottom-16 -right-16" />
                <div className="relative z-10">
                  <p className="label-mono text-primary mb-3">Quick Chat</p>
                  <h4 className="font-display text-xl font-bold mb-3">Prefer a quick chat?</h4>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">Message us directly on WhatsApp for a faster response.</p>
                  <Button variant="outline" className="rounded-full gap-2 border-border/50 hover:border-primary/30 group" asChild>
                    <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} />
                      Open WhatsApp
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    {/* <CTASection /> */}
    <Footer />
  </div>
);

export default Contact;
