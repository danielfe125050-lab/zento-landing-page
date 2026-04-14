import React from 'react';
import { Check, X } from 'lucide-react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Text Content & Comparison Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="/4.jpeg" 
                alt="Comparativa FreshJuice Pro" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform transition-transform group-hover:scale-[1.02] duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white font-black px-4 py-1.5 rounded-full text-xs shadow-lg uppercase tracking-widest">
                VERDADERO VS IMITACIÓN
              </div>
            </div>

            <h2 className="text-3xl font-heading font-black mb-4 leading-tight uppercase italic text-center md:text-left">
              ¿Sigues usando <span className="text-gray-400">exprimidores viejos?</span>
            </h2>
            <p className="text-gray-600 font-bold mb-0 text-center md:text-left">
               No arriesgues tu dinero con imitaciones baratas que se rompen al primer uso. FreshJuice Pro™ es la única con motor de alto torque y batería de larga duración.
            </p>
          </motion.div>

          {/* Table Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="grid grid-cols-5 text-center items-end pb-3 pt-6 px-4">
                <div className="col-span-2"></div>
                <div className="col-span-2 font-black text-primary flex flex-col items-center justify-center">
                   <div className="text-xl">FreshJuice Pro™</div>
                </div>
                <div className="col-span-1 font-bold text-main-muted text-sm italic">Otras Opciones</div>
              </div>
              
              {/* Rows */}
              <div className="flex flex-col">
                {productData.comparisonTable.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-5 border-t border-gray-100 items-stretch">
                    <div className="col-span-2 bg-primary text-main p-4 font-bold text-xs sm:text-sm flex items-center shadow-[inset_-5px_0px_10px_rgba(45,26,30,0.05)]">
                      {row.feature}
                    </div>
                    <div className="col-span-2 flex items-center justify-center py-4 bg-white border-r border-gray-100 shadow-[inset_5px_0px_10px_rgba(248,173,186,0.05)]">
                      {row.ours ? <Check className="text-[#27AE60] drop-shadow-sm" strokeWidth={3} size={28} /> : <X className="text-[#C0392B]" strokeWidth={3} size={28} />}
                    </div>
                    <div className="col-span-1 flex items-center justify-center py-4 bg-gray-50">
                      {row.others ? <Check className="text-[#27AE60]" strokeWidth={3} size={24} /> : <X className="text-[#C0392B]" strokeWidth={3} size={24} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
