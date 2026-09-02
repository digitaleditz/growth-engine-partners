import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/30">
    {/* Top glow */}
    <div className="divider-glow absolute top-0 left-0 right-0" />
    
    <div className="absolute inset-0 mesh-bg opacity-50" />
    <div className="container py-20 md:py-24 relative z-10">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-bold mb-4">
            Digital<span className="text-primary">Editz</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            We build the complete digital brand and growth system behind modern businesses. People-led thinking. AI-driven execution.
          </p>
          <p className="label-mono text-muted-foreground/60">
            Backed by experience across Indigo, Urban Company, Royal Enfield & more
          </p>
          <div className="hairline mt-8 max-w-sm" />
          <div className="mt-6 flex flex-wrap gap-3">
            {["Brand", "Web", "Content", "Ads", "Automation"].map((tag) => (
              <span
                key={tag}
                className="label-mono rounded-full border border-border/60 px-3 py-1.5 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>


        {/* explore tools */}
        <div className="md:col-span-2">
          <h4 className="label-mono text-muted-foreground mb-6">Products</h4>
          <div className="space-y-3">
            {[
              { label: "Linkedin Analyzer", path: "https://linkedinanalyzer.digitaleditz.com/",
               },{ label: "Instagram Insights", path: "https://iginsights.digitaleditz.com/",
               }
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

        {/* Navigate */}
        <div className="md:col-span-2">
          <h4 className="label-mono text-muted-foreground mb-6">Navigate</h4>
          <div className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "Case Studies", path: "/case-studies" },
              { label: "Services", path: "/packages" },
              { label: "Blog", path: "/blog" },
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
        <div className="md:col-span-2">
          <h4 className="label-mono text-muted-foreground mb-6">Get in Touch</h4>
          <div className="space-y-3 text-sm">
            <a href="#" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <MapPin size={14} className="text-primary/60 shrink-0" /> Gurugram, India
            </a>
            <a href="mailto:info@digitaleditz.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
              <Mail size={14} className="text-primary/60 shrink-0" /> info@digitaleditz.com
            </a>
            <a href="https://wa.me/917065206690" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
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

    {/* Oversized brand wordmark */}
    <div className="relative z-10 w-full px-4 pb-6 pt-2 overflow-hidden select-none">
      <h2
        aria-hidden="true"
        className="footer-wordmark font-display font-bold leading-none text-center tracking-[-0.04em] whitespace-nowrap"
      >
        DigitalEditz
      </h2>
    </div>
  </footer>
);

export default Footer;
