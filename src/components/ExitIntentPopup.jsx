import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { productData } from '../data/product';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Check if mouse leaves through the top of the window
      if (e.clientY < 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Also trigger after 90 seconds just in case they don't exit
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }, 90000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  const handleClaim = () => {
    window.location.href = productData.checkoutUrl + '?discount=EXTRA10';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white max-w-md w-full rounded-3xl shadow-2xl relative z-10 overflow-hidden border border-gray-100"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors z-20"
            >
              <X size={20} />
            </button>
            
            <div className="bg-black p-8 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                 <Gift size={120} className="text-white opacity-10" />
               </div>
               <h3 className="text-3xl font-heading font-black text-white uppercase mt-2">¡Espera!</h3>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-xl font-bold mb-4 leading-tight">No te vayas sin proteger tus manos.</p>
              <p className="text-main-muted mb-6">
                Lleva hoy tus Grip Gym Pro con un <strong className="text-black">10% DE DESCUENTO ADICIONAL</strong>. Exclusivo si completas tu pedido ahora mismo.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={handleClaim}
                  className="w-full btn-primary text-lg py-4 uppercase shadow-xl animate-pulse-soft"
                >
                  💥 RECLAMAR MI 10% EXTRA
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-sm font-bold text-gray-400 hover:text-black underline transition-colors"
                >
                  No gracias, prefiero entrenar con callos
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
