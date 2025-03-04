import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Milk, IceCream, Cake } from 'lucide-react';

const menuCategories = [
  { id: 'hot', label: 'Hot Drinks', icon: <Coffee className="h-4 w-4" /> },
  { id: 'cold', label: 'Cold Drinks', icon: <IceCream className="h-4 w-4" /> },
  { id: 'food', label: 'Food', icon: <Cake className="h-4 w-4" /> },
];

const menuItems = {
  hot: [
    { name: 'Espresso', description: 'Pure coffee essence, intense and aromatic', price: 2.99, popular: true },
    { name: 'Americano', description: 'Espresso diluted with hot water', price: 3.49 },
    { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and milk foam', price: 4.29, popular: true },
    { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam', price: 4.49 },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 4.79 },
    { name: 'Flat White', description: 'Espresso with velvety steamed milk', price: 4.29 },
    { name: 'Macchiato', description: 'Espresso "stained" with a small amount of milk', price: 3.79 },
    { name: 'Dr.Bean Special', description: 'Our signature blend with cinnamon and vanilla', price: 5.49, popular: true },
  ],
  cold: [
    { name: 'Iced Coffee', description: 'Chilled coffee served over ice', price: 3.99 },
    { name: 'Cold Brew', description: 'Slow-steeped for 12 hours for a smooth, rich flavor', price: 4.49, popular: true },
    { name: 'Iced Latte', description: 'Espresso and cold milk over ice', price: 4.79 },
    { name: 'Frappuccino', description: 'Blended coffee with ice and your choice of flavors', price: 5.29, popular: true },
    { name: 'Iced Mocha', description: 'Espresso, chocolate, cold milk, and ice', price: 4.99 },
    { name: 'Affogato', description: 'Vanilla ice cream "drowned" with a shot of espresso', price: 5.49 },
    { name: 'Nitro Cold Brew', description: 'Cold brew infused with nitrogen for a creamy texture', price: 4.99, popular: true },
  ],
  food: [
    { name: 'Croissant', description: 'Buttery, flaky pastry', price: 3.49 },
    { name: 'Avocado Toast', description: 'Whole grain toast with smashed avocado and seasonings', price: 6.99, popular: true },
    { name: 'Blueberry Muffin', description: 'Moist muffin packed with fresh blueberries', price: 3.79 },
    { name: 'Breakfast Sandwich', description: 'Egg, cheese, and your choice of protein on a brioche bun', price: 5.99, popular: true },
    { name: 'Chocolate Chip Cookie', description: 'Freshly baked with premium chocolate', price: 2.49 },
    { name: 'Yogurt Parfait', description: 'Greek yogurt with granola and seasonal fruit', price: 4.99 },
    { name: 'Teddy Bear Cake', description: 'Our signature dessert inspired by Mr. Bean\'s teddy', price: 6.49, popular: true },
  ],
};

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-secondary/50">
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
            Our <span className="text-primary">Menu</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Explore our carefully crafted menu of coffee drinks and delicious food items.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="hot" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="hot">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.hot.map((item) => (
                <Card key={item.name} className="bg-background shadow-md rounded-lg p-6">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-primary">${item.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.popular && (
                      <div className="mt-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Popular</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}