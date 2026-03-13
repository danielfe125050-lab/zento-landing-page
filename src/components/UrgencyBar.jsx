import React, { useState, useEffect } from 'react';
import { Eye, BellRing } from 'lucide-react';
import { productData } from '../data/product';

export default function UrgencyBar() {
  return (
    <div className="bg-danger text-white text-sm font-medium py-2 px-4 flex items-center justify-center gap-2 w-full shadow-md">
      <BellRing size={16} className="animate-pulse" />
      <span>
        ¡ATENCIÓN! Solo quedan 
        <strong className="px-1 text-yellow-300">{productData.urgency.stockLeft} unidades</strong> 
        disponibles.
      </span>
      <div className="hidden sm:flex items-center gap-1 ml-4 bg-white/20 px-2 py-1 rounded-full text-xs">
        <Eye size={12} />
        <span>{productData.urgency.viewers} personas viendo esto</span>
      </div>
    </div>
  );
}
