import React from 'react';
import { ShieldCheck, Award, Truck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GuaranteeSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Garantía de Calidad",
      text: "Confiamos tanto en la durabilidad de nuestra mandolina que ofrecemos garantía total contra defectos de fábrica."
    },
    {
      icon: Award,
      title: "Producto 100% Original",
      text: "Somos distribuidores oficiales. Garantizamos el uso de acero inoxidable quirúrgico y plásticos de alta resistencia."
    },
    {
      icon: Truck,
      title: "Envíos Seguros",
      text: "Tu pedido viaja asegurado y protegido para que llegue intacto a la puerta de tu casa en cualquier lugar de Colombia."
    },
    {
      icon: Heart,
      title: "Libre de BPA",
      text: "Seguridad alimentaria garantizada. Materiales no tóxicos y libres de bisfenol A para el cuidado de tu familia."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-extrabold text-main mb-4 uppercase tracking-tighter">Nuestro Compromiso de Calidad</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-main-muted">En Zento no solo vendemos un utensilio, entregamos eficiencia y seguridad en tu cocina. Estamos contigo para facilitar tu alimentación saludable.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-light/30 p-8 rounded-3xl border border-primary/5 text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="font-extrabold text-main mb-3 uppercase text-sm tracking-widest">{item.title}</h3>
              <p className="text-main-muted text-xs leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
