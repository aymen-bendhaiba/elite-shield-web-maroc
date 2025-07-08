
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Shield, Eye, Target } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Activity,
      title: "Our Sector Activities",
      content: "Ultra Professional Protection offers quality security solutions and highly trained security guards. It also provides close protection services to government officials, diplomats, high-net-worth individuals, and wealthy families who require confidential and personal security. It also provides close protection services to celebrities, artists, and singers. The company strives to maintain complete confidentiality.",
      gradient: "from-security-gold to-security-silver"
    },
    {
      icon: Shield,
      title: "Our Integrity",
      content: "Ultra Professional Protection is committed to transparency and honesty, operating with unwavering integrity. We work to build trust with our clients and treat everyone with respect.",
      gradient: "from-security-silver to-security-gold"
    },
    {
      icon: Eye,
      title: "Our Privacy",
      content: "Ultra Professional Protection is committed to maintaining the confidentiality, integrity, and security of our clients' personal information. Our reputation is built on honesty and transparency.",
      gradient: "from-security-gold to-security-silver"
    },
    {
      icon: Target,
      title: "Our Vision",
      content: "Ultra Professional Protection strives to protect our clients, their assets, and their reputation with confidentiality, expertise, and unwavering commitment. Providing protection and ensuring the safety and security of our clients. Providing successful security solutions. Training and qualifying our work teams.",
      gradient: "from-security-silver to-security-gold"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-security-dark to-security-navy">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Nos{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Valeurs
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            Les principes fondamentaux qui guident notre approche de la sécurité professionnelle
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto mt-6"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="bg-security-charcoal/50 border-security-gold/20 hover:border-security-gold/50 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-security-gold/20 transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-security-dark" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-xl text-white group-hover:text-security-gold transition-colors duration-300">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-roboto text-gray-300 leading-relaxed">
                    {value.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-security-gold/10 to-security-silver/10 p-8 rounded-2xl border border-security-gold/20 max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
              Engagés pour votre sécurité
            </h3>
            <p className="font-roboto text-gray-300 mb-6">
              Notre réputation repose sur la confiance, la discrétion et l'excellence opérationnelle
            </p>
            <button className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-security-gold/30 transition-all duration-300 transform hover:scale-105">
              Découvrir nos Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
