import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "compacto",
      title: "Almacenamiento Compacto",
      image: "/3.jpeg",
      subtitle: "Guárdalo fácilmente y no ocupes espacio extra en el baúl o la guantera."
    },
    {
      id: "tamaños",
      title: "Guía de Grosores",
      image: "/4.jpeg",
      subtitle: "La versatilidad de una tabla experta en segundos"
    },
    {
      id: "limpieza",
      title: "Limpieza y Protección",
      image: "/5.jpeg",
      subtitle: "Dedos siempre a salvo en todo el barrido de corte"
    }
  ];

  return (
    <section className="py-24 bg-surface-light border-y border-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-main tracking-tight uppercase mb-4">
            Explora cada Detalle
          </h2>
          <p className="text-xl text-main-muted font-medium">Toca para descubrir cómo dominarás la carretera.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-10 w-full max-w-4xl mx-auto px-2">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-4 px-6 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-black text-white shadow-lg scale-105' 
                  : 'bg-white text-main hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="w-full max-w-5xl mx-auto rounded-[40px] shadow-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full flex justify-center mb-6">
                 {/* El image class object-contain garantiza que las infografías se lean completamente y no se recorten */}
                 <img 
                   src={tabs[activeTab].image} 
                   alt={tabs[activeTab].title} 
                   className="w-full max-w-4xl max-h-[70vh] object-contain rounded-2xl"
                 />
              </div>
              <p className="text-center text-lg md:text-xl font-bold text-primary mb-4">
                {tabs[activeTab].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-16 flex justify-center">
          <button onClick={() => {
            const el = document.getElementById('checkout-area');
            if(el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="relative bg-primary hover:bg-primary-hover text-white transition-all w-full max-w-sm text-lg sm:text-xl py-4 pt-5 pb-5 rounded-[50px] shadow-2xl flex flex-col items-center justify-center border-b-4 border-black/20 hover:-translate-y-1 active:translate-y-1 active:border-b-0 group">
            <div className="absolute -inset-1 bg-primary rounded-[50px] blur opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            <span className="relative z-10 font-black tracking-wider uppercase flex items-center gap-2">
              PEDIR CONTRA ENTREGA
            </span>
          </button>
        </div>
        
      </div>
    </section>
  );
}
