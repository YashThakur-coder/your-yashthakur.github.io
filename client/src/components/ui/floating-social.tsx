import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export function FloatingSocial() {
  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Phone,
      href: `tel:${personalInfo.phone}`,
      label: "Phone",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "bg-gray-700 hover:bg-gray-800",
    },
  ];

  return (
    <motion.div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center text-white shadow-lg group relative overflow-hidden`}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
        >
          <link.icon className="w-5 h-5 relative z-10" />
          
          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {link.label}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0 rounded-full"
            whileHover={{ opacity: 0.2, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
}