import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Award, Coffee, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">Dr.Bean</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Inspired by the iconic Mr. Bean character, Dr.Bean brings a touch of whimsy and excellence to the world of coffee.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee Shop"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">25+</span>
                <span className="text-sm text-muted-foreground">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h3
              variants={fadeIn('left', 0.2)}
              className="text-2xl font-bold mb-6"
            >
              Our Coffee Journey
            </motion.h3>
            <motion.p
              variants={fadeIn('left', 0.3)}
              className="text-muted-foreground mb-6"
            >
              Dr.Bean was founded with a simple mission: to bring joy and exceptional quality to coffee lovers everywhere. What started as a small café has grown into a beloved brand with a global presence.
            </motion.p>
            <motion.p
              variants={fadeIn('left', 0.4)}
              className="text-muted-foreground mb-8"
            >
              Our teddy mascot, inspired by Mr. Bean's iconic companion, symbolizes the comfort and happiness we aim to deliver with every cup. We source only the finest beans, roast them to perfection, and serve them with a smile.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: <Coffee className="h-8 w-8 text-primary" />, title: 'Premium Beans', desc: 'Sourced globally' },
                { icon: <Award className="h-8 w-8 text-primary" />, title: 'Award Winning', desc: 'Recognized quality' },
                { icon: <Users className="h-8 w-8 text-primary" />, title: 'Community', desc: 'Coffee lovers unite' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.1 * (index + 5))}
                  className="bg-card p-4 rounded-lg text-center"
                >
                  <div className="mb-2 flex justify-center">{item.icon}</div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}