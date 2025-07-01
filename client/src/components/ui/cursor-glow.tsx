import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-30 hidden lg:block"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
        opacity: isVisible ? 0.15 : 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    >
      <div className="w-[500px] h-[500px] bg-gradient-radial from-[hsl(246,83%,68%)] to-transparent rounded-full blur-3xl" />
    </motion.div>
  );
}