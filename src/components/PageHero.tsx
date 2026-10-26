import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  stats?: { value: string; label: string }[];
  align?: "left" | "center";
}

const PageHero = ({
  eyebrow,
  title,
  description,
  actions,
  stats,
  align = "left",
}: PageHeroProps) => {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28">
      {/* Dark mode cinematic video background */}
      <div className="dark:block hidden absolute inset-0 pointer-events-none overflow-hidden">
        <video
          src="/hero-bg.mp4"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="w-full h-full object-cover opacity-85"
        />
        {/* Scrim for contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background pointer-events-none" />
      </div>

      {/* Light mode clean, luminous tech backdrop */}
      <div className="dark:hidden block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-background to-background" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-primary/[0.08] rounded-full blur-[130px]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="container relative z-10">
        <div
          className={`grid gap-8 md:gap-12 items-end ${
            centered ? "max-w-3xl mx-auto text-center" : "lg:grid-cols-[1.15fr_0.85fr]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={`eyebrow dark:bg-black/60 dark:border-white/20 dark:text-white bg-primary/10 border-primary/25 text-primary shadow-sm ${
                centered ? "mx-auto" : ""
              }`}
            >
              <Sparkles size={12} className="text-primary" />
              {eyebrow}
            </span>
            <h1 className="display-xl mt-7 text-foreground dark:text-white dark:[text-shadow:0_4px_24px_rgba(0,0,0,0.95)]">
              {title}
            </h1>
            {description && (
              <p
                className={`body-lg mt-7 max-w-xl text-muted-foreground dark:text-slate-100/90 dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.9)] ${
                  centered ? "mx-auto" : ""
                }`}
              >
                {description}
              </p>
            )}
            {actions && (
              <div
                className={`mt-10 flex flex-col sm:flex-row gap-4 ${
                  centered ? "justify-center" : ""
                }`}
              >
                {actions}
              </div>
            )}
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-2 gap-3 ${centered ? "max-w-md mx-auto w-full" : ""}`}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="surface p-6 dark:bg-card/85 dark:backdrop-blur-md dark:border-border/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] bg-card border-border/80 shadow-sm"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="label-mono text-muted-foreground mt-2 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="container relative z-10 mt-16 md:mt-20">
        <div className="hairline" />
      </div>
    </section>
  );
};

export default PageHero;
