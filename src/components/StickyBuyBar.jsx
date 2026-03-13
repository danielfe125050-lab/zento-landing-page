import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { productData } from '../data/product';

export default function StickyBuyBar() {
  const [show, setShow] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]); // Lite default para la barra
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

  const handleCheckout = async (e) => {
    e.preventDefault();
    const domain = productData.storeDomain;
    
    try {
      // 1. Vaciar el carrito silenciosamente
      await fetch(`https://${domain}.myshopify.com/cart/clear.js`, { method: 'POST' });
      
      // 2. Añadir la cantidad elegida silenciosamente
      const formData = new FormData();
      formData.append('id', selectedVariant.shopifyId);
      formData.append('quantity', quantity);
      
      await fetch(`https://${domain}.myshopify.com/cart/add.js`, {
        method: 'POST',
        body: formData
      });
      
      // 3. Ir al carrito limpio (Releasit funcionará perfecto sin bloqueos ni urls raras)
      window.location.href = `https://${domain}.myshopify.com/cart`;
    } catch (error) {
      // Fallback seguro
      window.location.href = `https://${domain}.myshopify.com/cart/clear?return_to=/cart/add?id=${selectedVariant.shopifyId}%26quantity=${quantity}`;
    }
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

            <div className="flex w-full sm:w-auto items-center gap-3">
              {/* Selector de Cantidad Sticky */}
              <div className="flex items-center bg-surface border border-primary/20 rounded-lg overflow-hidden h-full">
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

             <div className="relative h-full">
                <select 
                  className="appearance-none bg-surface border border-primary/20 text-main text-xs font-bold rounded-lg pl-3 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-full cursor-pointer"
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
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg flex-1 sm:flex-none transition-colors flex items-center justify-center gap-2 animate-pulse-soft whitespace-nowrap"
            >
              COMPRAR AHORA
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
