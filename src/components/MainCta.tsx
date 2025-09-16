import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MainCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center"
    >
      <div className="bg-[var(--color-bg-card)] p-8 md:p-12 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-2xl max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
          Não entre para a estatística
        </h3>
        <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
          Você sabia que no Estado do Ceará, 28 ou mais veículos são roubados ou furtados por dia?
          Não perca tempo!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <motion.a
            href="/contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-brand)] text-white px-8 py-4 rounded-[var(--radius-button)] font-semibold text-lg hover:bg-[var(--color-brand)]/90 transition-colors shadow-lg"
          >
            <span>Falar com Consultor</span>
            <FaWhatsapp size={20} />
          </motion.a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center space-x-2">
            <CheckCircle size={16} className="text-[var(--color-brand)]" />
            <span>Instalação imediata</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={16} className="text-[var(--color-brand)]" />
            <span>Suporte humanizado 24h</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={16} className="text-[var(--color-brand)]" />
            <span>Equipe de busca</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}