import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productData } from '../data/product';
import { Check, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60 + 24); // 15:24

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const bundles = [
    { id: 1, title: '1 Par', subtitle: 'Básico', price: 49900, compareAtPrice: 69900, quantity: 1, discountBadge: null },
    { id: 2, title: '2 Pares', subtitle: '🎁 + BONO GRATIS: Guía PDF', price: 84800, compareAtPrice: 139800, quantity: 2, isPopular: true, discountBadge: '15% OFF' },
    { id: 3, title: '3 Pares', subtitle: '🎁 + BONO PDF + Envío Express', price: 112000, compareAtPrice: 209700, quantity: 3, discountBadge: '25% OFF' },
  ];

  const activeBundle = bundles.find(b => b.id === selectedBundle);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const domain = productData.storeDomain;
    
    try {
      // 1. Vaciar el carrito silenciosamente
      await fetch(`https://${domain}.myshopify.com/cart/clear.js`, { method: 'POST' });
      
      // 2. Añadir la cantidad elegida silenciosamente
      const formData = new FormData();
      formData.append('id', productData.variants[0].shopifyId || "123456789");
      formData.append('quantity', activeBundle.quantity);
      
      await fetch(`https://${domain}.myshopify.com/cart/add.js`, {
        method: 'POST',
        body: formData
      });
      
      // 3. Ir al carrito limpio (Releasit funcionará perfecto)
      window.location.href = `https://${domain}.myshopify.com/cart`;
    } catch (error) {
      window.location.href = `https://${domain}.myshopify.com/cart/clear?return_to=/cart/add?id=${productData.variants[0].shopifyId}%26quantity=${activeBundle.quantity}`;
    }
  };

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="relative min-h-[800px] pt-12 pb-24 overflow-hidden">
      {/* Wavy Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="h-[70%] bg-gray-200 rounded-b-[100px] md:rounded-b-[200px]" style={{ borderRadius: '0 0 50% 50% / 0 0 20% 20%' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Product Image Carousel */}
        <div className="relative flex flex-col justify-center items-center w-full">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[500px] mb-6"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl"></div>
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={productData.images[currentImageIdx]} 
                  alt={`${productData.name} view ${currentImageIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto pb-2 max-w-[500px] w-full hide-scrollbar">
            {productData.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIdx(idx)} 
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${currentImageIdx === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Card */}
        <div className="flex justify-center lg:justify-end">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl max-w-[550px] w-full border border-gray-100"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-black mb-2 leading-tight">
              {productData.name}
            </h2>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-2xl text-gray-400 line-through">
                {formatCurrency(activeBundle.compareAtPrice)}
              </span>
              <span className="text-4xl font-black text-black">
                {formatCurrency(activeBundle.price)}
              </span>
              {activeBundle.discountBadge && (
                <span className="bg-danger text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {activeBundle.discountBadge}
                </span>
              )}
            </div>

            {/* Urgencia y Escasez */}
            <div className="bg-danger/10 border border-danger/20 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3 border-b border-danger/10 pb-3">
                 <div className="flex items-center gap-2 text-danger font-bold text-sm">
                    <span className="animate-pulse">⏱️</span>
                    <span>La oferta expira en:</span>
                 </div>
                 <div className="bg-danger text-white font-black px-3 py-1 rounded-lg tracking-widest shadow-inner">
                    {formatTime(timeLeft)}
                 </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-danger font-bold text-sm">🔥 ¡Atención! Solo quedan 11 pares en bodega.</p>
                  <div className="w-full bg-danger/20 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-danger h-full rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-black font-heading font-bold mb-4">Selecciona tu paquete:</p>
              <div className="flex flex-col gap-3">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`relative w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${selectedBundle === bundle.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    {bundle.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Más Popular
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedBundle === bundle.id ? 'border-primary' : 'border-gray-300'}`}>
                        {selectedBundle === bundle.id && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">{bundle.title}</h3>
                        <p className="text-sm text-gray-500">{bundle.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="font-black text-lg text-black">{formatCurrency(bundle.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <button onClick={handleCheckout} className="w-full btn-primary text-xl py-4 shadow-xl shadow-primary/20">
                COMPRAR AHORA
              </button>
            </div>
            
            <div className="flex justify-center gap-6 mt-6 border-t border-gray-100 pt-6">
               <div className="flex flex-col items-center gap-2">
                 <ShieldCheck size={24} className="text-primary" />
                 <span className="text-[10px] font-bold text-gray-500 uppercase text-center">Pago<br/>Seguro</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Truck size={24} className="text-primary" />
                 <span className="text-[10px] font-bold text-gray-500 uppercase text-center">Envío<br/>Nacional</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Check size={24} className="text-primary" />
                 <span className="text-[10px] font-bold text-gray-500 uppercase text-center">Calidad<br/>Garantizada</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Vistos En Banner */}
      <div className="relative z-10 w-full bg-surface-light border-y border-gray-200 mt-20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Usados en competencias internacionales y cajas de todo el país</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Fake logos usando texto robusto como placeholder */}
            <h3 className="text-2xl font-black font-heading">CROSSFIT JOURNAL</h3>
            <h3 className="text-2xl font-black font-heading">MEN'S HEALTH</h3>
            <h3 className="text-2xl font-black font-heading">ATLETA PRO</h3>
            <h3 className="text-2xl font-black font-heading">FITNESS MAG</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
