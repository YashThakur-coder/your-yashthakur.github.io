import { motion } from "framer-motion";
import { ChevronDown, Code, Mail } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { personalInfo } from "@/lib/constants";

export function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(239,100%,98%)] via-[hsl(271,91%,65%)]/10 to-[hsl(184,100%,95%)] dark:from-dark-900 dark:via-[hsl(271,91%,65%)]/20 dark:to-[hsl(184,100%,20%)]/20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)]">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="typing-text overflow-hidden whitespace-nowrap">
              {personalInfo.title}
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] text-white font-semibold rounded-full hover:from-[hsl(243,75%,59%)] hover:to-[hsl(271,81%,56%)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center px-8 py-4 border-2 border-[hsl(246,83%,68%)] text-[hsl(246,83%,68%)] font-semibold rounded-full hover:bg-[hsl(246,83%,68%)] hover:text-white transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          className="text-gray-600 dark:text-gray-400 hover:text-[hsl(246,83%,68%)] transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
