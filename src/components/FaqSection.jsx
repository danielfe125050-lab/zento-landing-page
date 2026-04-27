import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Star, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    question: "¿Es seguro para mis ojos y mi piel?",
    answer: "¡Totalmente! OcularTech Pro™ utiliza tecnología de microcorrientes EMS de baja intensidad y fototerapia LED de grado cosmético. Ha sido diseñado específicamente para la delicada zona del contorno de ojos y es seguro para todo tipo de piel."
  },
  {
    question: "¿Cuándo empezaré a ver resultados?",
    answer: "Muchos usuarios notan una desinflamación inmediata y una sensación de descanso tras la primera sesión de 10 minutos. Para resultados permanentes en ojeras y líneas de expresión, recomendamos un uso constante una vez al día durante 2 a 4 semanas."
  },
  {
    question: "¿Cómo funciona la garantía de 30 días?",
    answer: "Estamos tan seguros de que te encantará que si no ves resultados en los primeros 30 días, te devolvemos el 100% de tu dinero. Solo escríbenos y procesaremos tu devolución sin preguntas."
  },
  {
    question: "¿Hacen envíos a toda Colombia?",
    answer: "Sí, tenemos cobertura nacional gratuita. El envío tarda de 2 a 5 días hábiles dependiendo de tu ubicación y puedes pagar en efectivo al recibir el producto en tu casa."
  },
  {
    question: "¿Puedo usarlo con lentes de contacto?",
    answer: "Recomendamos retirar los lentes de contacto antes de usar el masajeador para evitar cualquier incomodidad debido a la termoterapia (calor suave) y para permitir que el masaje sea más efectivo."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* TOP TRUST ICONS */}
        <div className="flex justify-around items-center mb-16 gap-4">
           <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                 <ShieldCheck className="text-gray-400" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-gray-500 leading-tight">Garantía<br/>30 Días</p>
           </div>
           <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                 <Star className="text-gray-400" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-gray-500 leading-tight">Clínicamente<br/>Probado</p>
           </div>
           <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                 <Star className="text-gray-400" size={24} />
              </div>
              <p className="text-[10px] font-black uppercase text-gray-500 leading-tight">Alta<br/>Calidad</p>
           </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] mb-12 flex gap-4 items-start">
           <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
              <img src="https://i.pravatar.cc/100?img=32" alt="Reviewer" />
           </div>
           <div>
              <p className="text-sm italic text-gray-600 mb-3">
                "Sufría de ojeras profundas por el trabajo y la falta de sueño. OcularTech cambió mi rutina: en 10 minutos mis ojos se ven más brillantes y descansados. ¡Es el mejor regalo que me he hecho!"
              </p>
              <div className="flex items-center gap-2">
                 <span className="text-xs font-black text-gray-800">Mariana V.</span>
                 <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Compra Verificada
                 </span>
              </div>
           </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center py-4 text-left gap-4"
              >
                <span className="text-base font-black text-gray-800 leading-tight">
                  {faq.question}
                </span>
                <div className="bg-gray-50 p-2 rounded-full text-gray-400">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BOTTOM GUARANTEE ONLY (Payments removed for COD) */}
        <div className="mt-20 pt-10 border-t border-gray-50 flex flex-col items-center gap-6">
           <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Garantía de Satisfacción de 30 Días</span>
           </div>
        </div>

      </div>
    </section>
  );
}

function CheckCircle({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
