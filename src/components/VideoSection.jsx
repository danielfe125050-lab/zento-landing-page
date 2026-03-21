import React from 'react';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container max-w-5xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter">
            Mira Grip Gym Pro en Acción
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre por qué miles de atletas confían en nosotros para llevar sus levantamientos al próximo nivel sin destrozarse las manos.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-gray-900"
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/1080.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left">
             <div className="flex items-center gap-2 md:gap-3 mb-3">
                <span className="bg-primary text-white text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Demostración Real</span>
                <span className="bg-white/10 backdrop-blur-md text-white/80 text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">1080p HD</span>
             </div>
             <p className="text-xl md:text-3xl font-black text-white drop-shadow-lg leading-tight uppercase">
                Domina cada <br/> levantamiento
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
