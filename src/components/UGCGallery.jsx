import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

export default function UGCGallery() {
  const reviews = [
    { 
      src: "/resena_1.png", 
      name: "Carmen R.", 
      text: "Me salvó los desayunos. Exprimir limones o naranjas a mano me dejaba doliendo las manos, ahora en 3 minutos tengo el jugo listo. ¡Excelente inversión!" 
    },
    { 
      src: "/resena_2.png", 
      name: "Laura V.", 
      text: "El material se siente súper resistente y de buena calidad. Las ventosas abajo hacen que no se resbale para nada en la encimera. Muy seguro." 
    },
    { 
      src: "/resena_3.png", 
      name: "Martha G.", 
      text: "Hacer jugos naturales nunca fue tan rápido. Antes perdía horas limpiando el colador y exprimiendo, ahora la lavada de este aparato toma 30 segundos." 
    },
    { 
      src: "/resena_4.png", 
      name: "Diana P.", 
      text: "Saca literalmente hasta la última gota de la fruta, la cáscara queda limpia. Valió cada peso y el envío fue rápido." 
    }
  ];

  return (
    <section className="py-24 bg-surface-light border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">
            Más de 14,200 Familias Felices
          </h2>
          <p className="text-xl text-gray-500 font-medium">Mira los testimonios de clientes reales preparando sus jugos todas las mañanas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/50 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={review.src} 
                  alt={`Reseña de ${review.name}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium italic leading-relaxed mb-4 text-sm md:text-base">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-black">{review.name}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle size={10} className="text-green-500" /> Compra Verificada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-400 font-medium italic">"Únete a la comunidad #FreshJuicePro y vive más sano"</p>
        </div>
      </div>
    </section>
  );
}
