import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // TopBar
    'topbar.email': 'ultraproprotection@gmail.com',
    
    // Hero
    'hero.title': 'Ultra Professional',
    'hero.subtitle': 'Protection',
    'hero.description': 'Elite protection services in Morocco. Discreet and professional security for executives, events and high-profile personalities.',
    'hero.protection247': '24/7 Protection',
    'hero.certifiedAgents': 'Certified Agents',
    'hero.totalDiscretion': 'Total Discretion',
    'hero.ourServices': 'Our Services',
    'hero.yearsExperience': 'Years of Experience',
    'hero.availability': 'Availability',
    'hero.confidential': 'Confidential',
    
    // About
    'about.title': 'Expert Security Solutions for a',
    'about.titleHighlight': 'Changing World',
    'about.description1': 'Founded in 2025, Ultra Professionnel Protection is a cutting-edge security company based in Hay el ghofrane n°29, Dakhla, Morocco. Our mission is to provide exceptional close protection services, tailored to meet the unique needs of our clients across the Moroccan territory.',
    'about.description2': 'At Ultra Professionnel Protection, we understand that security is not a one-size-fits-all solution. That\'s why we offer a comprehensive range of services, designed to cater to the diverse needs of our clients. From secure executive transportation to event security, crowd management, and risk assessment, our team of highly trained professionals is dedicated to providing unparalleled protection and peace of mind.',
    'about.eliteProtection': 'Elite Protection',
    'about.nationalCoverage': 'National Coverage',
    'about.certifications': 'Certifications',
    'about.absoluteDiscretion': 'Absolute Discretion',
    'about.coverageTitle': 'Nationwide Coverage, Local Expertise',
    'about.coverageDescription': 'With a strong presence in major cities across Morocco, including Casablanca, Fez, Tangier, Marrakesh, Salé, Meknes, Rabat, Oujda, Kenitra, Agadir, Essaouira, and Oualidia, we possess intimate knowledge of the local landscape. This expertise enables us to provide bespoke security solutions that address the unique challenges and risks associated with each region.',
    'about.discreteTitle': 'Discreet, Personalized, and Luxurious Security Services',
    'about.discreteDescription': 'We recognize that our clients value discretion, flexibility, and exceptional service. That\'s why we offer tailored security solutions that cater to the individual needs of each client. Whether you require secure transportation, event security, or close protection services, our team is committed to delivering unparalleled support with the utmost professionalism and discretion.',
    
    // Services
    'services.title': 'Our Professional',
    'services.titleHighlight': 'Services',
    'services.description': 'A complete range of security services tailored to your specific needs',
    'services.executiveProtection': 'Executive Protection',
    'services.executiveProtectionDesc': 'Close protection services for executives and high-profile individuals',
    'services.closeProtection': 'Close Protection',
    'services.closeProtectionDesc': 'Discreet and professional personal protection services',
    'services.eventsecurity': 'Events Security',
    'services.eventsecurityDesc': 'Security services for private and corporate events',
    'services.vipBodyguard': 'VIP Bodyguard',
    'services.vipBodyguardDesc': 'Specialized bodyguard services for VIP personalities',
    'services.vipConcierge': 'VIP Concierge',
    'services.vipConciergeDesc': 'Premium concierge services for high-end clients',
    'services.privateInvestigation': 'Private Investigation',
    'services.privateInvestigationDesc': 'Discreet private investigations and intelligence gathering',
    'services.riskAssessment': 'Risk Assessment',
    'services.riskAssessmentDesc': 'Security risk evaluation and threat analysis',
    'services.flightBooking': 'Flight Booking',
    'services.flightBookingDesc': 'Private and commercial flight booking services',
    'services.secureTransportation': 'Secure Transportation',
    'services.secureTransportationDesc': 'Secure transport with professional drivers',
    'services.travelServices': 'Travel Services',
    'services.travelServicesDesc': 'Vehicle rental and hotel booking services',
  },
  fr: {
    // TopBar
    'topbar.email': 'ultraproprotection@gmail.com',
    
    // Hero
    'hero.title': 'Ultra Professionnel',
    'hero.subtitle': 'Protection',
    'hero.description': 'Services de protection d\'élite au Maroc. Sécurité discrète et professionnelle pour executives, événements et personnalités de haut niveau.',
    'hero.protection247': 'Protection 24/7',
    'hero.certifiedAgents': 'Agents Certifiés',
    'hero.totalDiscretion': 'Discrétion Totale',
    'hero.ourServices': 'Nos Services',
    'hero.yearsExperience': 'Années d\'Expérience',
    'hero.availability': 'Disponibilité',
    'hero.confidential': 'Confidentiel',
    
    // About
    'about.title': 'Solutions de Sécurité Expertes pour un',
    'about.titleHighlight': 'Monde en Évolution',
    'about.description1': 'Fondée en 2025, Ultra Professionnel Protection est une entreprise de sécurité de pointe basée à Hay el ghofrane n°29, Dakhla, Maroc. Notre mission est de fournir des services de protection rapprochée exceptionnels, adaptés aux besoins uniques de nos clients à travers le territoire marocain.',
    'about.description2': 'Chez Ultra Professionnel Protection, nous comprenons que la sécurité n\'est pas une solution universelle. C\'est pourquoi nous offrons une gamme complète de services, conçus pour répondre aux besoins diversifiés de nos clients. Du transport sécurisé pour dirigeants à la sécurité d\'événements, la gestion de foules et l\'évaluation des risques, notre équipe de professionnels hautement qualifiés est dédiée à fournir une protection inégalée et la tranquillité d\'esprit.',
    'about.eliteProtection': 'Protection d\'Élite',
    'about.nationalCoverage': 'Couverture Nationale',
    'about.certifications': 'Certifications',
    'about.absoluteDiscretion': 'Discrétion Absolue',
    'about.coverageTitle': 'Couverture Nationale, Expertise Locale',
    'about.coverageDescription': 'Avec une forte présence dans les grandes villes du Maroc, notamment Casablanca, Fès, Tanger, Marrakech, Salé, Meknès, Rabat, Oujda, Kénitra, Agadir, Essaouira et Oualidia, nous possédons une connaissance intime du paysage local. Cette expertise nous permet de fournir des solutions de sécurité sur mesure qui répondent aux défis et risques uniques associés à chaque région.',
    'about.discreteTitle': 'Services de Sécurité Discrets, Personnalisés et Luxueux',
    'about.discreteDescription': 'Nous reconnaissons que nos clients valorisent la discrétion, la flexibilité et un service exceptionnel. C\'est pourquoi nous offrons des solutions de sécurité sur mesure qui répondent aux besoins individuels de chaque client. Que vous ayez besoin de transport sécurisé, de sécurité d\'événements ou de services de protection rapprochée, notre équipe s\'engage à fournir un soutien inégalé avec le plus grand professionnalisme et discrétion.',
    
    // Services
    'services.title': 'Nos Services',
    'services.titleHighlight': 'Professionnels',
    'services.description': 'Une gamme complète de services de sécurité adaptés à vos besoins spécifiques',
    'services.executiveProtection': 'Protection de Dirigeants',
    'services.executiveProtectionDesc': 'Services de protection rapprochée pour dirigeants et personnalités de haut niveau',
    'services.closeProtection': 'Protection Rapprochée',
    'services.closeProtectionDesc': 'Services de protection personnelle discrets et professionnels',
    'services.eventsecurity': 'Sécurité d\'Événements',
    'services.eventsecurityDesc': 'Services de sécurité pour événements privés et corporatifs',
    'services.vipBodyguard': 'Garde du Corps VIP',
    'services.vipBodyguardDesc': 'Services de garde du corps spécialisés pour personnalités VIP',
    'services.vipConcierge': 'Conciergerie VIP',
    'services.vipConciergeDesc': 'Services de conciergerie premium pour clients haut de gamme',
    'services.privateInvestigation': 'Enquête Privée',
    'services.privateInvestigationDesc': 'Enquêtes privées discrètes et collecte de renseignements',
    'services.riskAssessment': 'Évaluation des Risques',
    'services.riskAssessmentDesc': 'Évaluation des risques de sécurité et analyse des menaces',
    'services.flightBooking': 'Réservation de Vols',
    'services.flightBookingDesc': 'Services de réservation de vols privés et commerciaux',
    'services.secureTransportation': 'Transport Sécurisé',
    'services.secureTransportationDesc': 'Transport sécurisé avec chauffeurs professionnels',
    'services.travelServices': 'Services de Voyage',
    'services.travelServicesDesc': 'Location de véhicules et réservation d\'hôtels',
  },
  ar: {
    // TopBar
    'topbar.email': 'ultraproprotection@gmail.com',
    
    // Hero
    'hero.title': 'الحماية الاحترافية',
    'hero.subtitle': 'المتقدمة',
    'hero.description': 'خدمات حماية نخبوية في المغرب. أمان سري ومهني للمسؤولين التنفيذيين والأحداث والشخصيات البارزة.',
    'hero.protection247': 'حماية 24/7',
    'hero.certifiedAgents': 'عملاء معتمدون',
    'hero.totalDiscretion': 'سرية تامة',
    'hero.ourServices': 'خدماتنا',
    'hero.yearsExperience': 'سنوات من الخبرة',
    'hero.availability': 'التوفر',
    'hero.confidential': 'سري',
    
    // About
    'about.title': 'حلول أمنية خبيرة لعالم',
    'about.titleHighlight': 'متغير',
    'about.description1': 'تأسست في عام 2025، الحماية الاحترافية المتقدمة هي شركة أمن متطورة مقرها في حي الغفران رقم 29، الداخلة، المغرب. مهمتنا هي توفير خدمات حماية شخصية استثنائية، مصممة لتلبية الاحتياجات الفريدة لعملائنا عبر الأراضي المغربية.',
    'about.description2': 'في الحماية الاحترافية المتقدمة، نحن نفهم أن الأمن ليس حلاً واحداً يناسب الجميع. لهذا السبب نقدم مجموعة شاملة من الخدمات، مصممة لتلبية الاحتياجات المتنوعة لعملائنا. من النقل الآمن للمسؤولين التنفيذيين إلى أمن الأحداث وإدارة الحشود وتقييم المخاطر، فريقنا من المحترفين المدربين تدريباً عالياً مكرس لتوفير حماية لا مثيل لها وراحة البال.',
    'about.eliteProtection': 'حماية النخبة',
    'about.nationalCoverage': 'تغطية وطنية',
    'about.certifications': 'شهادات',
    'about.absoluteDiscretion': 'سرية مطلقة',
    'about.coverageTitle': 'تغطية وطنية، خبرة محلية',
    'about.coverageDescription': 'مع وجود قوي في المدن الكبرى عبر المغرب، بما في ذلك الدار البيضاء وفاس وطنجة ومراكش وسلا ومكناس والرباط ووجدة والقنيطرة وأكادير والصويرة والوليدية، نحن نمتلك معرفة عميقة بالمشهد المحلي. هذه الخبرة تمكننا من توفير حلول أمنية مخصصة تتعامل مع التحديات والمخاطر الفريدة المرتبطة بكل منطقة.',
    'about.discreteTitle': 'خدمات أمنية سرية ومخصصة وفاخرة',
    'about.discreteDescription': 'نحن ندرك أن عملاءنا يقدرون السرية والمرونة والخدمة الاستثنائية. لهذا السبب نقدم حلول أمنية مخصصة تلبي الاحتياجات الفردية لكل عميل. سواء كنت بحاجة إلى نقل آمن أو أمن الأحداث أو خدمات الحماية الشخصية، فريقنا ملتزم بتقديم دعم لا مثيل له بأقصى درجات الاحترافية والسرية.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.titleHighlight': 'المهنية',
    'services.description': 'مجموعة كاملة من الخدمات الأمنية المصممة خصيصاً لاحتياجاتك',
    'services.executiveProtection': 'حماية المسؤولين التنفيذيين',
    'services.executiveProtectionDesc': 'خدمات حماية شخصية للمسؤولين التنفيذيين والشخصيات البارزة',
    'services.closeProtection': 'الحماية الشخصية',
    'services.closeProtectionDesc': 'خدمات حماية شخصية سرية ومهنية',
    'services.eventsecurity': 'أمن الأحداث',
    'services.eventsecurityDesc': 'خدمات أمنية للأحداث الخاصة والشركات',
    'services.vipBodyguard': 'حارس شخصي VIP',
    'services.vipBodyguardDesc': 'خدمات حراسة شخصية متخصصة لشخصيات VIP',
    'services.vipConcierge': 'خدمة الاستقبال VIP',
    'services.vipConciergeDesc': 'خدمات استقبال راقية للعملاء المميزين',
    'services.privateInvestigation': 'التحقيق الخاص',
    'services.privateInvestigationDesc': 'تحقيقات خاصة سرية وجمع المعلومات الاستخباراتية',
    'services.riskAssessment': 'تقييم المخاطر',
    'services.riskAssessmentDesc': 'تقييم المخاطر الأمنية وتحليل التهديدات',
    'services.flightBooking': 'حجز الطيران',
    'services.flightBookingDesc': 'خدمات حجز الطيران الخاص والتجاري',
    'services.secureTransportation': 'النقل الآمن',
    'services.secureTransportationDesc': 'نقل آمن مع سائقين محترفين',
    'services.travelServices': 'خدمات السفر',
    'services.travelServicesDesc': 'تأجير المركبات وحجز الفنادق',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};