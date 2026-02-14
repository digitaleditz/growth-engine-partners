import { motion } from "framer-motion";

const LoaderScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Outer glow ring */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Orbiting light dots */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_4px_hsl(199_93%_60%/0.6)]" />
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_8px_3px_hsl(199_93%_60%/0.4)]" />
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_3px_hsl(199_93%_60%/0.3)]" />
        </motion.div>

        {/* Globe */}
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Globe circle */}
            <circle cx="50" cy="50" r="45" stroke="hsl(199 93% 60%)" strokeWidth="1.5" opacity="0.4" />
            {/* Horizontal lines */}
            <ellipse cx="50" cy="35" rx="40" ry="8" stroke="hsl(199 93% 60%)" strokeWidth="1" opacity="0.25" />
            <ellipse cx="50" cy="50" rx="45" ry="12" stroke="hsl(199 93% 60%)" strokeWidth="1" opacity="0.35" />
            <ellipse cx="50" cy="65" rx="40" ry="8" stroke="hsl(199 93% 60%)" strokeWidth="1" opacity="0.25" />
            {/* Vertical meridian */}
            <ellipse cx="50" cy="50" rx="18" ry="45" stroke="hsl(199 93% 60%)" strokeWidth="1" opacity="0.3" />
            <ellipse cx="50" cy="50" rx="35" ry="45" stroke="hsl(199 93% 60%)" strokeWidth="1" opacity="0.2" />
            {/* Center glow */}
            <circle cx="50" cy="50" r="45" fill="url(#globeGlow)" />
            <defs>
              <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(199 93% 60%)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(199 93% 60%)" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Outer ring glow */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-primary/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-primary/10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Brand text */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="font-display text-2xl font-bold tracking-tight">
          Digital<span className="text-primary">Editz</span>
        </h2>
        <p className="text-xs text-muted-foreground/50 label-mono mt-3">Loading experience</p>
      </motion.div>

      {/* Auto-dismiss after 2.5s */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 2500);
        }}
      />
    </motion.div>
  );
};

export default LoaderScreen;
