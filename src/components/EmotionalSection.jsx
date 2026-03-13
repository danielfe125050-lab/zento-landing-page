import React from 'react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function EmotionalSection() {
  return (
    <section className="py-24 bg-bg relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
             <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0"></div>
             <img 
              src={productData.images[1]} 
              alt="Relaxing Room" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/5"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Recupera la firmeza y siéntete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">increíble en tu propia piel</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed">
              <p>
                Hay noches en las que solo quieres desconectar del ruido, bajar el ritmo y sentir paz de verdad.
              </p>
              <p>
                Zento transforma tu rutina diaria en un momento de autocuidado, mejorando la firmeza y textura de tu piel.
              </p>
              <p>
                No es solo una crema — es esa sensación de cuidarte, nutrir tu cuerpo y ver resultados reales. Un pequeño ritual que te da confianza todos los días.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
