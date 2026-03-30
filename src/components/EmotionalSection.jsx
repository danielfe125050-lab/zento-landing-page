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
              Cocinar nunca fue tan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">fácil, rápido y divertido</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                Olvídate de pasar horas picando verduras y del miedo constante a cortarte con cuchillos afilados. La Mandolina Vertical Safe-Slice™ transforma la tarea más tediosa de la cocina en algo instantáneo.
              </p>
              <p>
                Diseñada para la vida moderna en Colombia, esta herramienta te permite preparar ensaladas gourmet, guisos perfectos y snacks saludables en una fracción del tiempo habitual.
              </p>
              <p>
                No es solo un utensilio más — es la libertad de recuperar tu tiempo para lo que realmente importa: disfrutar de una comida deliciosa y nutritiva con tu familia.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
