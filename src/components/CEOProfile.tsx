
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';

const CEOProfile = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-security-charcoal to-security-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CEO Image and Info */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-security-gold/20 to-security-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-security-gold/30">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-br from-security-gold to-security-silver p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-security-dark" />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-security-gold to-security-silver rounded-full p-1 mb-6">
                  <img 
                    src="/lovable-uploads/aef18779-6337-46f9-84bd-77a373412da5.png" 
                    alt="Hassane Outikni"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                  Hassane Outikni
                </h3>
                <p className="text-security-gold font-roboto mb-4">CEO & Founder</p>
                
                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">📞 +212 613 036 746</p>
                  <p className="text-gray-300">📞 +212 661 317 454</p>
                  <p className="text-gray-300">✉️ hassane.outikni@gmail.com</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-security-gold">18+</div>
                  <div className="text-xs text-gray-400">Années</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-security-gold">24/7</div>
                  <div className="text-xs text-gray-400">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-security-gold">100%</div>
                  <div className="text-xs text-gray-400">Discret</div>
                </div>
              </div>

              {/* Certifications Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-security-gold/20 text-security-gold px-3 py-1 rounded-full text-xs border border-security-gold/30">
                  CPO International
                </span>
                <span className="bg-security-gold/20 text-security-gold px-3 py-1 rounded-full text-xs border border-security-gold/30">
                  PDF Certified
                </span>
                <span className="bg-security-gold/20 text-security-gold px-3 py-1 rounded-full text-xs border border-security-gold/30">
                  Taekwondo Expert
                </span>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
                Expert en{' '}
                <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
                  Protection Exécutive
                </span>
              </h2>
              <p className="font-roboto text-xl text-gray-300 leading-relaxed">
                Professionnel hautement qualifié en protection exécutive avec 18 années d'expérience 
                dans la protection de personnalités éminentes, incluant la royauté, les officiels 
                gouvernementaux et les célébrités internationales.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Users className="h-6 w-6 text-security-gold mr-3" />
                Expérience Professionnelle
              </h3>
              <div className="space-y-4">
                <div className="bg-security-dark/50 p-4 rounded-lg border border-security-gold/20">
                  <h4 className="font-montserrat font-semibold text-security-gold mb-2">
                    Chef de la Protection Exécutive (CPO)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Protection d'individus de haut profil, incluant la royauté et les officiels gouvernementaux, pendant 18 ans.
                  </p>
                </div>
                <div className="bg-security-dark/50 p-4 rounded-lg border border-security-gold/20">
                  <h4 className="font-montserrat font-semibold text-security-gold mb-2">
                    Chauffeur de Sécurité & Agent de Protection Exécutive
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Collaboration avec diverses sociétés de production cinématographique pendant 6 ans.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Award className="h-6 w-6 text-security-gold mr-3" />
                Formations & Certifications Spécialisées
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Diplômes PDF Combat A, B, C</span>
                </div>
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Carte CPO International</span>
                </div>
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Ceinture Rouge 3ème Grade</span>
                </div>
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Ceinture Noire Taekwondo</span>
                </div>
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Certificat Coach Taekwondo</span>
                </div>
                <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-security-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Certificat Premiers Secours</span>
                </div>
              </div>
            </div>

            {/* Key Competencies */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Clock className="h-6 w-6 text-security-gold mr-3" />
                Compétences Clés
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Expert en Protection Rapprochée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Spécialiste Protection Exécutive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Manager d'Équipes de Sécurité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Gestionnaire Sécurité Événements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Superviseur Groupes de Sécurité</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a href="#services">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  Découvrir Nos Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOProfile;
