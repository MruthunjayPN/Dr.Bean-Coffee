import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Coffee, Thermometer, Snowflake, Heart } from 'lucide-react';

export function CoffeeMenu() {
  return (
    <div className="min-h-screen bg-[#3C2A21] font-['Playfair_Display'] text-[#E5E5CB] overflow-hidden">
      <div className="container mx-auto px-4 py-8 h-screen overflow-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-2 text-[#D5CEA3]">
            Hot Classics
          </h1>
          <p className="text-lg italic text-[#E5E5CB]">
            Take a sip of freshly-brewed love, from exclusive coffees to authentic teas
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Soya Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-green-600 text-xs text-white px-2 py-1 rounded">VEGAN</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">SOYA CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              Energize your day with steamed soy milk and a shot of espresso
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(230ml | 90.20kcal)</span>
              <span>(330ml | 115.07kcal)</span>
            </div>
          </motion.div>

          {/* Café Mocha */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">CAFÉ MOCHA</h3>
            <p className="text-sm mb-3">
              Warm your heart with an espresso layered with chocolate sauce
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">(210ml | 129.05kcal)</div>
          </motion.div>

          {/* Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-1 rounded">BEST-SELLER</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              Get things done with a dark espresso in thick milk foam
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(250ml | 128.90kcal)</span>
              <span>(350ml | 180.46kcal)</span>
            </div>
          </motion.div>

          {/* Vanilla Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">VANILLA CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              We 'Vanilla'd' your favourite coffee to brighten up your day
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(250ml | 231.33kcal)</span>
              <span>(350ml | 323.89kcal)</span>
            </div>
          </motion.div>

          {/* Turmeric Ginger Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-1 rounded">CCD ORIGINAL</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">TURMERIC GINGER CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              Turmeric and ginger make your cappuccino super healthy
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(250ml | 179.7kcal)</span>
              <span>(350ml | 251.62kcal)</span>
            </div>
          </motion.div>

          {/* Café Latte */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-1 rounded">BEST-SELLER</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">CAFÉ LATTE</h3>
            <p className="text-sm mb-3">
              Brewing happy moments with rich espresso and steamed milk
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(250ml | 131.90kcal)</span>
              <span>(350ml | 184.66kcal)</span>
            </div>
          </motion.div>

          {/* Inverted Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-1 rounded">CCD ORIGINAL</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">INVERTED CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              Turn your blues upside down with steamed milk and a coffee ring
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">(210ml | 193.39kcal)</div>
          </motion.div>

          {/* Tangerine White Chocolate Cappuccino */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-1 rounded">CCD ORIGINAL</div>
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">TANGERINE WHITE CHOCOLATE CAPPUCCINO</h3>
            <p className="text-sm mb-3">
              Double your joy with our rich and fruity cappuccino with a zesty tang
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">[REGULAR/KING]</div>
            <div className="flex justify-between text-xs">
              <span>(250ml | 255.58kcal)</span>
              <span>(350ml | 357.81kcal)</span>
            </div>
          </motion.div>

          {/* Gourmet Belgian Hot Chocolate */}
          <motion.div
            variants={fadeIn('up', 0.9)}
            className="bg-[#1A120B] rounded-lg p-4 relative overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-1 text-[#D5CEA3]">GOURMET BELGIAN HOT CHOCOLATE</h3>
            <p className="text-sm mb-3">
              Because we love Belgian chocolate as much as you do
            </p>
            <div className="text-xs text-[#E5E5CB]/70 mb-1">(180ml | 173.97kcal)</div>
          </motion.div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mt-10"
        >
          <button className="bg-[#D5CEA3] text-[#1A120B] px-4 py-2 rounded-full flex items-center gap-2 font-medium">
            <Thermometer size={16} />
            Hot Drinks
          </button>
          <button className="bg-[#1A120B] text-[#D5CEA3] border border-[#D5CEA3] px-4 py-2 rounded-full flex items-center gap-2 font-medium">
            <Snowflake size={16} />
            Cold Drinks
          </button>
          <button className="bg-[#1A120B] text-[#D5CEA3] border border-[#D5CEA3] px-4 py-2 rounded-full flex items-center gap-2 font-medium">
            <Coffee size={16} />
            Add-ons
          </button>
        </motion.div>
      </div>
    </div>
  );
} 