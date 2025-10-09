import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';

const Sobre: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Setor Comercial',
      description: 'Nossos setores comerciais estão com equipe especializada para atender a todos os clientes.'
    },
    {
      number: '02',
      title: 'Agendamento',
      description: 'Agendamento de instalação, consulta, manutenção e suporte técnico.'
    },
    {
      number: '03',
      title: 'Central 24h',
      description: 'Central de atendimento 24 horas para atender a todos os clientes.'
    }
  ];

  const differentials = [
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com empatia, respeito e proximidade, oferecendo suporte ágil e soluções personalizadas que colocam pessoas em primeiro lugar.'
    },
    {
      icon: Award,
      title: 'Tecnologia Certificada',
      description: 'Equipamentos homologados pela Anatel e parceria com os principais fabricantes do segmento de rastreamento veícular'
    },
    {
      icon: Clock,
      title: 'Suporte Imediato',
      description: 'Central de atendimento 24 horas e setor técnico com uma equipe especializada pronta para ajudar em qualquer situação.'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Todos os equipamentos com garantia e reposição imediata em caso de defeitos ou problemas técnicos.'
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

      {/* Mission, Vision, Values and Stats Section */}
      <section className="py-16 bg-[var(--color-bg-section)]">
        <div className="container">
          {/* Mission and Vision Row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                Missão
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Nossa missão é proporcionar segurança com qualidade, aliando tecnologia
                avançada a soluções eficazes, sempre com um suporte humanizado que garante
                tranquilidade, confiança e bem-estar a nossos clientes e parceiros.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                Visão
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Ser referência nacional em tecnologia de rastreamento e gestão inteligente de frotas e patrimônios, 
                reconhecida pela excelência, inovação e confiança.
              </p>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-[var(--color-bg-card)] p-6 rounded-md border border-[var(--color-border)] text-center shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">+10.000</div>
              <p className="text-sm text-[var(--color-text-muted)]">Veículos Protegidos</p>
            </div>
            <div className="bg-[var(--color-bg-card)] p-6 rounded-md border border-[var(--color-border)] text-center shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">14+</div>
              <p className="text-sm text-[var(--color-text-muted)]">Anos de Experiência</p>
            </div>
            <div className="bg-[var(--color-bg-card)] p-6 rounded-md border border-[var(--color-border)] text-center shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">24h</div>
              <p className="text-sm text-[var(--color-text-muted)]">Suporte Ativo</p>
            </div>
            <div className="bg-[var(--color-bg-card)] p-6 rounded-md border border-[var(--color-border)] text-center shadow-sm">
              <div className="text-3xl font-bold text-[var(--color-brand)] mb-2">98%</div>
              <p className="text-sm text-[var(--color-text-muted)]">Satisfação</p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8 text-center">
              Valores
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Segurança em primeiro lugar</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Proteção de veículos, clientes e parceiros com máxima confiabilidade.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Inovação contínua</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Evoluímos com a tecnologia para oferecer soluções modernas e eficientes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Transparência</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Atuamos com ética, clareza e responsabilidade em todas as relações.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Excelência no atendimento</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Prestamos suporte humanizado, ágil e de qualidade.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Confiança e credibilidade</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Construímos parcerias sólidas baseadas no respeito e comprometimento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-bg-card)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-brand)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-2">Responsabilidade</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Assumimos cada serviço com seriedade, dedicação e foco em resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
      <section className="py-16 md:py-24 bg-[var(--color-bg-section)]">
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
                className="bg-[var(--color-bg-card)] p-8 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/30 transition-all duration-300 shadow-sm"
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