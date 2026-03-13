import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué lo necesitas?</h2>
          <p className="text-main-muted text-lg max-w-2xl mx-auto">
            Diseñado cuidadosamente para resolver tu problema de forma definitiva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productData.benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-2xl border border-primary/10 border-t-accent relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
              <CheckCircle2 size={40} className="text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-main-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
