import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
  stats?: { value: string; label: string }[];
  align?: "left" | "center";
}

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  actions,
  stats,
  align = "left",
}: PageHeroProps) => {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28">
      {/* Video Background matching the home hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {image && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={image}
            alt={imageAlt}
            className="hero-media w-full h-full object-cover opacity-[0.15]"
            loading="eager"
          />
        </div>
      )}

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
            <span className={`eyebrow bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg ${centered ? "mx-auto" : ""}`}>
              <Sparkles size={12} className="text-primary" />
              {eyebrow}
            </span>
            <h1 className="display-xl mt-7 text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.95)]">{title}</h1>
            {description && (
              <p
                className={`body-lg mt-7 max-w-xl text-slate-100/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)] ${centered ? "mx-auto" : ""}`}
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
                <div key={s.label} className="surface p-6 bg-card/85 backdrop-blur-md border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
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
