import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Target,
  Zap,
  BarChart3,
  Eye,
  Shield,
  Cpu,
  Clapperboard,
  Users,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
  Play,
  X,
  Volume2,
  VolumeX,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
import ClientMarquee from "@/components/ClientMarquee";
import PartnersBanner from "@/components/PartnersBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import GrowthCalculator from "@/components/GrowthCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import servicesAds from "@/assets/services-ads.webp";
import servicesContent from "@/assets/services-content.webp";

import vivocase from "@/assets/clients/vivo_1.png";
import pushticase from "@/assets/clients/pushti_1.png";
import servicesUgc from "@/assets/services-ugc.webp";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const services = [
  {
    title: "Content Creation",
    icon: Clapperboard,
    image: servicesUgc,
    items: [
      "Reels & short-form video",
      "UGC & creator content",
      "Brand visuals & carousels",
      "AI-assisted production at scale",
    ],
    desc: "Scroll stoppers at scale with machine assisted momentum and smart AI automation. Create Reels, UGC, and visuals built to grab attention and keep it.",
    label: "01",
  },
  {
    title: "Social Management",
    icon: Users,
    image: servicesContent,
    items: [
      "Content calendars & publishing",
      "Community management & replies",
      "Dynamic creative testing",
      "Chatbot funnels & predictive audiences",
    ],
    desc: "Always on, always on brand. We plan, post, and reply so your community never goes quiet. We use dynamic creatives & chatbot funnels to reach predictive audiences.",
    label: "02",
  },
  {
    title: "Paid Media",
    icon: Target,
    image: servicesAds,
    items: [
      "Meta, Google, TikTok, YouTube & LinkedIn",
      "ROAS, CPA & LTV optimization",
      "Landing pages & funnels",
      "CRO & full-funnel reporting",
    ],
    desc: "Every dollar with a job. Meta, Google Ads, TikTok, YouTube, LinkedIn optimized for ROAS, lower CPA and higher LTV. Full stack performance marketing including landing pages, funnels, and CRO.",
    label: "03",
  },
];


const faqs = [
  {
    q: "How do you use AI in campaigns?",
    a: "AI assists in creative testing, budget optimization, audience expansion, data analysis, and performance forecasting. Final strategic decisions are always human-led.",
  },
  {
    q: "What industries do you work with?",
    a: "Real estate, retail, government institutions, political campaigns, service businesses, gyms, e-commerce, and growing brands.",
  },
  {
    q: "What is your minimum engagement?",
    a: "We typically work with businesses ready to invest in consistent growth, not one-time experiments.",
  },
  {
    q: "Do you offer custom software solutions?",
    a: "Yes. From websites to CRMs and automation dashboards, we build scalable digital systems.",
  },
  {
    q: "What makes you different from other growth partners?",
    a: "We build systems that scale, not campaigns that expire.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, if they are ready to commit to a systematic growth approach and have a clear product-market direction.",
  },
];

interface BrandFilm {
  src: string;
  title: string;
  client: string;
  desc: string;
  metrics: string;
}

const brandFilms: BrandFilm[] = [
  {
    src: "/burgervideo.mp4",
    title: "Gourmet Burger Launch",
    client: "Food & Beverage",
    desc: "High-contrast dynamic food videography and launch promotional reel generating viral local footfall.",
    metrics: "250K+ Views • 4.6X ROAS",
  },
  {
    src: "/levorabagvideo.mp4",
    title: "Le Vora Luxury Handbags",
    client: "Luxury D2C Fashion",
    desc: "Art-directed cinematic fashion film focusing on craftsmanship, leather texture, and premium e-commerce conversion.",
    metrics: "180K+ Views • 5.8X ROAS",
  },
  {
    src: "/OATSTRONGvideo.mp4",
    title: "Oat Strong Nutrition",
    client: "Health & Fitness",
    desc: "Energetic lifestyle reel combining athlete training moments with product benefits for modern wellness buyers.",
    metrics: "320K+ Views • 6.2X ROAS",
  },
  {
    src: "/perfumevideo.mp4",
    title: "Fine Fragrance Campaign",
    client: "Luxury Beauty",
    desc: "Sultry, moody aesthetic spotlight with atmospheric lighting designed for high-ticket brand prestige.",
    metrics: "410K+ Views • 5.1X ROAS",
  },
  {
    src: "/realestatevideo.mp4",
    title: "Luxury Real Estate Walkthrough",
    client: "Real Estate & Penthouses",
    desc: "Architectural vertical cinema showcasing premium penthouses and villas for qualified high-net-worth investors.",
    metrics: "₹45Cr Pipeline • 1.2M Views",
  },
  {
    src: "/skincarevideo.mp4",
    title: "Clinical Skincare Routine",
    client: "Cosmeceuticals",
    desc: "Clean dermatological aesthetic showcasing application texture and genuine customer skin transformation.",
    metrics: "290K+ Views • 4.9X ROAS",
  },
  {
    src: "/elveraringvideo.mp4",
    title: "Elvera Fine Jewellery",
    client: "Fine Jewellery",
    desc: "Macro-focus gemstone brilliance highlighting ring facets and bridal luxury for celebratory gifting.",
    metrics: "195K+ Views • 7.4X ROAS",
  },
];

