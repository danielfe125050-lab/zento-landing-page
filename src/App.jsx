import React from 'react';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import EmotionalSection from './components/EmotionalSection';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import Testimonials from './components/Testimonials';
import ComparisonSection from './components/ComparisonSection';
import StickyBuyBar from './components/StickyBuyBar';
import WhatsAppButton from './components/WhatsAppButton';
import SaleNotification from './components/SaleNotification';
import GuaranteeSection from './components/GuaranteeSection';
import Navbar from './components/Navbar';
import ResultsSection from './components/ResultsSection';
import UsageSection from './components/UsageSection';
import IngredientsSection from './components/IngredientsSection';
import BonusOffer from './components/BonusOffer';
import LogisticsSection from './components/LogisticsSection';
import UGCGallery from './components/UGCGallery';

function App() {
  return (
    <div className="min-h-screen relative font-body scroll-smooth text-main bg-[#fffae2]">
      <UrgencyBar />
      <Navbar />
      <Hero />
      <LogisticsSection />
      <EmotionalSection />
      <IngredientsSection />
      <UsageSection />
      <HowItWorks />
      <ComparisonSection />
      <Benefits />
      <Testimonials />
      <FaqSection />
      <GuaranteeSection />
      
      {/* Zento-style Footer */}
      <footer className="relative z-10 bg-[#fffae2] pt-24 pb-12 text-center text-[#00473e] px-4 border-t border-green-100">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">ZENTO</h2>
        <p className="font-medium">© {new Date().getFullYear()} ZENTO Colombia. Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-bold uppercase tracking-widest opacity-80">
          <a href="#" className="hover:opacity-60 transition-opacity">Políticas de Privacidad</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Términos de Servicio</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Políticas de Reembolso</a>
        </div>
      </footer>

      <WhatsAppButton />
      <SaleNotification />
      <StickyBuyBar />
    </div>
  );
}

export default App;
