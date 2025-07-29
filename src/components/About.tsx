import React from 'react';
import { Shield, Globe, Award, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, isRTL } = useLanguage();
  
  const cities = [
    { name: 'Casablanca', image: '/lovable-uploads/469feb4d-d7ae-4cc5-995f-4527a0f812a9.png' },
    { name: 'Fez', image: '/lovable-uploads/14931bc7-7e93-4c32-a41c-ed782ccee274.png' },
    { name: 'Tangier', image: '/lovable-uploads/fdea4c2f-0250-4794-88ba-a6cb571dff3f.png' },
    { name: 'Marrakesh', image: '/lovable-uploads/bc8cd599-2eed-462c-8557-5350b3475212.png' },
    { name: 'Salé', image: '/lovable-uploads/85808eb9-d589-48e8-884f-87d4b449ee37.png' },
    { name: 'Meknes', image: '/lovable-uploads/8eacd30c-528d-48f3-b4f0-99c7d9d55a37.png' },
    { name: 'Rabat', image: '/lovable-uploads/d119593c-b56a-46a4-b586-c5a66de2d66d.png' },
    { name: 'Oujda', image: '/lovable-uploads/d32c245a-4a92-49c8-9d8e-f0dd707b24ca.png' },
    { name: 'Kenitra', image: '/lovable-uploads/1c21acd9-2bfb-4285-bbc5-5b15f3655a18.png' },
    { name: 'Agadir', image: '/lovable-uploads/40a974cf-6956-4440-a2b2-81c60a92bb4d.png' },
    { name: 'Essaouira', image: '/lovable-uploads/2131775e-c6ab-48e9-a4c6-090c767668e7.png' },
    { name: 'Oualidia', image: '/lovable-uploads/32cc8ba1-b671-4b1f-a90d-a0f33f93ec06.png' }
  ];

  return (
    <section id="about" className={`py-20 bg-gradient-to-b from-security-charcoal to-security-navy ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            {t('about.title')}{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              {t('about.titleHighlight')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="font-roboto text-lg text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="font-roboto text-lg text-gray-300 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-security-gold/20 to-security-silver/20 p-8 rounded-2xl border border-security-gold/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-security-gold mx-auto mb-3" />
                  <h3 className="font-montserrat font-semibold text-white">{t('about.eliteProtection')}</h3>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-security-gold mx-auto mb-3" />
                  <h3 className="font-montserrat font-semibold text-white">{t('about.nationalCoverage')}</h3>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-security-gold mx-auto mb-3" />
                  <h3 className="font-montserrat font-semibold text-white">{t('about.certifications')}</h3>
                </div>
                <div className="text-center">
                  <Eye className="h-12 w-12 text-security-gold mx-auto mb-3" />
                  <h3 className="font-montserrat font-semibold text-white">{t('about.absoluteDiscretion')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              {t('about.coverageTitle')}
            </h3>
          </div>
          
          <div className="bg-security-dark/50 p-8 rounded-2xl border border-security-gold/20">
            <p className="font-roboto text-lg text-gray-300 text-center leading-relaxed mb-8">
              {t('about.coverageDescription')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <div key={city.name} className="group relative overflow-hidden rounded-xl border border-security-gold/20 hover:border-security-gold/50 transition-all duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-security-dark/80 via-security-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="font-montserrat font-semibold text-white text-sm group-hover:text-security-gold transition-colors duration-300">
                        {city.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discrete Services */}
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            {t('about.discreteTitle')}
          </h3>
          <p className="font-roboto text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.discreteDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
