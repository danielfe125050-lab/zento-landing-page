import React, { useState, useEffect } from 'react';
import { Eye, BellRing } from 'lucide-react';
import { productData } from '../data/product';

export default function UrgencyBar() {
  return (
    <div className="bg-black text-white text-[10px] md:text-sm font-bold py-1.5 px-4 flex items-center justify-center gap-2 w-full uppercase tracking-tighter">
      <span>🔥 ENVÍO GRATIS + 50% OFF hasta las 12 PM</span>
    </div>
  );
}
