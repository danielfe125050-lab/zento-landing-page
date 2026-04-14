import React from 'react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function EmotionalSection() {
  return (
    <section className="py-24 bg-bg relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
             <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full z-0"></div>
             
             <div className="relative z-10 w-full max-w-[320px] mx-auto rounded-3xl shadow-2xl border border-primary/20 overflow-hidden pointer-events-none">
                 <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/3.mp4" 
                  className="w-full h-auto object-cover scale-[1.12] translate-y-3"
                 />
             </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">El Problema Oculto</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Cansado de la molestia y del dolor de manos al <span className="text-primary">exprimir frutas todos los días?</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                Hacer fuerza todas las mañanas exprimiendo limones o naranjas es agotador y mancha tus manos.
              </p>
              <p>
                Piensa en el tiempo que pierdes lavando exprimidores mecánicos y lo molesto que es tener que pelar y presionar cada fruta. Con FreshJuice, todo ese trabajo desaparece en segundos.
              </p>
              <p className="font-bold text-main">
                Preparar los desayunos para tu familia no debería ser un esfuerzo físico agotador que te ensucie la cocina entera. ¡Hazlo en segundos!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