const doubledBrandFilms = [...brandFilms, ...brandFilms];

const Index = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reelmarkViewportRef = useRef<HTMLDivElement | null>(null);
  const [previewFilm, setPreviewFilm] = useState<BrandFilm | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  // Prevent background page movement/scroll until the video is closed
  useEffect(() => {
    if (previewFilm) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setPreviewFilm(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [previewFilm]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {});
    };

    attemptPlay();

    const handleScroll = () => {
      attemptPlay();
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keep brand-film videos playing and looping reliably across Safari (iOS/macOS) and Chromium
  useEffect(() => {
    const viewport = reelmarkViewportRef.current;
    if (!viewport) return;

    const videos = Array.from(viewport.querySelectorAll<HTMLVideoElement>("video"));

    const ensurePlay = (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.removeAttribute("controls");

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Playback will resume on first touch or user gesture
        });
      }
    };

    const playAll = () => {
      videos.forEach((v) => ensurePlay(v));
    };

    videos.forEach((video) => {
      video.addEventListener("loadedmetadata", () => ensurePlay(video));
      video.addEventListener("canplay", () => ensurePlay(video));
      ensurePlay(video);
    });

    const unlockGestures: (keyof WindowEventMap)[] = ["touchstart", "touchend", "scroll", "click", "pageshow"];
    const onUserInteraction = () => {
      playAll();
    };

    unlockGestures.forEach((evt) => {
      window.addEventListener(evt, onUserInteraction, { passive: true, once: true });
    });

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playAll();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      unlockGestures.forEach((evt) => {
        window.removeEventListener(evt, onUserInteraction);
      });
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Hero video background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-bg.mp4"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-full object-cover dark:opacity-100 opacity-25 transition-opacity duration-500"
          />
          {/* Directional contrast scrim so text is 100% visible and razor-sharp in both modes */}
          <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-black/90 dark:via-black/65 dark:to-black/35 bg-gradient-to-r from-background/95 via-background/85 to-background/50 pointer-events-none" />
          <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-background dark:via-black/25 dark:to-black/50 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow dark:bg-black/60 dark:border-white/20 dark:text-white bg-primary/10 border-primary/25 text-primary shadow-sm">
                <Sparkles size={12} className="text-primary" />
                Growth &amp; Revenue Systems Partner
              </span>

              <h1 className="display-xl mt-7 text-foreground dark:text-white dark:[text-shadow:0_4px_24px_rgba(0,0,0,0.95)]">
                Reach the Right People.{" "}
                <span className="text-gradient dark:[text-shadow:0_4px_24px_rgba(0,0,0,0.85)]">
                  At the Right Time.
                </span>
              </h1>

              <p className="body-lg mt-7 max-w-xl text-muted-foreground dark:text-slate-100/90 dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                We build the strategy, content, distribution and acquisition
                systems that help businesses reach their target audience, create
                demand and turn digital attention into measurable revenue.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/digitaleditz01/free-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base font-semibold px-7 sm:px-9 py-6 sm:py-7 rounded-full glow-accent-strong group gap-2 shadow-xl"
                  >
                    Book a Free Discovery Call
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base font-semibold px-7 sm:px-9 py-6 sm:py-7 rounded-full border-border/80 dark:bg-black/40 dark:backdrop-blur-md dark:hover:border-primary/40 dark:hover:bg-black/60 dark:text-white bg-card hover:bg-secondary/70 text-foreground shadow-sm"
                  asChild
                >
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>

              <p className="mt-10 text-muted-foreground dark:text-slate-300/80 max-w-md label-mono leading-relaxed dark:[text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
                Backed by operators who've built growth systems for Indigo, Urban
                Company, Royal Enfield, M3M and more
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: "700%", label: "Peak ROAS Delivered" },
                { value: "100k+", label: "Qualified Leads Generated" },
                { value: "1M+", label: "Campaign Reach" },
                { value: "3X", label: "Average Lead Growth" },
              ].map((s) => (
                <div key={s.label} className="surface surface-hover p-6 dark:bg-card/85 dark:backdrop-blur-md dark:border-border/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] bg-card border-border/80 shadow-sm">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="label-mono text-muted-foreground mt-2 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted-foreground/40" size={24} />
        </motion.div>
      </section>


      <ClientMarquee />
      
      {/* Reelmark-inspired brand film carousel */}
      <section className="reelmark-section relative overflow-hidden" aria-label="Featured brand films">
        <div className="container relative z-10">
          <div className="reelmark-heading">
            <p className="eyebrow">Creative that moves business</p>
            <h2 className="font-display font-bold leading-[1.02] tracking-tight text-[clamp(1.8rem,4vw,3.25rem)]">
              Captivate Crowds With{" "}
              <span className="text-gradient">Scroll-Stopping Content.</span>
            </h2>
          </div>
        </div>

        <div ref={reelmarkViewportRef} className="relative w-full overflow-hidden select-none py-3 sm:py-5">
          {/* Edge vignette gradients for seamless infinite fade across all devices */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

          <div className="flex overflow-hidden w-full">
            <motion.div
              className="flex gap-4 sm:gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 34,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {doubledBrandFilms.map((film, index) => (
                <div
                  className="reelmark-card shrink-0 cursor-pointer group/card"
                  key={`${film.src}-${index}`}
                  onClick={() => {
                    setPreviewFilm(film);
                    setIsAudioMuted(false);
                  }}
                >
                  <div className="iphone-frame" aria-label={`${film.title} video mockup`}>
                    <div className="iphone-button iphone-button-left" aria-hidden="true" />
                    <div className="iphone-button iphone-button-right" aria-hidden="true" />
                    <div className="iphone-screen">
                      <video
                        src={film.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="auto"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        aria-label={film.title}
                      />
                      <span className="iphone-dynamic-island" aria-hidden="true" />

                      {/* Interactive Play & Tap Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 pointer-events-none p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transform group-hover/card:scale-110 transition-transform">
                          <Play size={22} className="fill-current translate-x-0.5" />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-white bg-black/70 px-2.5 py-1 rounded-md border border-white/20">
                          Click to Watch Full
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PartnersBanner />
      {/* Services */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="What We Do"
            title="Content, Social and Paid Media"
            description="Three capabilities, one growth system: create the attention, run the community, and turn spend into revenue."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="group surface surface-hover h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <span className="absolute top-5 right-6 label-mono text-muted-foreground/60">
                      {s.label}
                    </span>
                  </div>
                  <div className="p-7 -mt-9 relative">
                    <div className="icon-tile mb-5">
                      <s.icon size={20} />
                    </div>
                    <h3 className="display-md">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mt-3 mb-6 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="hairline mb-5" />
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-secondary-foreground/80 flex items-start gap-3"
                        >
                          <Check size={14} className="text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Growth Simulator */}
      <GrowthCalculator />

      {/* Case Studies */}
      <section className="section-pad relative overflow-hidden section-texture">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Proven Results"
            title="Featured Case Studies"
            description="Right audience, right channel, measurable business outcomes."
          />

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden mb-8 border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                  <span className="label-mono text-primary mb-4 block">VIVO / 2024</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">Custom Promotional Campaign Platform</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">Built a custom campaign website enabling users to submit purchases and claim rewards effortlessly in J&K.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-5">
                      <div className="text-primary font-display text-4xl font-bold">+<CountUp end={73} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Sales Growth</p>
                    </div>
                    <div className="glass rounded-xl p-5">
                      <div className="text-primary font-display text-4xl font-bold">High</div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Engagement</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-72 md:h-auto overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <img
                    src={vivocase}
                    alt="VIVO Campaign"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-3xl overflow-hidden border-shimmer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden md:order-1 bg-gradient-to-br from-primary/10 via-card to-card">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <img
                    src={pushticase}
                    alt="Pushti Campaign"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center md:order-2">
                  <span className="label-mono text-primary mb-4 block">Pushti Turf & Farms / 2025</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">Meta Ads + WhatsApp Funnel</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">High-performance Meta Ads integrated with WhatsApp funnel automation for massive launch turnout.</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold"><CountUp end={1} suffix="M+" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Reach</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold"><CountUp end={1000} suffix="+" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">Leads</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <div className="text-primary font-display text-2xl md:text-3xl font-bold">~<CountUp end={700} suffix="%" /></div>
                      <p className="text-xs text-muted-foreground/60 mt-2 label-mono">ROAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-full border-border/50 hover:border-primary/30 gap-2 group" asChild>
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-pad relative overflow-hidden section-texture-alt">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Our Process"
            title="Our 3-Step Growth Framework"
            description="From the right audience to distribution, conversion and revenue."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We analyze your market, competitors, audience psychology, and growth bottlenecks. Then we design a system tailored to your business." },
              { step: "02", title: "Implementation", desc: "Campaigns go live. Assets are deployed. Funnels are optimized. Every component works together." },
              { step: "03", title: "Optimization & Scale", desc: "AI insights + human judgment = continuous improvement. We scale what performs and eliminate inefficiencies." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.15}>
                <div className="surface surface-hover p-9 h-full">
                  <div className="flex items-center justify-between mb-7">
                    <span className="font-display text-5xl font-bold text-primary/25">{s.step}</span>
                    <div className="icon-tile">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                  <h3 className="display-md mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-muted-foreground/50 mt-16 text-sm italic font-display">Growth is engineered, not hoped for.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-pad relative overflow-hidden section-texture">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="floating-orb w-[400px] h-[400px] bottom-0 right-0" />
        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Brands Choose DigitalEditz"
            description="We are judged on revenue and pipeline, not on impressions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Eye, text: "People-led thinking, not automated guesswork" },
              { icon: Zap, text: "AI-assisted speed & precision" },
              { icon: BarChart3, text: "Transparent performance reporting" },
              { icon: Shield, text: "Institutional & enterprise experience" },
              { icon: Cpu, text: "Systems-first approach to growth" },
              { icon: Target, text: "Data that connects directly to revenue" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-7 surface surface-hover h-full">
                  <div className="icon-tile">
                    <item.icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CTASection />
      <Footer />

      {/* Full-Screen Video Spotlight Modal (Portaled directly to body to avoid clipping & overflow) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {previewFilm && (
              <div
                className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/90 backdrop-blur-md"
                onClick={() => setPreviewFilm(null)}
                role="dialog"
                aria-modal="true"
                aria-label={`${previewFilm.title} brand film spotlight`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[86vh] rounded-2xl sm:rounded-3xl bg-card border border-primary/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col md:flex-row text-foreground overflow-hidden"
                >
                  {/* Prominent Close Button with Cross Icon */}
                  <button
                    type="button"
                    onClick={() => setPreviewFilm(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 sm:p-2.5 rounded-full bg-black/80 text-white hover:text-primary hover:bg-black hover:scale-105 transition-all border border-white/20 shadow-xl cursor-pointer"
                    aria-label="Close expanded video"
                    title="Close video"
                  >
                    <X size={20} />
                  </button>

                  {/* Left Column: Vertical Video Player sized strictly within screen boundaries */}
                  <div className="relative md:w-1/2 bg-black flex items-center justify-center p-3 sm:p-5 shrink-0 overflow-hidden">
                    <div className="relative w-auto h-[36vh] sm:h-[44vh] md:h-[60vh] max-h-[480px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black flex items-center justify-center mx-auto">
                      <video
                        src={previewFilm.src}
                        autoPlay
                        loop
                        playsInline
                        muted={isAudioMuted}
                        className="w-full h-full object-cover"
                      />
                      {/* Audio mute toggle */}
                      <button
                        type="button"
                        onClick={() => setIsAudioMuted(!isAudioMuted)}
                        className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-black/75 text-white hover:bg-black transition-colors border border-white/20"
                        aria-label={isAudioMuted ? "Unmute audio" : "Mute audio"}
                      >
                        {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Creative Strategy & Conversion Details */}
                  <div className="md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[48vh] md:max-h-[86vh]">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary">
                        {previewFilm.client} • Brand Film
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground pr-8">
                        {previewFilm.title}
                      </h3>

                      {/* Brand Inspiration Spotlight - No Metrics */}
                      <div className="my-4 sm:my-5 p-3.5 sm:p-4 rounded-xl bg-primary/10 border border-primary/25 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                            This Could Be Your Brand
                          </span>
                          <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-0.5 leading-snug">
                            Ready to position your brand with cinema-grade creative and high-converting visual direction?
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <p>{previewFilm.desc}</p>
                        <p>
                          Engineered specifically for short-form retention, thumb-stopping first 2 seconds, and high-frequency conversion on Meta &amp; Instagram Reels.
                        </p>
                      </div>
                    </div>

                    {/* Conversion CTAs */}
                    <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-border space-y-2.5 shrink-0">
                      <a
                        href="https://calendly.com/digitaleditz01/free-discovery-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className="w-full rounded-full glow-accent gap-2 py-4 sm:py-5 font-semibold text-xs sm:text-sm">
                          <Calendar size={16} />
                          <span>Schedule Video Creative Call</span>
                        </Button>
                      </a>

                      <a
                        href={`https://wa.me/918920524078?text=${encodeURIComponent(
                          `Hi DigitalEditz, I watched your ${previewFilm.title} brand film. I want to produce high-converting short-form videos for my brand.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full rounded-full gap-2 py-4 sm:py-5 text-emerald-400 border-border hover:bg-emerald-500/10 text-xs sm:text-sm"
                        >
                          <MessageCircle size={16} />
                          <span>Inquire on WhatsApp</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default Index;
