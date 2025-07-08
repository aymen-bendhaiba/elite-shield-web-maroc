
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Car, 
  Calendar, 
  GraduationCap, 
  Filter, 
  Eye,
  Users,
  Building,
  Camera
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Eye },
    { id: 'protection', name: 'Protection', icon: Shield },
    { id: 'transport', name: 'Transport', icon: Car },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'training', name: 'Training', icon: GraduationCap }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "VIP Protection Team",
      category: "protection",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      description: "Professional bodyguard team in action"
    },
    {
      id: 2,
      title: "Secure Transportation",
      category: "transport", 
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Armored vehicles for VIP transport"
    },
    {
      id: 3,
      title: "Event Security",
      category: "events",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Security monitoring during corporate events"
    },
    {
      id: 4,
      title: "Tactical Training",
      category: "training",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      description: "Security team tactical training session"
    },
    {
      id: 5,
      title: "Discreet Protection",
      category: "protection",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      description: "Surveillance and discreet protection"
    },
    {
      id: 6,
      title: "Professional Equipment",
      category: "training",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop",
      description: "Professional security equipment"
    },
    {
      id: 7,
      title: "Secure Escort",
      category: "transport",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
      description: "Secure escort and accompaniment service"
    },
    {
      id: 8,
      title: "International Event",
      category: "events",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      description: "Security for international events"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-security-navy to-security-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Our Expertise in{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our expertise through our missions and training programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-security-gold to-security-silver text-security-dark"
                    : "border-security-gold/30 text-security-gold hover:bg-security-gold hover:text-security-dark"
                } font-montserrat font-semibold transition-all duration-300`}
              >
                <IconComponent className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="bg-security-dark/50 border-security-gold/20 hover:border-security-gold/50 transition-all duration-300 cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-security-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <Camera className="h-6 w-6 text-security-gold mb-2" />
                          <p className="text-white text-sm">Click to enlarge</p>
                        </div>
                      </div>
                      <Badge 
                        className="absolute top-3 right-3 bg-security-gold text-security-dark"
                      >
                        {categories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-montserrat font-semibold text-white group-hover:text-security-gold transition-colors duration-300 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-roboto text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-security-dark border-security-gold/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <Badge className="bg-security-gold text-security-dark">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </Badge>
                    <h3 className="font-montserrat font-bold text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="font-roboto text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-4">
                      <h4 className="font-montserrat font-semibold text-security-gold mb-2">
                        Features
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Discreet and professional protection</li>
                        <li>• Highly qualified team</li>
                        <li>• State-of-the-art equipment</li>
                        <li>• Absolute confidentiality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="font-roboto text-gray-300 max-w-2xl mx-auto">
            All our images respect client confidentiality. 
            Faces and sensitive details are intentionally blurred to preserve anonymity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
