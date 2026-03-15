import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="bg-[#f0ede6]/50 border-b border-gray-200/50 py-3 overflow-x-auto whitespace-nowrap">
      <div className="container px-4 flex justify-between items-center gap-8 text-[9px] md:text-[11px] font-bold text-gray-700 uppercase tracking-tighter">
        <span>PRODUCTOS DE CALIDAD</span>
        <span>100% NATURALES</span>
        <span>30 DÍAS DE GARANTÍA</span>
        <span>RECOMENDADO POR DERMATÓLOGOS</span>
        <span className="hidden lg:inline">VIGILADOS POR LA DIAN - INVIMA - CAMARA DE COMERCIO</span>
        <span className="text-gray-400">+9.000</span>
      </div>
    </nav>
  );
}
