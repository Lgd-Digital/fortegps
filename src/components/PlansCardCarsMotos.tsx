import React from 'react';
import { motion } from 'framer-motion';
import { 
  Motorbike, 
  Car, 
  CheckCircle2, 
  CreditCard,
  Wrench,
  Star,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface Plan {
  id: string;
  title: string;
  price: string;
  icon: React.ComponentType<any>;
  features: string[];
  assistanceFeatures?: string[];
  paymentMethods: string[];
  gradient: {
    light: string;
    dark: string;
  };
  badge?: string;
}

const PlansCardCarsMotos: React.FC = () => {
const plans: Plan[] = [
  {
    id: 'moto-anual',
    title: 'Planos moto anual',
    price: 'R$ 49,99',
    icon: Motorbike,
    gradient: {
      light: 'from-[#2F4A2A] to-[#1A2F17]',
      dark: 'from-[#1F3A19] to-[#0E1A0C]',
    },
    features: [
      'Central 24 h',
      'Acesso a historico veicular',
      'Aplicativos disponíveis para Android e IOS',
      'Equipe de busca',
      'Bloqueio pelo App'
    ],
    paymentMethods: ['Pix ou Boleto']
  },

  {
    id: 'moto-anual-assistencia',
    title: 'Planos moto anual com assistência',
    price: 'R$ 65,99',
    icon: Motorbike,
    badge: 'MELHOR ESCOLHA',
    gradient: {
      light: 'from-[#3B5F34] via-[#2F4A2A] to-[#1A2F17]',
      dark: 'from-[#2F4A2A] via-[#1F3A19] to-[#0E1A0C]',
    },
    features: [
      'Central 24 h',
      'Acesso a historico veicular',
      'Aplicativos disponíveis para Android e IOS',
      'Equipe de busca',
      'Bloqueio pelo App'
    ],
    assistanceFeatures: [
      'Assistência Veicular 24h: Reboque, Chaveiro, Táxi/Uber, SOS Elétrico e Troca de Pneu'
    ],
    paymentMethods: ['Pix ou Boleto']
  },

  {
    id: 'carro-anual',
    title: 'Planos Carro anual',
    price: 'R$ 59,99',
    icon: Car,
    gradient: {
      light: 'from-[#2F4A2A] to-[#1A2F17]',
      dark: 'from-[#1F3A19] to-[#0E1A0C]',
    },
    features: [
      'Central 24 h',
      'Acesso a historico veicular',
      'Aplicativos disponíveis para Android e IOS',
      'Equipe de busca',
      'Bloqueio pelo App'
    ],
    paymentMethods: ['Pix ou Boleto']
  },

  {
    id: 'carro-anual-assistencia',
    title: 'Plano anual com assistência veicular carro',
    price: 'R$ 74,99',
    icon: Car,
    badge: 'MELHOR ESCOLHA',
    gradient: {
      light: 'from-[#3B5F34] via-[#2F4A2A] to-[#1A2F17]',
      dark: 'from-[#2F4A2A] via-[#1F3A19] to-[#0E1A0C]',
    },
    features: [
      'Central 24 h',
      'Acesso a historico veicular',
      'Aplicativos disponíveis para Android e IOS',
      'Equipe de busca',
      'Bloqueio pelo App'
    ],
    assistanceFeatures: [
      'Assistência Veicular 24h: Reboque, Chaveiro, Táxi/Uber, SOS Elétrico e Troca de Pneu'
    ],
    paymentMethods: ['Pix ou Boleto']
  },
];



  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
                      className="
                        bg-gradient-to-r
                        from-[#A5FF72] via-[#8BD85D] to-[#6CB33F]
                        dark:from-[#8BD85D] dark:via-[#6CB33F] dark:to-[#4A7A2A]
                        text-[#1A2B0D] dark:text-[#0B1606]
                        px-4 py-1.5 rounded-full text-xs font-bold
                        shadow-[0px_4px_14px_rgba(0,0,0,0.28)]
                        flex items-center gap-1.5
                      "
                    >
                      <Star size={16} className="fill-current" />
                      <span>{plan.badge}</span>
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br ${plan.gradient.light} dark:${plan.gradient.dark} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.assistanceFeatures ? 'ring-offset-transparent' : ''}`}>
                  {/* Glow effect for assistance plans */}
                  {plan.assistanceFeatures && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7BC44F] via-[#6CB33F] to-[#7BC44F] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  )}
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${plan.assistanceFeatures ? 'opacity-15' : 'opacity-10'}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/30 transition-all duration-300"
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {plan.price}
                      </p>
                      <p className="text-white/80 text-sm">por mês</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-white/90"
                        >
                          <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Assistance Features */}
                    {plan.assistanceFeatures && (
                      <div className="mb-6 pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Wrench size={18} className="text-white" />
                          <span className="text-sm font-semibold text-white">Assistência Incluída</span>
                        </div>
                        <ul className="space-y-2">
                          {plan.assistanceFeatures.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                              className="flex items-start gap-2 text-xs text-white/80"
                            >
                              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Payment Methods */}
                    <div className="mb-6 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard size={16} className="text-white/90" />
                        <span className="text-xs font-semibold text-white/90">Forma de pagamento:</span>
                      </div>
                      <p className="text-xs text-white/80">
                        {plan.paymentMethods.join(' ou ')}
                      </p>
                    </div>

                    
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${plan.assistanceFeatures ? 'group-hover:opacity-20' : ''}`}></div>
                  
                  {/* Shine effect for assistance plans */}
                  {plan.assistanceFeatures && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://api.whatsapp.com/send/?phone=558532221684&text=Ol%C3%A1%2C+quero+saber+mais+sobre+rastreamento+de+ve%C3%ADculos&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand)]/90 to-[var(--color-brand)]/85 text-white p-4 rounded-2xl font-medium text-lg transition-all duration-300 shadow-2xl hover:shadow-[var(--color-brand)]/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/90 via-[var(--color-brand)] to-[var(--color-brand)] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaWhatsapp size={24} className="relative z-10" />
            <span className="relative z-10">FALAR COM UM CONSULTOR</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansCardCarsMotos;

