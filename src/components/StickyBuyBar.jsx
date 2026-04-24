import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { productData } from '../data/product';

export default function StickyBuyBar({ onOpenCheckout, selectedVariantId, setSelectedVariantId }) {
  const [show, setShow] = useState(false);
  const selectedVariant = productData.variants.find(v => v.id === selectedVariantId) || productData.variants[0];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar la barra si pasa la sección del Hero
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);
  const finalPrice = selectedVariant.price;

  const handleCheckout = (e) => {
    e.preventDefault();
    onOpenCheckout(selectedVariant.id);
  };
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 animate-fade-up">
      <div className="max-w-6xl mx-auto py-2.5 px-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Info del producto (Visible en móvil ahora también) */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <img src={productData.images[0]} alt={productData.name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg border border-gray-200" />
            <div className="min-w-0">
              <div className="font-black text-black text-[11px] sm:text-sm uppercase truncate leading-tight">
                {productData.name}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black">
                <span className="text-primary">{formatCurrency(finalPrice)}</span>
                <span className="text-gray-400 line-through font-bold">{formatCurrency(selectedVariant.compareAtPrice)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Selector de Variante (Solo en escritorio para no saturar móvil) */}
            <div className="relative hidden md:block">
              <select 
                className="appearance-none bg-gray-50 border border-gray-200 text-black text-[10px] font-black rounded-lg pl-3 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer uppercase"
                value={selectedVariantId}
                onChange={(e) => setSelectedVariantId(e.target.value)}
              >
                {productData.variants.map(v => (
                  <option key={v.id} value={v.id} className="text-black bg-white">{v.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="bg-[#ff4d00] hover:bg-orange-600 text-white font-black py-3.5 px-5 sm:px-10 rounded-full shadow-xl transition-all flex flex-col items-center justify-center gap-0 active:scale-95 whitespace-nowrap border-b-4 border-black/10"
            >
              <span className="text-[12px] sm:text-[14px] uppercase tracking-tighter leading-none">¡LO QUIERO!</span>
              <span className="text-[8px] uppercase font-bold opacity-90 mt-0.5 tracking-widest hidden sm:block">Pago Contra Entrega</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
