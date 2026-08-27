import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ClientMarquee from "@/components/ClientMarquee";
import {
  Check,
  Brain,
  Cpu,
  Target,
  Rocket,
  Search,
  LineChart,
  Workflow,
  ShieldCheck,
  Gauge,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const philosophy = [
  {
    icon: Brain,
    title: "People-Led Thinking",
    description: "Strategy is shaped by marketers who've run campaigns for enterprise brands, not templates or guesswork.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Execution",
    description: "We use AI to speed up creative, targeting, and reporting cycles so growth compounds faster.",
  },
  {
    icon: Target,
    title: "Performance Over Vanity",
    description: "Every metric we chase ties back to revenue, leads, or measurable business outcomes.",
  },
  {
    icon: Workflow,
    title: "Systems Over Shortcuts",
    description: "We build repeatable marketing infrastructure designed to scale, not one-off campaign wins.",
  },
];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnose",
    description: "We audit your current funnel, ad accounts, and systems to find where growth is leaking.",
  },
  {
    icon: LineChart,
    step: "02",
    title: "Architect",
    description: "We design a tailored acquisition and automation system built around your goals and scale.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description: "Our team ships campaigns, content, and systems with AI-accelerated speed and precision.",
  },
  {
    icon: Gauge,
    step: "04",
    title: "Optimize",
    description: "We track performance relentlessly and iterate to keep compounding your growth engine.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Transparency", description: "Clear reporting and honest recommendations, always." },
  { icon: Target, title: "Accountability", description: "We measure ourselves by your results, not our output." },
  { icon: Sparkles, title: "Craft", description: "Every asset and system is built with care, not shipped half-baked." },
  { icon: Users, title: "Partnership", description: "We embed with your team like an extension of it, not a vendor." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <PageHero
      eyebrow="About DigitalEditz"
      title={
        <>
          We Don't Run Ads.{" "}
          <span className="text-gradient">We Build Systems.</span>
        </>
      }
      description="DigitalEditz was founded with a simple belief: growth should be engineered. We combine strategic thinking with AI-driven execution to build scalable marketing infrastructure for ambitious brands."
      image={aboutHero}
      imageAlt="DigitalEditz team at work"
      stats={[
        { value: "7+", label: "Enterprise Brands Served" },
        { value: "24hr", label: "Avg. Response Time" },
        { value: "100%", label: "Performance Focused" },
        { value: "AI", label: "Powered Execution" },
      ]}
    />

    {/* Who we are */}
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 section-texture" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div className="relative rounded-[1.75rem] overflow-hidden surface p-2">
              <img
                src={aboutHero}
                alt="DigitalEditz team collaborating"
                className="w-full h-[420px] object-cover rounded-[1.5rem]"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="display-lg mt-5">
              Enterprise-level thinking, applied to every project.
            </h2>
            <p className="body-lg mt-6">
              Our marketers have hands-on experience executing campaigns for{" "}
              <span className="text-primary font-medium">
                Indigo, Urban Company, Royal Enfield, M3M, Grab, LT Foods, and Aha OTT
              </span>
              . We bring that same rigor and infrastructure-first approach to every brand we partner with, from paid acquisition to automation systems.
            </p>
            <div className="mt-10 surface p-8">
              <p className="label-mono text-primary mb-6">We Work Best With Businesses That</p>
              <ul className="space-y-4">
                {[
                  "Value performance over vanity",
                  "Want systems over shortcuts",
                  "Are ready to scale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-secondary-foreground">
                    <div className="icon-tile w-8 h-8 rounded-lg">
                      <Check size={14} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic font-display">
                If that sounds like you, we'll get along well.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Philosophy bento */}
    <section className="section-pad relative overflow-hidden">
      <div className="floating-orb w-[450px] h-[450px] top-0 -right-40" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="People-led thinking. AI-driven execution."
          description="We pair experienced strategists with AI-accelerated production, so ideas move from insight to execution faster than traditional agencies can manage."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {philosophy.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="surface surface-hover p-8 h-full">
                <div className="icon-tile mb-6">
                  <item.icon size={20} />
                </div>
                <h3 className="display-md">{item.title}</h3>
                <p className="body-lg mt-3">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How we work */}
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 section-texture-alt" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="How We Work"
          title="A repeatable process built for scale"
          description="No guesswork: every engagement follows the same disciplined path from diagnosis to compounding results."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="surface surface-hover p-7 h-full relative">
                <span className="label-mono text-primary/60 absolute top-6 right-7">{item.step}</span>
                <div className="icon-tile mb-6">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <ClientMarquee />

    {/* Values */}
    <section className="section-pad relative overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Our Values"
          title="What we hold ourselves to"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="surface surface-hover p-7 h-full text-center">
                <div className="icon-tile mx-auto mb-5">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* HQ */}
    <section className="section-pad-sm relative overflow-hidden">
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="surface p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="flex items-center gap-5">
              <div className="icon-tile w-14 h-14 rounded-2xl">
                <MapPin size={22} />
              </div>
              <div>
                <p className="label-mono text-primary mb-2">Headquartered In</p>
                <h3 className="display-md">Gurugram, India</h3>
              </div>
            </div>
            <p className="body-lg max-w-md">
              We work with brands globally, but our roots, and our team, are based out of Gurugram, India.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default About;
