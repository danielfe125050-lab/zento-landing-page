import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sun, Thermometer, BatteryCharging, PowerOff, Sparkles } from 'lucide-react';

export default function ProductFeatures() {
  const features = [
    {
      title: "Tecnología EMS",
      description: "La estimulación muscular eléctrica (EMS) realiza un masaje inteligente que activa la circulación sanguínea, relajando los músculos oculares y reduciendo drásticamente las líneas de expresión.",
      icon: <Zap size={80} className="text-neonRed" />,
      reverse: false
    },
    {
      title: "Luz Roja Facial",
      description: "Actúa directamente sobre la apariencia de la piel, rejuveneciendo la mirada y ayudando a recuperar la elasticidad natural para un aspecto mucho más descansado y joven.",
      icon: <Sun size={80} className="text-neonRed" />,
      reverse: true
    },
    {
      title: "Termoterapia 42°C",
      description: "Ideal para calmar los ojos después de largas jornadas frente a pantallas. El calor constante ayuda a drenar bolsas y a que el contorno de ojos luzca radiante diariamente.",
      icon: <Thermometer size={80} className="text-neonRed" />,
      reverse: false
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="features">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-24">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 text-gray-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={16} className="text-neonRed" /> LA SOLUCIÓN DEFINITIVA
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1a1a1a] leading-tight mb-6"
          >
            Ingeniería de <span className="text-neonRed shadow-neonRed/10 shadow-sm">Grado Clínico.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Combinamos tres biotecnologías comprobadas dermatológicamente en un solo dispositivo ergonómico y portátil.
          </motion.p>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Icon Visual Block */}
              <motion.div 
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-md aspect-square rounded-[3.5rem] bg-gray-50 border border-gray-100 shadow-xl flex items-center justify-center group hover:bg-neonRed/5 transition-all duration-500">
                    <div className="absolute inset-0 bg-neonRed/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
                       {feature.icon}
                    </div>
                 </div>
              </motion.div>
              
              {/* Text Block */}
              <motion.div 
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: feature.reverse ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-neonRed font-black text-6xl opacity-10 mb-4 select-none">0{idx + 1}</div>
                <h3 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-6 uppercase tracking-wide italic">{feature.title}</h3>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>

        {/* Bonus tech specs */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-100 pt-16">
           <div className="flex flex-col items-center gap-3">
             <BatteryCharging size={32} className="text-gray-300" />
             <span className="text-[#1a1a1a] font-bold">Batería Larga Duración</span>
             <span className="text-xs text-gray-400 font-bold uppercase">Recargable USB-C</span>
           </div>
           <div className="flex flex-col items-center gap-3">
             <PowerOff size={32} className="text-gray-300" />
             <span className="text-[#1a1a1a] font-bold">Apagado Automático</span>
             <span className="text-xs text-gray-400 font-bold uppercase">Ciclos de 10 min</span>
           </div>
           <div className="flex flex-col items-center gap-3">
             <Sparkles size={32} className="text-gray-300" />
             <span className="text-[#1a1a1a] font-bold">Materiales ABS+PC</span>
             <span className="text-xs text-gray-400 font-bold uppercase">Hipoalergénico</span>
           </div>
           <div className="flex flex-col items-center gap-3">
             <Thermometer size={32} className="text-gray-300" />
             <span className="text-[#1a1a1a] font-bold">Diseño Ligero</span>
             <span className="text-xs text-gray-400 font-bold uppercase">Portátil 45g</span>
           </div>
        </div>

      </div>
    </section>
  );
}
