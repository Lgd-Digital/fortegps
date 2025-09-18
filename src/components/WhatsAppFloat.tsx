import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%2C%20quero%20saber%20mais%20sobre%20rastreamento%20de%20veículos";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 bg-[var(--color-brand)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-brand)]/90 transition-colors z-50"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
};

export default WhatsAppFloat;
