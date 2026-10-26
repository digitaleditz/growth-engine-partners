import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Zap,
  Building2,
  ShoppingBag,
  Dumbbell,
  Layers,
  Activity,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface IndustryBenchmark {
  id: string;
  name: string;
  icon: React.ElementType;
  avgCpaInr: number; // Cost Per Qualified Lead in INR
  avgRoas: number;
  dealValueInr: number;
  closeRate: number; // 0.05 = 5%
  recommendedLayers: string[];
}

const INDUSTRIES: IndustryBenchmark[] = [
  {
    id: "realestate",
    name: "Luxury Real Estate",
    icon: Building2,
    avgCpaInr: 650,
    avgRoas: 6.8,
    dealValueInr: 1500000,
    closeRate: 0.04,
    recommendedLayers: [
      "Custom Property WebApp",
      "Meta Geo-Fenced HNW Targeting",
      "WhatsApp Brochure & Visit Funnel",
    ],
  },
  {
    id: "turf",
    name: "Playground & Turf",
    icon: Dumbbell,
    avgCpaInr: 180,
    avgRoas: 7.2,
    dealValueInr: 25000,
    closeRate: 0.22,
    recommendedLayers: [
      "Local Reels & UGC Content",
      "1-Click WhatsApp Booking Funnel",
      "Weekend Tournament Lead Ads",
    ],
  },
  {
    id: "d2c",
    name: "D2C & Brands",
    icon: ShoppingBag,
    avgCpaInr: 320,
    avgRoas: 4.6,
    dealValueInr: 4500,
    closeRate: 0.18,
    recommendedLayers: [
      "High-Frequency UGC Video Engine",
      "Dynamic Product Ads & Retargeting",
      "Post-Purchase Review Automation",
    ],
  },
  {
    id: "industrial",
    name: "Industrial & Build",
    icon: Layers,
    avgCpaInr: 850,
    avgRoas: 5.4,
    dealValueInr: 450000,
    closeRate: 0.08,
    recommendedLayers: [
      "B2B Google Intent Pipeline",
      "Architect & Contractor Nurture",
      "Technical Spec Landing Pages",
    ],
  },
  {
    id: "health",
    name: "Healthcare Clinics",
    icon: Activity,
    avgCpaInr: 420,
    avgRoas: 5.1,
    dealValueInr: 85000,
    closeRate: 0.12,
    recommendedLayers: [
      "Local Maps & Search Intent Ads",
      "Doctor Profile & Patient Video",
      "Instant Appointment Confirmation",
    ],
  },
  {
    id: "services",
    name: "B2B & Services",
    icon: Briefcase,
    avgCpaInr: 720,
    avgRoas: 4.8,
    dealValueInr: 200000,
    closeRate: 0.09,
    recommendedLayers: [
      "Founder Social Positioning",
      "High-Converting Case Study Pages",
      "Direct Qualified Lead Booking",
    ],
  },
];

const SPEND_LEVELS = [
  { label: "₹50K", value: 50000, subtext: "Launch" },
  { label: "₹1.5L", value: 150000, subtext: "Growth" },
  { label: "₹3L", value: 300000, subtext: "Scale" },
  { label: "₹5L+", value: 500000, subtext: "Dominance" },
];

