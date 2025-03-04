import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Instagram, Facebook, Linkedin, Github, Mail } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "Github" },
  { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
];

export function SocialSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="bg-primary text-primary-foreground p-2 rounded-l-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 right-0 bg-background border rounded-l-lg shadow-lg py-4 px-2"
          >
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 