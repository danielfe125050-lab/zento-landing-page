import React, { useState, Suspense } from 'react';
import Hero from './components/Hero';

// Carga diferida para acelerar el inicio (Lazy Loading)
const EmotionalSection = React.lazy(() => import('./components/EmotionalSection'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const FAQSection = React.lazy(() => import('./components/FaqSection'));
const ProductFeatures = React.lazy(() => import('./components/ProductFeatures'));
const LegalModals = React.lazy(() => import('./components/LegalModals'));
const VideoDemo = React.lazy(() => import('./components/VideoDemo'));
const ReviewsSection = React.lazy(() => import('./components/ReviewsSection'));

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState('43348686569590');
  
  // Legal Modals State
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: '' });

  const handleOpenLegal = (e, type) => {
    e.preventDefault();
    setLegalModal({ isOpen: true, type });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen relative font-body scroll-smooth text-[#1a1a1a] bg-white overflow-hidden w-full max-w-full selection:bg-neonRed selection:text-white">
      
      <Hero 
        isCheckoutOpen={isCheckoutOpen} 
        setIsCheckoutOpen={setIsCheckoutOpen}
        selectedVariantId={selectedVariantId}
        setSelectedVariantId={setSelectedVariantId}
      />

      {/* Boundary para el Lazy Loading */}
      <Suspense fallback={<div className="h-20 flex items-center justify-center text-neonRed font-black animate-pulse uppercase tracking-[0.2em] text-xs">Cargando experiencia...</div>}>
        <EmotionalSection />
        <VideoDemo />
        <ProductFeatures />
        <HowItWorks />
        <ReviewsSection />
        <FAQSection />
      </Suspense>
      
      {/* Footer */}
      <footer className="relative z-10 bg-white pt-24 pb-32 lg:pb-12 text-center text-[#1a1a1a] px-4 border-t border-gray-100">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 italic tracking-tighter uppercase">Dropi Store</h2>
        <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">© {currentYear} Todos los derechos reservados.</p>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <a href="#" onClick={(e) => handleOpenLegal(e, 'envio')} className="hover:opacity-100 hover:text-neonRed transition-all">Políticas de Envío</a>
          <a href="#" onClick={(e) => handleOpenLegal(e, 'terminos')} className="hover:opacity-100 hover:text-neonRed transition-all">Términos y Condiciones</a>
          <a href="#" onClick={(e) => handleOpenLegal(e, 'privacidad')} className="hover:opacity-100 hover:text-neonRed transition-all">Privacidad</a>
          <a href="#" onClick={(e) => handleOpenLegal(e, 'devoluciones')} className="hover:opacity-100 hover:text-neonRed transition-all">Devoluciones</a>
        </div>
      </footer>

      {/* Legal Modals Implementation */}
      <LegalModals 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
      />

    </div>
  );
}

export default App;
