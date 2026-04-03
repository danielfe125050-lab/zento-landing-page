import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures() {
  const features = [
    {
      title: "Control Absoluto del Grosor",
      description: "Con su pantalla digital LED, puedes establecer la presión en PSI exacta que necesita tu llanta (moto, carro o bici). Tú tienes el control milimétrico.",
      image: "/4.jpeg",
      reverse: false
    },
    {
      title: "Inflado Auto-Inteligente",
      description: "Su sistema inteligente apaga el compresor de manera automática cuando alcanza la presión indicada, evitando daños en la llanta. Úsalo con total confianza.",
      image: "/video 6.mp4",
      reverse: true
    },
    {
      title: "Fácil Limpieza Garantizada",
      description: "Viene con boquillas universales (Carro, Moto, Bici, Balones). Además, la batería integrada funciona como powerbank para cargar tu celular en emergencias.",
      image: "/5.jpeg",
      reverse: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">La Precisión en tus Manos</h2>
          <p className="text-xl text-gray-500">Diseñado cuidando hasta el último detalle.</p>
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
                  <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-3xl shadow-2xl border border-gray-100 object-cover" />
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
