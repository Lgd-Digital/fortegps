import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, FileText, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaGooglePlay, FaApple } from 'react-icons/fa';
import { FaBarcode } from 'react-icons/fa6';

const appImages = [
  '/app/tela-login.jpg',
  '/app/tela-principal.jpg',
  '/app/tela-navbar.jpg',
  '/app/tela-detalhes-veiculo.jpg'
];

const PortalCliente: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % appImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=558532221684&text=Ol%C3%A1%2C+quero+saber+mais+sobre+rastreamento+de+ve%C3%ADculos&type=phone_number&app_absent=0";

  const address = "Rua José Hipólito, 550, Sala 41 - CEP: 60871170 - Messejana - Fortaleza/CE";
  const encodedAddress = encodeURIComponent(address);

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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
                  <p className="text-[var(--color-text-muted)]">Histórico de percurso</p>
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
                    <p className="text-[var(--color-text-muted)]">Identificador de motorista</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--color-text-muted)]">Cerca Virtual</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[var(--color-text-muted)]">Relatórios diversos</p>
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
                    <AnimatePresence>
                      <motion.img
                        key={currentImageIndex}
                        src={appImages[currentImageIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={`App Interface ${currentImageIndex + 1}`}
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-4">
                  {appImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-[var(--color-brand)]' : 'bg-gray-500'
                        }`}
                      style={{ backgroundColor: index === currentImageIndex ? 'var(--color-brand)' : '#6b7280' }}
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
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da ForteGPS"
                className="rounded-lg"
              />
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
                  Rua José Hipólito, 550, Sala 40 - <br />CEP: 60871170 - Messejana - Fortaleza/CE
                </p>
              </div>

              <div className="bg-[var(--color-bg-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--color-brand)] mb-4">Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">0800 581 2716 (Monitoramento 24H)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">(85) 3222-1684 (Setor Comercial)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">(85) 99835-0842 (Suporte Técnico)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">atendimento@fortegps.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">Central de Monitoramento: 24hrs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-[var(--color-brand)]" />
                    <span className="text-[var(--color-text-muted)]">Outros setores: Seg-Sex 8h às 18h | Sáb 8h à 12hrs</span>
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
              <FaBarcode size={48} className="text-[var(--color-brand)] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                Emitir 2ª Via de Boleto
              </h3>
              <p className="text-[var(--color-text-muted)] mb-6">
                Clique no botão abaixo para acessar o portal do Banco do Brasil e gerar a segunda via do seu boleto
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?_ga=2.59242665.505440602.1598874158-303499835.1598874158&pk_vid=a6aba7f7a0b689061598874140f671d6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[var(--color-brand)] text-white px-6 py-3 rounded-[var(--radius-button)] font-semibold hover:bg-[var(--color-brand)]/90 transition-colors inline-block text-center"
                >
                  Acessar Portal do Banco do Brasil
                </motion.a>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: FileText, title: 'À Vista', description: 'Pagamento único' },
              { icon: FaBarcode, title: 'Boleto', description: 'Bancário tradicional' },
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
              href="https://play.google.com/store/apps/details?id=br.intertrack.itrackapp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-[var(--color-bg-card)] text-[var(--color-text)] px-6 py-3 rounded-[var(--radius-button)] hover:bg-[var(--color-brand)]/90 transition-colors border border-[var(--color-border)] shadow-sm hover:shadow-card"
            >
              <FaGooglePlay size={24} />
              <div className="text-left">
                <div className="text-xs text-[var(--color-text-muted)]">Disponível no</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </motion.a>

            <motion.a
              href="https://apps.apple.com/br/app/itrackapp/id1544143006"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-[var(--color-bg-card)] text-[var(--color-text)] px-6 py-3 rounded-[var(--radius-button)] hover:bg-[var(--color-brand)]/90 transition-colors border border-[var(--color-border)] shadow-sm hover:shadow-card"
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
    </div>
  );
};

export default PortalCliente;
