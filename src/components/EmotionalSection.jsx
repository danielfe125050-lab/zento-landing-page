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
             <div className="absolute inset-0 bg-danger/10 blur-[80px] rounded-full z-0"></div>
             
             <img 
              src="/el problema.jpeg" 
              alt="Problema de depilación tradicional" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border border-danger/20"
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
            <div className="bg-danger/10 text-danger text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">El Problema Oculto</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Cansada del dolor y de que tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-red-600">maquillaje luzca grumoso?</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                La depilación con cera quema y estira tu piel, provocando envejecimiento prematuro. Las pinzas son literalmente una tortura lenta.
              </p>
              <p>
                Piensa en esa vez que tenías un evento importante y al depilarte el labio superior quedaste con una mancha roja e inflamada. O peor, esos vellos oscuros que solo notas cuando estás bajo la luz del sol hablando con alguien de frente porque la cera no los arrancó todos.
              </p>
              <p className="font-bold text-main">
                Tu rostro es tu carta de presentación. No dejes que los métodos del pasado arruinen tu seguridad.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
