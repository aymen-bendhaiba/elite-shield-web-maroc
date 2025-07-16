
import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CEOProfile from '@/components/CEOProfile';
import Services from '@/components/Services';
import Values from '@/components/Values';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-security-dark">
      <TopBar />
      <Header />
      <Hero />
      <CEOProfile />
      <About />
      <Services />
      <Values />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
