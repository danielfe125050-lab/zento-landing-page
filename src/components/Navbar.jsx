import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md py-0">
      <div className="container px-4 flex justify-center items-center">
        <motion.img 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          src="/img/zento/logo_zento.png" 
          alt="Zento Logo" 
          className="h-32 md:h-48 w-auto px-4"
        />
      </div>
    </nav>
  );
}
