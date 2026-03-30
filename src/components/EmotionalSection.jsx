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
             
             <img 
              src="/3.jpeg" 
              alt="Problema al cocinar" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-primary/20"
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
            <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">El Problema Oculto</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Cansada del estrés y de que tu <span className="text-primary">comida tarde horas en prepararse?</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                Cortar vegetales con cuchillos o ralladores tradicionales es peligroso y frustrante.
              </p>
              <p>
                Piensa en esa vez que tenías prisa para preparar la cena y terminaste lastimándote los dedos con el cuchillo. O peor, en esas horas y horas perdidas picando cada verdura una por una cuando hubieras preferido estar descansando.
              </p>
              <p className="font-bold text-main">
                Cocinar no debería ser un riesgo ni tomar tanto tiempo. No dejes que herramientas obsoletas arruinen tu experiencia.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
