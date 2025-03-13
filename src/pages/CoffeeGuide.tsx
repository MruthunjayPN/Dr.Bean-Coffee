import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Heart, Brain, Sun, Moon, Zap, Coffee } from 'lucide-react';

interface MoodCoffee {
  mood: string;
  icon: JSX.Element;
  coffee: string;
  description: string;
  preparation: string;
  image: string;
}

interface HealthBenefit {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const moodCoffees: MoodCoffee[] = [
  {
    mood: 'Happy',
    icon: <Heart className="h-8 w-8 text-amber-600" />,
    coffee: 'Light Roast Ethiopian',
    description: 'Bright, fruity notes that elevate your mood with natural sweetness and vibrant acidity.',
    preparation: 'Best brewed as a pour-over to highlight the delicate flavors.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Focused',
    icon: <Brain className="h-8 w-8 text-amber-600" />,
    coffee: 'Medium Roast Colombian',
    description: 'Well-balanced with caramel sweetness and nutty undertones to keep you alert and concentrated.',
    preparation: 'French press for full body and rich flavor that sustains attention.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Energetic',
    icon: <Zap className="h-8 w-8 text-amber-600" />,
    coffee: 'Light-Medium Kenyan',
    description: 'Bold, berry-forward profile with high acidity that provides an invigorating kick.',
    preparation: 'Aeropress for a clean, punchy cup that maximizes caffeine extraction.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Relaxed',
    icon: <Sun className="h-8 w-8 text-amber-600" />,
    coffee: 'Medium-Dark Guatemalan',
    description: 'Smooth chocolate notes with subtle spice that soothes while providing gentle stimulation.',
    preparation: 'Traditional drip method for a familiar, comforting experience.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    mood: 'Contemplative',
    icon: <Moon className="h-8 w-8 text-amber-600" />,
    coffee: 'Dark Sumatra',
    description: 'Earthy, full-bodied profile with low acidity that encourages deep thought and reflection.',
    preparation: 'Moka pot for a rich, concentrated experience that slows you down.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const healthBenefits: HealthBenefit[] = [
  {
    title: 'Antioxidant Rich',
    description: 'Coffee contains powerful antioxidants like chlorogenic acid that help fight inflammation and protect cells from damage.',
    icon: <Coffee className="h-8 w-8 text-amber-600" />,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Cognitive Function',
    description: 'Regular coffee consumption is linked to improved cognitive function and may reduce risk of neurodegenerative diseases.',
    icon: <Brain className="h-8 w-8 text-amber-600" />,
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Physical Performance',
    description: 'Caffeine increases adrenaline levels and releases fatty acids from fat tissues, improving physical performance by 11-12%.',
    icon: <Zap className="h-8 w-8 text-amber-600" />,
    image: 'https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Metabolic Health',
    description: 'Studies show coffee may help with weight management and reduce risk of type 2 diabetes by improving insulin sensitivity.',
    icon: <Heart className="h-8 w-8 text-amber-600" />,
    image: 'https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export function CoffeeGuide() {
  return (
    <div className="min-h-screen bg-[#E4CDA7] font-['Playfair_Display']">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <motion.div 
          variants={fadeIn('down', 0.2)}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-[#8E3200] mb-6">
            The Coffee Chronicle
          </h1>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-[#A64B2A] max-w-2xl mx-auto italic">
            A curated guide to finding your perfect brew based on mood and wellness
          </p>
        </motion.div>

        {/* Mood-Based Coffee Section */}
        <section className="mb-24">
          <motion.h2 
            variants={fadeIn('up', 0.3)}
            className="text-4xl text-amber-900 mb-12 text-center"
          >
            Coffee for Every Mood
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {moodCoffees.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * (index + 3))}
                className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.coffee} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{item.mood}</h3>
                  <h4 className="text-lg text-amber-700 mb-3 italic">{item.coffee}</h4>
                  <p className="text-amber-800 mb-4">{item.description}</p>
                  <p className="text-sm text-[#1C0A00] border-t border-amber-200 pt-4">
                    <strong>Barista's Tip:</strong> {item.preparation}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Health Benefits Section */}
        <section>
          <motion.h2 
            variants={fadeIn('up', 0.3)}
            className="text-4xl text-amber-900 mb-12 text-center"
          >
            Coffee & Wellness
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {healthBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.2)}
                className="flex gap-6 items-start bg-white/80 p-6 rounded-lg hover:bg-white transition-colors duration-300"
              >
                <div className="flex-shrink-0 bg-amber-100 p-4 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-amber-800">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
} 