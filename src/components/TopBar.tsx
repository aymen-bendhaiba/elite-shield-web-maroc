
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TopBar = () => {
  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' }
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-security-charcoal border-b border-security-gold/20 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Languages */}
          <div className="flex items-center space-x-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                title={lang.name}
              >
                <span className="text-lg">{lang.flag}</span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="mailto:hassane.outikni@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-security-gold transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>hassane.outikni@gmail.com</span>
            </a>
            
            <a 
              href="tel:+212613036746"
              className="flex items-center space-x-2 text-gray-300 hover:text-security-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+212 613 036 746</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
