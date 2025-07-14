
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
      title: "Executive VIP Transport",
      category: "transport",
      image: "/lovable-uploads/ab1e0f5f-9c5b-4c48-b115-383a84a1c2f2.png",
      description: "Premium luxury vehicle with professional security driver"
    },
    {
      id: 2,
      title: "Elite Protection Service",
      category: "protection", 
      image: "/lovable-uploads/fee073ba-2b95-40fa-8b0c-d144acb2cb21.png",
      description: "High-end executive protection at exclusive venues"
    },
    {
      id: 3,
      title: "Professional Security Detail",
      category: "protection",
      image: "/lovable-uploads/cd95aa62-a29c-4fb6-8f85-bed66373c02f.png",
      description: "Discreet close protection in scenic locations"
    },
    {
      id: 4,
      title: "Personal Security Officer",
      category: "protection",
      image: "/lovable-uploads/8cbb884d-59e5-4139-ae04-f690d2250f82.png",
      description: "Professional bodyguard ready for immediate response"
    },
    {
      id: 5,
      title: "Film Set Security",
      category: "events",
      image: "/lovable-uploads/337850b4-3f4d-4cb8-8571-eb3d403aba2c.png",
      description: "Specialized security for film production and media events"
    },
    {
      id: 6,
      title: "Luxury Ground Transport",
      category: "transport",
      image: "/lovable-uploads/c58bc254-8b2f-4f8f-952e-7a3376376851.png",
      description: "Premium fleet with private jet coordination"
    },
    {
      id: 7,
      title: "Location Security",
      category: "events",
      image: "/lovable-uploads/c7f49951-f9d8-42a3-b175-d10b154d56c0.png",
      description: "Professional security for outdoor events and filming"
    },
    {
      id: 8,
      title: "Airport VIP Service",
      category: "transport",
      image: "/lovable-uploads/17f7106f-0b7f-49bc-b84b-ae25a68b4e18.png",
      description: "Secure transport coordination with private aviation"
    },
    {
      id: 9,
      title: "Coastal Security Detail",
      category: "training",
      image: "/lovable-uploads/e487020a-db15-416f-9933-ada8fb7c51a1.png",
      description: "Specialized training and security in coastal environments"
    },
    {
      id: 10,
      title: "Executive Sedan Service",
      category: "transport",
      image: "/lovable-uploads/9e3861fb-4944-4d34-8bd6-d282ae514ded.png",
      description: "Professional chauffeur and security driver service"
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
