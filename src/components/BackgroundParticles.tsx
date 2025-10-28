import { motion } from "framer-motion";

const BackgroundParticles = () => {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-brand-teal to-brand-purple opacity-30"
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;