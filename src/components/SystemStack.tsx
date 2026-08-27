import {
  Palette,
  LayoutTemplate,
  FileText,
  Target,
  UserCheck,
  Database,
  Workflow,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Layer {
  n: string;
  icon: LucideIcon;
  title: string;
  output: string;
}

const layers: Layer[] = [
  { n: "01", icon: Palette, title: "Brand & positioning", output: "Clarity" },
  { n: "02", icon: LayoutTemplate, title: "Website & digital presence", output: "Credibility" },
  { n: "03", icon: FileText, title: "Content & social media", output: "Familiarity" },
  { n: "04", icon: Target, title: "Paid & organic traffic", output: "Attention" },
  { n: "05", icon: UserCheck, title: "Lead generation", output: "Enquiries" },
  { n: "06", icon: Database, title: "CRM & follow-up", output: "Pipeline" },
  { n: "07", icon: Workflow, title: "Conversion & sales", output: "Customers" },
  { n: "08", icon: TrendingUp, title: "Analytics & optimization", output: "Compounding" },
];

const SystemStack = () => (
  <div className="relative">
    {/* vertical spine */}
    <div
      aria-hidden
      className="absolute left-[27px] md:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent"
    />

    <ol className="space-y-3 relative">
      {layers.map((l, i) => (
        <ScrollReveal key={l.n} delay={i * 0.05}>
          <li className="group flex items-center gap-4 md:gap-6">
            {/* node */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass border border-primary/20 flex items-center justify-center transition-colors duration-500 group-hover:border-primary/50">
                <l.icon size={20} className="text-primary" />
              </div>
            </div>

            {/* connector */}
            <div aria-hidden className="hidden sm:block h-px w-6 bg-border/60" />

            {/* label */}
            <div className="flex-1 min-w-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm px-5 py-4 transition-colors duration-500 group-hover:border-primary/25">
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="label-mono text-primary/50 shrink-0">{l.n}</span>
                <span className="text-sm md:text-base font-medium text-secondary-foreground truncate">
                  {l.title}
                </span>
              </div>
              <span className="label-mono text-muted-foreground/70">{l.output}</span>
            </div>
          </li>
        </ScrollReveal>
      ))}
    </ol>
  </div>
);

export default SystemStack;
