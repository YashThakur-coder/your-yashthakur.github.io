import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { stats } from "@/lib/constants";
import { useEffect, useState } from "react";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isIntersecting) {
      stats.forEach((stat, index) => {
        const increment = stat.value / 100;
        let current = 0;
        
        const timer = setInterval(() => {
          if (current < stat.value) {
            current = Math.min(current + increment, stat.value);
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = Number(current.toFixed(1));
              return newStats;
            });
          } else {
            clearInterval(timer);
          }
        }, 20);
      });
    }
  }, [isIntersecting]);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm Yash Thakur, a final-year Computer Science student at SIES College, Nerul, with a strong passion for technology and problem-solving. I've grown up in a diverse environment that has shaped both my technical and interpersonal skills.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Over the past few years, I've built a solid foundation in Python, SQL, Django, Machine Learning, and Data Structures & Algorithms. I've actively applied these skills in real-world projects—building dynamic web applications, creating predictive analytics models, and designing efficient algorithms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond academics, I bring a competitive and team-oriented spirit as a passionate football player. I'm now looking to channel my technical knowledge into innovative projects where I can learn, grow, and contribute meaningfully.
              </p>
            </div>
            
            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 sm:gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white dark:bg-dark-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[hsl(246,83%,68%)]">
                    {animatedStats[index]}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image Placeholder */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <User className="w-32 h-32 text-white" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(246,83%,68%)]/20 to-[hsl(271,91%,65%)]/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
