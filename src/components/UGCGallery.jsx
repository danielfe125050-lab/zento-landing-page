import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';

export default function UGCGallery() {
  const photos = [
    { src: "/7.jpeg", label: "@camilo_lift" },
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop", label: "Envío recibido 🙌" },
    { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&h=500&fit=crop", label: "Nuevo PR: 100kg" }
  ];

  return (
    <section className="py-20 bg-surface-light border-t border-primary/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
            <Instagram size={14} /> Atletas Reales
          </div>
          <h2 className="text-3xl font-extrabold text-main uppercase tracking-tighter">Más de 10,000 Atletas Felices</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white aspect-square"
            >
              <img src={photo.src} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur rounded-full p-4">
                    <Heart className="text-primary fill-primary" size={24} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-main">
                {photo.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-main-muted text-sm italic italic">"Unete a la comunidad #GripGymPro y cuida de tus manos"</p>
        </div>
      </div>
    </section>
  );
}
