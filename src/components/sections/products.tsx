import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Signature Blend Beans',
    description: 'Our flagship blend with notes of chocolate, caramel, and a hint of citrus.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'beans',
    rating: 4.9,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Ethiopian Single Origin',
    description: 'Bright and fruity with distinctive blueberry notes and a clean finish.',
    price: 16.99,
    image: 'https://cdn.shopify.com/s/files/1/1475/5488/files/ethiopia-12oz-front.jpg?v=1701785594',
    category: 'beans',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Dr.Bean Ceramic Mug',
    description: 'Handcrafted ceramic mug featuring our teddy mascot. Holds 12oz of your favorite brew.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mugs',
    rating: 4.8,
    badge: 'New'
  },
  {
    id: 4,
    name: 'Cold Brew Concentrate',
    description: 'Smooth and rich cold brew concentrate. Just add water or milk for a perfect iced coffee.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'powders',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Travel Tumbler',
    description: 'Double-walled stainless steel tumbler that keeps your coffee hot for hours.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'mugs',
    rating: 4.9
  },
  {
    id: 6,
    name: 'Instant Coffee Packets',
    description: 'Premium instant coffee for when you need your fix on the go. 10 packets per box.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'powders',
    rating: 4.5,
    badge: 'Popular'
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-secondary/30">
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
            Our <span className="text-primary">Products</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            From premium coffee beans to stylish accessories, discover our curated collection.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeIn('up', 0.1 * (index + 3))}
              className="coffee-card"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-56 object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary">{product.badge}</Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{product.name}</CardTitle>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span>{product.rating} | {product.category}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}