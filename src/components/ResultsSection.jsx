import React from 'react';
import { motion } from 'framer-motion';

export default function ResultsSection() {
  return (
    <section className="py-20 bg-surface-light/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-main mb-4 uppercase tracking-tighter">Resultados Reales en 30 Días</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-main-muted">La ciencia y la constancia se unen. Mira la evolución real de nuestras clientes usando Zento diariamente.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-primary/10">
          <img 
            src="/img/zento/results.png" 
            alt="Resultados antes y después de 30 días con Zento" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-main/80 to-transparent p-8">
            <div className="flex justify-between text-white font-bold uppercase tracking-widest text-xs md:text-sm">
              <span>Día 1</span>
              <span>Día 15</span>
              <span>Día 30</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="text-primary font-bold text-2xl mb-1">94%</p>
                <p className="text-main-muted text-xs uppercase font-bold">Piel más firme</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="text-primary font-bold text-2xl mb-1">88%</p>
                <p className="text-main-muted text-xs uppercase font-bold">Efecto Levantamiento</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="text-primary font-bold text-2xl mb-1">91%</p>
                <p className="text-main-muted text-xs uppercase font-bold">Reducción de Celulitis</p>
            </div>
        </div>
      </div>
    </section>
  );
}
