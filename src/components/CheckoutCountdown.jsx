import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CheckoutCountdown() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-center justify-center gap-3 animate-pulse">
      <Clock className="text-accent" size={18} />
      <p className="text-xs font-bold text-main">
        OFERTA RELÁMPAGO: <span className="text-accent">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span> para asegurar el envío gratis hoy.
      </p>
    </div>
  );
}
