import React from 'react';
import { User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-8 text-black font-heading font-medium text-lg">
          <a href="#" className="hover:opacity-70 transition-opacity">Shop</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Learn</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Subscribe</a>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-black tracking-tight">
            GRIP GYM PRO
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-black">
          <a href="#" className="hidden md:block font-heading font-medium text-lg hover:opacity-70">Find In Store</a>
          <a href="#" className="hover:opacity-70"><User size={24} /></a>
          <a href="#" className="hover:opacity-70"><ShoppingCart size={24} /></a>
        </div>
      </div>
    </nav>
  );
}
