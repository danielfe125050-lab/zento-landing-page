import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productData } from '../data/product';
import { ChevronDown, Check } from 'lucide-react';

export default function Hero() {
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState("Delivered every 4 weeks");

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="relative min-h-[800px] pt-12 pb-24 overflow-hidden">
      {/* Wavy Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="h-[70%] bg-[#c3e39d] rounded-b-[100px] md:rounded-b-[200px]" style={{ borderRadius: '0 0 50% 50% / 0 0 20% 20%' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#fffae2]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Product Image */}
        <div className="relative flex justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Circle backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00473e]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-green-500/20 rounded-full border-4 border-white/30"></div>
            
            <AnimatePresence mode="wait">
              <motion.img 
                key={selectedVariant.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                src={selectedVariant.image} 
                alt={selectedVariant.name}
                className="relative z-10 w-full max-w-[450px] h-auto drop-shadow-2xl"
              />
            </AnimatePresence>
          </motion.div>

          <div className="absolute bottom-[-40px] left-0">
            <button className="bg-[#00473e] text-white font-heading px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
              <span className="text-lg">🎁</span> GET $15 OFF
            </button>
          </div>
        </div>

        {/* Right Side: Product Card */}
        <div className="flex justify-center lg:justify-end">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl max-w-[550px] w-full border border-gray-100"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black text-[#00473e] mb-2">
              {productData.name}
            </h2>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-2xl text-gray-400 line-through">
                {formatCurrency(productData.compareAtPrice)}
              </span>
              <span className="text-4xl font-black text-[#00473e]">
                {formatCurrency(productData.price)}
              </span>
              <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Ahorra {productData.discount}
              </span>
            </div>

            <div className="mb-8">
              <p className="text-[#00473e] font-heading font-bold mb-4">
                Selecciona tu Color: <span className="font-medium opacity-70 ml-1">{selectedVariant.name}</span>
              </p>
              <div className="grid grid-cols-6 gap-3">
                {productData.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-circle ${selectedVariant.id === variant.id ? 'active ring-4 ring-green-100' : ''}`}
                    style={{ backgroundColor: variant.color }}
                    title={variant.name}
                  >
                    <div className="w-full h-full rounded-full opacity-0 hover:opacity-100 transition-opacity bg-white/20"></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[#00473e] font-heading font-bold mb-4">Modalidad de Envío</p>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 appearance-none font-medium text-[#00473e] focus:outline-none focus:border-green-200 transition-colors"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  <option>Pago Contra Entrega (Pagas al Recibir)</option>
                  <option>Envío Prioritario Express</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={20} className="text-[#00473e]" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-1 text-[10px] md:text-sm text-gray-500 font-bold uppercase">
                  <Check size={14} className="text-green-600" /> Sin riesgos, pagas solo al recibir
                </div>
                <div className="flex items-center gap-1 text-[10px] md:text-sm text-gray-500 font-bold uppercase">
                  <Check size={14} className="text-green-600" /> Envío GRATIS a toda Colombia 🇨🇴
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-full px-4 py-2 gap-4">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-2xl font-bold text-[#00473e]">-</button>
                <span className="text-xl font-bold text-[#00473e] w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="text-2xl font-bold text-[#00473e]">+</button>
              </div>
              <button className="flex-1 bg-[#00473e] hover:bg-[#003029] text-white rounded-full font-heading font-bold text-xl transition-all shadow-lg active:scale-95 py-4">
                ¡PEDIR AHORA!
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
