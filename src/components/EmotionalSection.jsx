import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, AlertCircle, Moon } from 'lucide-react';

export default function EmotionalSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonRed/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neonRed/5 border border-neonRed/10 text-neonRed px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <AlertCircle size={16} /> EL PROBLEMA SILENCIOSO
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-8"
          >
            Tus Ojos Revelan Tu Nivel De <span className="text-neonRed block sm:inline">Fatiga y Estrés</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <EyeOff size={40} className="text-neonRed" />,
              title: "Ojeras Oscuras",
              desc: "La mala circulación y la falta de sueño crean pigmentación profunda."
            },
            {
              icon: <Moon size={40} className="text-neonRed" />,
              title: "Bolsas y Retención",
              desc: "El sistema linfático bloqueado genera hinchazón debajo de los ojos."
            },
            {
              icon: <AlertCircle size={40} className="text-neonRed" />,
              title: "Fatiga Visual",
              desc: "Más de 6h diarias en pantallas causan tensión y envejecimiento prematuro."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-gray-100 transition-colors"
            >
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto italic">
            "Las cremas tradicionales solo hidratan la superficie, pero <strong className="text-[#1a1a1a] font-black underline decoration-neonRed decoration-4">no solucionan el problema desde la raíz</strong>. Necesitabas tecnología clínica adaptada para tu casa."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
