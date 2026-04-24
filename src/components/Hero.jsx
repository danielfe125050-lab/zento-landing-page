import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productData } from '../data/product';
import { Check, ShieldCheck, Truck } from 'lucide-react';
import CheckoutForm from './CheckoutForm';

export default function Hero({ isCheckoutOpen, setIsCheckoutOpen, selectedVariantId, setSelectedVariantId }) {
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
    { id: '1-unit', title: '1 Compresor AeroSmart', subtitle: 'Ideal para viaje seguro', price: 131900, compareAtPrice: 220000, quantity: 1, discountBadge: null },
    { id: '2-units', title: 'Combo X2 (Moto y Carro)', subtitle: 'Ahorro + Para la Familia', price: 229900, compareAtPrice: 440000, quantity: 2, isPopular: true, discountBadge: 'OFERTA ESPECIAL' }
  ];

  const activeBundle = bundles.find(b => b.id === selectedVariantId) || bundles[0];
  const finalPrice = activeBundle.price;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsCheckoutOpen(true);
    // Hacemos scroll suave al formulario si es necesario
    const element = document.getElementById('checkout-area');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="relative min-h-[800px] pt-2 md:pt-6 pb-24 overflow-hidden">
      {/* Wavy Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="h-[70%] bg-gray-200 rounded-b-[100px] md:rounded-b-[200px]" style={{ borderRadius: '0 0 50% 50% / 0 0 20% 20%' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white"></div>
      </div>

      <div className="w-full max-w-[100vw] overflow-x-hidden box-border pt-2 pb-12">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-full">
        
        {/* Left Side: Product Image Carousel */}
        <div className="relative flex flex-col justify-center items-center w-full min-w-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[500px] mb-6"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl"></div>
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white group">
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2 border border-white/20 shadow-xl group-hover:scale-105 transition-transform cursor-pointer">
                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> VER EN ACCIÓN
              </div>
              <AnimatePresence mode="wait">
                {productData.images[currentImageIdx].endsWith('.mp4') ? (
                  <motion.video 
                    key={currentImageIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={productData.images[currentImageIdx]} 
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
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
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto pb-2 max-w-[500px] w-full hide-scrollbar">
            {productData.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIdx(idx)} 
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all relative ${currentImageIdx === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                {img.endsWith('.mp4') ? (
                  <video src={img} className="w-full h-full object-cover" />
                ) : (
                  <img src={img} className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Card / Form Area */}
        <div id="checkout-area" className="flex justify-center lg:justify-end min-h-[600px] items-start w-full min-w-0">
          <AnimatePresence mode="wait">
            {isCheckoutOpen ? (
              <motion.div 
                key="form"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="w-full max-w-full sm:max-w-[550px]"
              >
                <CheckoutForm 
                   variantId={productData.variants.find(v => v.id === selectedVariantId)?.shopifyId}
                   bundleTitle={activeBundle.title}
                   price={finalPrice}
                   onCancel={() => setIsCheckoutOpen(false)}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="product"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="bg-white rounded-[32px] md:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-2xl max-w-full sm:max-w-[550px] w-full border border-gray-100 overflow-hidden box-border mx-auto"
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full mb-3 uppercase">
                    🏆 Producto más vendido en 2024
                  </span>
                  <h1 className="text-4xl md:text-6xl font-heading font-black text-black mb-3 leading-[1.1]">
                    {productData.name}
                  </h1>
                  
                  {/* Social Proof subido al Top */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      4.9/5 (+12,500 Clientes)
                    </span>
                  </div>

                  {/* Beneficios Flash rápidos */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-8">
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                      <span className="text-lg">⚡</span>
                      <span className="text-[10px] font-bold text-gray-600 uppercase">Inflado en 2m</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                      <span className="text-lg">🤏</span>
                      <span className="text-[10px] font-bold text-gray-600 uppercase">Portátil</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                      <span className="text-lg">🛑</span>
                      <span className="text-[10px] font-bold text-gray-600 uppercase">Automático</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-700 font-black px-4 py-2 rounded-xl mb-6 shadow-sm w-fit">
                    <Truck size={20} className="animate-bounce" />
                    <span className="uppercase tracking-wide text-[12px] md:text-sm">PAGO CONTRA ENTREGA - PAGA AL RECIBIR</span>
                  </div>
                  
                  <div className="flex items-baseline justify-center sm:justify-start gap-4 mb-8">
                    <span className="text-2xl text-gray-400 line-through font-bold">
                      {formatCurrency(activeBundle.compareAtPrice)}
                    </span>
                    <span className="text-5xl font-black text-black">
                      {formatCurrency(finalPrice)}
                    </span>
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase animate-pulse">
                      -{activeBundle.discountBadge || '45% OFF'}
                    </span>
                  </div>
                </div>

                {/* Garantía Blindada Addon */}
                <div className="bg-primary/5 border-l-4 border-primary p-3 rounded-r-xl mb-6 flex items-start gap-3">
                  <ShieldCheck className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-black font-bold text-sm leading-tight mb-1">Garantía Blindada 30 Días</h4>
                    <p className="text-gray-500 text-xs leading-snug">Si no infla tus llantas maravillosamente como prometemos, te devolvemos el 100% de tu dinero. Compra sin riesgo.</p>
                  </div>
                </div>

                {/* Urgencia y Escasez */}
                <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3 border-b border-red-600/10 pb-3">
                     <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                        <span className="animate-pulse">⏱️</span>
                        <span>La oferta expira en:</span>
                     </div>
                     <div className="bg-red-600 text-white font-black px-3 py-1 rounded-lg tracking-widest shadow-inner">
                        {formatTime(timeLeft)}
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-red-600 font-bold text-sm">🔥 ¡Atención! Solo quedan 11 unidades en bodega.</p>
                      <div className="w-full bg-red-600/20 h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-red-600 h-full rounded-full w-[15%]"></div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-black font-heading font-black text-lg uppercase tracking-tight">Selecciona tu Pack de Ahorro:</p>
                    <span className="text-[10px] font-black text-primary animate-pulse">OFERTA POR TIEMPO LIMITADO</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {bundles.map((bundle) => (
                      <button
                        key={bundle.id}
                        onClick={() => setSelectedVariantId(bundle.id)}
                        className={`relative w-full text-left p-4 rounded-2xl border-[3px] transition-all flex flex-col sm:flex-row items-center justify-between gap-4 ${selectedVariantId === bundle.id ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}
                      >
                        {bundle.isPopular && (
                          <div className="absolute -top-3 left-6 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-20 animate-bounce">
                            ¡MÁS VENDIDO!
                          </div>
                        )}
                        <div className="flex items-center gap-4 w-full">
                          <div className={`w-6 h-6 shrink-0 rounded-full border-[3px] flex items-center justify-center transition-colors ${selectedVariantId === bundle.id ? 'border-primary' : 'border-gray-300'}`}>
                            {selectedVariantId === bundle.id && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-black text-lg leading-tight ${selectedVariantId === bundle.id ? 'text-primary' : 'text-black'}`}>{bundle.title}</h3>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{bundle.subtitle}</p>
                          </div>
                          <div className="text-right">
                             <span className={`block font-black text-xl ${selectedVariantId === bundle.id ? 'text-primary' : 'text-black'}`}>{formatCurrency(bundle.price)}</span>
                             {bundle.compareAtPrice > bundle.price && (
                               <span className="text-[10px] text-gray-400 line-through font-bold">{formatCurrency(bundle.compareAtPrice)}</span>
                             )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover rounded-[50px] blur opacity-30 animate-pulse"></div>
                  <button onClick={handleCheckout} className="relative bg-primary hover:bg-primary-hover text-white transition-all w-full text-xl py-5 rounded-[50px] shadow-2xl flex flex-col items-center justify-center border-b-4 border-black/20 hover:border-b-2 hover:-translate-y-1 active:border-b-0 active:translate-y-1">
                    <span className="font-black tracking-wider uppercase flex items-center gap-2">
                       <Truck size={24} className="animate-bounce" /> PEDIR CONTRA ENTREGA
                    </span>
                    <span className="text-[11px] font-bold tracking-widest opacity-90 mt-1 uppercase text-white/90">
                       Llenar Formulario Ahora
                    </span>
                  </button>
                </div>

                {/* Sello Pago Contra Entrega Local */}
                <div className="mt-4 mb-2 text-center border border-dashed border-gray-200 rounded-xl py-3 bg-gray-50/50">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">No arriesgues tu dinero. Paga al recibir con:</p>
                  <div className="flex justify-center items-center gap-4 grayscale opacity-60">
                    <span className="font-heading font-black text-sm text-blue-900 border border-blue-900/20 px-2 flex items-center justify-center rounded">SERVIENTREGA</span>
                    <span className="font-heading font-black text-sm text-red-700 border border-red-700/20 px-2 flex items-center justify-center rounded">INTER RAPIDÍSIMO</span>
                  </div>
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
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
      
      {/* Vistos En Banner */}
      <div className="relative z-10 w-full bg-surface-light border-y border-gray-200 mt-20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">El dispositivo de seguridad recomendado por</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Fake logos usando texto robusto como placeholder */}
            <h3 className="text-2xl font-black font-heading">MOTOR TREND</h3>
            <h3 className="text-2xl font-black font-heading">AUTO BILD</h3>
            <h3 className="text-2xl font-black font-heading">CAR & DRIVER</h3>
            <h3 className="text-2xl font-black font-heading">TOP GEAR</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
