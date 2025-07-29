
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
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, isRTL } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      titleKey: "services.executiveProtection",
      descriptionKey: "services.executiveProtectionDesc",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Users,
      titleKey: "services.closeProtection",
      descriptionKey: "services.closeProtectionDesc",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Calendar,
      titleKey: "services.eventsecurity",
      descriptionKey: "services.eventsecurityDesc",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Crown,
      titleKey: "services.vipBodyguard",
      descriptionKey: "services.vipBodyguardDesc",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Bell,
      titleKey: "services.vipConcierge",
      descriptionKey: "services.vipConciergeDesc",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Search,
      titleKey: "services.privateInvestigation",
      descriptionKey: "services.privateInvestigationDesc",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: AlertTriangle,
      titleKey: "services.riskAssessment",
      descriptionKey: "services.riskAssessmentDesc",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Plane,
      titleKey: "services.flightBooking",
      descriptionKey: "services.flightBookingDesc",
      color: "from-security-silver to-security-gold"
    },
    {
      icon: Car,
      titleKey: "services.secureTransportation",
      descriptionKey: "services.secureTransportationDesc",
      color: "from-security-gold to-security-silver"
    },
    {
      icon: Hotel,
      titleKey: "services.travelServices",
      descriptionKey: "services.travelServicesDesc",
      color: "from-security-silver to-security-gold"
    }
  ];

  return (
    <section id="services" className={`py-20 bg-gradient-to-b from-security-navy to-security-charcoal ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            {t('services.title')}{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              {t('services.titleHighlight')}
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
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
                    {t(service.titleKey)}
                  </h3>
                  <p className="font-roboto text-sm text-gray-300 leading-relaxed">
                    {t(service.descriptionKey)}
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
