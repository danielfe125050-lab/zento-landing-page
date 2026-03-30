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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              ¿Qué hace tan especial a Zento?
            </h2>
            <div className="space-y-4 text-main-muted text-sm md:text-base mb-8 md:mb-0">
              <p>La mayoría de mandolinas tradicionales son peligrosas y dejan un desastre en tu cocina.</p>
              <p>
                Zento™ ha sido diseñada con un sistema vertical de seguridad que protege tus manos al 100% mientras ofrece cortes de precisión profesional en segundos.
              </p>
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
                   <div className="text-xl">Zento™</div>
                </div>
                <div className="col-span-1 font-bold text-main-muted text-sm italic">Otras Marcas</div>
              </div>
              
              {/* Rows */}
              <div className="flex flex-col">
                {productData.comparisonTable.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-5 border-t border-gray-100 items-stretch">
                    <div className="col-span-2 bg-primary text-main p-4 font-bold text-xs sm:text-sm flex items-center shadow-[inset_-5px_0px_10px_rgba(45,26,30,0.05)]">
                      {row.feature}
                    </div>
                    <div className="col-span-2 flex items-center justify-center py-4 bg-white border-r border-gray-100 shadow-[inset_5px_0px_10px_rgba(248,173,186,0.05)]">
                      {row.zento ? <Check className="text-accent drop-shadow-sm" size={24} /> : <X className="text-gray-300" size={24} />}
                    </div>
                    <div className="col-span-1 flex items-center justify-center py-4 bg-gray-50">
                      {row.others ? <Check className="text-green-500" size={20} /> : <X className="text-gray-900" size={20} />}
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