export default function GrowthCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryBenchmark>(INDUSTRIES[0]);
  const [monthlySpend, setMonthlySpend] = useState<number>(150000);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  // Calculations based on industry benchmarks
  const estimatedLeads = Math.round(monthlySpend / selectedIndustry.avgCpaInr);
  const minLeads = Math.round(estimatedLeads * 0.85);
  const maxLeads = Math.round(estimatedLeads * 1.25);

  const estimatedSales = Math.max(1, Math.round(estimatedLeads * selectedIndustry.closeRate));
  const estimatedPipeline = Math.round(monthlySpend * selectedIndustry.avgRoas);

  const formatCurrency = (val: number) => {
    if (currency === "USD") {
      const usdVal = Math.round(val / 86);
      return `$${usdVal.toLocaleString()}`;
    }
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`;
    }
    return `₹${val.toLocaleString()}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi DigitalEditz! I used your Growth Simulator for ${selectedIndustry.name} with a budget of ${formatCurrency(monthlySpend)}/month. I'd like to discuss building our verified lead pipeline.`
  );

  return (
    <section id="calculator" className="relative py-6 sm:py-8 lg:py-10 overflow-hidden bg-background border-y border-border/40">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-6xl">
        {/* Compact, high-impact header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-mono uppercase tracking-wider mb-2">
            <Sparkles size={12} />
            <span>Interactive Growth Simulator</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Estimate Your Inbound Pipeline &amp;{" "}
            <span className="text-gradient">Projected Return</span>
          </h2>
          <p className="mt-1 text-xs text-muted-foreground leading-snug">
            Calibrated from client portfolio benchmarks (Pushti Turf, Kapahi Properties, VIVO &amp; Kashmir Ply Co).
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {/* Step 1: Select Industry */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/60 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Step 01 / Select Sector
                </span>
                <span className="text-xs text-primary font-medium">
                  {selectedIndustry.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  const isSelected = selectedIndustry.id === ind.id;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind)}
                      className={`text-left px-2.5 py-2 rounded-lg border transition-all duration-150 flex items-center gap-2 ${
                        isSelected
                          ? "bg-primary/15 border-primary text-foreground ring-1 ring-primary shadow-sm"
                          : "bg-secondary/30 border-border/60 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={`shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span className="text-xs font-medium truncate leading-tight">
                        {ind.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Budget */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/60 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Step 02 / Monthly Media Budget
                </span>
                <div className="flex items-center gap-1 p-0.5 bg-secondary/60 rounded-md border border-border/50 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`px-2 py-0.5 rounded font-mono ${
                      currency === "INR" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    INR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-2 py-0.5 rounded font-mono ${
                      currency === "USD" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    USD
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-2.5">
                {SPEND_LEVELS.map((lvl) => {
                  const isSelected = monthlySpend === lvl.value;
                  return (
                    <button
                      key={lvl.value}
                      type="button"
                      onClick={() => setMonthlySpend(lvl.value)}
                      className={`py-1.5 px-2 rounded-lg border text-center transition-all duration-150 ${
                        isSelected
                          ? "bg-primary/15 border-primary text-foreground ring-1 ring-primary shadow-sm"
                          : "bg-secondary/30 border-border/60 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <p className="font-display font-bold text-xs sm:text-sm text-foreground leading-tight">
                        {lvl.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground/80 leading-tight mt-0.5">{lvl.subtext}</p>
                    </button>
                  );
                })}
              </div>

              {/* Slider for precision */}
              <div>
                <div className="flex justify-between items-center text-[11px] text-muted-foreground mb-1">
                  <span>Fine-tune budget:</span>
                  <span className="font-mono text-primary font-semibold text-xs">
                    {formatCurrency(monthlySpend)}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min={30000}
                  max={800000}
                  step={10000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-primary h-1.5 bg-secondary/80 rounded-lg cursor-pointer"
                  aria-label="Monthly ad spend slider"
                />
              </div>
            </div>

            {/* Architecture Preview Compact */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-secondary/20 border border-border/40">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap size={13} className="text-primary" />
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-foreground font-semibold">
                  Growth Infrastructure for {selectedIndustry.name}
                </h4>
              </div>
              <div className="grid sm:grid-cols-3 gap-1.5">
                {selectedIndustry.recommendedLayers.map((layer, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-secondary-foreground/90 bg-card/50 px-2 py-1.5 rounded-lg border border-border/30">
                    <CheckCircle2 size={12} className="text-primary shrink-0" />
                    <span className="truncate leading-tight" title={layer}>{layer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Conversion Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-card via-card/95 to-secondary/30 border border-primary/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Estimated 30-Day Outlook
                    </p>
                    <p className="font-display text-base font-bold text-foreground">
                      {selectedIndustry.name}
                    </p>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                    ~{selectedIndustry.avgRoas}X Historical ROAS
                  </div>
                </div>

                {/* 2-Column Side-by-Side Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 border-b border-border/50">
                  {/* Metric 1: Qualified Inbound Leads */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                      Projected Leads
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        {minLeads}–{maxLeads}
                      </span>
                      <span className="text-[10px] font-medium text-primary">/mo</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-snug">
                      Direct phone, WhatsApp &amp; site visit appointments.
                    </p>
                  </div>

                  {/* Metric 2: Estimated Pipeline Value */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                      Estimated Pipeline
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                        {formatCurrency(estimatedPipeline)}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-snug">
                      ~{estimatedSales} closed deals @ {Math.round(selectedIndustry.closeRate * 100)}% benchmark conversion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-3 space-y-2">
                <a
                  href="https://calendly.com/digitaleditz01/free-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="default"
                    className="w-full h-10 font-semibold rounded-full glow-accent-strong gap-2 text-xs sm:text-sm shadow-md"
                  >
                    <Calendar size={15} />
                    <span>Book 15-Min Strategy Session</span>
                    <ArrowRight size={14} />
                  </Button>
                </a>

                <a
                  href={`https://wa.me/918920524078?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="outline"
                    size="default"
                    className="w-full h-9 rounded-full border-border/60 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400 gap-2 text-xs sm:text-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Discuss on WhatsApp (Instant)</span>
                  </Button>
                </a>

                <p className="text-[10px] text-muted-foreground/70 text-center mt-1.5">
                  No long-term lock-in • 100% transparent live attribution reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
