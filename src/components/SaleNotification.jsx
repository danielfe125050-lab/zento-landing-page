import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const cities = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué", "Manizales"];
const names = ["Claudia", "Marcela", "Yuliana", "Sandra", "Valentina", "Paola", "Ximena", "Lorena", "Andrea", "Camila", "Jessica"];

export default function SaleNotification() {
  const [currentSale, setCurrentSale] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const treatment = Math.random() > 0.5 ? "Tratamiento 3 Meses" : "Tratamiento 1 Mes";
      
      setCurrentSale({ name, city, treatment });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Primera notificación después de 10 segundos
    const initialTimer = setTimeout(showNotification, 10000);

    // Intervalo de 20-40 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * (40000 - 20000) + 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentSale && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-24 left-6 z-40 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-primary/10 max-w-[280px]"
        >
          <div className="bg-primary/20 p-2 rounded-full text-primary">
            <ShoppingCart size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] text-main-muted uppercase font-bold tracking-wider">¡Nueva Pedido!</p>
            <p className="text-xs text-main">
              <span className="font-bold">{currentSale.name}</span> de {currentSale.city} pidió su <span className="font-bold">{currentSale.treatment}</span>.
            </p>
            <p className="text-[9px] text-primary font-bold mt-1">Hace un momento</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
