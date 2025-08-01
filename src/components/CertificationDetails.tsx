import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Heart, Users, Target, Zap } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  shortName: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  issuer: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 'pdf-abc',
    title: 'Protection and Defense Combat Degrees A, B, and C',
    shortName: 'PDF Combat Diplomas A, B, C',
    description: 'Certifications délivrées par l\'Organisation Internationale du Système PDF, couvrant les trois niveaux de combat de protection et de défense.',
    details: [
      'Diplôme A : Techniques de base de protection rapprochée et combat défensif',
      'Diplôme B : Techniques avancées de neutralisation des menaces et protection d\'urgence',
      'Diplôme C : Expertise en stratégies de protection complexes et gestion de situations critiques',
      'Formation aux techniques de désarmement et de maîtrise physique',
      'Maîtrise des protocoles d\'évacuation d\'urgence',
      'Certification internationale reconnue dans 45 pays'
    ],
    icon: <Shield className="h-6 w-6" />,
    issuer: 'Organisation Internationale du Système PDF',
    skills: ['Combat Défensif', 'Neutralisation', 'Protection d\'Urgence', 'Désarmement']
  },
  {
    id: 'cpo-international',
    title: 'Close Protection Officer International Card',
    shortName: 'International CPO Certificate',
    description: 'Certification d\'expert en Protection Rapprochée et Sécurité Exécutive reconnue internationalement.',
    details: [
      'Formation intensive de 240 heures en protection rapprochée',
      'Maîtrise des techniques d\'évaluation des risques et des menaces',
      'Protocoles de protection de personnalités de haut niveau',
      'Gestion des équipes de sécurité et coordination opérationnelle',
      'Formation aux techniques de conduite défensive et évasive',
      'Certification valide dans plus de 60 pays à travers le monde'
    ],
    icon: <Users className="h-6 w-6" />,
    issuer: 'International Close Protection Association',
    skills: ['Protection Rapprochée', 'Évaluation des Risques', 'Conduite Défensive', 'Leadership']
  },
  {
    id: 'taekwondo-red',
    title: 'Red Belt 3rd Grade in Taekwondo',
    shortName: 'Red Belt 3rd Grade',
    description: 'Niveau avancé démontrant une maîtrise exceptionnelle des techniques de Taekwondo et des compétences de combat.',
    details: [
      'Maîtrise de plus de 150 techniques de combat avancées',
      'Expertise en techniques de jambes hautes et retournées',
      'Capacité d\'enseignement et de formation d\'autres pratiquants',
      'Participation à des compétitions internationales',
      'Formation en techniques de self-défense adaptées à la protection',
      '12+ années d\'entraînement intensif et de perfectionnement'
    ],
    icon: <Target className="h-6 w-6" />,
    issuer: 'Fédération Mondiale de Taekwondo',
    skills: ['Techniques Avancées', 'Combat Sportif', 'Self-Défense', 'Enseignement']
  },
  {
    id: 'taekwondo-black',
    title: 'Black Belt Certificate in Taekwondo',
    shortName: 'Taekwondo Black Belt',
    description: 'Ceinture noire certifiant l\'expertise en Taekwondo et la maîtrise des techniques fondamentales et avancées.',
    details: [
      'Maîtrise complète des 24 poomsae (formes) traditionnels',
      'Expertise en techniques de combat et de self-défense',
      'Connaissance approfondie de la philosophie et de l\'éthique martiale',
      'Capacité à enseigner les techniques de base aux débutants',
      'Formation en premiers secours spécialisée pour les arts martiaux',
      'Participation active dans la communauté des arts martiaux'
    ],
    icon: <Zap className="h-6 w-6" />,
    issuer: 'Fédération Royale Marocaine de Taekwondo',
    skills: ['Poomsae', 'Combat', 'Philosophie Martiale', 'Pédagogie']
  },
  {
    id: 'taekwondo-coach',
    title: 'Certificate of Taekwondo Coach',
    shortName: 'Taekwondo Coach Certificate',
    description: 'Qualification officielle pour encadrer et former d\'autres pratiquants de Taekwondo.',
    details: [
      'Formation pédagogique spécialisée dans l\'enseignement du Taekwondo',
      'Méthodes d\'entraînement adaptées à différents âges et niveaux',
      'Gestion des groupes et techniques de motivation',
      'Préparation physique et mentale des athlètes',
      'Connaissance des règlements de compétition officiels',
      'Certification de coach reconnu par la fédération nationale'
    ],
    icon: <Award className="h-6 w-6" />,
    issuer: 'Académie Nationale des Sports de Combat',
    skills: ['Pédagogie Sportive', 'Entraînement', 'Motivation', 'Préparation Physique']
  },
  {
    id: 'first-aid',
    title: 'First Aid Certificate',
    shortName: 'First Aid Certificate',
    description: 'Formation aux premiers secours et à la réponse d\'urgence, essentielle pour les professionnels de la sécurité.',
    details: [
      'Techniques de réanimation cardio-pulmonaire (RCP)',
      'Gestion des voies respiratoires et ventilation d\'urgence',
      'Traitement des blessures par balles et armes blanches',
      'Immobilisation et transport d\'urgence des blessés',
      'Gestion du stress post-traumatique et support psychologique',
      'Certification valide 2 ans avec recyclage obligatoire'
    ],
    icon: <Heart className="h-6 w-6" />,
    issuer: 'Croix-Rouge Marocaine',
    skills: ['RCP', 'Soins d\'Urgence', 'Trauma Care', 'Support Psychologique']
  }
];

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 bg-security-dark/30 p-3 rounded-lg cursor-pointer hover:bg-security-dark/50 transition-all duration-300 border border-transparent hover:border-security-gold/30">
          <div className="w-2 h-2 bg-security-gold rounded-full"></div>
          <span className="text-gray-300 text-sm hover:text-security-gold transition-colors">
            {certification.shortName}
          </span>
          <div className="ml-auto text-security-gold/60 text-xs">ℹ️</div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-security-charcoal border border-security-gold/30">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-white font-montserrat">
            <div className="p-2 bg-gradient-to-br from-security-gold to-security-silver rounded-lg text-security-dark">
              {certification.icon}
            </div>
            <span>{certification.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <p className="text-gray-300 font-roboto leading-relaxed">
            {certification.description}
          </p>
          
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">
              Détails de la certification :
            </h4>
            <ul className="space-y-2">
              {certification.details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-security-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">
              Organisme certificateur :
            </h4>
            <p className="text-gray-300 font-roboto">{certification.issuer}</p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-security-gold mb-3">
              Compétences acquises :
            </h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-security-gold/10 text-security-gold border-security-gold/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CertificationDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {certifications.map((cert) => (
        <CertificationCard key={cert.id} certification={cert} />
      ))}
    </div>
  );
};

export default CertificationDetails;