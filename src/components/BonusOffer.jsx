import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BonusOffer() {
  return (
    <section className="py-20 bg-main text-white overflow-hidden relative">
      {/* Elementos decorativos animados */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent text-main px-4 py-1 rounded-full text-xs font-black uppercase mb-6">
                <Gift size={14} /> EXCLUSIVO SOLO HOY
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                ¡Tu compra incluye un <span className="text-primary italic">Regalo VIP!</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                No solo te llevas la crema, te llevas el sistema completo. Recibe totalmente <span className="text-white font-bold underline">GRATIS</span> nuestra guía digital para acelerar tus resultados.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Rutina de 15 min para Glúteos</span>
                </li>
                <li className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Plan de Alimentación Anti-Celulitis</span>
                </li>
                <li className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Secretos de Hidratación Pro</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <div className="text-center">
                    <p className="text-xs uppercase text-gray-400 font-bold mb-1">Valor Comercial</p>
                    <p className="text-2xl font-black text-gray-500 line-through">$45.000</p>
                </div>
                <div className="text-center bg-primary/20 border border-primary/30 px-6 py-2 rounded-2xl">
                    <p className="text-xs uppercase text-primary font-bold mb-1">Para ti hoy</p>
                    <p className="text-2xl font-black text-primary">¡GRATIS!</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
                <motion.img 
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  src="/img/zento/ebook_bonus.png" 
                  alt="E-book Guía Glúteos de Acero Zento" 
                  className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(248,173,186,0.3)]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
