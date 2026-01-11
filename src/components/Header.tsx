import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ShieldAlert, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Portal do Cliente', path: '/portal-cliente' },
    { label: 'Contatos', path: '/contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const whatsappUrl = "https://wa.me/558594038884";

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-brand)] text-white text-sm">
        <div className="container">
          <div className="flex items-center justify-between py-2">
            <div className="hover:text-[var(--color-text-beige)] cursor-pointer text-xs md:text-sm items-center space-x-6">
              <Link to="/portal-cliente" className="text-white hover:text-[var(--color-text-beige)] transition-colors">Portal do Cliente</Link>
            </div>
             <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm">
               <a href="tel:08005812716" className="hover:text-[var(--color-text-beige)] cursor-pointer transition-colors">
                 0800 581 2716
               </a>
               <span className="hidden md:inline text-white">|</span>
               <a href="tel:85934846006" className="hover:text-[var(--color-text-beige)] cursor-pointer transition-colors">
                 (85) 3222-1684
               </a>
             </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-8 md:top-9 left-0 right-0 z-50 bg-[var(--color-bg-soft)] backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="container">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="ForteGPS" className="w-auto h-12 md:h-16" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-[var(--color-brand)] ${isActive(item.path)
                        ? 'text-[var(--color-brand)]'
                        : 'text-[var(--color-text-header)]'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

                {/* CTA Button */}
               <div className="hidden md:flex items-center space-x-4">
                 <button
                   onClick={toggleTheme}
                   className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors rounded-[var(--radius-button)]"
                   aria-label="Toggle theme"
                 >
                   {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                 </button>
                  <a
                    href="https://www17.itrack.com.br/cfortegps/controlemonitoramento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border-2 border-[var(--color-brand)] text-[var(--color-brand)] px-4 py-2 rounded-[var(--radius-button)] font-medium hover:bg-[var(--color-brand)] hover:text-white transition-all duration-300"
                  >
                    <MapPin size={20} />
                    <span>Rastreie seu veículo</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[var(--color-brand)] text-white px-4 py-2 rounded-[var(--radius-button)] font-medium hover:scale-105 hover:bg-[var(--color-brand)] transition-colors shadow-md"
                  >
                    <ShieldAlert size={20} />
                    <span>Central de Monitoramento</span>
                  </a>
                </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]"
              >
                <nav className="container py-4 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm font-medium py-2 transition-colors hover:text-[var(--color-brand)] ${isActive(item.path)
                          ? 'text-[var(--color-brand)]'
                          : 'text-[var(--color-text-muted)]'
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                                     <div className="flex flex-col space-y-3 mt-4">
                     <button
                       onClick={() => {
                         toggleTheme();
                         setIsMenuOpen(false);
                       }}
                       className="flex items-center justify-center space-x-2 border border-[var(--color-border)] text-[var(--color-text-muted)] px-4 py-3 rounded-[var(--radius-button)] font-medium w-full hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors"
                     >
                       {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                       <span>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
                     </button>
                     <a
                       href={whatsappUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       onClick={() => setIsMenuOpen(false)}
                       className="flex items-center space-x-2 bg-[var(--color-brand)] text-white px-4 py-3 rounded-[var(--radius-button)] font-medium w-full justify-center"
                     >
                       <FaWhatsapp size={16} />
                        <span>Falar no WhatsApp</span>
                      </a>
                      <a
                        href="https://www17.itrack.com.br/cfortegps/controlemonitoramento"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center space-x-2 border-2 border-[var(--color-brand)] text-[var(--color-brand)] px-4 py-3 rounded-[var(--radius-button)] font-medium w-full"
                      >
                        <MapPin size={16} />
                        <span>Rastreie seu veículo</span>
                      </a>
                    </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
    </>
  );
};

export default Header;