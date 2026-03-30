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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "/imgi_13_cortadora_verduras_papas_gif_1.webp", title: "Paso 1: Coloca", desc: "Pon tus vegetales u hortalizas directo en el conducto hermético superior sin tener contacto." },
            { src: "/imgi_15_cortadora_verduras_papas_gif_2.webp", title: "Paso 2: Gira", desc: "Selecciona el modo y el grosor exacto que necesitas rotando fácilmente la perilla." },
            { src: "/imgi_18_cortadora_verduras_papas_gif_3.webp", title: "Paso 3: Bombea", desc: "Usa el émbolo de resorte y mira caer infinitas rodajas perfectas en segundos." }
          ].map((item, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="bg-white p-6 rounded-[32px] border border-primary/10 hover:border-primary transition-all text-center group shadow-xl"
            >
               <div className="rounded-2xl overflow-hidden mb-6 aspect-square shadow-inner border border-gray-100">
                  <img src={item.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
               </div>
               <h3 className="text-xl font-black mb-2 text-main uppercase">{item.title}</h3>
               <p className="text-main-muted font-medium">{item.desc}</p>
            </motion.div>
          ))}
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
