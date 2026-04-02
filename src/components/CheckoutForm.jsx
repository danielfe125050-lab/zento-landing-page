import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Phone, MapPin, User, MessageSquare, ShieldCheck, Lock, Truck, ChevronDown } from 'lucide-react';
import { regions } from '../data/colombia';
import { productData } from '../data/product';

const SearchableSelect = ({ options, value, onChange, placeholder, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!value) setSearch('');
    else setSearch(value);
  }, [value]);

  const filtered = options.filter(opt => 
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input 
        required
        disabled={disabled}
        type="text" 
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
          // Si el usuario escribe algo que coincide exactamente, lo seleccionamos
          const match = options.find(o => o.toLowerCase() === e.target.value.toLowerCase());
          if (match) onChange(match);
        }}
        onFocus={() => setIsOpen(true)}
        className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 px-4 outline-none transition-all pr-10 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}`}
        autoComplete="off"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && !disabled && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.ul 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-20 max-h-60 overflow-y-auto overflow-x-hidden py-2"
            >
              {filtered.length > 0 ? (
                filtered.map(opt => (
                  <li 
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setSearch(opt);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 hover:bg-primary/5 cursor-pointer text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${value === opt ? 'text-primary bg-primary/5' : 'text-main'}`}
                  >
                    {opt}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-xs text-gray-400 italic">No se encontraron resultados</li>
              )}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CheckoutForm({ variantId, bundleTitle, price, onCancel }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    department: '',
    notes: ''
  });

  const departmentOptions = regions.map(r => r.name);
  const cityOptions = regions
    .filter(r => !formData.department || r.name === formData.department)
    .flatMap(r => r.cities)
    .sort();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Registrar evento de compra si Pixel está activo - MOVIDO AL BLOQUE DE ÉXITO

      const response = await fetch('https://ai-dropshipping-ruddy.vercel.app/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          variantId,
          bundleTitle,
          price
        })
      });

      const result = await response.json();
      if (result.success) {
        if (window.fbq) {
          window.fbq('track', 'Purchase', { 
            value: price, 
            currency: 'COP',
            content_name: bundleTitle,
            content_ids: [variantId]
          });
        }
        setSuccess(true);
      } else {
        // Reducimos la fricción eliminando mensajes técnicos o bloqueantes
        console.error("Order rejected by server:", result.error);
        alert("No pudimos procesar el pedido. Por favor verifica tus datos e intenta de nuevo.");
      }
    } catch (error) {
       console.error("Error submitting order:", error);
       alert("Error de conexión. Verifica que el servidor de agentes esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-[32px] text-center shadow-2xl border-4 border-primary"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={80} className="text-primary animate-bounce" />
        </div>
        <h2 className="text-3xl font-black text-black mb-4">¡PEDIDO RECIBIDO!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Gracias por confiar en **Safe Slice Mandoline**. <br/> 
          Nos pondremos en contacto contigo por WhatsApp para confirmar los detalles del envío.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-primary w-full py-4 text-xl"
        >
          VOLVER AL INICIO
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-5 sm:p-8 rounded-[32px] shadow-2xl border border-gray-100 w-full overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-black">CONFIRMA TU PEDIDO</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-black">✖</button>
      </div>

      <div className="bg-gray-50 p-4 rounded-2xl mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="w-full">
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Paquete Seleccionado</p>
          <p className="font-black text-black truncate w-full">{bundleTitle}</p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Total a Pagar</p>
          <p className="font-black text-primary text-xl">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price)}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            required
            type="text" 
            placeholder="Nombre Completo" 
            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 pl-12 pr-4 outline-none transition-all"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            required
            type="tel" 
            placeholder="WhatsApp / Celular" 
            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 pl-12 pr-4 outline-none transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            required
            type="email" 
            placeholder="Correo Electrónico" 
            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 pl-12 pr-4 outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            required
            type="text" 
            placeholder="Dirección Completa (Barrio y Complementos)" 
            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 pl-12 pr-4 outline-none transition-all"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {/* Department Selector */}
           <SearchableSelect 
             placeholder="Departamento"
             options={departmentOptions}
             value={formData.department}
             onChange={(val) => setFormData({...formData, department: val, city: ''})}
           />

           {/* City Selector */}
           <SearchableSelect 
             placeholder="Ciudad"
             options={cityOptions}
             value={formData.city}
             onChange={(val) => setFormData({...formData, city: val})}
             disabled={!formData.department}
           />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 text-gray-400 mt-4" size={20} />
          <textarea 
            placeholder="Notas del pedido (Opcional: Ej: Dejar en portería, tallas, colores...)" 
            rows="3"
            className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 pl-12 pr-4 outline-none transition-all resize-none"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full btn-primary py-5 text-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
        >
          {loading ? <Loader2 className="animate-spin" /> : 'CONFIRMAR PEDIDO'}
        </button>
        
        <p className="text-center text-xs text-gray-400 font-bold uppercase mt-4">
          🚚 ENVÍO GRATIS Y PAGO CONTRA ENTREGA
        </p>

        {/* Trust & Urgency Boosters */}
        <div className="mt-8 pt-6 border-t border-gray-100">
           <div className="flex justify-center gap-4 mb-6">
              <div className="flex flex-col items-center gap-1 opacity-60">
                 <ShieldCheck size={20} className="text-primary" />
                 <span className="text-[9px] font-bold uppercase">Garantía 30d</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-60">
                 <Lock size={20} className="text-primary" />
                 <span className="text-[9px] font-bold uppercase">Pago Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-60">
                 <Truck size={20} className="text-primary" />
                 <span className="text-[9px] font-bold uppercase">Envío Gratis</span>
              </div>
           </div>
           
           {/* Micro Testimonial */}
           <div className="bg-gray-50 rounded-xl p-3 border border-primary/5 flex gap-3 items-center">
              <img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
              <div className="flex-1">
                <p className="text-[11px] leading-tight text-gray-500 italic">"El envío fue súper rápido a Medellín y el material es de calidad. ¡Pidan los 2 pares!"</p>
                <p className="text-[10px] font-bold mt-1 text-primary">— Juan P. (Verificado)</p>
              </div>
           </div>
        </div>
      </form>
    </div>
  );
}
