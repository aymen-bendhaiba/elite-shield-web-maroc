
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';
import CertificationDetails from './CertificationDetails';

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
                  <div className="text-xs text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-security-gold">24/7</div>
                  <div className="text-xs text-gray-400">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-security-gold">100%</div>
                  <div className="text-xs text-gray-400">Discrete</div>
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
                Expert in{' '}
                <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
                  Executive Protection
                </span>
              </h2>
              <p className="font-roboto text-xl text-gray-300 leading-relaxed">
                Highly qualified professional in executive protection with 18 years of experience 
                protecting prominent personalities, including royalty, government officials 
                and international celebrities.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Users className="h-6 w-6 text-security-gold mr-3" />
                Professional Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-security-dark/50 p-4 rounded-lg border border-security-gold/20">
                  <h4 className="font-montserrat font-semibold text-security-gold mb-2">
                    Chief Protection Officer (CPO)
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Protection of high-profile individuals, including royalty and government officials, for 18 years.
                  </p>
                </div>
                <div className="bg-security-dark/50 p-4 rounded-lg border border-security-gold/20">
                  <h4 className="font-montserrat font-semibold text-security-gold mb-2">
                    Security Driver & Executive Protection Agent
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Collaboration with various film production companies for 6 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Award className="h-6 w-6 text-security-gold mr-3" />
                Specialized Training & Certifications
              </h3>
              <CertificationDetails />
            </div>

            {/* Key Competencies */}
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-2xl text-white flex items-center">
                <Clock className="h-6 w-6 text-security-gold mr-3" />
                Key Skills
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Close Protection Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Executive Protection Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Security Team Manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Event Security Manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full"></div>
                  <span className="text-gray-300">Security Group Supervisor</span>
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
                  Discover Our Services
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
