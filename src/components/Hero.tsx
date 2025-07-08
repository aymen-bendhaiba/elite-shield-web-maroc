
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-security-dark via-security-charcoal to-security-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
                Ultra Professionnel
              </span>
            </h1>
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white">
              Protection
            </h2>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-slide-up">
            <p className="font-roboto text-xl md:text-2xl text-security-gold-light mb-4">
              Protection d'élite depuis 2025
            </p>
            <p className="font-roboto text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Sécurité professionnelle au Maroc avec 18 ans d'expertise en protection rapprochée
            </p>
          </div>

          {/* Location */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-security-gold">
              <MapPin className="h-5 w-5" />
              <span className="font-roboto">Hay el ghofrane n°29, Dakhla, Maroc</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold text-lg px-8 py-4 hover:shadow-2xl hover:shadow-security-gold/30 transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="mr-2 h-5 w-5" />
                Nos Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 text-security-gold" />
              </div>
              <div className="font-montserrat font-bold text-3xl text-white mb-2">18+</div>
              <div className="font-roboto text-security-gold-light">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-security-gold" />
              </div>
              <div className="font-montserrat font-bold text-3xl text-white mb-2">500+</div>
              <div className="font-roboto text-security-gold-light">Clients protégés</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="h-8 w-8 text-security-gold" />
              </div>
              <div className="font-montserrat font-bold text-3xl text-white mb-2">12+</div>
              <div className="font-roboto text-security-gold-light">Villes couvertes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-security-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-security-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
