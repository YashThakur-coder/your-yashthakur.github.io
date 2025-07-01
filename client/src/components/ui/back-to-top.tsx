import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

export function BackToTop() {
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrollY > 300 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[hsl(246,83%,68%)] text-white rounded-full shadow-lg hover:bg-[hsl(243,75%,59%)] transform hover:scale-110 transition-all duration-300 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
