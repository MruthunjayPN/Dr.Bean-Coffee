import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, slideIn, staggerContainer } from '@/lib/framer-animations';
import { Coffee, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Coffee Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 hero-gradient bg-black/30"></div>
      </div>
      <motion.div
        className="absolute top-8 left-0 right-0 mx-auto text-center z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          rotate: {
            duration: 4,
            ease: "easeInOut"
          }
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white text-balance tracking-tight">
          Dr.
          <span className="text-primary-foreground">Bean</span>
        </h1>
      </motion.div>
      <div className="container mx-auto px-4 z-10 py-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto"
        >
          <motion.div 
            variants={fadeIn('right', 0.5)} 
            className="lg:max-w-xl"
            animate={{
              x: [0, 12, 0],
              y: [0, 10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="mb-3 inline-block bg-primary/20 backdrop-blur-sm px-4 py-1 rounded-full"
              animate={{
                scale: [1, 1.10, 1],
                opacity: [1, 0.85, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <span className="text-primary-foreground font-semibold">Premium Coffee Experience</span>
            </motion.div>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              animate={{
                y: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              Discover the Art of <br />
              <span className="text-coffee-light">Perfect Coffee</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.5)}
              className="text-base text-white/90 mb-6 max-w-lg"
              animate={{
                opacity: [1, 0.7, 1],
                y: [0, 8, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              Dr.Bean brings you the finest selection of coffee beans from around the world, 
              expertly roasted to perfection for an unparalleled coffee experience.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              className="flex flex-wrap gap-3"
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <Button size="default" className="bg-coffee-medium hover:bg-coffee-dark text-white">
                Explore Our Coffee <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="default" variant="outline" className="border-white text-white hover:bg-white/10">
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
              <video
                src="/assets/heroVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-full max-h-[700px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-card p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-coffee-dark" />
                  <span className="font-medium text-sm">Premium Beans</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-card p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">Expertly Roasted</span>
                  <Coffee className="h-4 w-4 text-coffee-dark" />
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