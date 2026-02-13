import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/30">
    {/* Top glow */}
    <div className="divider-glow absolute top-0 left-0 right-0" />
    
    <div className="container py-20 relative z-10">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-bold mb-4">
            Digital<span className="text-primary">Editz</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            Beyond Marketing, Your Growth Partner. People-led thinking. AI-driven execution.
          </p>
          <p className="label-mono text-muted-foreground/60">
            Backed by experience across Indigo, Urban Company, Royal Enfield & more
          </p>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3">
          <h4 className="label-mono text-muted-foreground mb-6">Navigate</h4>
          <div className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "Case Studies", path: "/case-studies" },
              { label: "Services", path: "/packages" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className="group flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-primary transition-colors"
              >
                {l.label}
                <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="label-mono text-muted-foreground mb-6">Get in Touch</h4>
          <div className="space-y-3 text-sm">
            <a href="#" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <MapPin size={14} className="text-primary/60 shrink-0" /> Gurugram, India
            </a>
            <a href="mailto:info@digitaleditz.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <Mail size={14} className="text-primary/60 shrink-0" /> info@digitaleditz.com
            </a>
            <a href="tel:+919149958270" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <Phone size={14} className="text-primary/60 shrink-0" /> +91 9149958270
            </a>
            <a href="tel:+918588894379" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <Phone size={14} className="text-primary/60 shrink-0" /> +91 8588894379
            </a>
            <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <MessageCircle size={14} className="text-primary/60 shrink-0" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="label-mono text-muted-foreground/50">© 2026 DigitalEditz. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/40">People-led strategy. AI-driven execution.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
