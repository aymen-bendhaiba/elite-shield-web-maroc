
import React from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Award,
  Clock,
  Globe
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Executive Protection',
    'Close Protection', 
    'Events Security',
    'VIP Bodyguard',
    'Risk Assessment',
    'Secure Transportation'
  ];

  const certifications = [
    'Close Protection Officer International',
    'PDF System Certified',
    'First Aid Certified',
    'Taekwondo Black Belt'
  ];

  return (
    <footer className="bg-security-dark border-t border-security-gold/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-security-gold to-security-silver p-2 rounded-lg">
                <Shield className="h-8 w-8 text-security-dark" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl text-white">
                  Ultra Professionnel
                </h3>
                <p className="font-roboto text-sm text-security-gold">Protection</p>
              </div>
            </div>
            
            <p className="font-roboto text-gray-300 mb-6 leading-relaxed">
              Your security is our priority. Since 2025, we offer elite protection services 
              with discretion and professionalism in Morocco.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-security-gold flex-shrink-0" />
                <span className="font-roboto text-sm text-gray-300">
                  Hay el ghofrane n°29, Dakhla, Morocco
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-security-gold flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <span className="font-roboto text-sm text-gray-300">
                    +212 613 036 746
                  </span>
                  <span className="font-roboto text-sm text-gray-300">
                    +212 661 317 454
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-security-gold flex-shrink-0" />
                <span className="font-roboto text-sm text-gray-300">
                  ultraproprotection@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-security-gold flex-shrink-0" />
                <span className="font-roboto text-sm text-security-gold">
                  24/7 Service
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-roboto text-gray-300 hover:text-security-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-roboto text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Social */}
          <div>
            <h4 className="font-montserrat font-bold text-lg text-white mb-6">
              Certifications
            </h4>
            <ul className="space-y-3 mb-8">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-security-gold mt-0.5 flex-shrink-0" />
                  <span className="font-roboto text-gray-300 text-sm">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="font-montserrat font-semibold text-white mb-4">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-security-charcoal rounded-full flex items-center justify-center hover:bg-security-gold hover:text-security-dark transition-all duration-300"
                >
                  <Facebook className="h-5 w-5 text-security-gold hover:text-security-dark" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-security-charcoal rounded-full flex items-center justify-center hover:bg-security-gold hover:text-security-dark transition-all duration-300"
                >
                  <Instagram className="h-5 w-5 text-security-gold hover:text-security-dark" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-security-charcoal rounded-full flex items-center justify-center hover:bg-security-gold hover:text-security-dark transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-security-gold hover:text-security-dark" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-security-gold/20 bg-security-charcoal">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-roboto text-sm text-gray-400">
                © 2025 Ultra Professional Protection. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-security-gold transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-security-gold transition-colors">
                  Legal Notice
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-security-gold transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
