import React from 'react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function EmotionalSection() {
  return (
    <section className="py-24 bg-bg relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
             <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0"></div>
             <img 
              src={productData.images[1]} 
              alt="Relaxing Room" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/5"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Siente la frescura y <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">la confianza que mereces</span>
            </h2>
            <div className="space-y-6 text-main-muted text-lg leading-relaxed text-left">
              <p>
                Tu bienestar íntimo es fundamental para sentirte bien contigo misma todos los días. Un equilibrio que viene desde adentro y se refleja afuera.
              </p>
              <p>
                El combo Truly + Uro ha sido diseñado por mujeres para mujeres, entendiendo que el cuidado de nuestra zona más delicada requiere ingredientes puros y suaves.
              </p>
              <p>
                No es solo una rutina — es un acto de amor propio que te brinda frescura prolongada y una piel más uniforme y equilibrada.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
