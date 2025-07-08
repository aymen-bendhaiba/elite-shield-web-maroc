
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CEOProfile from '@/components/CEOProfile';
import Values from '@/components/Values';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-security-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <CEOProfile />
      <Values />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
