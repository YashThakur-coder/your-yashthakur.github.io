import { motion } from "framer-motion";
import { Code, Globe, Database } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { skills } from "@/lib/constants";

const categoryIcons = {
  "Programming Languages": Code,
  "Web Technologies": Globe,
  "Database & Tools": Database,
};

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={category}
                className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-[hsl(246,83%,68%)] mr-3" />
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-[hsl(246,83%,68%)]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: isIntersecting ? `${skill.level}%` : 0 
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
