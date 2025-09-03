import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Smartphone, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-56 overflow-hidden">
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
              Rastreamento GPS{' '}
              <span className="text-[var(--color-brand)]">Inteligente</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl lg:max-w-none"
            >
              Monitore seu veículo em tempo real com tecnologia de ponta. 
              Bloqueio remoto, alertas inteligentes e localização precisa para sua tranquilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-brand)] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[var(--color-brand)]/90 transition-colors shadow-lg"
              >
                <span>Começar Agora</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border-2 border-[var(--color-border)] text-[var(--color-text)] px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
              >
                <Play size={20} />
                <span>Ver Demo</span>
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
                <span>Instalação em 1 hora</span>
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

          {/* Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Device Mockup */}
            <div className="relative bg-[var(--color-bg-soft)] p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-2xl">
              {/* App Interface Mockup */}
              <div className="bg-[var(--color-bg-muted)] rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full"></div>
                    <span className="text-xs text-[var(--color-text-muted)]">ForteGPS</span>
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">14:32</div>
                </div>
                
                {/* Map Preview */}
                <div className="bg-[var(--color-bg)] rounded p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--color-text)] font-medium">Localização Atual</span>
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">Av. Santos Dumont, 1234</div>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[var(--color-brand)]/20 rounded p-2 text-center">
                    <div className="text-xs text-[var(--color-brand)] font-bold">ONLINE</div>
                  </div>
                  <div className="bg-[var(--color-bg)] rounded p-2 text-center">
                    <div className="text-xs text-[var(--color-text-muted)]">Bloqueio</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-brand)]/20 rounded-full flex items-center justify-center"
              >
                <MapPin size={24} className="text-[var(--color-brand)]" />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--color-brand)]/20 rounded-full flex items-center justify-center"
              >
                <Smartphone size={20} className="text-[var(--color-brand)]" />
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[var(--color-brand)]/20 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;