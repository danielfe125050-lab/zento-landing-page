import React, { useState, useEffect } from 'react';

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 12, seconds: 45 }; // Reset for demo
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Franja de Urgencia Naranja */}
      <div className="bg-[#ff4d00] text-white text-[10px] sm:text-xs font-black py-2 px-4 flex items-center justify-center gap-2 w-full uppercase tracking-widest text-center">
        <span>🕒 LA OFERTA DE HOY FINALIZA EN {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
      
      {/* Franja de Ahorro Azul */}
      <div className="bg-[#002B5B] text-white text-[10px] sm:text-xs font-bold py-1.5 px-4 flex items-center justify-center gap-2 w-full uppercase tracking-tighter sm:tracking-widest text-center">
        <span>📦 COMPRA EN PACK Y AHORRA HASTA 50% HOY</span>
      </div>
    </div>
  );
}
