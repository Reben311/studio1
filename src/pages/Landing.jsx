import React from 'react';
import Navbar from '../components/landing/NavBar';
import HeroSection from '../components/landing/HeroSection';
import HowItWorks from '../components/landing/HowItWorks';
import FeatureSection from '../components/landing/FeatureSection';
import UseCases from '../components/landing/UseCases';
import FormatsSection from '../components/landing/FormatsSection';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <UseCases />
      <FormatsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}