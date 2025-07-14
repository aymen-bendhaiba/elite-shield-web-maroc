
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
  Crown
} from 'lucide-react';

const CEOProfile = () => {
  const certifications = [
    "Protection and Defense Combat Degrees A, B, and C",
    "Close Protection Officer International Card",
    "Red Belt 3rd Grade in Taekwondo", 
    "Black Belt Certificate in Taekwondo",
    "Certificate of Taekwondo Coach",
    "First Aid Certificate"
  ];

  const competencies = [
    { icon: Shield, text: "Close Protection Expertise", years: "18 years" },
    { icon: Crown, text: "Executive Protection Specialist", years: "18 years" },
    { icon: Users, text: "Security Teams Manager", years: "15 years" },
    { icon: Calendar, text: "Security Events Manager", years: "12 years" },
    { icon: Target, text: "Security Groups Supervisor", years: "10 years" }
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
                    <p className="font-roboto text-lg text-security-gold-light">
                      Executive Protection Expert
                    </p>
                    <div className="flex items-center justify-center mt-4 space-x-2">
                      <Star className="h-5 w-5 text-security-gold" />
                      <span className="font-montserrat font-semibold text-security-gold">18 years of experience</span>
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
                  <div className="mb-8">
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Professional Experience</h4>
                    <div className="space-y-4">
                      <div className="border-l-2 border-security-gold pl-4">
                        <h5 className="font-roboto font-semibold text-white">Chief Protection Officer (CPO)</h5>
                        <p className="text-gray-300 text-sm">Protection of royal personalities and government officials - 18 years</p>
                      </div>
                      <div className="border-l-2 border-security-gold pl-4">
                        <h5 className="font-roboto font-semibold text-white">Security Driver & Executive Protection Officer</h5>
                        <p className="text-gray-300 text-sm">Collaboration with various film production companies - 6 years</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Key Competencies</h4>
                    <div className="grid gap-3">
                      {competencies.map((comp, index) => {
                        const IconComp = comp.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3 bg-security-dark/20 p-3 rounded-lg">
                            <IconComp className="h-5 w-5 text-security-gold flex-shrink-0" />
                            <span className="font-roboto text-white flex-grow">{comp.text}</span>
                            <Badge variant="outline" className="border-security-gold text-security-gold">
                              {comp.years}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-bold text-xl text-security-gold mb-4">Certifications</h4>
                    <div className="grid gap-2">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Award className="h-4 w-4 text-security-gold flex-shrink-0" />
                          <span className="font-roboto text-sm text-gray-300">{cert}</span>
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
