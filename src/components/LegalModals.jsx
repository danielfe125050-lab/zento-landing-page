import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Video, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

const legalContent = {
  envio: {
    title: "Políticas de Envío",
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>En nuestra tienda, nos esforzamos por procesar y enviar tu pedido de la manera más rápida posible.</p>
        <h4 className="font-bold text-black uppercase text-xs">1. Cobertura y Costos</h4>
        <p>Realizamos envíos a toda Colombia a través de aliados logísticos (Servientrega, Interrapidísimo, Envia). El envío es <strong>GRATUITO</strong> y operamos bajo el modelo de <strong>Pago Contra Entrega</strong>.</p>
        <h4 className="font-bold text-black uppercase text-xs">2. Tiempos de Entrega</h4>
        <p>El tiempo estimado es de <strong>2 a 5 días hábiles</strong>. Los pedidos se envían según disponibilidad, ya que este producto no cuenta con variables de color o modelo específicas.</p>
        <h4 className="font-bold text-black uppercase text-xs">3. Recepción del Pedido</h4>
        <p>La guía de entrega hace las veces de facturación para cualquier reclamación futura. Es indispensable conservarla.</p>
      </div>
    )
  },
  terminos: {
    title: "Términos y Condiciones",
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <h4 className="font-bold text-black uppercase text-xs">1. Disponibilidad de Modelos</h4>
        <p>Importante tener presente que <strong>no aplica garantía por Color o Modelo</strong> ya que se envía según disponibilidad de bodega y este producto no cuenta con variables.</p>
        <h4 className="font-bold text-black uppercase text-xs">2. Uso Personal</h4>
        <p>Por tratarse de un producto de uso personal, no se aceptan devoluciones por arrepentimiento, talla incorrecta o gustos decorativos una vez el producto ha sido abierto o usado (Art. 47 de la Ley 1480 de 2011).</p>
        <h4 className="font-bold text-black uppercase text-xs">3. Responsabilidad</h4>
        <p>El cliente es responsable de seguir las instrucciones de uso (10-15 min por sesión) y los cuidados de limpieza mencionados en el manual.</p>
      </div>
    )
  },
  privacidad: {
    title: "Política de Privacidad",
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>Damos cabal cumplimiento a la <strong>Ley 1581 de 2012</strong> de Protección de Datos Personales en Colombia.</p>
        <h4 className="font-bold text-black uppercase text-xs">1. Finalidad de los Datos</h4>
        <p>Tus datos son utilizados exclusivamente para la gestión logística de tu pedido y confirmación vía WhatsApp.</p>
        <h4 className="font-bold text-black uppercase text-xs">2. No Compartición</h4>
        <p>No compartimos tus datos con terceros con fines publicitarios ajenos a nuestra tienda.</p>
      </div>
    )
  },
  devoluciones: {
    title: "Políticas de Garantía y Devolución",
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        
        {/* CRITICAL UNBOXING REQUIREMENT */}
        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex gap-3">
           <Video className="text-red-500 shrink-0" size={24} />
           <div>
             <h5 className="text-red-700 font-black text-xs uppercase mb-1">REQUISITO INDISPENSABLE: VIDEO DE APERTURA</h5>
             <p className="text-[11px] text-red-600 leading-tight">Para validar cualquier garantía, es OBLIGATORIO remitir un video de apertura (unboxing) donde se vea: el estado del empaque externo, el proceso de apertura y el primer encendido/uso del dispositivo.</p>
           </div>
        </div>

        <h4 className="font-bold text-black uppercase text-xs flex items-center gap-2"><ShieldCheck size={16} className="text-neonRed" /> Garantía por Fallas de Fábrica</h4>
        <p>Cuentas con <strong>30 días de garantía</strong> por funcionamiento o daños de fábrica. Se requiere evidencia en video donde se muestre que el producto no funciona correctamente.</p>

        <h4 className="font-bold text-black uppercase text-xs flex items-center gap-2"><AlertTriangle size={16} className="text-orange-500" /> Piezas Faltantes o Roto</h4>
        <p>Para reportar productos rotos o piezas faltantes, cuentas con un máximo de <strong>2 días calendario</strong> tras la recepción para reportarlo con evidencias fotográficas y de video.</p>

        <h4 className="font-bold text-black uppercase text-xs flex items-center gap-2"><Clock size={16} className="text-blue-500" /> Ley de Retracto (Ley 1480 de 2011)</h4>
        <p>El término máximo para ejercer el derecho de retracto es de <strong>5 días hábiles</strong>. El producto debe devolverse en las mismas condiciones (sellado, con accesorios y manuales). Los costos de transporte corren por cuenta del consumidor.</p>

        <p className="bg-gray-100 p-3 rounded-xl text-[11px] italic font-medium">Nota: El cambio no se enviará hasta que el producto defectuoso sea recibido y verificado en nuestras bodegas (proceso de 24-48h).</p>
      </div>
    )
  }
};

export default function LegalModals({ isOpen, type, onClose }) {
  const content = legalContent[type];

  return (
    <AnimatePresence>
      {isOpen && content && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase italic">{content.title}</h3>
              <button 
                onClick={onClose}
                className="bg-gray-200 hover:bg-neonRed hover:text-white text-gray-500 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="px-8 py-8 max-h-[70vh] overflow-y-auto no-scrollbar">
              {content.content}
            </div>
            
            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
               <button 
                onClick={onClose}
                className="text-xs font-black text-gray-400 hover:text-neonRed uppercase tracking-widest transition-colors"
               >
                 Cerrar Documento
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
