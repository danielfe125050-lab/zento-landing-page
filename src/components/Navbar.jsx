import React from 'react';
import { User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center">
        {/* Center Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-black tracking-tight text-center">
            Flawless Facial
          </h1>
        </div>
      </div>
    </nav>
  );
}
