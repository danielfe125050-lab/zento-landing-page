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
          className="relative aspect-video sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&q=80" 
            alt="Atleta entrenando" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary hover:bg-white hover:text-black text-white w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl shadow-primary/30">
              <PlayCircle size={40} className="ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 text-left">
             <span className="bg-danger text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">Demostración</span>
             <p className="font-bold text-white mt-2 drop-shadow-md hidden sm:block">Dominadas y Peso Muerto 100kg</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
