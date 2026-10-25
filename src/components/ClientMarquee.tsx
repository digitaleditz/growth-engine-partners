import { motion } from "framer-motion";
import {
  Building2,
  Sparkles,
  ShoppingBag,
  Dumbbell,
  Compass,
  GraduationCap,
  Landmark,
  Layers,
  Palette,
  Briefcase,
  CheckCircle2,
  Droplet,
  Rocket,
  Gem,
  Smartphone,
  Compass as CompassIcon,
} from "lucide-react";

import vivoLogo from "@/assets/clients/vivo_1.png";
import kpLogo from "@/assets/clients/kp_1.png";
import thekpcLogo from "@/assets/clients/thekpc_1.png";
import usmanLogo from "@/assets/clients/usmanmajid_1.png";
import pushtiLogo from "@/assets/clients/pushti_1.png";
import jkDistrictLogo from "@/assets/clients/jkdistrict_1.png";

interface Client {
  name: string;
  category: string;
  tag: string;
  logo?: string;
  accent: string;
  icon?: React.ElementType;
  verified?: boolean;
}

// Track 1: Enterprise & Marquee Brands
const trackOneClients: Client[] = [
  {
    name: "VIVO",
    category: "Consumer Tech & Smartphones",
    tag: "Enterprise",
    logo: vivoLogo,
    accent: "#0082FA",
    verified: true,
  },
  {
    name: "Kapahi Properties",
    category: "Luxury Real Estate",
    tag: "Real Estate",
    logo: kpLogo,
    accent: "#EAB308",
    verified: true,
  },
  {
    name: "Kashmir Ply Co.",
    category: "Timber & Building Systems",
    tag: "Industrial",
    logo: thekpcLogo,
    accent: "#10B981",
    verified: true,
  },
  {
    name: "Pushti Turf",
    category: "Playground Turf & Sports",
    tag: "Playground Turf",
    logo: pushtiLogo,
    accent: "#10B981",
    verified: true,
  },
  {
    name: "MOS P&D Usman Majid",
    category: "Governance & Leadership",
    tag: "Public Sector",
    logo: usmanLogo,
    accent: "#8B5CF6",
    verified: true,
  },
  {
    name: "J&K District Admin",
    category: "Public Outreach & Tourism",
    tag: "Government",
    logo: jkDistrictLogo,
    accent: "#06B6D4",
    verified: true,
  },
  {
    name: "SKAUST",
    category: "Agri-Tech & Research University",
    tag: "Education",
    accent: "#38BDF8",
    icon: GraduationCap,
    verified: true,
  },
  {
    name: "Ceefle Ventures",
    category: "Venture Studio & Incubator",
    tag: "Tech & VC",
    accent: "#6366F1",
    icon: Rocket,
    verified: true,
  },
  {
    name: "Shivika Infra",
    category: "Civil Infrastructure & EPC",
    tag: "Infra",
    accent: "#3B82F6",
    icon: Building2,
    verified: true,
  },
  {
    name: "Noor Luxury",
    category: "Artisanal Haute Perfumery",
    tag: "Luxury D2C",
    accent: "#F59E0B",
    icon: Gem,
    verified: true,
  },
];

// Track 2: Rapid-Growth Brands & Regional Leaders
const trackTwoClients: Client[] = [
  {
    name: "Muscle Matrix Gym",
    category: "High-Performance Athletics",
    tag: "Fitness",
    accent: "#EF4444",
    icon: Dumbbell,
    verified: true,
  },
  {
    name: "Zivara Mart",
    category: "Omnichannel Superstore & D2C",
    tag: "E-Commerce",
    accent: "#F97316",
    icon: ShoppingBag,
    verified: true,
  },
  {
    name: "Kashi Tours",
    category: "Bespoke Hospitality & Travel",
    tag: "Travel",
    accent: "#14B8A6",
    icon: CompassIcon,
    verified: true,
  },
  {
    name: "Aditya Astro",
    category: "Vedic Media & Digital Platforms",
    tag: "Media",
    accent: "#A855F7",
    icon: Sparkles,
    verified: true,
  },
  {
    name: "Vishwa Guru Bharat Trust",
    category: "National Non-Profit Foundation",
    tag: "Foundation",
    accent: "#F59E0B",
    icon: Landmark,
    verified: true,
  },
  {
    name: "Tukra Industries",
    category: "Precision Engineering & Parts",
    tag: "Manufacturing",
    accent: "#64748B",
    icon: Layers,
    verified: true,
  },
  {
    name: "K.K Collections",
    category: "Haute Designer Apparel",
    tag: "Fashion",
    accent: "#EC4899",
    icon: Palette,
    verified: true,
  },
  {
    name: "Khalis Oil",
    category: "Cold-Pressed Pure Nutrition",
    tag: "Organic FMCG",
    accent: "#84CC16",
    icon: Droplet,
    verified: true,
  },
  {
    name: "SS Consultants",
    category: "Corporate Strategy & Advisory",
    tag: "Advisory",
    accent: "#6366F1",
    icon: Briefcase,
    verified: true,
  },
  {
    name: "Ar. Naveen Vij",
    category: "Luxury Architecture & Interiors",
    tag: "Architecture",
    accent: "#F43F5E",
    icon: Compass,
    verified: true,
  },
];

