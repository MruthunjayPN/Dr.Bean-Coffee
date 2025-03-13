import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { menuCategories, menuItems } from '@/constants';

export function Menu() {
  const renderMenuItems = (category: keyof typeof menuItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems[category].map((item) => (
        <Card 
          key={item.name} 
          className="bg-background shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-110 hover:shadow-xl relative z-10 hover:z-20"
        >
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
  );

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
            {renderMenuItems('hot')}
          </TabsContent>
          <TabsContent value="cold">
            {renderMenuItems('cold')}
          </TabsContent>
          <TabsContent value="food">
            {renderMenuItems('food')}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}