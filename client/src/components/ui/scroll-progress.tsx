import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
