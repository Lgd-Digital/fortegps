import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import MainCta from '../components/MainCta';

const Servicos: React.FC = () => {
  return (
    <div className="py-20">
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
                Nossos <span className="text-[var(--color-brand)]">Serviços</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
                Soluções completas de rastreamento e monitoramento veicular com tecnologia 
                de ponta e suporte especializado para sua total tranquilidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <MainCta />
    </div>
  );
};

export default Servicos;