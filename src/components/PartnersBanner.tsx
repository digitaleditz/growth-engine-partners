import ScrollReveal from "@/components/ScrollReveal";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="#0A66C2" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
  </svg>
);

const platforms = [
  { name: "Google Ads", icon: "googleads", color: "4285F4" },
  { name: "Meta Ads", icon: "meta", color: "0866FF" },
  { name: "LinkedIn Ads", customIcon: <LinkedInIcon /> },
  { name: "YouTube", icon: "youtube", color: "FF0000" },
  { name: "WhatsApp Business", icon: "whatsapp", color: "25D366" },
  { name: "Google Analytics 4", icon: "googleanalytics", color: "E37400" },
  { name: "Shopify", icon: "shopify", color: "95BF47" },
  { name: "HubSpot", icon: "hubspot", color: "FF7A59" },
];

const PartnersBanner = () => (
  <section className="pb-20 relative">
    <div className="container">
      <ScrollReveal>
        <div className="surface p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.15]" />
          <div className="relative z-10 grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="label-mono text-primary mb-3">Platforms &amp; Partners</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug">
                We run growth on the platforms your customers already use
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2.5 rounded-full border border-border/40 bg-secondary/30 px-5 py-2.5 text-sm font-medium text-secondary-foreground/80 hover:text-foreground hover:border-primary/30 hover:bg-secondary/50 transition-colors"
                >
                  {p.customIcon ?? (
                    <img
                      src={`https://cdn.simpleicons.org/${p.icon}/${p.color}`}
                      alt={`${p.name} logo`}
                      width={18}
                      height={18}
                      loading="lazy"
                      className="h-[18px] w-[18px] object-contain"
                    />
                  )}
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PartnersBanner;
