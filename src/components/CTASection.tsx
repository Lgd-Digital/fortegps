import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import MainCta from './MainCta';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção 24/7',
      description: 'Monitoramento contínuo do seu veículo'
    },
    {
      icon: Clock,
      title: 'Resposta Rápida',
      description: 'Ação imediata em situações de risco'
    },
    {
      icon: Users,
      title: 'Suporte 24h',
      description: 'Equipe especializada sempre disponível'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário de Frotas',
      text: 'A ForteGPS transformou nossa gestão de veículos. Economia e segurança garantidas.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Proprietária de Veículo',
      text: 'Finalmente posso dormir tranquila sabendo que meu carro está protegido.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[var(--color-bg-section)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/5 via-transparent to-[var(--color-brand)]/5"></div>
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-brand)]/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-brand)]/10 rounded-full blur-xl"
      ></motion.div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-brand)]/10 text-[var(--color-brand)] px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Shield size={16} />
            <span>Junte-se a clientes satisfeitos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6"
          >
            Comece{' '}
            <span className="text-[var(--color-brand)]">agora</span>{' '}
            mesmo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto mb-8"
          >
            Não espere até ser tarde demais. A segurança do seu patrimônio é nossa
            prioridade. Comece hoje mesmo e conte com proteção 24 horas por dia.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-brand)]/20 transition-colors">
                <benefit.icon size={28} className="text-[var(--color-brand)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[var(--color-text-muted)]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-sm"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[var(--color-brand)] fill-current" />
                ))}
              </div>
              <p className="text-[var(--color-text-muted)] mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-[var(--color-text)]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[var(--color-brand)]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <MainCta />

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-2">
                +10.000
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                Veículos Protegidos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-2">
                98%
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                Satisfação
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-2">
                &lt; 2min
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                Tempo de Resposta
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-2">
                14+ anos
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                de Experiência
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;