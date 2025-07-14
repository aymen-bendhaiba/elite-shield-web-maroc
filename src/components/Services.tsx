
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
      description: "Close protection services for executives and high-profile individuals",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Users,
      title: "Close Protection",
      description: "Discreet and professional personal protection services",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Calendar,
      title: "Events Security",
      description: "Security services for private and corporate events",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Crown,
      title: "VIP Bodyguard",
      description: "Specialized bodyguard services for VIP personalities",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Bell,
      title: "VIP Concierge",
      description: "Premium concierge services for high-end clients",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Search,
      title: "Private Investigation",
      description: "Discreet private investigations and intelligence gathering",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Security risk evaluation and threat analysis",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Private and commercial flight booking services",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Car,
      title: "Secure Transportation",
      description: "Secure transport with professional drivers",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Hotel,
      title: "Travel Services",
      description: "Vehicle rental and hotel booking services",
      color: "from-security-silver to-security-gold"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-security-navy to-security-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Our Professional{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            A complete range of security services tailored to your specific needs
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
      </div>
    </section>
  );
};

export default Services;
