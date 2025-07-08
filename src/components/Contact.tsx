
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  AlertCircle,
  Send,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message envoyé avec succès! Nous vous contacterons sous 24h.");
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const services = [
    "Executive Protection",
    "Close Protection",
    "Events Security", 
    "VIP Bodyguard",
    "VIP Concierge",
    "Private Investigation",
    "Risk Assessment",
    "Secure Transportation",
    "Flight Booking",
    "Travel Services"
  ];

  const coverageCities = [
    "Casablanca", "Fez", "Tangier", "Marrakesh", "Salé", "Meknes",
    "Rabat", "Oujda", "Kenitra", "Agadir", "Essaouira", "Oualidia"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-security-charcoal to-security-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Contactez-{' '}
            <span className="bg-gradient-to-r from-security-gold to-security-silver bg-clip-text text-transparent">
              nous
            </span>
          </h2>
          <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
            Service client 24h/7j pour toutes vos urgences sécuritaires
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-security-gold to-security-silver mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-red-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-white">Urgence 24h/7j</h3>
                    <p className="font-roboto text-red-200">Disponible en permanence</p>
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-montserrat font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Appel d'Urgence
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-security-gold to-security-silver rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-security-dark" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-white mb-1">Adresse</h4>
                  <p className="font-roboto text-gray-300">Hay el ghofrane n°29</p>
                  <p className="font-roboto text-gray-300">Dakhla, Maroc</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-security-gold to-security-silver rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-security-dark" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-white mb-1">Téléphone</h4>
                  <p className="font-roboto text-gray-300">+212 [À compléter]</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-security-gold to-security-silver rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-security-dark" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-white mb-1">Email</h4>
                  <p className="font-roboto text-gray-300">contact@ultraprotection.ma</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-security-gold to-security-silver rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-security-dark" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-white mb-1">Horaires</h4>
                  <p className="font-roboto text-gray-300">24h/24 - 7j/7</p>
                  <p className="font-roboto text-sm text-security-gold">Service d'urgence permanent</p>
                </div>
              </div>
            </div>

            {/* Coverage Map */}
            <Card className="bg-security-navy/50 border-security-gold/20">
              <CardContent className="p-6">
                <h4 className="font-montserrat font-bold text-xl text-white mb-4 flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-security-gold" />
                  Zone de Couverture
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {coverageCities.map((city) => (
                    <div key={city} className="bg-security-dark/30 p-2 rounded text-center">
                      <span className="font-roboto text-sm text-security-gold">{city}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-security-navy/50 border-security-gold/30">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
                Demande de Devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-roboto text-sm text-security-gold mb-2 block">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-security-dark/50 border-security-gold/30 text-white focus:border-security-gold"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="font-roboto text-sm text-security-gold mb-2 block">
                      Téléphone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-security-dark/50 border-security-gold/30 text-white focus:border-security-gold"
                      placeholder="+212 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto text-sm text-security-gold mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-security-dark/50 border-security-gold/30 text-white focus:border-security-gold"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="font-roboto text-sm text-security-gold mb-2 block">
                    Service requis *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-security-dark/50 border border-security-gold/30 rounded-md text-white focus:border-security-gold focus:outline-none"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-roboto text-sm text-security-gold mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-security-dark/50 border-security-gold/30 text-white focus:border-security-gold resize-none"
                    placeholder="Décrivez vos besoins en sécurité..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-security-gold to-security-silver text-security-dark font-montserrat font-semibold py-3 hover:shadow-xl hover:shadow-security-gold/30 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-security-dark mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer la Demande
                    </>
                  )}
                </Button>
              </form>

              <p className="font-roboto text-xs text-gray-400 mt-4">
                * Tous vos échanges sont strictement confidentiels et sécurisés
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
