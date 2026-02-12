import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border relative overflow-hidden section-texture-alt">
    <div className="absolute inset-0 grid-pattern opacity-10" />
    <div className="container py-16 relative z-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold mb-3">
            Digital<span className="text-primary">Editz</span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mb-4">
            Beyond Marketing, Your Growth Partner. People-led thinking. AI-driven execution.
          </p>
          <p className="text-xs text-muted-foreground">
            Backed by marketers with experience across Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods & Aha OTT.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
          <div className="space-y-2">
            {["Home", "Case Studies", "Packages", "About", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase().replace(" ", "-")}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin size={14} /> Gurugram, India
            </a>
            <a href="mailto:info@digitaleditz.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> info@digitaleditz.com
            </a>
            <a href="tel:+919149958270" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91 9149958270
            </a>
            <a href="tel:+918588894379" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91 8588894379
            </a>
            <a href="https://wa.me/919149958270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
        © 2026 DigitalEditz. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
