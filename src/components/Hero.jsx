import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Truck, ShieldCheck, Award, MessageCircle } from 'lucide-react';
import CheckoutForm from './CheckoutForm';

export default function Hero() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState('1-unit');
  const [activeImage, setActiveImage] = useState('video');

  const bundles = [
    { 
      id: '43348686569590', // Variante 1
      title: '1 Masajeador Ocular', 
      desc: 'Tratamiento personal completo',
      price: '$189.900', 
      oldPrice: '$259.900',
      badge: 'Popular'
    },
    { 
      id: '43348686602358', // Variante 2
      title: 'Combo Pareja (Llevas 2)', 
      desc: 'El mejor regalo para descansar',
      price: '$319.900', 
      oldPrice: '$519.800',
      badge: 'Mejor Valor'
    }
  ];

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const images = [
    { id: 'video', type: 'video', src: '/video .mp4' },
    { id: '1', type: 'image', src: '/1.jpeg' },
    { id: '2', type: 'image', src: '/2.jpeg' },
    { id: '3', type: 'image', src: '/3.jpeg' },
    { id: '4', type: 'image', src: '/4.jpeg' },
    { id: '5', type: 'image', src: '/5.jpeg' },
    { id: '6', type: 'image', src: '/6.jpeg' }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-[#333]">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="w-full bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-bold py-2 text-center uppercase tracking-widest px-4">
        ❤️ Especial de Mes: ¡Lleva el regalo perfecto para tu mirada! 🌹
      </div>

      {/* 2. TRUST SYMBOLS BAR */}
      <div className="w-full bg-neonRed text-white py-1.5 overflow-hidden border-b border-white/10">
        <div className="flex justify-center items-center gap-4 lg:gap-12 px-4">
          {[
            { icon: <ShieldCheck size={14}/>, text: "Garantía" },
            { icon: <Truck size={14}/>, text: "Envío Gratis" },
            { icon: <Award size={14}/>, text: "Tecnología EMS" },
            { icon: <MessageCircle size={14}/>, text: "Contra Entrega" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] font-black uppercase whitespace-nowrap">
              {item.icon} <span className="hidden xs:inline">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-12 max-w-7xl" id="checkout-area">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: MEDIA GALLERY */}
          <div className="lg:col-span-7 flex flex-col gap-4">
             <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-200">
               {activeImage === 'video' ? (
                 <video src="/video .mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
               ) : (
                 <img src={images.find(img => img.id === activeImage)?.src} className="w-full h-full object-contain bg-[#f3f3f3] animate-fade-in" alt="Product" />
               )}
             </div>

             {/* THUMBNAILS */}
             <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {images.map((img) => (
                  <button 
                    key={img.id}
                    onClick={() => setActiveImage(img.id)}
                    className={`relative min-w-[70px] h-[70px] sm:min-w-[85px] sm:h-[85px] rounded-xl overflow-hidden border-2 transition-all ${activeImage === img.id ? 'border-neonRed ring-2 ring-neonRed/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    {img.type === 'video' ? (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                         <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent translate-x-0.5"></div>
                         </div>
                      </div>
                    ) : (
                      <img src={img.src} loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Thumb" />
                    )}
                  </button>
                ))}
             </div>
          </div>

          {/* RIGHT: PRODUCT INFO & BUNDLES */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                 <div className="flex">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#ffb800] text-[#ffb800]" />)}
                 </div>
                 <span className="text-[10px] font-bold text-gray-400 underline uppercase tracking-widest">1,482 RESEÑAS VERIFICADAS</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] leading-tight mb-2 uppercase italic tracking-tighter">
                 OCULARTECH PRO™ <br/> <span className="text-neonRed not-italic">MASAJEADOR EMS + LUZ ROJA</span>
              </h1>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Reduce ojeras y bolsas de forma inteligente",
                "Disminuye líneas de expresión con Luz Roja",
                "Masaje EMS que activa la circulación sanguínea",
                "Ideal para fatiga ocular por uso de pantallas",
                "Diseño ajustable, cómodo y portátil"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-neonRed shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* BUNDLE SELECTOR */}
            <div className="mb-8 p-6 bg-white rounded-3xl border-2 border-gray-100 shadow-sm relative">
              <div className="flex items-center justify-center gap-2 mb-6">
                 <div className="h-px w-full bg-gray-200"></div>
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">SELECCIONA Y AHORRA</span>
                 <div className="h-px w-full bg-gray-200"></div>
              </div>

              <div className="space-y-3">
                {bundles.map((bundle) => (
                  <button 
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedBundle === bundle.id ? 'border-neonRed bg-neonRed/5 ring-1 ring-neonRed' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}
                  >
                    <div className="flex items-center gap-3">
                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedBundle === bundle.id ? 'border-neonRed bg-white' : 'border-gray-300 bg-white'}`}>
                          {selectedBundle === bundle.id && <div className="w-2.5 h-2.5 rounded-full bg-neonRed" />}
                       </div>
                       <div className="text-left">
                          <p className="text-sm font-black text-[#1a1a1a]">{bundle.title}</p>
                          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{bundle.desc}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-neonRed leading-none">{bundle.price}</p>
                       <p className="text-[10px] text-gray-400 line-through font-bold mt-1">{bundle.oldPrice}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA AREA */}
            <div className="mt-auto space-y-4">
               {/* TRUSTPILOT LOGO MOCKUP */}
               <div className="flex justify-center items-center gap-1 mb-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase italic">"EXCELENTE"</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-[#00b67a] flex items-center justify-center shadow-sm"><Star size={8} className="fill-white text-white" /></div>)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-600">Trustpilot</span>
               </div>

               <button 
                 onClick={handleCheckout}
                 className="w-full bg-neonRed hover:bg-[#1a1a1a] text-white font-black py-5 px-8 rounded-full text-xl shadow-[0_15px_30px_rgba(255,0,60,0.3)] transition-all flex flex-col items-center justify-center uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98]"
               >
                 <span>PEDIR CONTRA ENTREGA</span>
                 <span className="text-[10px] opacity-80 tracking-[0.2em] mt-1 font-bold">¡ENVÍO GRATIS HOY!</span>
               </button>

               <div className="flex justify-center items-center gap-6 sm:gap-10 py-6 border-t border-gray-100">
                  <div className="flex flex-col items-center gap-1.5 grayscale opacity-70">
                     <ShieldCheck size={22} className="text-gray-600" />
                     <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest text-center">30 Días Garantía</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 grayscale opacity-70">
                     <Truck size={22} className="text-gray-600" />
                     <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest text-center">Envío Gratis</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 grayscale opacity-70">
                     <Award size={22} className="text-gray-600" />
                     <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest text-center">Clínicamente Probado</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL CHECKOUT */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsCheckoutOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white h-screen sm:h-auto sm:rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="max-h-full sm:max-h-[90vh] overflow-y-auto no-scrollbar pt-4 sm:pt-0">
                <div className="absolute top-4 right-6 z-50">
                   <button 
                     onClick={() => setIsCheckoutOpen(false)} 
                     className="text-gray-400 hover:text-neonRed bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
                     aria-label="Cerrar"
                   >
                     &times;
                   </button>
                </div>
                <CheckoutForm 
                  onCancel={() => setIsCheckoutOpen(false)} 
                  bundles={bundles}
                  initialBundleId={selectedBundle}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
