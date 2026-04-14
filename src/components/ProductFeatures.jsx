import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures() {
  const features = [
    {
      title: "100% Sin Desperdicio",
      description: "Con su motor de alta potencia, extrae cada gota de tu fruta hasta dejar la cáscara vacía. Tú tienes el control fácilmente.",
      image: "/4.jpeg",
      reverse: false
    },
    {
      title: "Extracción Automática",
      description: "Su motor de giro dual extrae hasta el último mililitro de manera automática para no desperdiciar fruta. Úsalo con total confianza.",
      image: "/2.mp4",
      reverse: true
    },
    {
      title: "Fácil Limpieza Garantizada",
      description: "Su diseño es lavable y portátil. Además, la batería de larga duración integrada te permite llevarlo de viaje o usarlo donde quieras.",
      image: "/gif_2.gif",
      reverse: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Diseño Inteligente</h2>
          <p className="text-xl text-gray-500">Hecho de materiales seguros (BPA-Free) y listo para durar años.</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {feature.image.endsWith('.mp4') ? (
                  <div className="relative w-full max-w-[320px] mx-auto rounded-3xl shadow-2xl border border-primary/20 overflow-hidden pointer-events-none">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      src={feature.image} 
                      className="w-full h-auto object-cover scale-[1.12] translate-y-3 block" 
                    />
                  </div>
                ) : (
                  <img src={feature.image} loading="lazy" alt={feature.title} className="w-full h-auto rounded-3xl shadow-2xl border border-gray-100 object-cover" />
                )}
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2 text-left"
                initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
