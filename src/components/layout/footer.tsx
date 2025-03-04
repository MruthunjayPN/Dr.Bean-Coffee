import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Coffee Beans', href: '#products' },
      { name: 'Brewing Equipment', href: '#' },
      { name: 'Merchandise', href: '#' },
      { name: 'Gift Cards', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Coffee Guide', href: '#coffee-docs' },
      { name: 'Brewing Tips', href: '#' },
      { name: 'Coffee Dictionary', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" 
                alt="Dr.Bean Teddy" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-primary">Dr.Bean</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Bringing joy and exceptional quality to coffee lovers everywhere. 
              Our teddy mascot symbolizes the comfort and happiness we aim to deliver with every cup.
            </p>
            <div className="flex flex-col space-y-4">
              <h4 className="font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input placeholder="Your email address" className="max-w-xs" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr.Bean Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}