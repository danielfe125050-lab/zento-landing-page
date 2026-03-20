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
import BonusOffer from './components/BonusOffer';
import LogisticsSection from './components/LogisticsSection';
import UGCGallery from './components/UGCGallery';
import VideoSection from './components/VideoSection';
import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  return (
    <div className="min-h-screen relative font-body scroll-smooth text-main bg-white overflow-hidden w-full max-w-full">
      <ExitIntentPopup />
      <UrgencyBar />
      <Navbar />
      <Hero />
      <VideoSection />
      <EmotionalSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <UGCGallery />
      <FaqSection />
      <ComparisonSection />
      <GuaranteeSection />
      
      {/* Footer */}
      <footer className="relative z-10 bg-black pt-24 pb-32 lg:pb-12 text-center text-white px-4 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">GRIP GYM PRO</h2>
        <p className="font-medium">© {new Date().getFullYear()} Grip Gym Pro. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-bold uppercase tracking-widest opacity-80">
          <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Refund Policy</a>
        </div>
      </footer>

      <WhatsAppButton />
      <SaleNotification />
      <StickyBuyBar />
    </div>
  );
}

export default App;
