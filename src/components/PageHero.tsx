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
      {/* Backdrop */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dot-grid opacity-[0.35]" />
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-[0.18]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
      )}
      <div className="floating-orb w-[520px] h-[520px] -top-40 -left-40 animate-float" />

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
            <span className={`eyebrow ${centered ? "mx-auto" : ""}`}>
              <Sparkles size={12} />
              {eyebrow}
            </span>
            <h1 className="display-xl mt-7">{title}</h1>
            {description && (
              <p
                className={`body-lg mt-7 max-w-xl ${centered ? "mx-auto" : ""}`}
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
                <div key={s.label} className="surface p-6">
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
