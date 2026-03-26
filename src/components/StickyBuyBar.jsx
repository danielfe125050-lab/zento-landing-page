import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { productData } from '../data/product';

export default function StickyBuyBar({ onOpenCheckout, selectedVariantId, setSelectedVariantId, discountApplied }) {
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
  const finalPrice = discountApplied ? selectedVariant.price * 0.95 : selectedVariant.price;

  const handleCheckout = (e) => {
    e.preventDefault();
    onOpenCheckout(selectedVariant.id);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_-8px_32px_rgba(248,173,186,0.15)] border-t border-primary/10 animate-fade-up">
      <div className="container max-w-5xl py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Info del producto */}
          <div className="hidden sm:flex items-center gap-4">
            <img src={selectedVariant.image || productData.images[0]} alt={productData.name} className="w-12 h-12 object-contain rounded-lg border border-primary/10" />
            <div>
              <div className="font-heading font-black text-black flex items-center gap-2 text-sm uppercase tracking-tight">
                Flawless Facial <span className="bg-black text-white text-[8px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Zap size={8} fill="currentColor"/> SAVE {productData.discount}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="text-black">{formatCurrency(finalPrice)}</span>
                <span className="text-gray-400 line-through">{formatCurrency(selectedVariant.compareAtPrice)}</span>
              </div>
            </div>
          </div>

             <div className="flex w-full sm:w-auto items-center gap-2">
              {/* Selector de Cantidad Sticky */}
              <div className="hidden sm:flex items-center bg-surface border border-primary/20 rounded-lg overflow-hidden h-full">
                <button 
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-main font-bold hover:bg-primary/10 transition-colors"
                >
                  -
                </button>
                <div className="w-6 text-center text-main font-bold text-sm">
                  {quantity}
                </div>
                <button 
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-main font-bold hover:bg-primary/10 transition-colors"
                >
                  +
                </button>
              </div>

             <div className="relative h-full flex-1 sm:flex-none">
                <select 
                  className="appearance-none bg-surface border w-full border-primary/20 text-main text-xs font-bold rounded-lg pl-3 pr-8 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary h-full cursor-pointer"
                  value={selectedVariantId}
                  onChange={(e) => setSelectedVariantId(e.target.value)}
                >
                  {productData.variants.map(v => (
                    <option key={v.id} value={v.id} className="text-main bg-white">{v.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
             </div>

            <button 
              onClick={handleCheckout}
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 sm:px-6 rounded-lg shadow-lg flex-1 sm:flex-none transition-colors flex items-center justify-center gap-2 animate-pulse-soft whitespace-nowrap text-sm sm:text-base"
            >
              COMPRAR AHORA
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
