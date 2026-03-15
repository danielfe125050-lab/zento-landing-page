import React from 'react';
import { motion } from 'framer-motion';

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "Aceite de Coco y Vitamina E",
      benefit: "Hidratación profunda y suavidad para tu piel.",
      icon: "🥥"
    },
    {
      name: "Peptidos y Ácido Hialurónico",
      benefit: "Fortalece la barrera de la piel y mejora su elasticidad.",
      icon: "💧"
    },
    {
      name: "Probióticos Activos",
      benefit: "Equilibra la flora natural y protege desde adentro.",
      icon: "🌸"
    },
    {
      name: "Arándano Rojo (Cranberry)",
      benefit: "Prevención natural y bienestar para tu sistema urinario.",
      icon: "🍒"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src="/img/zento/ingredients.png" 
              alt="Ingredientes Naturales Zento" 
              className="rounded-3xl shadow-2xl border border-primary/10"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-main mb-6 uppercase tracking-tighter">Pura Ciencia Natural en tu Piel</h2>
            <p className="text-main-muted mb-8 leading-relaxed">
              Seleccionamos solo los activos de mayor pureza para garantizar resultados sin efectos secundarios. Nuestra fórmula es 100% segura y dermatológicamente probada.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl">{ing.icon}</div>
                  <div>
                    <h3 className="font-bold text-main uppercase text-sm">{ing.name}</h3>
                    <p className="text-main-muted text-xs">{ing.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
