import { motion } from "framer-motion";
import { experience } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center">
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[hsl(246,83%,68%)] rounded-full border-4 border-white dark:border-dark-900 z-10"
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                    <motion.div
                      className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover-lift"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[hsl(246,83%,68%)]">{exp.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[hsl(239,100%,98%)] dark:bg-[hsl(246,83%,68%)]/20 text-[hsl(246,83%,68%)] text-xs rounded-full border border-[hsl(246,83%,68%)]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