const industries = [
  { name: "Real Estate & Infra", icon: Building2 },
  { name: "D2C Brands & FMCG", icon: ShoppingBag },
  { name: "Consumer Tech", icon: Smartphone },
  { name: "Public Sector & Gov", icon: Landmark },
  { name: "Luxury & Fashion", icon: Gem },
  { name: "Fitness & Athletics", icon: Dumbbell },
  { name: "Travel & Hospitality", icon: CompassIcon },
  { name: "Corporate & Advisory", icon: Briefcase },
];

const ClientCard = ({ client }: { client: Client }) => {
  const IconComponent = client.icon;

  return (
    <div className="relative group shrink-0">
      {/* Outer subtle glow on hover */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${client.accent}40 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex items-center gap-3.5 sm:gap-4 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-card/85 backdrop-blur-md border border-border/60 hover:border-border transition-all duration-300 w-auto shrink-0 shadow-sm group-hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
        {/* Brand visual (Real logo or Custom stylized emblem) */}
        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/50 border border-border/40 group-hover:border-primary/30 transition-all shrink-0 p-1.5 overflow-hidden">
          {client.logo ? (
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-full h-full object-contain filter drop-shadow brightness-105 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : IconComponent ? (
            <div
              className="w-full h-full rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 duration-300"
              style={{
                backgroundColor: `${client.accent}18`,
                color: client.accent,
              }}
            >
              <IconComponent size={22} strokeWidth={2} />
            </div>
          ) : (
            <div
              className="w-full h-full rounded-lg flex items-center justify-center font-bold text-sm tracking-wider"
              style={{
                backgroundColor: `${client.accent}20`,
                color: client.accent,
              }}
            >
              {client.name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Text information */}
        <div className="flex flex-col justify-center min-w-max">
          <div className="flex items-center gap-1.5 mb-0.5">
            <h4 className="font-display font-semibold text-sm sm:text-[15px] text-foreground tracking-tight whitespace-nowrap group-hover:text-primary transition-colors">
              {client.name}
            </h4>
            {client.verified && (
              <span
                className="inline-flex text-primary shrink-0"
                title="Verified Client Partner"
              >
                <CheckCircle2 size={13} className="fill-primary/20" />
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground/80 whitespace-nowrap">
            {client.category}
          </p>
        </div>

        {/* Industry Pill */}
        <div className="shrink-0 ml-1 sm:ml-2">
          <span className="inline-block text-[10px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-secondary/80 text-muted-foreground border border-border/40 group-hover:border-primary/20 group-hover:text-foreground transition-colors whitespace-nowrap">
            {client.tag}
          </span>
        </div>
      </div>
    </div>
  );
};

const ClientMarquee = () => {
  const rowOneDoubled = [...trackOneClients, ...trackOneClients];
  const rowTwoDoubled = [...trackTwoClients, ...trackTwoClients];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/[0.035] rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mb-12 sm:mb-14">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4 tracking-wider uppercase">
            <Sparkles size={13} className="text-primary animate-pulse" />
            <span>Trusted By 50+ Growth-Driven Brands</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Brands We've <span className="text-gradient">Scaled.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            From established regional powerhouses to fast-scaling D2C market makers, we build the creative, paid, and automation systems behind their growth.
          </p>

          {/* Specialized Industries Tags */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/80 font-medium">
                Industries We Specialize In &amp; Scale
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <span
                    key={ind.name}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-secondary/40 text-secondary-foreground/85 border border-border/50 hover:border-primary/40 hover:text-foreground hover:bg-secondary/70 transition-all duration-200"
                  >
                    <Icon size={13} className="text-primary/90 shrink-0" />
                    <span>{ind.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Tracks Container */}
      <div className="relative flex flex-col gap-4 sm:gap-5">
        {/* Soft edge gradients for seamless infinite fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-20 bg-gradient-to-l from-background via-background/70 to-transparent pointer-events-none" />

        {/* Track 1: Gliding Left Continuously */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex gap-4 sm:gap-5 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 48,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {rowOneDoubled.map((client, i) => (
              <ClientCard key={`row1-${client.name}-${i}`} client={client} />
            ))}
          </motion.div>
        </div>

        {/* Track 2: Gliding Right Continuously */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex gap-4 sm:gap-5 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 54,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {rowTwoDoubled.map((client, i) => (
              <ClientCard key={`row2-${client.name}-${i}`} client={client} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
