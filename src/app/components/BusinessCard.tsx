import React from 'react';
import { Mail, Phone, Globe, Linkedin, Twitter, Github, MapPin, Share2, UserPlus, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export const BusinessCard = () => {
  const profileImage = "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDI4OTI4NHww&ixlib=rb-4.1.0&q=80&w=1080";
  const backgroundImage = "https://images.unsplash.com/photo-1687463221023-02f259da7d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGJhY2tncm91bmQlMjBibHVlJTIwZGFya3xlbnwxfHx8fDE3NzAzMTg0OTF8MA";

  const userData = {
    name: "Carlos Rodríguez",
    title: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    bio: "Apasionado por crear experiencias digitales excepcionales con React, Node.js y Cloud Architecture. 10+ años transformando ideas en código.",
    contacts: [
      { icon: <Mail className="w-5 h-5" />, label: "Email", value: "carlos.rod@technova.com", href: "mailto:carlos.rod@technova.com" },
      { icon: <Phone className="w-5 h-5" />, label: "Teléfono", value: "+34 600 123 456", href: "tel:+34600123456" },
      { icon: <Globe className="w-5 h-5" />, label: "Sitio Web", value: "carlosrod.dev", href: "https://carlosrod.dev" },
      { icon: <MapPin className="w-5 h-5" />, label: "Ubicación", value: "Madrid, España", href: "https://maps.google.com/?q=Madrid,Spain" },
    ],
    socials: [
      { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/carlosrod", label: "LinkedIn" },
      { icon: <Github className="w-6 h-6" />, href: "https://github.com/carlosrod", label: "GitHub" },
      { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/carlosrod", label: "Twitter" },
    ]
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Tarjeta de ${userData.name}`,
          text: `Contacta con ${userData.name} - ${userData.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Enlace copiado al portapapeles");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const [showQR, setShowQR] = React.useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-neutral-100"
      >
        {/* Header Background */}
        <div className="h-40 relative overflow-hidden">
          <ImageWithFallback 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
          <div className="relative -mt-16 mb-4 flex justify-between items-end">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white">
                <ImageWithFallback 
                  src={profileImage} 
                  alt={userData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-md">
                <QrCode 
                  className="w-5 h-5 cursor-pointer" 
                  onClick={() => setShowQR(!showQR)}
                />
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <button 
                onClick={handleShare}
                className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors"
                onClick={() => toast.info("Función de VCard en desarrollo")}
              >
                <UserPlus className="w-5 h-5" />
                <span>Añadir</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-neutral-900">{userData.name}</h1>
            <p className="text-blue-600 font-medium">{userData.title}</p>
            <p className="text-neutral-500 text-sm">{userData.company}</p>
          </div>

          <p className="mt-4 text-neutral-600 leading-relaxed text-sm">
            {userData.bio}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 border-b border-neutral-100 pb-6">
            {userData.socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-400 hover:text-blue-600 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact List */}
          <div className="mt-6 space-y-4">
            {userData.contacts.map((contact, index) => (
              <a 
                key={index}
                href={contact.href}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {contact.icon}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">{contact.label}</p>
                  <p className="text-neutral-900 truncate font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* QR Modal Overlay */}
        {showQR && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center"
          >
            <button 
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100"
            >
              <span className="sr-only">Cerrar</span>
              <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-neutral-100 mb-6">
              <QRCodeSVG 
                value={window.location.href} 
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 mb-2">Escanea mi contacto</h2>
            <p className="text-neutral-500 text-sm max-w-[200px]">
              Apunta con tu cámara para abrir mi tarjeta digital
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer Info */}
      <footer className="mt-8 text-center text-neutral-400 text-sm">
        <p>© 2026 {userData.name}. Digital Business Card.</p>
      </footer>
    </div>
  );
};
