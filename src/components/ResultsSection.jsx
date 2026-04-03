import React from 'react';
import { motion } from 'framer-motion';

export default function ResultsSection() {
  return (
    <section className="py-24 bg-surface-light/30 border-y border-gray-100">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight">Velocidad Profesional</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">Olvídate de usar bombas manuales agotadoras o rogar por aire en estaciones. Su motor automatizado hace el trabajo duro por ti.</p>
        </div>

        {/* Mostrando el GIF animado grande de demostración global */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white border-4 border-white mx-auto max-w-3xl">
          <img 
            src="/imgi_24_giphy.gif" 
            alt="Demostración infinita de AeroSmart Pro" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
            Resultados Reales
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="p-8 bg-white rounded-3xl shadow-lg border border-primary/5">
                <p className="text-primary font-black text-5xl mb-2">30+</p>
                <p className="text-main text-sm uppercase font-bold tracking-widest">Opciones de Corte</p>
                <p className="text-gray-400 text-xs mt-2 font-medium">Rebanadas, julianas y cubos</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 bg-white rounded-3xl shadow-lg border border-primary/5 relative scale-105 z-10 border-b-4 border-b-primary shadow-primary/10">
                <p className="text-primary font-black text-5xl mb-2">0</p>
                <p className="text-main text-sm uppercase font-bold tracking-widest">Piel Expuesta</p>
                <p className="text-gray-400 text-xs mt-2 font-medium">Jamás verás las navajas expuestas</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-8 bg-white rounded-3xl shadow-lg border border-primary/5">
                <p className="text-primary font-black text-5xl mb-2">40</p>
                <p className="text-main text-sm uppercase font-bold tracking-widest">Min Ahorrados</p>
                <p className="text-gray-400 text-xs mt-2 font-medium">Prepara comidas en tiempo récord</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
