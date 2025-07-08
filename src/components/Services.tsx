
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Users, 
  Calendar, 
  Crown, 
  Bell, 
  Search, 
  AlertTriangle, 
  Plane, 
  Car, 
  Hotel 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Services de protection rapprochée pour dirigeants et personnalités",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Users,
      title: "Close Protection",
      description: "Protection personnelle discrète et professionnelle",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Calendar,
      title: "Events Security",
      description: "Sécurisation d'événements privés et corporatifs",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Crown,
      title: "VIPs Bodyguard",
      description: "Garde du corps spécialisé pour personnalités VIP",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Bell,
      title: "VIP Concierge",
      description: "Services de conciergerie haut de gamme",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Search,
      title: "Private Investigation",
      description: "Enquêtes privées et investigations discrètes",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Évaluation et contrôle des risques sécuritaires",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Réservation de vols privés et commerciaux",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Car,
      title: "Secure Transportation",
      description: "Transport sécurisé avec chauffeurs professionnels",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Hotel,
      title: "Travel Services",
      description: "Location de véhicules et réservation d'hôtels",
      color: "from-security-silver to-security-gold"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-security-navy to-security-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Nos Services{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Professionnels
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            Une gamme complète de services de sécurité adaptés à vos besoins spécifiques
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-security-dark/50 border-security-gold/20 hover:border-security-gold/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-security-dark" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-white mb-3 group-hover:text-security-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-roboto text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">  
          <div className="bg-gradient-to-r from-security-gold/10 to-security-silver/10 p-8 rounded-2xl border border-security-gold/20">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
              Excellence en sécurité professionnelle
            </h3>
            <p className="font-roboto text-gray-300 mb-6">
              Découvrez nos solutions de sécurité sur mesure adaptées à vos besoins
            </p>
            <button className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-security-gold/30 transition-all duration-300 transform hover:scale-105">
              Découvrir nos Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
