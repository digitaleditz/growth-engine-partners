import { Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const col1 = [
  { name: "Business Owner", company: "Pushti Turf", text: "DigitalEditz transformed our launch campaign into a record-breaking event. The ROI exceeded every expectation we had. Absolutely world-class execution." },
  { name: "Campaign Manager", company: "Government Project", text: "Exceptional digital strategy and execution. Engagement numbers were unprecedented across every platform." },
  { name: "CEO", company: "Ceefle Ventures", text: "They don't just run ads — they build systems. Our lead pipeline has never been more predictable or profitable." },
  { name: "Director", company: "Tukra Industries", text: "The team's strategic approach to our digital presence resulted in measurable growth within weeks." },
  { name: "Founder", company: "Zivara Mart", text: "From zero online presence to consistent daily orders. DigitalEditz made it happen." },
];

const col2 = [
  { name: "Real Estate Client", company: "Kapahi Properties", text: "Their WhatsApp funnel strategy changed how we generate and convert leads. Game-changer for real estate." },
  { name: "Brand Director", company: "Kashmir Ply Co", text: "Professional, data-driven, and endlessly creative. They understand brand building at a deep level." },
  { name: "Owner", company: "Muscle Matrix Gym", text: "Membership signups tripled in two months. The Meta Ads strategy was surgical in its precision." },
  { name: "Marketing Head", company: "Khalis Oil", text: "Our brand awareness skyrocketed. The content strategy they built is still delivering results months later." },
  { name: "Founder", company: "Kashi Tours", text: "Bookings increased dramatically. Their understanding of tourism marketing is unmatched." },
];

const ReviewCard = ({ name, company, text }: { name: string; company: string; text: string }) => (
  <div className="glass rounded-2xl p-7 border border-border/30 hover:border-primary/20 transition-all duration-500">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star key={j} size={12} className="fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-secondary-foreground/80 mb-6 leading-relaxed">"{text}"</p>
    <div className="pt-4 border-t border-border/30">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs text-muted-foreground/60 label-mono mt-1">{company}</p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-28 relative overflow-hidden section-texture-alt">
    <div className="absolute inset-0 grid-pattern opacity-15" />
    <div className="container relative z-10">
      <ScrollReveal>
        <p className="label-mono text-primary text-center mb-4">Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h2>
      </ScrollReveal>

      {/* Two-column animated testimonials */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Fade top/bottom */}
        <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-5 h-full">
          {/* Column 1 — scrolls up */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-5"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...col1, ...col1].map((t, i) => (
                <ReviewCard key={`c1-${i}`} {...t} />
              ))}
            </motion.div>
          </div>

          {/* Column 2 — scrolls down */}
          <div className="relative overflow-hidden hidden md:block">
            <motion.div
              className="flex flex-col gap-5"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            >
              {[...col2, ...col2].map((t, i) => (
                <ReviewCard key={`c2-${i}`} {...t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
