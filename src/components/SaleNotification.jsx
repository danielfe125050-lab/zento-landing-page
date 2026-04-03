import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const cities = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué", "Manizales"];
const names = ["Carlos", "Daniel", "Mateo", "Sebastián", "Alejandro", "Andrés", "Juan", "Diego", "David", "Camilo", "Santiago"];

export default function SaleNotification() {
  const [currentSale, setCurrentSale] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      
      const rand = Math.random();
      const treatment = rand > 0.7 ? "3 Unidades de AeroSmart Pro" : (rand > 0.3 ? "2 Unidades de AeroSmart Pro" : "1 Unidad de AeroSmart Pro");
      
      setCurrentSale({ name, city, treatment });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Primera notificación después de 30 segundos
    const initialTimer = setTimeout(showNotification, 30000);

    // Intervalo de 1 a 3 minutos para no ser invasivo
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * (180000 - 60000) + 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentSale && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0, x: "-50%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%" }}
          exit={{ scale: 0.9, opacity: 0, x: "-50%" }}
          className="fixed top-24 md:top-auto md:bottom-24 left-1/2 md:translate-x-0 md:left-6 z-[70] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex items-center gap-3 border border-primary/10 w-[90%] md:max-w-[280px]"
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
