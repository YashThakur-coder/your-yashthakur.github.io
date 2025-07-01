import { motion } from "framer-motion";
import { Eye, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/constants";
import { ProjectModal } from "@/components/ui/project-modal";

const categories = ["all", "web", "ml", "desktop"];
const categoryLabels = {
  all: "All",
  web: "Web",
  ml: "AI/ML", 
  desktop: "Desktop"
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(246,83%,68%)] to-[hsl(271,91%,65%)] mx-auto"></div>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full border-2 border-[hsl(246,83%,68%)] font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[hsl(246,83%,68%)] text-white"
                  : "text-[hsl(246,83%,68%)] hover:bg-[hsl(246,83%,68%)] hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${project.badgeColor} text-white text-xs font-semibold rounded-full`}>
                    {project.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[hsl(239,100%,98%)] dark:bg-[hsl(246,83%,68%)]/20 text-[hsl(246,83%,68%)] text-xs rounded-full border border-[hsl(246,83%,68%)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex items-center text-[hsl(246,83%,68%)] hover:text-[hsl(243,75%,59%)] font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </motion.button>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      className="text-gray-500 hover:text-[hsl(246,83%,68%)] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="text-gray-500 hover:text-[hsl(246,83%,68%)] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectId={selectedProject}
      />
    </section>
  );
}
