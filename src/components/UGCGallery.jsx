import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

export default function UGCGallery() {
  const reviews = [
    { 
      src: "/ugc1.jpg", 
      name: "Carmen R.", 
      text: "Sorprendida con la facilidad que cortó este tomate, antes siempre con el cuchillo los aplastaba porque perdían el jugo. ¡Excelente compra!" 
    },
    { 
      src: "/ugc2.jpg", 
      name: "Laura V.", 
      text: "El material se siente súper resistente y de buena calidad. Las ventosas abajo hacen que no se resbale para nada. Muy seguro." 
    },
    { 
      src: "/ugc3.jpg", 
      name: "Martha G.", 
      text: "Hacer ensaladas de pepino nunca fue tan rápido, en menos de 1 minuto tengo todo listo en rodajas perfectas y sin peligro de cortarme." 
    },
    { 
      src: "/ugc4.jpg", 
      name: "Diana P.", 
      text: "Llorar por picar cebolla quedó en el pasado. Los aros salen limpios y el contenedor recoge absolutamente todo. 10/10." 
    }
  ];

  return (
    <section className="py-24 bg-surface-light border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">
            Más de 15,000 Clientes Felices
          </h2>
          <p className="text-xl text-gray-500 font-medium">Mira los resultados reales en diferentes tipos de vegetales.</p>
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
            <p className="text-gray-400 font-medium italic">"Únete a la comunidad #SafeSlice y cocina seguro"</p>
        </div>
      </div>
    </section>
  );
}
