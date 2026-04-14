import React from 'react';
import { Check, X } from 'lucide-react';
import { productData } from '../data/product';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left mt-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight uppercase italic">
              ¿Te ha pasado <span className="text-primary">esto?</span>
            </h2>
            <div className="space-y-4 text-main font-bold text-lg mb-8 md:mb-0">
               <div className="flex items-start gap-4 p-3 bg-red-50 rounded-xl">
                  <div className="text-2xl mt-1 drop-shadow-sm">😫</div>
                  <p className="text-gray-800">Terminas con jugo por todos lados, la cocina sucia y las manos pegajosas.</p>
               </div>
               <div className="flex items-start gap-4 p-3 bg-red-50 rounded-xl">
                  <div className="text-2xl mt-1 drop-shadow-sm">💧</div>
                  <p className="text-gray-800">Cuesta mucho esfuerzo físico exprimir a mano para sacar todo el jugo.</p>
               </div>
               <div className="flex items-start gap-4 p-3 bg-red-50 rounded-xl">
                  <div className="text-2xl mt-1 drop-shadow-sm">🤯</div>
                  <p className="text-gray-800">Odias los aparatos gigantes que tienen mil piezas y son imposibles de lavar.</p>
               </div>
            </div>
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
