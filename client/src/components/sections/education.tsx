import { motion } from "framer-motion";
import { GraduationCap, Award, Star } from "lucide-react";
import { education, certifications } from "@/lib/constants";

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <motion.div
              className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[hsl(246,83%,68%)] rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{education.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{education.institution}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{education.location}</span>
                <span className="text-sm text-gray-500">{education.year}</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-lg font-semibold text-[hsl(246,83%,68%)]">
                  CGPA: {education.cgpa}
                </span>
                <div className="ml-4 flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-yellow-500 fill-current opacity-50" />
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${cert.color} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-lg">{cert.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
