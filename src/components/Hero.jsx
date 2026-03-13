import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Plus, Minus, ShieldCheck, Zap, Monitor, Wrench, Truck, Headset, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { productData } from '../data/product';
import CheckoutCountdown from './CheckoutCountdown';


export default function Hero() {
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[1]); // Default to PRO
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState({ 'addon-modos': true, 'addon-regulador': true });
  const [openHeroFaq, setOpenHeroFaq] = useState(null);

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  const toggleAddon = (id) => {
    setAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const domain = productData.storeDomain;
    
    try {
      // 1. Vaciar el carrito silenciosamente
      await fetch(`https://${domain}.myshopify.com/cart/clear.js`, { method: 'POST' });
      
      // 2. Añadir el nuevo producto silenciosamente
      const formData = new FormData();
      formData.append('id', selectedVariant.shopifyId);
      formData.append('quantity', quantity);
      
      await fetch(`https://${domain}.myshopify.com/cart/add.js`, {
        method: 'POST',
        body: formData
      });
      
      // 3. Ir al carrito limpio (Releasit cargará perfecto sin confundirse)
      window.location.href = `https://${domain}.myshopify.com/cart`;
    } catch (error) {
      // Fallback seguro
      window.location.href = `https://${domain}.myshopify.com/cart/clear?return_to=/cart/add?id=${selectedVariant.shopifyId}%26quantity=${quantity}`;
    }
  };

  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % productData.images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + productData.images.length) % productData.images.length);

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-0 pb-12 bg-white">
      {/* Soft Pink Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Carousel Visual Element - Left on Desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
           <div className="relative aspect-[4/5] md:aspect-[2/3] max-h-[60vh] md:max-h-none overflow-hidden">
              <motion.img 
                key={activeImg}
                src={productData.images[activeImg]} 
                alt={productData.name} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-primary transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-primary transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Badges Overlay */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <div className="bg-primary text-main text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  Envío Gratis
                </div>
                <div className="bg-white/90 text-main text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  Resultados Reales
                </div>
              </div>
           </div>

           {/* Thumbnails */}
           <div className="flex gap-2 mt-4 justify-center overflow-x-auto py-2">
              {productData.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImg === idx ? 'border-primary scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-contain p-1 bg-white" />
                </button>
              ))}
           </div>
        </motion.div>

        {/* Text and Purchase Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-accent border border-primary/20 px-4 py-1.5 rounded-full text-sm font-bold w-max mb-2 mt-4">
            <Star size={16} fill="currentColor" /> MÁS VENDIDO EN COLOMBIA
          </div>
          
          <div className="flex flex-col items-center lg:items-start pt-12 md:pt-0">
            <h1 className="text-4xl sm:text-6xl font-black mb-1 leading-tight tracking-tight text-main text-center lg:text-left">
              {productData.name}
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl text-main-muted font-medium mb-2 leading-relaxed">
            {productData.subtitle}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-accent">
              <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
            </div>
            <span className="text-main font-bold">4.9/5</span>
            <span className="text-main-muted text-sm font-medium">(+5,000 Clientes Felices)</span>
          </div>

          {/* Interactive Pricing/Variant Box */}
          <div className="glass p-6 rounded-2xl border border-primary/10 relative space-y-5">
            {/* Variants */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-main-muted uppercase tracking-wider">Selecciona tu tratamiento:</label>
              {productData.variants.map((variant) => (
                <div 
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center ${
                    selectedVariant.id === variant.id 
                      ? 'border-primary bg-primary/5 shadow-md' 
                      : 'border-gray-100 bg-white hover:border-primary/30'
                  }`}
                >
                  {variant.popular && (
                    <div className="absolute -top-3 right-4 bg-accent text-main text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase">
                      Más Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedVariant.id === variant.id ? 'border-primary' : 'border-gray-300'}`}>
                      {selectedVariant.id === variant.id && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                    </div>
                    <div>
                      <div className="font-bold text-main">
                        {variant.name}
                      </div>
                      {variant.description && <div className="text-xs text-main-muted">{variant.description}</div>}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-main">{formatCurrency(variant.price)}</div>
                    <div className="text-xs text-main-muted line-through">{formatCurrency(variant.compareAtPrice)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Addons Section */}
            <div className="bg-surface p-4 rounded-xl border border-primary/10">
              <div className="text-xs font-bold text-accent uppercase mb-3 flex items-center gap-2">
                <Zap size={14} fill="currentColor" /> Oferta Exclusiva
              </div>
              {productData.addons.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={addon.image} alt={addon.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <div className="font-bold text-main text-sm">{addon.name}</div>
                      <div className="text-accent font-bold text-[10px] px-2 bg-white rounded-full border border-primary/20 inline-block">GRATIS SOLO HOY</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-10 h-5 rounded-full p-0.5 transition-colors ${addons[addon.id] ? 'bg-accent' : 'bg-gray-200'}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${addons[addon.id] ? 'translate-x-5' : 'translate-x-0'}`}></div>
                  </button>
                </div>
              ))}
            </div>

            {/* Contador de Urgencia */}
            <CheckoutCountdown />

            <button onClick={handleCheckout} className="btn-primary py-4 text-xl w-full text-center mt-4 text-main">
              COMPRAR AHORA →
            </button>

            {/* Sellos de Confianza (Trust Badges) */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 bg-surface-light/50 p-3 rounded-xl border border-primary/10">
                <div className="text-primary"><ShieldCheck size={20} /></div>
                <span className="text-[10px] font-bold text-main uppercase leading-tight">Pago Contra Entrega</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-light/50 p-3 rounded-xl border border-primary/10">
                <div className="text-primary"><Truck size={20} /></div>
                <span className="text-[10px] font-bold text-main uppercase leading-tight">Envío Gratis</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-main-muted">
              <ShieldCheck size={16} className="text-accent" />
              <span>Garantía de Satisfacción. Pago Contra Entrega.</span>
            </div>
          </div>

          {/* Mini FAQ Block */}
          <div className="space-y-2 mt-2">
            {productData.heroFaqs.slice(0, 3).map((faq) => (
              <div key={faq.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface transition-colors cursor-pointer group" onClick={() => setOpenHeroFaq(openHeroFaq === faq.id ? null : faq.id)}>
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Star size={16} />
                </div>
                <div>
                  <div className="font-bold text-sm text-main flex items-center justify-between">
                    {faq.question}
                    <ChevronDown size={14} className={`transition-transform ${openHeroFaq === faq.id ? 'rotate-180' : ''}`} />
                  </div>
                  {openHeroFaq === faq.id && <p className="text-xs text-main-muted mt-1 animate-fade">{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
