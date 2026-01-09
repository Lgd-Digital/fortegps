import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Calculator, 
  Headphones as HeadphonesIcon,
  Truck,
  Zap,
  Wrench,
  Car,
  Key
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import MainCta from '../components/MainCta';
import PlansCardCarsMotos from '../components/PlansCardCarsMotos';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Servicos: React.FC = () => {
  const { theme } = useTheme();
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
          
        </div>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 justify-center items-center"
        >
          <motion.a
            href="https://wa.me/5585999999999?text=Quero%20montar%20um%20plano%20personalizado%20para%20meu%20veículo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand)]/90 to-[var(--color-brand)]/85 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[var(--color-brand)]/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/90 via-[var(--color-brand)] to-[var(--color-brand)] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaWhatsapp size={24} className="relative z-10" />
            <span className="relative z-10">Monte seu Plano Personalizado</span>
          </motion.a>
        </motion.div>
      </section>

      {/* Vehicle Banner Section - Similar to provided image */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[var(--color-bg-section)] via-[var(--color-bg)] to-[var(--color-bg-section)] overflow-hidden">
        <div className="container">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 leading-tight">
              Segurança todos os dias com um valor que{' '}
              <span className="text-[var(--color-brand)]">cabe no seu bolso</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-4xl mx-auto leading-relaxed">
              Proteção completa para motos, carros e caminhões com tecnologia avançada e preços acessíveis
            </p>
          </motion.div>

          {/* Vehicle Composition - Similar to banner layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-brand)]/5 to-transparent rounded-3xl"></div>
            
            {/* Vehicles Container */}
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px] px-4 py-4">
              {/* Veiculos - Center (Destaque) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-20 mx-4"
              >
                <div className="relative group">
                  <div className={`absolute -inset-4 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-gray-800/15 via-gray-700/10 to-gray-800/15 shadow-[0_0_30px_rgba(0,0,0,0.15)]' 
                      : 'bg-gradient-to-r from-[var(--color-brand)]/20 via-[var(--color-brand)]/10 to-[var(--color-brand)]/20'
                  }`}></div>
                  <img 
                    src="./veiculos.webp" 
                    alt="veiculos" 
                    className={`relative h-72 md:h-[500px] lg:h-[600px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 ${
                      theme === 'light' 
                        ? 'drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]' 
                        : 'drop-shadow-2xl'
                    }`}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <PlansCardCarsMotos />

          {/* Features Grid */}
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: UserCheck,
                title: 'Consulta Gratuita',
                description: 'Análise completa das suas necessidades sem custo'
              },
              {
                icon: Calculator,
                title: 'Orçamento Sem Compromisso',
                description: 'Proposta personalizada sem obrigações'
              },
              {
                icon: HeadphonesIcon,
                title: 'Atendimento Especializado',
                description: 'Consultores experientes e dedicados'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand)]/10 rounded-2xl mb-4 group-hover:bg-[var(--color-brand)]/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon size={28} className="text-[var(--color-brand)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vehicle Assistance Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[var(--color-bg-section)] via-[var(--color-bg)] to-[var(--color-bg-section)] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-brand)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-brand)]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand)]/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand)]/70 rounded-2xl mb-8 shadow-2xl"
              >
                <Wrench size={40} className="text-white" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6 leading-tight"
              >
                Plano de Assistência {''}
                <span className="text-transparent bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand)] to-[var(--color-text)] bg-clip-text">
                  24h
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-4xl mx-auto leading-relaxed mb-4"
              >
                Nosso serviço de <strong className="text-[var(--color-brand)]">Assistência Veicular 24h</strong> foi pensado para você nunca ficar na mão.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed"
              >
                Com cobertura nacional e com parceiros espalhados por todo Brasil, você conta com serviços como
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
            >
              {[
                {
                  icon: Truck,
                  title: 'REBOQUE',
                  subtitle: '(TOWING)',
                  description: 'Até oficina ou concessionário em um raio máximo de 200 km de ida e volta.',
                  color: 'from-red-500 to-red-600',
                  bgColor: 'bg-red-50',
                  iconColor: 'text-red-600'
                },
                {
                  icon: Zap,
                  title: 'SOS ELÉTRICO',
                  subtitle: '(ELECTRICAL SOS)',
                  description: 'Serviço de socorro elétrico com distância de até 200 km do prestador afiliado.',
                  color: 'from-yellow-500 to-orange-500',
                  bgColor: 'bg-yellow-50',
                  iconColor: 'text-yellow-600'
                },
                {
                  icon: Car,
                  title: 'TROCA DE PNEU',
                  subtitle: '(TIRE CHANGE)',
                  description: 'Envio de um profissional para realizar a troca do pneu pelo estepe do veículo ou reboque até uma oficina. Limite de 200 km.',
                  color: 'from-gray-600 to-gray-700',
                  bgColor: 'bg-gray-50',
                  iconColor: 'text-gray-600'
                },
                {
                  icon: Car,
                  title: 'TÁXI/UBER',
                  subtitle: '(TAXI/UBER)',
                  description: 'Viagem no valor de até R$70,00 dentro da sua cidade, em caso de roubo ou furto.',
                  color: 'from-blue-600 to-blue-700',
                  bgColor: 'bg-blue-50',
                  iconColor: 'text-blue-600'
                },
                {
                  icon: Key,
                  title: 'CHAVEIRO',
                  subtitle: '(LOCKSMITH)',
                  description: 'Em casos em que o veículo não pode ser aberto e/ou acionado. Limite de até 200 km do profissional afiliado.',
                  color: 'from-purple-600 to-purple-700',
                  bgColor: 'bg-purple-50',
                  iconColor: 'text-purple-600'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-[var(--color-bg-card)] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--color-border)]/20 h-full">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <service.icon size={32} className={`${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-brand)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3 font-medium">
                      {service.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href="https://wa.me/5585999999999?text=Quero%20contratar%20o%20serviço%20de%20Assistência%20Veicular%2024h"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand)]/90 to-[var(--color-brand)]/70 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-[var(--color-brand)]/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/90 via-[var(--color-brand)] to-[var(--color-brand)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contratar Assistência 24h</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-6 md:py-14">
        <MainCta />
      </div>
    </div>
  );
};

export default Servicos;