import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, slideIn, staggerContainer } from '@/lib/framer-animations';
import { Coffee, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Coffee Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn('right', 0.2)}>
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="mb-4 inline-block bg-primary/20 backdrop-blur-sm px-4 py-1 rounded-full"
            >
              <span className="text-primary-foreground font-medium">Premium Coffee Experience</span>
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Discover the Art of <br />
              <span className="text-coffee-light">Perfect Coffee</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.5)}
              className="text-lg text-white/90 mb-8 max-w-lg"
            >
              Dr.Bean brings you the finest selection of coffee beans from around the world, 
              expertly roasted to perfection for an unparalleled coffee experience.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-coffee-medium hover:bg-coffee-dark text-white">
                Explore Our Coffee <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="hidden lg:block"
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee Cup"
                className="rounded-2xl shadow-2xl max-w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-coffee-dark" />
                  <span className="font-medium">Premium Beans</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Expertly Roasted</span>
                  <Coffee className="h-5 w-5 text-coffee-dark" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}