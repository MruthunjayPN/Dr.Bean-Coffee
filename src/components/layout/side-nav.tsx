import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, X, Home, Info, ShoppingCart, MapPin, UtensilsCrossed, Mail, LucideBookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Products', href: '#products', icon: ShoppingCart },
  { name: 'Locations', href: '#locations', icon: MapPin },
  { name: 'Menu', href: '#menu', icon: UtensilsCrossed },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 items-center">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-primary text-primary-foreground p-2 rounded-l-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0  border-l border-border p-4 shadow-lg w-[80px] flex flex-col items-center justify-center"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-l-md rounded-r-none"
              >
                <X className="h-6 w-6" />
              </Button>

              <TooltipProvider>
                <nav className="flex flex-col gap-3 bg-card">
                  {navLinks.map((link) => (
                    <Tooltip key={link.name}>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={link.href}
                          className="block"
                          onClick={() => setIsOpen(false)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10"
                          >
                            <link.icon className="h-5 w-5" />
                          </Button>
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/coffee-guide"
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-10 h-10"
                          >
                            <LucideBookOpen className="h-5 w-5" />
                          </Button>
                        </Link>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Coffee Guide</p>
                    </TooltipContent>
                  </Tooltip>
                </nav>
              </TooltipProvider>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 