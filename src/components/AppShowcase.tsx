import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const appImages = [
  '/app/tela-login.jpg',
  '/app/tela-principal.jpg',
  '/app/tela-navbar.jpg',
  '/app/tela-detalhes-veiculo.jpg'
];

const whatsappUrl = "https://api.whatsapp.com/send/?phone=558532221684&text=Ol%C3%A1%2C+quero+saber+mais+sobre+rastreamento+de+ve%C3%ADculos&type=phone_number&app_absent=0";

export const AppMockup: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % appImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const borderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-800';
    const bgColor = theme === 'light' ? 'bg-gray-200' : 'bg-black';

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
        >
            <div className="relative">
                {/* iPhone Frame */}
                <div className={`w-64 h-[500px] ${bgColor} rounded-[2.5rem] p-2 shadow-2xl border-4 ${borderColor} transition-colors duration-300`}>
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                        <AnimatePresence mode="wait">
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
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === currentImageIndex ? 'bg-[var(--color-brand)]' : 'bg-gray-500'
                            }`}
                            style={{ backgroundColor: index === currentImageIndex ? 'var(--color-brand)' : '#6b7280' }}
                        ></div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const AppShowcase: React.FC = () => {
    return (
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
                            {[
                                'Rastreamento em tempo real',
                                'Alertas de velocidade',
                                'Histórico de percurso',
                                'Alerta de ignição ligada/desligada',
                                'Bloqueio/desbloqueio'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-[var(--color-text-muted)]">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[var(--color-text)]">
                                E você também pode contar com:
                            </h3>

                            <div className="space-y-3">
                                {[
                                    'Identificador de motorista',
                                    'Cerca Virtual',
                                    'Relatórios diversos',
                                    'Delimitar velocidade e acompanhar seu veículo, de sua família ou frota'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[var(--color-brand)] rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-[var(--color-text-muted)]">{item}</p>
                                    </div>
                                ))}
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

                    <AppMockup />
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
