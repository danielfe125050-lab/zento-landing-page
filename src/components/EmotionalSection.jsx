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
                  src="/publicidad.mp4" 
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
              ¿Cansado de la inseguridad y del estrés de <span className="text-primary">quedar varado en medio de la nada?</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                Quedarte varado con una llanta baja en medio de la nada es peligroso y muy frustrante.
              </p>
              <p>
                Piensa en esa vez que una llanta estaba baja manejando de noche y el pánico de quedar varado. O peor, las horas perdidas haciendo filas en estaciones de servicio solo para descubrir que la máquina estaba averiada.
              </p>
              <p className="font-bold text-main">
                Un viaje en familia no debería ser un riesgo ni ser arruinado por una llanta baja. Toma el control de tu seguridad vial.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
