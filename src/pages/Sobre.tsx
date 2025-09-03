import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

const Sobre: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Instalação Profissional',
      description: 'Nossos técnicos especializados instalam o equipamento em seu veículo de forma discreta e segura, sem danificar a estrutura original.'
    },
    {
      number: '02',
      title: 'Monitoramento 24h',
      description: 'Sistema em funcionamento contínuo, enviando dados de localização e status do veículo para nossos servidores em tempo real.'
    },
    {
      number: '03',
      title: 'Ações e Alertas',
      description: 'Receba notificações instantâneas e tenha controle total através do app, incluindo bloqueio remoto e histórico de rotas.'
    }
  ];

  const differentials = [
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Equipe local que conhece a realidade cearense e oferece suporte personalizado quando você mais precisa.'
    },
    {
      icon: Award,
      title: 'Tecnologia Certificada',
      description: 'Equipamentos homologados pela Anatel e parceria com as principais fabricantes do mercado nacional.'
    },
    {
      icon: Clock,
      title: 'Suporte Imediato',
      description: 'Central de atendimento 24 horas com técnicos especializados prontos para ajudar em qualquer situação.'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Todos os equipamentos com garantia e reposição imediata em caso de defeito ou problema técnico.'
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
                Sobre a <span className="text-[var(--color-brand)]">ForteGPS</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
                Nascemos com o propósito de oferecer tranquilidade através da tecnologia. 
                Somos uma empresa cearense especializada em rastreamento veicular, combinando 
                inovação tecnológica com atendimento humano e personalizado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[var(--color-bg-soft)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
                Proteger o que é importante para você através de tecnologia avançada e suporte humano. 
                Acreditamos que a segurança do seu veículo deve vir acompanhada de tranquilidade, 
                não de complicações.
              </p>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Por isso, desenvolvemos soluções simples, eficazes e acessíveis, sempre com foco 
                na experiência do usuário e no atendimento de qualidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-[var(--color-bg)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center">
                <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">+5.000</div>
                <p className="text-sm text-[var(--color-text-muted)]">Veículos Protegidos</p>
              </div>
              <div className="bg-[var(--color-bg)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center">
                <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">5+</div>
                <p className="text-sm text-[var(--color-text-muted)]">Anos de Experiência</p>
              </div>
              <div className="bg-[var(--color-bg)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center">
                <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">24h</div>
                <p className="text-sm text-[var(--color-text-muted)]">Suporte Ativo</p>
              </div>
              <div className="bg-[var(--color-bg)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] text-center">
                <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">98%</div>
                <p className="text-sm text-[var(--color-text-muted)]">Satisfação</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Processo simples e eficiente em três etapas para total proteção do seu veículo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-[var(--color-brand)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[var(--color-border)] -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-soft)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              O que nos torna únicos no mercado de rastreamento veicular
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--color-bg)] p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[var(--color-brand)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Sobre;