import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MessageSquareHeart } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Carolina Gómez.",
      location: "Cali, Valle del Cauca",
      text: "¡Increíble! Pensé que era otro producto más de internet pero realmente funciona. Trabajo todo el día frente al computador y esto me quita la pesadez de los ojos al instante. Súper recomendado.",
      rating: 5,
      date: "Hace 2 días"
    },
    {
      name: "Mariana Restrepo.",
      location: "Bogotá, D.C.",
      text: "Me encantó el calorcito que da. Ayuda mucho a relajar y a desinflamar las bolsitas con las que a veces amanezco. Lo compré contra entrega y cero problemas con el repartidor.",
      rating: 5,
      date: "Hace 1 semana"
    },
    {
      name: "Juliana Pardo.",
      location: "Medellín, Antioquia",
      text: "Es súper relajante, el envío tardó solo 2 días. La luz roja me ha ayudado a ver la piel de mis ojeras un poco más clara. Lo uso absolutamente todas las noches antes de dormir.",
      rating: 5,
      date: "Hace 2 semanas"
    },
    {
      name: "Daniel Vargas.",
      location: "Barranquilla, Atlántico",
      text: "Lo compré como regalo para mi mamá y terminó usándolo toda la familia jaja. Muy fácil de usar y la batería le dura bastante tiempo.",
      rating: 4,
      date: "Hace 1 mes"
    },
    {
      name: "Andrea C.",
      location: "Pereira, Risaralda",
      text: "Muy buen producto, llegó súper bien empacado y se siente de muy buena calidad (materiales premium). Las microcorrientes se sienten raro al principio, pero luego relajan un montón.",
      rating: 5,
      date: "Hace 1 mes"
    },
    {
      name: "Laura V.",
      location: "Bucaramanga, Santander",
      text: "Sufro mucho de migrañas visuales por las pantallas. Lo uso en los descansos del trabajo y de verdad me baja la tensión ocular. ¡Excelente compra!",
      rating: 5,
      date: "Hace 2 meses"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-100 text-gray-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <MessageSquareHeart size={16} className="text-neonRed" /> VOCES REALES
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-6 uppercase italic tracking-tighter"
          >
            LO QUE DICEN <span className="text-neonRed not-italic underline decoration-neonRed/20">NUESTROS CLIENTES</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={28} className="fill-[#ffb800] text-[#ffb800]" />
              ))}
            </div>
            <p className="text-gray-500 font-medium">4.9/5 basado en <strong>1,482 reseñas verificadas</strong></p>
          </motion.div>
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col h-full"
            >
              {/* Top: Stars & Date */}
              <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-0.5">
                   {[...Array(5)].map((_, i) => (
                     <Star 
                       key={i} 
                       size={16} 
                       className={i < review.rating ? "fill-[#ffb800] text-[#ffb800]" : "fill-gray-200 text-gray-200"} 
                     />
                   ))}
                 </div>
                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
              </div>
              
              {/* Text */}
              <p className="text-gray-600 leading-relaxed font-medium mb-8 italic flex-grow">
                "{review.text}"
              </p>
              
              {/* Bottom: User Info */}
              <div className="mt-auto border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-neonRed/10 text-neonRed flex items-center justify-center font-black text-lg shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle2 size={14} className="text-[#00b67a]" />
                    </h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{review.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-black px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all"
            >
                Unirme a los clientes felices
            </button>
        </div>

      </div>
    </section>
  );
}
