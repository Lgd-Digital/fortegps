import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/30 transition-all duration-300 shadow-sm"
    >
      <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-[var(--color-brand)]" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;