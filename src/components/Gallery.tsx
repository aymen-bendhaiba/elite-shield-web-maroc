
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
    { id: 'all', name: 'Tout', icon: Eye },
    { id: 'protection', name: 'Protection', icon: Shield },
    { id: 'transport', name: 'Transport', icon: Car },
    { id: 'events', name: 'Événements', icon: Calendar },
    { id: 'training', name: 'Formation', icon: GraduationCap }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Équipe de Protection VIP",
      category: "protection",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      description: "Équipe de protection rapprochée en mission"
    },
    {
      id: 2,
      title: "Transport Sécurisé",
      category: "transport", 
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop",
      description: "Véhicules blindés pour transport VIP"
    },
    {
      id: 3,
      title: "Sécurisation d'Événement",
      category: "events",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      description: "Sécurité lors d'événements corporatifs"
    },
    {
      id: 4,
      title: "Formation Tactique",
      category: "training",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      description: "Entraînement des équipes de sécurité"
    },
    {
      id: 5,
      title: "Protection Discrète",
      category: "protection",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      description: "Surveillance et protection discrète"
    },
    {
      id: 6,
      title: "Équipements Professionnels",
      category: "training",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop",
      description: "Matériel de sécurité professionnel"
    },
    {
      id: 7,
      title: "Escorte Sécurisée",
      category: "transport",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
      description: "Escorte et accompagnement sécurisé"
    },
    {
      id: 8,
      title: "Événement International",
      category: "events",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      description: "Sécurité pour événements internationaux"
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
            Notre Expertise en{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Images
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre savoir-faire à travers nos missions et formations
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
                          <p className="text-white text-sm">Cliquer pour agrandir</p>
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
                        Caractéristiques
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Protection discrète et professionnelle</li>
                        <li>• Équipe hautement qualifiée</li>
                        <li>• Matériel de pointe</li>
                        <li>• Confidentialité absolue</li>
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
            Toutes nos images respectent la confidentialité de nos clients. 
            Les visages et détails sensibles sont volontairement floutés pour préserver l'anonymat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
