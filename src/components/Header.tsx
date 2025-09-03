import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Planos', path: '/planos' },
    { label: 'Contato', path: '/contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%2C%20quero%20saber%20mais%20sobre%20rastreamento%20de%20veículos";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-soft)] backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="ForteGPS" className="w-auto h-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand)] ${
                  isActive(item.path) 
                    ? 'text-[var(--color-brand)]' 
                    : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[var(--color-brand)] text-white px-4 py-2 rounded-[var(--radius-button)] font-medium hover:bg-[var(--color-brand)]/90 transition-colors"
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp</span>
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
                  className={`block text-sm font-medium py-2 transition-colors hover:text-[var(--color-brand)] ${
                    isActive(item.path) 
                      ? 'text-[var(--color-brand)]' 
                      : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 bg-[var(--color-brand)] text-white px-4 py-3 rounded-[var(--radius-button)] font-medium w-full justify-center mt-4"
              >
                <FaWhatsapp size={16} />
                <span>Falar no WhatsApp</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;