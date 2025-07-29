
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TopBar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  
  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'ar', flag: '🇲🇦', name: 'العربية' },
    { code: 'en', flag: '🇬🇧', name: 'English' }
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-security-dark/95 backdrop-blur-sm border-b border-security-gold/20 py-2">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Languages */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as 'en' | 'fr' | 'ar')}
                className={`flex items-center justify-center w-12 h-8 rounded-md border transition-all duration-300 ${
                  language === lang.code 
                    ? 'bg-security-gold text-security-dark border-security-gold scale-110 shadow-lg' 
                    : 'bg-security-dark/50 text-gray-300 border-security-gold/30 hover:bg-security-gold/20 hover:border-security-gold/60'
                }`}
                title={lang.name}
              >
                <span className="text-lg">{lang.flag}</span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 text-sm ${isRTL ? 'sm:space-x-reverse sm:space-x-6' : 'sm:space-x-6'}`}>
            <a 
              href={`mailto:${t('topbar.email')}`}
              className={`flex items-center text-gray-300 hover:text-security-gold transition-colors ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            >
              <Mail className="h-4 w-4" />
              <span>{t('topbar.email')}</span>
            </a>
            
            <div className={`flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 ${isRTL ? 'sm:space-x-reverse sm:space-x-4' : 'sm:space-x-4'}`}>
              <a 
                href="tel:+212613036746"
                className={`flex items-center text-gray-300 hover:text-security-gold transition-colors ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Phone className="h-4 w-4" />
                <span>+212 613 036 746</span>
              </a>
              
              <a 
                href="tel:+212661317454"
                className={`flex items-center text-gray-300 hover:text-security-gold transition-colors ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Phone className="h-4 w-4" />
                <span>+212 661 317 454</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
