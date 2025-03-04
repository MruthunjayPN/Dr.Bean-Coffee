import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SideNav } from '@/components/layout/side-nav';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { CoffeeDocs } from '@/components/sections/coffee-docs';
import { Products } from '@/components/sections/products';
import { Locations } from '@/components/sections/locations';
import { Menu } from '@/components/sections/menu';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (function(this: HTMLAnchorElement, e: MouseEvent) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }) as EventListener);
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative h-auto">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX }}
        />
        
        <Header />
        <SideNav />
        <main className="min-h-screen">
          <Hero />
          <About />
          <CoffeeDocs />
          <Products />
          <Locations />
          <Menu />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;