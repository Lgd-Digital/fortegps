import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%2C%20quero%20saber%20mais%20sobre%20rastreamento";

  return (
    <footer className="bg-[var(--color-bg-soft)] border-t border-[var(--color-brand)]">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="ForteGPS" className="w-auto h-32" />
            </Link>
            <p className="text-[var(--color-text-beige)] text-sm leading-relaxed">
              Tecnologia em rastreamento veicular com atendimento humanizado e suporte 24 horas.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-brand mb-4">Navegação</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Home
              </Link>
              <Link to="/sobre" className="block text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Sobre
              </Link>
              <Link to="/servicos" className="block text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Serviços
              </Link>
              <Link to="/contato" className="block text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-brand mb-4">Serviços</h4>
            <div className="space-y-2">
              <p className="text-sm text-[var(--color-text-beige)]">Rastreamento GPS</p>
              <p className="text-sm text-[var(--color-text-beige)]">Bloqueio Remoto</p>
              <p className="text-sm text-[var(--color-text-beige)]">Monitoramento 24h</p>
              <p className="text-sm text-[var(--color-text-beige)]">Suporte Técnico</p>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-brand mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors"
              >
                <FaWhatsapp size={16} />
                <span>(85) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@fortegps.com.br"
                className="flex items-center space-x-2 text-sm text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors"
              >
                <Mail size={16} />
                <span>contato@fortegps.com.br</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-[var(--color-text-beige)]">
                <Clock size={16} />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-brand)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--color-text-beige)]">
              © 2025 ForteGPS. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-[var(--color-text-beige)] hover:text-[var(--color-brand)] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;