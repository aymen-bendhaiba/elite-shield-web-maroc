
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Shield, 
  Users, 
  Calendar, 
  Target, 
  Heart,
  Star,
  Crown,
  Phone,
  Mail
} from 'lucide-react';

const CEOProfile = () => {
  const certifications = [
    "Protection and Defense Combat Degrees A, B, and C - Certified by the International Organization of PDF System",
    "Close Protection Officer International Card - Certified expert in Close Protection and Executive Security",
    "Red Belt 3rd Grade in Taekwondo - Advanced proficiency in martial arts", 
    "Black Belt Certificate in Taekwondo - Expert level achievement",
    "Certificate of Taekwondo Coach - Qualified to coach and mentor others",
    "First Aid Certificate - Trained in first aid and emergency response"
  ];

  const competencies = [
    { icon: Shield, text: "Close Protection Expertise", years: "18 years", description: "Proven track record of protecting high-profile individuals" },
    { icon: Crown, text: "Executive Protection Specialist", years: "18 years", description: "Skilled in providing security services for executives and celebrities" },
    { icon: Users, text: "Security Teams Manager", years: "15 years", description: "Experienced in leading and managing security teams" },
    { icon: Calendar, text: "Security Events Manager", years: "12 years", description: "Coordinated and managed security for high-profile events" },
    { icon: Target, text: "Security Groups Supervisor", years: "10 years", description: "Responsible for overseeing regional security groups" }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-security-charcoal to-security-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-security-navy/50 to-security-charcoal/50 border-security-gold/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Photo and Basic Info */}
                <div className="bg-gradient-to-br from-security-gold/10 to-security-silver/10 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-security-gold">
                      <img 
                        src="/lovable-uploads/eadcb882-efdf-4d80-b0ca-070e04c10068.png" 
                        alt="Hassane Outikni - CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-montserrat font-bold text-3xl text-white mb-2">
                      Hassane Outikni
                    </h3>
                    <p className="font-roboto text-xl text-security-gold mb-2">
                      CEO and Founder
                    </p>
                    <p className="font-roboto text-lg text-security-gold-light mb-4">
                      Ultra Professionnel Protection
                    </p>
                    <p className="font-roboto text-base text-gray-300 mb-4">
                      Executive Protection Expert
                    </p>
                    <div className="flex items-center justify-center mt-4 space-x-2">
                      <Star className="h-5 w-5 text-security-gold" />
                      <span className="font-montserrat font-semibold text-security-gold">18 years of experience</span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-security-dark/30 p-4 rounded-lg mb-6">
                    <h5 className="font-montserrat font-semibold text-security-gold mb-3">Contact Direct</h5>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-security-gold flex-shrink-0" />
                        <span className="font-roboto text-sm text-white">+212 613 036 746</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-security-gold flex-shrink-0" />
                        <span className="font-roboto text-sm text-white">+212 661 317 454</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-security-gold flex-shrink-0" />
                        <span className="font-roboto text-sm text-white">hassane.outikni@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-security-dark/30 p-4 rounded-lg">
                      <Shield className="h-8 w-8 text-security-gold mx-auto mb-2" />
                      <p className="font-montserrat font-bold text-2xl text-white">18+</p>
                      <p className="font-roboto text-sm text-security-gold-light">Years Protection</p>
                    </div>
                    <div className="text-center bg-security-dark/30 p-4 rounded-lg">
                      <Award className="h-8 w-8 text-security-gold mx-auto mb-2" />
                      <p className="font-montserrat font-bold text-2xl text-white">6+</p>
                      <p className="font-roboto text-sm text-security-gold-light">Certifications</p>
                    </div>
                  </div>
                </div>

                {/* Experience and Details */}
                <div className="p-8 lg:p-12">
                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Professional Summary</h4>
                    <p className="font-roboto text-gray-300 leading-relaxed mb-4">
                      Highly accomplished Executive Protection Officer with 18 years of experience safeguarding 
                      prominent personalities, including royalty, government officials, and international celebrities. 
                      Specialized in providing comprehensive security solutions with absolute discretion and professionalism.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Professional Experience</h4>
                    <div className="space-y-4">
                      <div className="border-l-2 border-security-gold pl-4">
                        <h5 className="font-roboto font-semibold text-white">Chief Protection Officer (CPO)</h5>
                        <p className="text-gray-300 text-sm mb-2">Protected high-profile individuals, including royalty and government officials</p>
                        <span className="text-security-gold text-xs font-semibold">18 years of dedicated service</span>
                      </div>
                      <div className="border-l-2 border-security-gold pl-4">
                        <h5 className="font-roboto font-semibold text-white">Security Driver & Executive Protection Officer</h5>
                        <p className="text-gray-300 text-sm mb-2">Collaborated with various film production companies providing specialized security services</p>
                        <span className="text-security-gold text-xs font-semibold">6 years of industry experience</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Key Competencies</h4>
                    <div className="grid gap-3">
                      {competencies.map((comp, index) => {
                        const IconComp = comp.icon;
                        return (
                          <div key={index} className="bg-security-dark/20 p-3 rounded-lg">
                            <div className="flex items-center space-x-3 mb-2">
                              <IconComp className="h-5 w-5 text-security-gold flex-shrink-0" />
                              <span className="font-roboto font-semibold text-white flex-grow">{comp.text}</span>
                              <Badge variant="outline" className="border-security-gold text-security-gold">
                                {comp.years}
                              </Badge>
                            </div>
                            <p className="font-roboto text-xs text-gray-400 ml-8">{comp.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Specialized Training & Certifications</h4>
                    <div className="grid gap-3">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-security-dark/10 p-3 rounded-lg">
                          <Award className="h-4 w-4 text-security-gold flex-shrink-0 mt-0.5" />
                          <span className="font-roboto text-sm text-gray-300 leading-relaxed">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CEOProfile;
