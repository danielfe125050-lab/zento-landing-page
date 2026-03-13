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
    <div className="min-h-screen relative font-sans scroll-smooth text-main">
      <UrgencyBar />
      <Navbar />
      <Hero />
      <LogisticsSection />
      <EmotionalSection />
      <IngredientsSection />
      <ResultsSection />
      <UsageSection />
      <HowItWorks />
      <ComparisonSection />
      <Benefits />
      <BonusOffer />
      <UGCGallery />
      <Testimonials />
      <FaqSection />
      <GuaranteeSection />
      
      {/* Footer minimalista */}
      <footer className="relative z-10 bg-surface-light/50 pt-24 pb-12 text-center text-main-muted text-sm px-4">
        <img src="/img/zento/logo_zento.png" alt="Zento Logo" className="w-32 mx-auto mb-4" />
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs opacity-70">
          <a href="#" className="hover:text-primary transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
          <a href="#" className="hover:text-primary transition-colors">Políticas de Reembolso</a>
        </div>
      </footer>

      <WhatsAppButton />
      <SaleNotification />
      <StickyBuyBar />
    </div>
  );
}

export default App;
