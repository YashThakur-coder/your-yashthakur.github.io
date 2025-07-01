import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/constants";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-dark-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[hsl(239,100%,98%)] dark:bg-[hsl(246,83%,68%)]/20 text-[hsl(246,83%,68%)] dark:text-[hsl(246,83%,68%)] text-sm rounded-full border border-[hsl(246,83%,68%)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Challenges & Solutions</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Outcome</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-[hsl(246,83%,68%)] transition-colors">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-[hsl(246,83%,68%)] transition-colors">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
