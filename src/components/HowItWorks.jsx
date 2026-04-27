import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Play, Sparkles, Droplets, Wind, Battery, ShieldAlert } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Preparación",
      desc: "Limpia y seca muy bien la zona del contorno de tus ojos antes de iniciar.",
      icon: <Droplets size={24} className="text-neonRed" />
    },
    {
      title: "Ajuste Perfecto",
      desc: "Coloca el masajeador ajustándolo cómodamente a tu rostro utilizando el diseño 3D.",
      icon: <UserCheck size={24} className="text-neonRed" />
    },
    {
      title: "Relajación Total",
      desc: "Enciende, selecciona tu modo y disfruta de 10 a 15 minutos de terapia rejuvenecedora.",
      icon: <Play size={24} className="text-neonRed" />
    }
  ];

  const carePoints = [
    { text: "Limpiar con paño suave y seco", icon: <Wind size={16} /> },
    { text: "No mojar ni sumergir en agua", icon: <ShieldAlert size={16} /> },
    { text: "Cargar solo con cable original", icon: <Battery size={16} /> },
    { text: "Guardar en lugar fresco y seco", icon: <Sparkles size={16} /> }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neonRed/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-neonRed font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Guía de Uso Profesional</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase italic tracking-tighter">
            RESULTADOS EN <span className="text-neonRed not-italic underline decoration-neonRed/20">4 SIMPLES PASOS.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
           {steps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="relative p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-neonRed/20 group transition-all duration-300"
             >
               <div className="text-neonRed font-black text-6xl opacity-5 absolute top-4 right-8 group-hover:opacity-10 transition-opacity">0{idx + 1}</div>
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
               </div>
               <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 uppercase italic">{step.title}</h3>
               <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* CARE INSTRUCTIONS (NEW SECTION FROM COPY) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-[3rem] p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <ShieldAlert size={120} className="text-white" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className="text-white text-3xl font-black uppercase italic mb-4 leading-none">CUIDADO Y MANTENIMIENTO</h3>
                <p className="text-white/60 font-medium max-w-md">Para asegurar la máxima vida útil y el funcionamiento higiénico de tu dispositivo, sigue estas recomendaciones.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carePoints.map((point, id) => (
                   <div key={id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-neonRed/50 transition-colors">
                      <div className="text-neonRed">{point.icon}</div>
                      <span className="text-white/90 text-xs font-bold uppercase tracking-tight">{point.text}</span>
                   </div>
                ))}
             </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-neonRed hover:bg-white hover:text-[#1a1a1a] text-white font-black px-12 py-5 rounded-full text-lg tracking-widest uppercase shadow-[0_15px_30px_rgba(255,0,60,0.2)] transition-all transform hover:-translate-y-1 active:translate-y-0 border-2 border-transparent hover:border-[#1a1a1a]"
           >
             ¡PIDE EL TUYO AHORA!
           </button>
        </motion.div>
      </div>
    </section>
  );
}
