import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, ArrowRight } from 'lucide-react';
import { AppMockup } from './AppShowcase';
import StatsGrid from './StatsGrid';

const Hero: React.FC = () => {
  const stats = [
    {
      value: '+10.000',
      label: 'Veículos Protegidos'
    },
    {
      value: '98%',
      label: 'Satisfação'
    },
    {
      value: '< 2min',
      label: 'Tempo de Resposta'
    },
    {
      value: '14+ anos',
      label: 'de Experiência'
    }
  ];

  return (
    <section className="relative py-32 md:py-56 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/5 via-transparent to-[var(--color-brand)]/5"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-[var(--color-brand)]/10 text-[var(--color-brand)] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield size={16} />
              <span>Proteção Total para seu Veículo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight"
            >
              Rastreamento Forte
              <span className="text-[var(--color-brand)]">GPS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl lg:max-w-none"
            >
              Monitore seu veículo em tempo real com tecnologia de ponta.
              Bloqueio remoto, alertas inteligentes e localização precisa
              trazendo a segurança que você precisa para seu veículo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-brand)] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[var(--color-brand)]/90 transition-colors shadow-lg"
              >
                <span>Conheça nossos planos</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=558532221684&text=Ol%C3%A1%2C+quero+saber+mais+sobre+rastreamento+de+ve%C3%ADculos&type=phone_number&app_absent=0', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border-2 border-[var(--color-border)] text-[var(--color-text)] px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
              >
                <Smartphone size={20} />
                <span>Contatos</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-[var(--color-text-muted)]"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full"></div>
                <span>Aplicativo Completo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full"></div>
                <span>Suporte 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full"></div>
                <span>Garantia total</span>
              </div>
            </motion.div>
          </motion.div>

          <AppMockup />
        </div>
      </div>

      {/* Stats Grid - Fora do container para alinhar com o menu */}
      <div className="mt-16">
        <StatsGrid stats={stats} animationDelay={0.7} isHero={true} />
      </div>

    </section>
  );
};

export default Hero;