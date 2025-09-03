import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';

const Servicos: React.FC = () => {
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

      {/* Additional Benefits */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-soft)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefícios Inclusos
              </h2>
              <p className="text-lg text-[var(--color-text-beige)]">
                Tudo que você precisa já está incluso no seu plano
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Instalação profissional gratuita',
                'Aplicativo móvel iOS e Android',
                'Suporte técnico 24 horas',
                'Atualizações automáticas do sistema',
                'Backup de dados na nuvem',
                'Relatórios mensais por e-mail',
                'Treinamento para uso do app',
                'Garantia total do equipamento'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-[var(--color-brand)] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-[var(--color-text-beige)]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Servicos;