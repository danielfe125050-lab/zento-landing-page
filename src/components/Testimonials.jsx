import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="section bg-bg pb-20 md:pb-32 relative z-10">
      <div className="container relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main">¿Qué dicen nuestros clientes sobre FreshJuice Pro?</h2>
          <div className="flex items-center justify-center gap-2 text-xl font-medium">
            <span className="text-4xl font-black">4.9</span>
            <div className="flex text-accent">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <span className="text-text-muted text-base ml-2">Basado en {productData.reviews.length * 82} reseñas verificadas</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col relative"
            >
              <div className="absolute top-6 right-6">
                <svg className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-200" : ""} />
                ))}
              </div>
              
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-surface-light overflow-hidden shadow-inner ring-2 ring-white">
                  <img src={`/resena_${(idx % 5) + 1}.png`} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-bold uppercase tracking-wider mt-1">
                    <CheckCircle size={12} /> Compra Verificada
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
