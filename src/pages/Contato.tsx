import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { FaWhatsapp } from 'react-icons/fa';

const Contato: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(85) 99999-9999',
      link: 'tel:+5585999999999'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '(85) 99999-9999',
      link: 'https://wa.me/5585999999999?text=Olá%2C%20quero%20informações%20sobre%20rastreamento'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@fortegps.com.br',
      link: 'mailto:contato@fortegps.com.br'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Segunda a Sexta: 8h às 18h',
      link: null
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6">
                Entre em <span className="text-[var(--color-brand)]">Contato</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
                Estamos prontos para ajudar você a proteger seu veículo. 
                Fale conosco através dos nossos canais de atendimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--color-bg-soft)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center hover:border-[var(--color-brand)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-[var(--color-brand)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[var(--color-brand)] hover:text-[var(--color-brand)]/80 transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-[var(--color-text-muted)] text-sm">
                    {info.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
                Área de Atuação
              </h3>
              <div className="bg-[var(--color-bg-soft)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] mb-6">
                <div className="aspect-video bg-[var(--color-bg-muted)] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin size={48} className="text-[var(--color-brand)] mx-auto mb-2" />
                    <p className="text-[var(--color-text-muted)]">Mapa da Região Metropolitana</p>
                    <p className="text-sm text-[var(--color-text-muted)] opacity-70">Fortaleza e região</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[var(--color-text)] mb-2">
                    Cobertura Completa
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Atendemos toda a região metropolitana de Fortaleza com instalação 
                    e suporte técnico especializado.
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[var(--color-bg-soft)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-text)] mb-4">
                  Prefere falar diretamente?
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/5585999999999?text=Quero%20agendar%20uma%20visita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[var(--color-brand)] hover:text-[var(--color-brand)]/80 transition-colors"
                  >
                    <FaWhatsapp size={18} />
                    <span className="font-medium">WhatsApp: (85) 99999-9999</span>
                  </a>
                  <a
                    href="tel:+5585999999999"
                    className="flex items-center space-x-2 text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    <Phone size={18} />
                    <span>Ligação: (85) 99999-9999</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;