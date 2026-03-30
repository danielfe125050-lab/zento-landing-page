import React from 'react';
import { motion } from 'framer-motion';

export default function IngredientsSection() {
  const versions = [
    {
      name: "Rodajas Ajustables",
      benefit: "Desde 0.5mm hasta 8mm para carpaccios o ensaladas.",
      icon: "🥒"
    },
    {
      name: "Julianas Finas",
      benefit: "Cortes delgados estilo spaghetti para vegetales saludables.",
      icon: "🥕"
    },
    {
      name: "Dados y Cubos",
      benefit: "Corta cebollas y pimentones en cubos perfectos sin lagrimear.",
      icon: "🧅"
    },
    {
      name: "Papas Francesas",
      benefit: "Juliana gruesa para papas fritas uniformes y crujientes.",
      icon: "🍟"
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
              src="/feature1.jpg" 
              alt="Versatilidad de Corte Safe-Slice" 
              className="rounded-3xl shadow-2xl border border-primary/10"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-main mb-6 uppercase tracking-tighter">Versatilidad Sin Límites en tu Cocina</h2>
            <p className="text-main-muted mb-8 leading-relaxed">
              No más cambios tediosos de cuchillas. Con el sistema rotatorio trasero, puedes seleccionar entre más de 30 estilos de corte diferentes en segundos. Es la herramienta definitiva para preparar comidas saludables y estéticas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {versions.map((ver, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl">{ver.icon}</div>
                  <div>
                    <h3 className="font-bold text-main uppercase text-sm">{ver.name}</h3>
                    <p className="text-main-muted text-xs">{ver.benefit}</p>
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
