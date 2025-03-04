import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Sun, Moon, Zap, Coffee } from 'lucide-react';

const moodCoffees = [
  {
    mood: 'Happy',
    icon: <Heart className="h-6 w-6 text-primary" />,
    coffee: 'Light Roast Ethiopian',
    description: 'Bright, fruity notes that elevate your mood with natural sweetness and vibrant acidity.',
    preparation: 'Best brewed as a pour-over to highlight the delicate flavors.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Focused',
    icon: <Brain className="h-6 w-6 text-primary" />,
    coffee: 'Medium Roast Colombian',
    description: 'Well-balanced with caramel sweetness and nutty undertones to keep you alert and concentrated.',
    preparation: 'French press for full body and rich flavor that sustains attention.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Energetic',
    icon: <Zap className="h-6 w-6 text-primary" />,
    coffee: 'Light-Medium Kenyan',
    description: 'Bold, berry-forward profile with high acidity that provides an invigorating kick.',
    preparation: 'Aeropress for a clean, punchy cup that maximizes caffeine extraction.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Relaxed',
    icon: <Sun className="h-6 w-6 text-primary" />,
    coffee: 'Medium-Dark Guatemalan',
    description: 'Smooth chocolate notes with subtle spice that soothes while providing gentle stimulation.',
    preparation: 'Traditional drip method for a familiar, comforting experience.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Contemplative',
    icon: <Moon className="h-6 w-6 text-primary" />,
    coffee: 'Dark Sumatra',
    description: 'Earthy, full-bodied profile with low acidity that encourages deep thought and reflection.',
    preparation: 'Moka pot for a rich, concentrated experience that slows you down.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const healthBenefits = [
  {
    title: 'Antioxidant Rich',
    description: 'Coffee contains powerful antioxidants like chlorogenic acid that help fight inflammation and protect cells from damage.',
    icon: <Coffee className="h-6 w-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Cognitive Function',
    description: 'Regular coffee consumption is linked to improved cognitive function and may reduce risk of neurodegenerative diseases.',
    icon: <Brain className="h-6 w-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Physical Performance',
    description: 'Caffeine increases adrenaline levels and releases fatty acids from fat tissues, improving physical performance by 11-12%.',
    icon: <Zap className="h-6 w-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Metabolic Health',
    description: 'Studies show coffee may help with weight management and reduce risk of type 2 diabetes by improving insulin sensitivity.',
    icon: <Heart className="h-6 w-6 text-primary" />,
    image: 'https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export function CoffeeDocs() {
  return (
    <section id="coffee-docs" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Coffee <span className="text-primary">Documentation</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Discover the perfect coffee for your mood and learn about the health benefits of your daily brew.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="mood" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="mood">Coffee for Moods</TabsTrigger>
            <TabsTrigger value="health">Health Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mood">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {moodCoffees.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.1 * (index + 3))}
                  className="coffee-card"
                >
                  <Card>
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.coffee} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-2">
                      {item.icon}
                      <div>
                        <CardTitle>{item.mood}</CardTitle>
                        <CardDescription>{item.coffee}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{item.description}</p>
                      <p className="text-sm text-muted-foreground"><strong>Best Preparation:</strong> {item.preparation}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="health">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {healthBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.1 * (index + 3))}
                  className="coffee-card"
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={benefit.image} 
                          alt={benefit.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader className="flex flex-row items-center gap-2">
                          {benefit.icon}
                          <CardTitle>{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{benefit.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}