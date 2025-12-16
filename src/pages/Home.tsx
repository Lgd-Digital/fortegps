import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import StatsStrip from '../components/StatsStrip';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import { Shield, BellRing, MapPin, Smartphone, Users, Zap } from 'lucide-react';
import { services } from '../data/services';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bloqueio Remoto',
      description: 'Imobilize seu veículo instantaneamente através do app em caso de roubo ou situação de risco.'
    },
    {
      icon: BellRing,
      title: 'Alertas Inteligentes',
      description: 'Receba notificações em tempo real sobre movimentação, velocidade e saída de perímetro.'
    },
    {
      icon: MapPin,
      title: 'Localização Precisa',
      description: 'GPS de alta precisão que mostra a localização exata do seu veículo em tempo real.'
    },
    {
      icon: Smartphone,
      title: 'App Completo',
      description: 'Aplicativo intuitivo para iOS e Android com todas as funcionalidades na palma da mão.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Atendimento Local',
      description: 'Equipe cearense que entende suas necessidades e oferece suporte personalizado.'
    },
    {
      icon: Shield,
      title: 'Tecnologia Homologada',
      description: 'Equipamentos certificados pela Anatel com garantia total de funcionamento.'
    },
    {
      icon: Zap,
      title: 'Instalação Rápida',
      description: 'Processo ágil e profissional, sem danificar o veículo. Pronto em menos de 1 hora.'
    }
  ];

  const featuredServices = services.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Recursos que Fazem a Diferença
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Conheça as principais funcionalidades que tornam a ForteGPS a melhor escolha
              para proteção do seu veículo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <StatsStrip /> */}

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Por que escolher a ForteGPS?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Mais que tecnologia, oferecemos confiança e tranquilidade para você e sua família
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-section)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Serviços em Destaque
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Soluções completas de rastreamento e monitoramento para todos os tipos de veículos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="/servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 border-2 border-[var(--color-brand)] text-[var(--color-brand)] px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)] hover:text-white transition-colors"
            >
              <span>Ver Todos os Serviços</span>
            </motion.a>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
};

export default Home;