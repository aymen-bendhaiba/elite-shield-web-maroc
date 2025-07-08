
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Équipe', href: '#team' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-security-dark/95 backdrop-blur-sm border-b border-security-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-security-gold to-security-silver p-2 rounded-lg">
              <Shield className="h-8 w-8 text-security-dark" />
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-white">
                Ultra Professionnel
              </h1>
              <p className="font-roboto text-sm text-security-gold">Protection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-roboto text-white hover:text-security-gold transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-security-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-security-gold text-sm">
              <Phone className="h-4 w-4" />
              <span>24h/7j</span>
            </div>
            <Button className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold hover:shadow-lg hover:shadow-security-gold/20 transition-all duration-300">
              Contact Urgent
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-security-charcoal border-security-gold/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-roboto text-white hover:text-security-gold transition-colors text-lg"
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold mt-6">
                  Contact Urgent
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
