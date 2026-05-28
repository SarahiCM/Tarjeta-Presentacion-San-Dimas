import React from 'react'
import { motion } from 'motion/react'
import { Phone, MapPin } from 'lucide-react'
import buho from "../../assets/images/buho.png";

export const JewelryBusinessCard = () => {
  const cardData = {
    brand: "Mancillas y asociados",
    category: "Despacho",
    owner: "Lic. María Teresa de Jesús Mancillas Gonzales || Lic Georgina Ana Georgina Pérez Molina",
    phone: "618 205 75 96",
    address: [
      "Zaragoza 365",
      "Zona Centro",
      "Durango, Dgo.",
      "C.P. 34000"
    ],
    services: "Civil | Familiar | Mercantil | Laboral",
    callToAction: "¡Agenda una cita!",
    cost: "Costo de asesoría $600.00"
  };
   
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[360px] bg-white shadow-lg border border-gray-200 p-6 flex flex-col rounded-xl"
      >
        {/* Logo del búho */} 
        <div className="flex justify-center mb-4">
          <img 
            src={buho}
            alt="Logo búho" 
            className="w-16 h-16 object-contain opacity-90"
          />
        </div>

        {/* Marca */}
        <div className="text-center mb-6 font-montserrat">
          <h1 className="text-2xl font-bold text-gray-900">
            {cardData.brand}
          </h1>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {cardData.category}
          </p>
          <div className="h-[2px] w-16 bg-[#D4AF37] mx-auto mt-3 opacity-70" />
        </div>

        {/* Servicios */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold text-[#D4AF37] font-montserrat">
            Asesoría Legal
          </h2>
          <p className="text-sm text-gray-700 mt-1 font-lato">
            {cardData.services}
          </p>
        </div>

        {/* Propietario */}
        <div className="text-center mb-4 font-lato">
          <h3 className="text-sm font-medium text-gray-800">
            {cardData.owner}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Cel. <span className="text-[#D4AF37] font-semibold">{cardData.phone}</span>
          </p>
        </div>

        {/* Dirección */}
        <div className="text-center text-gray-600 space-y-0.5 text-xs mb-4 font-lato">
          {cardData.address.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        {/* Llamada a la acción y costo */}
        <div className="text-center mt-4 font-montserrat">
          <p className="text-sm font-semibold text-gray-900">{cardData.callToAction}</p>
          <p className="text-xs text-gray-500 mt-1 font-lato">{cardData.cost}</p>
        </div>
      </motion.div>

      {/* Botones minimalistas */}
      <div className="mt-6 flex flex-col gap-2 w-full max-w-[360px] font-lato">
        <a
          href={`tel:${cardData.phone.replace(/\s/g, '')}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#D4AF37] text-white rounded-md text-sm font-semibold shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cardData.address.join(' '))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#D4AF37] text-[#D4AF37] rounded-md text-sm font-semibold active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4" />
          Ubicación
        </a>
      </div>
    </div>
  );
};