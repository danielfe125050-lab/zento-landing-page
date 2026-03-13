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
          {productData.howItWorks.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-primary/5 hover:border-accent transition-all text-center group shadow-sm"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{step.step}</div>
              <h3 className="text-xl font-bold mb-3 text-main">{step.title}</h3>
              <p className="text-main-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href={productData.checkoutUrl} className="inline-block bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl border border-white/10 transition-all w-full sm:w-auto">
              QUIERO PROBARLO SIN RIESGO →
            </a>
        </div>
      </div>
    </section>
  );
}
