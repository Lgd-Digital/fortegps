import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, FileText, CreditCard, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaGooglePlay, FaApple } from 'react-icons/fa';

const PortalCliente: React.FC = () => {
  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%2C%20preciso%20de%20ajuda%20com%20o%20portal%20do%20cliente";

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="pt-44 pb-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Portal do <span className="text-[var(--color-brand)]">Cliente</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Acesse todas as funcionalidades e serviços da ForteGPS em um só lugar. 
              Gerencie seu rastreamento, visualize relatórios e muito mais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                A PROTEÇÃO DO SEU VEÍCULO A UM TOQUE DE DISTÂNCIA
              </h2>
              
              <p className="text-lg text-[var(--color-text-muted)]">
                Com o aplicativo da ForteGPS você tem diversas funcionalidades à sua disposição, como:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-text-muted)]">Rastreamento em tempo real</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-text-muted)]">Alertas de velocidade</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-text-muted)]">Histórico de percurso de 60 dias</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-text-muted)]">Alerta de ignição ligada/desligada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-text-muted)]">Bloqueio/desbloqueio</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  E você também pode contar com:
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--color-text-muted)]">Alarmes de abertura de porta</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--color-text-muted)]">Definir cerca de proteção</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--color-text-muted)]">Delimitar velocidade e acompanhar seu veículo, de sua família ou frota</p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-muted)]">
                Para ter acesso a essas e mais funções, fale com um de nossos consultores e conheça nossos planos.
              </p>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[var(--color-brand)] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)]/90 transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>FALAR COM UM CONSULTOR</span>
              </motion.a>
            </motion.div>

            {/* iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* iPhone Frame */}
                <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-[var(--color-brand)] text-white px-4 py-2 text-center text-sm font-semibold">
                      FORTE GPS
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 space-y-4">
                      {/* Logo */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--color-brand)] mb-2">FORTE GPS</div>
                        <div className="text-xs text-gray-500">SEGUE A DICA #VAIDEFORTEGPS</div>
                      </div>

                      {/* Vehicle Icons */}
                      <div className="flex justify-center space-x-8">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-4 bg-gray-400 rounded"></div>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-8 bg-gray-400 rounded"></div>
                        </div>
                      </div>

                      {/* Central Info */}
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500 mb-1">Central 24h:</div>
                        <div className="text-xs font-semibold text-gray-700">0800 606 8153</div>
                        <div className="text-xs font-semibold text-gray-700">3484 6006</div>
                        <div className="text-xs text-gray-500 mt-1">fortegps.com.br</div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-2">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-[var(--color-brand)] rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-4">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full ${
                        dot === 1 ? 'bg-[var(--color-brand)]' : 'bg-gray-500'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-section)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Nossa <span className="text-[var(--color-brand)]">Localização</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Encontre-nos facilmente em Fortaleza e região metropolitana
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-8 flex items-center justify-center min-h-[400px] border border-[var(--color-border)] shadow-sm"
            >
              <div className="text-center">
                <MapPin size={48} className="text-[var(--color-brand)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">Mapa Interativo</h3>
                <p className="text-[var(--color-text-muted)]">
                  Aqui será integrado um mapa interativo mostrando nossas localizações
                </p>
              </div>
            </motion.div>

            {/* Addresses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--color-brand)] mb-4">SEDE</h3>
                <p className="text-[var(--color-text-muted)]">
                  R. A - N° 981, Lot Parque Montenegro 1<br />
                  Bairro Parque Dois Irmãos<br />
                  Fortaleza - CE
                </p>
              </div>

              <div className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--color-brand)] mb-4">FILIAL</h3>
                <p className="text-[var(--color-text-muted)]">
                  Av. Gurgel do Amaral, N° 1037<br />
                  Bairro Messejana<br />
                  Fortaleza - CE
                </p>
              </div>

              <div className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--color-brand)] mb-4">Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">0800 606 8153</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">(85) 3484 6006</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">contato@fortegps.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">Seg-Sex: 8h às 18h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              <span className="text-[var(--color-brand)]">Segunda Via</span> do Boleto
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Emita sua segunda via do boleto de forma rápida e segura
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-8 text-center border border-[var(--color-border)] shadow-sm">
              <FileText size={48} className="text-[var(--color-brand)] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                Emitir 2ª Via de Boleto
              </h3>
              <p className="text-[var(--color-text-muted)] mb-6">
                Digite seu CPF ou CNPJ para gerar a segunda via do seu boleto
              </p>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Digite seu CPF ou CNPJ"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-opacity-20 transition-colors"
                />
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[var(--color-brand)] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)]/90 transition-colors"
                >
                  Gerar Segunda Via
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-section)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Formas de <span className="text-[var(--color-brand)]">Pagamento</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Aceitamos diversas formas de pagamento para sua comodidade
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: CreditCard, title: 'Cartões de Crédito', description: 'Visa, Mastercard, Elo' },
              { icon: FileText, title: 'À Vista', description: 'Pagamento único' },
              { icon: FileText, title: 'Boleto', description: 'Bancário tradicional' },
              { icon: Smartphone, title: 'PIX', description: 'Pagamento instantâneo' }
            ].map((payment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-6 text-center border border-[var(--color-border)] hover:border-[var(--color-brand)]/30 hover:shadow-card transition-all duration-300 shadow-sm"
              >
                <payment.icon size={32} className="text-[var(--color-brand)] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {payment.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {payment.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Baixe Nosso <span className="text-[var(--color-brand)]">App</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Tenha acesso a todas as funcionalidades do rastreamento na palma da sua mão
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-[var(--color-bg-card)] text-[var(--color-text)] px-6 py-3 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-soft)] transition-colors border border-[var(--color-border)] shadow-sm hover:shadow-card"
            >
              <FaGooglePlay size={24} />
              <div className="text-left">
                <div className="text-xs text-[var(--color-text-muted)]">Disponível no</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-[var(--color-bg-card)] text-[var(--color-text)] px-6 py-3 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-soft)] transition-colors border border-[var(--color-border)] shadow-sm hover:shadow-card"
            >
              <FaApple size={24} />
              <div className="text-left">
                <div className="text-xs text-[var(--color-text-muted)]">Disponível na</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-[var(--color-brand)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-brand)]/90 transition-colors z-50"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default PortalCliente;
