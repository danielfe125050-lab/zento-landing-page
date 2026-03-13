import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { productData } from '../data/product';

export default function StickyBuyBar() {
  const [show, setShow] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]); // Lite default para la barra

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

  const handleCheckout = (e) => {
    e.preventDefault();
    const domain = productData.storeDomain;
    // En lugar del carrito (que usa AJAX inestable), mandamos al cliente directo a la página de la crema
    // con el tratamiento específico ya pre-seleccionado, para que Releasit nunca desaparezca.
    const productUrl = `https://${domain}.myshopify.com/products/crema-realce-de-gluteos-reafirmante?variant=${selectedVariant.shopifyId}`;
    window.location.href = productUrl;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_-8px_32px_rgba(248,173,186,0.15)] border-t border-primary/10 animate-fade-up">
      <div className="container max-w-5xl py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Info del producto */}
          <div className="hidden sm:flex items-center gap-4">
            <img src={productData.images[0]} alt={productData.name} className="w-12 h-12 object-cover rounded-lg border border-primary/10" />
            <div>
              <div className="font-bold text-main flex items-center gap-2 text-sm">
                Zento™ <span className="bg-accent text-white text-[8px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Zap size={8} fill="currentColor"/> SAVE 40%</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-accent">{formatCurrency(selectedVariant.price)}</span>
                <span className="text-main-muted line-through">{formatCurrency(selectedVariant.compareAtPrice)}</span>
              </div>
            </div>
          </div>

          {/* Dropdown y Botón */}
          <div className="flex w-full sm:w-auto items-center gap-3">
             <div className="relative">
                <select 
                  className="appearance-none bg-surface border border-primary/20 text-main text-xs font-bold rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-full cursor-pointer"
                  value={selectedVariant.id}
                  onChange={(e) => setSelectedVariant(productData.variants.find(v => v.id === e.target.value))}
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
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg flex-1 sm:flex-none transition-colors flex items-center justify-center gap-2 animate-pulse-soft"
            >
              COMPRAR AHORA
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
