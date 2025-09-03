import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';

const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Shield,
      value: '+5.000',
      label: 'Veículos Protegidos',
      description: 'Monitoramento ativo'
    },
    {
      icon: Clock,
      value: '< 2min',
      label: 'Tempo de Resposta',
      description: 'Suporte técnico'
    },
    {
      icon: Users,
      value: '98%',
      label: 'Satisfação',
      description: 'Clientes satisfeitos'
    },
    {
      icon: Award,
      value: '5 anos',
      label: 'Experiência',
      description: 'No mercado cearense'
    }
  ];

  return (
    <section className="py-16 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-brand)]/20 transition-colors">
                <stat.icon size={28} className="text-[var(--color-brand)]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--color-text)] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;