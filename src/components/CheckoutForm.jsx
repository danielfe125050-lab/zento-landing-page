import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Phone, MapPin, User, MessageSquare } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://ai-dropshipping-ruddy.vercel.app/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          variantId
        })
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
      } else {
        alert("Error al procesar el pedido. Por favor intenta de nuevo.");
      }
    } catch (error) {
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
          Gracias por confiar en **Grip Gym Pro**. <br/> 
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
           <input 
             required
             type="text" 
             placeholder="Ciudad" 
             className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 px-4 outline-none transition-all"
             value={formData.city}
             onChange={(e) => setFormData({...formData, city: e.target.value})}
           />
           <input 
             required
             type="text" 
             placeholder="Departamento" 
             className="w-full bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl py-4 px-4 outline-none transition-all"
             value={formData.department}
             onChange={(e) => setFormData({...formData, department: e.target.value})}
           />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 text-gray-400 mt-4" size={20} />
          <textarea 
            required
            placeholder="Notas del pedido (Ej: Dejar en portería, tallas, colores...)" 
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
      </form>
    </div>
  );
}
