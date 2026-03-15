import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Truck, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { productData } from '../data/product';

export default function Hero() {
  const [quantity, setQuantity] = useState(1);

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const domain = productData.storeDomain;
    const variantId = productData.variants[0].shopifyId;
    
    try {
      await fetch(`https://${domain}.myshopify.com/cart/clear.js`, { method: 'POST' });
      const formData = new FormData();
      formData.append('id', variantId);
      formData.append('quantity', quantity);
      
      await fetch(`https://${domain}.myshopify.com/cart/add.js`, {
        method: 'POST',
        body: formData
      });
      window.location.href = `https://${domain}.myshopify.com/cart`;
    } catch (error) {
      window.location.href = `https://${domain}.myshopify.com/cart/clear?return_to=/cart/add?id=${variantId}%26quantity=${quantity}`;
    }
  };

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 8, seconds: 9 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#fcfaf2] pt-8 pb-16">
      <div className="container px-4 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left: Image Box */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-8">
            <img 
              src={productData.images[0]} 
              alt={productData.name} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right: Info Box */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            Truly Soft Serve 🍓 URO Probiotics 🌸
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-500">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <span className="text-[11px] font-black text-gray-700 uppercase tracking-wider">
              {productData.socialProof}
            </span>
          </div>

          <div className="space-y-2 mb-8 text-left">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
              <span className="text-pink-400">💗</span> Piel sedosa y radiante
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
              <span className="text-yellow-500">✨</span> Aclara zonas íntimas oscuras
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
              <span className="text-green-500">🍃</span> Elimina olores no deseados
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-black text-[#22c55e]">
              {formatCurrency(productData.price)}
            </span>
            <span className="text-xl font-bold text-gray-400 line-through">
              {formatCurrency(productData.compareAtPrice)}
            </span>
            <div className="bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded flex items-center gap-1 uppercase italic shadow-sm">
              <ShoppingCart size={12} fill="currentColor" /> AHORRA {formatCurrency(productData.savings)}
            </div>
          </div>

          {/* Green CTA Button */}
          <button 
            onClick={handleCheckout}
            className="w-full bg-[#16da16] hover:bg-[#12b912] text-white py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex flex-col items-center justify-center gap-1 mb-8"
          >
            <span className="text-xl font-black uppercase tracking-wide flex items-center gap-2">
              <ShoppingCart size={24} fill="white" /> PEDIR CONTRAENTREGA
            </span>
            <span className="text-xs font-bold opacity-90">👉 ¡Envío Gratis! 👈</span>
          </button>

          {/* Payment Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 object-contain mt-1" />
            <img src="https://seeklogo.com/images/M/mercado-pago-logo-62C0D43339-seeklogo.com.png" alt="Mercado Pago" className="h-6 object-contain" />
            <img src="https://seeklogo.com/images/B/bancolombia-logo-646C0B820D-seeklogo.com.png" alt="Bancolombia" className="h-6 object-contain" />
            <img src="https://seeklogo.com/images/N/nequi-logo-0E9E609C6F-seeklogo.com.png" alt="Nequi" className="h-6 object-contain" />
          </div>

          {/* Guarantee Section */}
          <div className="flex items-center gap-4 mb-10 border-t border-gray-200 pt-8">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2150/2150150.png" 
              alt="Garantía" 
              className="w-16 h-16 object-contain"
            />
            <p className="text-xs leading-relaxed text-gray-700 font-medium text-left">
              <strong className="text-gray-900 block mb-1 uppercase tracking-tighter">Garantía de 30 días</strong>
              Tu compra es <span className="underline font-bold text-gray-900">100% segura</span>, si el producto no satisface tus necesidades o tiene reacciones inesperadas (en 30 días), <span className="underline font-bold text-gray-900 cursor-pointer">Te devolvemos tu dinero</span>
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative mb-12 px-2">
            <div className="absolute top-5 left-10 right-10 h-0.5 bg-gray-200 -z-0"></div>
            <div className="relative z-10 flex justify-between gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <ShoppingCart size={18} />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-gray-900 leading-tight">Domingo, 15. Mar</div>
                  <div className="text-[9px] text-gray-500 uppercase font-black">Ordenado</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <Truck size={18} />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-gray-900 leading-tight">Lunes, 16. Mar</div>
                  <div className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Orden Despachada</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-gray-900 leading-tight">Viernes, 20. Mar</div>
                  <div className="text-[9px] text-gray-500 uppercase font-black">Entregado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Countdown Section */}
          <div className="flex flex-col items-center gap-4 bg-gray-100/50 p-6 rounded-2xl border border-gray-200/50">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">La oferta termina en:</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-600 flex flex-col items-center justify-center text-white font-black leading-none shadow-lg">
                  <span className="text-2xl tracking-tighter">00</span>
                </div>
                <span className="text-[8px] font-bold text-gray-400 mt-2 uppercase">horas</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-600 flex flex-col items-center justify-center text-white font-black leading-none shadow-lg">
                  <span className="text-2xl tracking-tighter">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] font-bold text-gray-400 mt-2 uppercase">minutos</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-600 flex flex-col items-center justify-center text-white font-black leading-none shadow-lg">
                  <span className="text-2xl tracking-tighter">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] font-bold text-gray-400 mt-2 uppercase">segundos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
