import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ArrowUpRight, ShieldCheck, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  q: string;
  a: string;
  highlight?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-0",
    q: "How quickly can we expect to see qualified inbound leads & measurable pipeline?",
    a: "Our onboarding and launch cycle is engineered for speed without sacrificing strategic rigor. Following our discovery audit, your campaigns, landing pages, and tracking systems launch within 7 to 10 business days. Initial qualified inquiries and WhatsApp bookings typically start flowing within the first 48 to 72 hours of campaign activation, with unit economics (CPA and ROAS) compounding rapidly by Month 2 as creative testing and audience algorithms calibrate.",
    highlight: "Initial leads within 48–72 hours of launch",
  },
  {
    id: "faq-1",
    q: "How do you ensure leads are high-intent buyers, not junk or bot clicks?",
    a: "We do not run generic lead forms that collect low-intent contact details. Instead, we architect a multi-step pre-qualification funnel: custom interactive qualifying questions (budget tiers, timelines, specific project requirements), OTP/SMS verification, and direct WhatsApp / Calendly booking. Leads are screened before reaching your CRM, ensuring your sales team only speaks to high-ticket, purchase-ready decision makers.",
    highlight: "Pre-screened against budget and intent",
  },
  {
    id: "faq-2",
    q: "Are there long-term lock-in contracts or retainers?",
    a: "Zero long-term lock-ins. All our growth partnerships operate on transparent month-to-month terms. We believe client retention must be earned every 30 days through verifiable revenue, qualified appointments, and compounding return on ad spend—not through 12-month legal obligations. You retain 100% ownership of all creative assets, ad accounts, and custom code.",
    highlight: "Month-to-month flexibility • You own 100% of assets",
  },
  {
    id: "faq-3",
    q: "What monthly media budget do we need to start seeing meaningful scale?",
    a: "We typically recommend a minimum ad spend of ₹50,000 to ₹1.5 Lakhs per month (or $1,000 to $3,000 USD) for regional market testing, and ₹3 Lakhs to ₹5 Lakhs+ for aggressive market leadership. This ensures enough conversion data for algorithmic optimization on Meta and Google. Our performance fee is independent of your ad spend, keeping our incentives 100% aligned with lowering your acquisition costs.",
    highlight: "Starts at ₹50K/mo • Optimized for lowest CPA",
  },
  {
    id: "faq-4",
    q: "How does DigitalEditz differ from traditional marketing or creative agencies?",
    a: "Traditional agencies sell isolated tasks in silos—a graphic designer makes posts, a freelancer manages ads, and a dev agency builds a slow template site that never converts. We build connected growth systems: our creative team, performance media buyers, and full-stack software engineers work in unison. Your video creative feeds your landing page, which feeds your CRM and WhatsApp automation, creating an unbroken demand flywheel.",
    highlight: "Systems-first partner, not a task vendor",
  },
  {
    id: "faq-5",
    q: "What industries do you have proven track records with?",
    a: "We specialize in high-stakes, growth-driven sectors including Luxury Real Estate (Kapahi Properties, M3M projects), Sports & Turf Venues (Pushti Turf), Consumer Tech & Smartphones (VIVO), Industrial Systems & Building Materials (Kashmir Ply Co), Public Sector Campaigns (District Administration, Usman Majid), and high-growth D2C brands. Our frameworks adapt directly to high-ticket B2B and consumer conversion models.",
    highlight: "Real Estate, Consumer Tech, Turf, D2C & B2B",
  },
  {
    id: "faq-6",
    q: "How do you handle reporting and attribution transparency?",
    a: "Zero black-box agency reporting or vanity metrics (impressions, follower counts). You receive access to a 24/7 live attribution dashboard that tracks every single ad rupee to inbound calls, booked appointments, and closed deal value. We conduct bi-weekly strategy reviews and stay connected with your executive team via a dedicated, real-time communication channel.",
    highlight: "24/7 live dashboards • 100% attribution clarity",
  },
];

interface FaqSectionProps {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function FaqSection({
  id = "faq",
  className = "",
  eyebrow = "Frequently Asked Questions",
  title,
  description = "Transparent answers on timelines, qualification filters, budget requirements, and how we operate as your dedicated growth and revenue engine.",
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className={`section-pad relative overflow-hidden bg-background border-t border-border/40 ${className}`}
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="container relative z-10 max-w-4xl">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow mb-4 inline-flex items-center gap-1.5">
              <HelpCircle size={13} className="text-primary" />
              {eyebrow}
            </span>
            <h2 className="display-lg mt-3 text-foreground">
              {title || (
                <>
                  Everything You Need to Know Before{" "}
                  <span className="text-gradient">We Build Together.</span>
                </>
              )}
            </h2>
            <p className="body-lg mt-4 text-muted-foreground">{description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="surface p-6 sm:p-10 rounded-3xl border border-border/60 shadow-xl bg-card/60 backdrop-blur-md">
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-4">
              {FAQ_DATA.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border/50 rounded-2xl px-5 sm:px-6 py-1 bg-secondary/20 hover:bg-secondary/40 transition-all duration-200 data-[state=open]:border-primary/40 data-[state=open]:bg-secondary/40 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg hover:no-underline hover:text-primary py-4 transition-colors gap-4">
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-primary font-bold">
                        0{index + 1}.
                      </span>
                      <span className="text-foreground leading-snug">{item.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                    <p>{item.a}</p>
                    {item.highlight && (
                      <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-medium">
                        <ShieldCheck size={13} className="text-primary" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Quick action bar */}
        <ScrollReveal delay={0.15}>
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                Have a specific question about your market or business model?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Speak directly with senior growth strategists—not junior sales reps.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="https://calendly.com/digitaleditz01/free-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full glow-accent gap-2 font-semibold text-xs sm:text-sm px-5 py-5">
                  <Calendar size={15} />
                  <span>Book 15-Min Call</span>
                  <ArrowUpRight size={14} />
                </Button>
              </a>
              <a
                href="https://wa.me/918920524078?text=Hi%20DigitalEditz!%20I%20have%20a%20question%20about%20your%20growth%20systems."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-border/60 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 gap-2 text-xs sm:text-sm px-5 py-5"
                >
                  <MessageCircle size={15} />
                  <span>Instant WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
