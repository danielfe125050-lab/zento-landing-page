import React from 'react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface border-y border-primary/5">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-main-muted text-xl">Mira cómo cambia todo en segundos.</p>
        </div>

        <div className="flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl border-[4px] border-white ring-1 ring-gray-200"
          >
             <video src="/1.mp4" autoPlay loop muted playsInline className="w-full h-auto object-cover" />
          </motion.div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <button onClick={() => {
            const el = document.getElementById('checkout-area');
            if(el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="relative bg-primary hover:bg-primary-hover text-white transition-all w-full max-w-sm text-lg sm:text-xl py-4 pt-5 pb-5 rounded-[50px] shadow-2xl flex flex-col items-center justify-center border-b-4 border-black/20 hover:-translate-y-1 active:translate-y-1 active:border-b-0 group">
            <div className="absolute -inset-1 bg-primary rounded-[50px] blur opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            <span className="relative z-10 font-black tracking-wider uppercase flex items-center gap-2">
              PEDIR CONTRA ENTREGA
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
