import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = "573116445034";
  const message = encodeURIComponent("Hola, tengo una pregunta sobre las empuñaduras Grip Gym Pro.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[110px] lg:bottom-10 right-4 lg:right-6 z-[60] bg-[#25D366] text-white p-3 lg:p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-3 bg-white text-main text-xs font-bold py-2 px-4 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-surface-dark/10">
        ¿Necesitas ayuda? Chatea con nosotros
      </div>
      <MessageCircle size={24} fill="currentColor" />
    </motion.a>
  );
}
