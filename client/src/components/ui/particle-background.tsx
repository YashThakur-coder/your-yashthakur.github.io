import { motion } from "framer-motion";

export function ParticleBackground() {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[hsl(246,83%,68%)] opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
