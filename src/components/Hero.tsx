
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-security-navy via-security-charcoal to-security-dark overflow-hidden pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-security-gold rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-security-silver rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-security-gold rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-br from-security-gold to-security-silver p-4 rounded-full shadow-2xl animate-pulse">
              <Shield className="h-16 w-16 text-security-dark" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Ultra Professionnel
            <br />
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Protection
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-roboto text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite protection services in Morocco. Discreet and professional security 
            for executives, events and high-profile personalities.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-security-dark/50 px-4 py-2 rounded-full border border-security-gold/30">
              <Shield className="h-5 w-5 text-security-gold" />
              <span className="font-roboto text-sm text-gray-300">24/7 Protection</span>
            </div>
            <div className="flex items-center space-x-2 bg-security-dark/50 px-4 py-2 rounded-full border border-security-gold/30">
              <Shield className="h-5 w-5 text-security-gold" />
              <span className="font-roboto text-sm text-gray-300">Certified Agents</span>
            </div>
            <div className="flex items-center space-x-2 bg-security-dark/50 px-4 py-2 rounded-full border border-security-gold/30">
              <Shield className="h-5 w-5 text-security-gold" />
              <span className="font-roboto text-sm text-gray-300">Total Discretion</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <a href="#services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-security-gold mb-2">
                18+
              </div>
              <p className="font-roboto text-gray-400">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-security-gold mb-2">
                24/7
              </div>
              <p className="font-roboto text-gray-400">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-security-gold mb-2">
                100%
              </div>
              <p className="font-roboto text-gray-400">Confidential</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-security-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-security-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
