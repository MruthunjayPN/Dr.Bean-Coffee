import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/framer-animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Dr.Bean Downtown',
    address: '123 Coffee Street, Downtown',
    city: 'New York, NY 10001',
    phone: '+1 (212) 555-1234',
    hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    id: 2,
    name: 'Dr.Bean Uptown',
    address: '456 Bean Avenue, Uptown',
    city: 'New York, NY 10025',
    phone: '+1 (212) 555-5678',
    hours: 'Mon-Fri: 6am-7pm, Sat-Sun: 7am-8pm',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Dr.Bean Waterfront',
    address: '789 Espresso Drive, Waterfront',
    city: 'San Francisco, CA 94111',
    phone: '+1 (415) 555-9012',
    hours: 'Mon-Sun: 7am-9pm',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Dr.Bean Lakeside',
    address: '101 Mocha Road, Lakeside',
    city: 'Chicago, IL 60601',
    phone: '+1 (312) 555-3456',
    hours: 'Mon-Fri: 6:30am-8pm, Sat-Sun: 7am-7pm',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export function Locations() {
  return (
    <section id="locations" className="py-20">
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
            Our <span className="text-primary">Locations</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Visit one of our cozy coffee shops and experience the Dr.Bean difference in person.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Location */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-2 coffee-card"
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={locations[0].image} 
                    alt={locations[0].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">Featured Location</span>
                    </div>
                    <CardTitle className="text-2xl">{locations[0].name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p>{locations[0].address}</p>
                          <p>{locations[0].city}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <p>{locations[0].hours}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <p>{locations[0].phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Locations */}
          {locations.slice(1).map((location, index) => (
            <motion.div
              key={location.id}
              variants={fadeIn('up', 0.1 * (index + 4))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="coffee-card"
            >
              <Card className="overflow-hidden h-full">
                <div className="h-48">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{location.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{location.hours}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <p>{location.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}