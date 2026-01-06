import { motion } from 'framer-motion';
import { MapPin, Smartphone } from 'lucide-react';

export const LocalizationHero = () => {
  return (
    <>
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
            <div className="bg-[var(--color-bg-card)] rounded p-3 mb-3">
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
              <div className="bg-[var(--color-bg-card)] rounded p-2 text-center">
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
    </>
  );
};

export default LocalizationHero;