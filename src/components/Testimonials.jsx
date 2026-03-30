import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="section bg-bg">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main">¿Qué dicen nuestros clientes sobre Safe Slice Mandoline?</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productData.reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface p-6 rounded-2xl border border-surface-light hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-light overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${idx + 22}`} alt={review.name} />
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-1">
                    {review.name}
                    <CheckCircle size={14} className="text-primary" />
                  </h4>
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted italic">"{review.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
