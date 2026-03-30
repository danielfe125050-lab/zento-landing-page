import React from 'react';
import { motion } from 'framer-motion';

export default function UsageSection() {
  const steps = [
    {
      step: "01",
      title: "Truly: Exterior",
      desc: "Aplica diariamente el aceite Truly en tu zona íntima externa tras el baño para hidratar y tonificar."
    },
    {
      step: "02",
      title: "Uro: Interior",
      desc: "Toma 1 o 2 cápsulas de Uro al día con abundante agua para fortalecer tu sistema urinario."
    },
    {
      step: "03",
      title: "Bienestar Total",
      desc: "Siente la frescura prolongada y la confianza de un cuidado íntimo completo y natural."
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <h2 className="text-3xl font-extrabold text-main text-center mb-16 uppercase tracking-tighter">¿Cómo obtener resultados Pro?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center p-8 bg-white rounded-3xl border border-primary/5 shadow-sm"
            >
              <div className="text-5xl font-black text-primary/20 mb-4">
                {step.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-main mb-4 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-main-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
