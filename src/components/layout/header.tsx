import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme-provider';
import { Moon, ShoppingBag, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-end">
        <div className={cn(
          "flex items-center gap-2 p-2 rounded-full transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md opacity-100" : "bg-transparent opacity-0"
        )}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 