import { motion } from "framer-motion";

const clients = [
  "VIVO", "MOS P&D Usman Majid", "SKAUST", "Kapahi Properties",
  "Vishwa Guru Bharat Trust", "Muscle Matrix Gym", "Aditya Astro",
  "Kashmir Ply Co.", "Kashi Tours", "Zivara Mart", "Tukra Industries",
  "K.K Collections", "Khalis Oil", "Ceefle Ventures", "Noor",
  "Shivika Infra", "SS Consultants", "Ar. Naveen Vij",
];

const ClientMarquee = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mb-12">
        <p className="label-mono text-primary text-center mb-4">Our Clients</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Brands We've Scaled
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="glass rounded-xl px-8 py-5 text-sm font-medium text-secondary-foreground/80 whitespace-nowrap hover:text-primary hover:border-primary/20 transition-all duration-300 border border-border/30 shrink-0"
            >
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;
