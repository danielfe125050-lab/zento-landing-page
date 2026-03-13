import React from 'react';

export default function LogisticsSection() {
  return (
    <section className="py-12 bg-gray-50/50 border-y border-gray-100">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-[10px] md:text-xs font-black text-main-muted uppercase tracking-[0.2em] text-center">
            Aliados Logísticos Oficiales
          </p>
          <div className="w-full max-w-2xl px-4">
            <img 
              src="/img/zento/logistics_v2.png" 
              alt="Logos Servientrega, Interrapidisimo, Envía" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
