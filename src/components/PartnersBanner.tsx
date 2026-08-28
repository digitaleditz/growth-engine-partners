import ScrollReveal from "@/components/ScrollReveal";

const platforms = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "YouTube",
  "WhatsApp Business",
  "Google Analytics 4",
  "Shopify",
  "HubSpot",
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
                  key={p}
                  className="rounded-full border border-border/40 bg-secondary/30 px-5 py-2.5 text-sm font-medium text-secondary-foreground/80 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {p}
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
