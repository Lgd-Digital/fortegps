import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email submission (placeholder)
    const emailBody = `Nome: ${formData.name}%0D%0ATelefone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ATipo de Veículo: ${formData.vehicleType}%0D%0AMensagem: ${formData.message}`;
    window.open(`mailto:contato@fortegps.com.br?subject=Contato via Site&body=${emailBody}`);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Me chamo ${formData.name}. Tenho um ${formData.vehicleType} e gostaria de saber mais sobre rastreamento. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[var(--color-bg-soft)] p-8 rounded-[var(--radius-card)] border border-[var(--color-border)]"
    >
      <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
        Entre em Contato
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-colors"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-colors"
              placeholder="(85) 99999-9999"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-colors"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Tipo de Veículo *
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              required
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-colors"
            >
              <option value="">Selecione o tipo</option>
              <option value="Carro">Carro</option>
              <option value="Moto">Moto</option>
              <option value="Caminhão">Caminhão</option>
              <option value="Frota">Frota</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-colors resize-none"
            placeholder="Conte mais sobre suas necessidades..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 bg-[var(--color-brand)] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)]/90 transition-colors flex-1"
          >
            <Send size={18} />
            <span>Enviar E-mail</span>
          </motion.button>

          <motion.button
            type="button"
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center space-x-2 border-2 border-[var(--color-brand)] text-[var(--color-brand)] px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)] hover:text-white transition-colors flex-1"
          >
            <FaWhatsapp size={18} />
            <span>Enviar WhatsApp</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;