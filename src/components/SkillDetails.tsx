import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, Users, Crown, Calendar, Target } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  expertise: string[];
}

const skills: Skill[] = [
  {
    id: 'close-protection',
    title: 'Close Protection Expert',
    description: 'Proven track record of protecting high-profile individuals.',
    details: 'Specialized in providing personal security services to VIPs, executives, celebrities, and other high-risk individuals. Expert in threat assessment, route planning, and advance security preparations.',
    icon: <Shield className="h-5 w-5" />,
    expertise: [
      'Personal threat assessment',
      'Route planning and security',
      'Close quarters protection',
      'Emergency response protocols',
      'Risk mitigation strategies'
    ]
  },
  {
    id: 'executive-protection',
    title: 'Executive Protection Specialist',
    description: 'Skilled in providing security services for executives and celebrities.',
    details: 'Comprehensive protection services for corporate executives and entertainment industry professionals. Includes travel security, residential protection, and public appearance security.',
    icon: <Crown className="h-5 w-5" />,
    expertise: [
      'Executive travel security',
      'Corporate event protection',
      'Residential security planning',
      'Media interaction management',
      'Confidentiality protocols'
    ]
  },
  {
    id: 'team-manager',
    title: 'Security Team Manager',
    description: 'Experienced in leading and managing security teams.',
    details: 'Leadership and coordination of multi-disciplinary security teams. Responsible for team training, operational planning, and ensuring seamless execution of security protocols.',
    icon: <Users className="h-5 w-5" />,
    expertise: [
      'Team leadership and coordination',
      'Training program development',
      'Operational planning',
      'Performance evaluation',
      'Resource allocation'
    ]
  },
  {
    id: 'events-manager',
    title: 'Security Events Manager',
    description: 'Coordinated and managed security for high-profile events.',
    details: 'Comprehensive event security planning and execution for large-scale gatherings, including venue assessment, crowd control, and VIP protection during public events.',
    icon: <Calendar className="h-5 w-5" />,
    expertise: [
      'Event security planning',
      'Venue risk assessment',
      'Crowd management',
      'VIP event protection',
      'Emergency evacuation procedures'
    ]
  },
  {
    id: 'group-supervisor',
    title: 'Security Group Supervisor',
    description: 'Responsible for overseeing regional security groups.',
    details: 'Regional oversight of multiple security teams and operations. Ensures standardization of procedures, quality control, and effective communication across different operational areas.',
    icon: <Target className="h-5 w-5" />,
    expertise: [
      'Regional operations oversight',
      'Quality assurance protocols',
      'Inter-team coordination',
      'Strategic planning',
      'Performance monitoring'
    ]
  }
];

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 cursor-pointer group hover:bg-security-dark/30 p-2 rounded-lg transition-all duration-300">
          <div className="w-3 h-3 bg-gradient-to-r from-security-gold to-security-silver rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-300 group-hover:text-security-gold transition-colors duration-300">
            {skill.title}
          </span>
          <div className="text-security-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.icon}
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-security-charcoal border border-security-gold/30">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-security-gold text-xl">
            <div className="p-2 bg-gradient-to-r from-security-gold/20 to-security-silver/20 rounded-lg">
              {skill.icon}
            </div>
            <span>{skill.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">Description</h4>
            <p className="leading-relaxed">{skill.description}</p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">Detailed Overview</h4>
            <p className="leading-relaxed">{skill.details}</p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">Areas of Expertise</h4>
            <ul className="space-y-2">
              {skill.expertise.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-security-gold rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SkillDetails: React.FC = () => {
  return (
    <div className="space-y-3">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillDetails;