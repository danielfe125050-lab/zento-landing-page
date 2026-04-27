import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function VideoDemo() {
  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-neonRed font-black text-xs uppercase tracking-[0.3em] mb-4 block italic">Experiencia Real</span>
              <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] mb-6 leading-none uppercase italic tracking-tighter">
                MIRA EL <span className="text-neonRed not-italic underline decoration-neonRed/10">OCULARTECH™</span> EN ACCIÓN.
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 max-w-lg">
                Descubre por qué miles de personas en Colombia están transformando su mirada. Tecnología clínica aplicada en la comodidad de tu hogar para resultados visibles desde la primera semana.
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-neonRed/10 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-neonRed animate-pulse"></div>
                    </div>
                    <span className="text-xs font-black uppercase text-gray-500 tracking-widest">Grabación sin filtros</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-neonRed/10 flex items-center justify-center text-neonRed">
                       <Sparkles size={14} />
                    </div>
                    <span className="text-xs font-black uppercase text-gray-500 tracking-widest">Resultados Reales</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               className="relative w-full max-w-[380px] aspect-[9/16] rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white bg-black hover:scale-[1.02] transition-transform duration-500"
            >
               <video 
                 src="/video1.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover scale-[1.35] origin-bottom shadow-inner" 
               />
               
               {/* Overlay labels */}
               <div className="absolute top-8 left-8">
                 <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">Uso Real</span>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neonRed flex items-center justify-center text-white shrink-0 shadow-lg shadow-neonRed/40">
                         <Play size={18} fill="currentColor" />
                      </div>
                      <span className="text-[10px] text-white font-black uppercase leading-tight tracking-wider">Demostración de masaje EMS + Luz Roja</span>
                   </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
