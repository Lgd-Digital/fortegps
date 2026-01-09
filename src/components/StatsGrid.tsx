import React from 'react';
import { motion } from 'framer-motion';

export interface StatItem {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
  animationDelay?: number;
  isHero?: boolean;
}

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats, 
  className = '', 
  animationDelay = 0.5,
  isHero = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: animationDelay }}
      className={`text-center ${isHero ? 'container' : ''} ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-[var(--color-text-muted)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsGrid;

