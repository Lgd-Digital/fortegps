import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  BellRing, 
  MapPin, 
  Route, 
  Car, 
  Smartphone, 
  Headphones, 
  Wrench,
  Star,
  Phone,
  Battery,
  Power,
  Lock,
  Search,
  Clock,
  Unlock,
  Package,
  Plane,
  Truck,
  Award,
  Navigation,
  BarChart,
  Gauge,
  Radio,
  Settings
} from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Icon mapping using imported icons
  const iconMap: Record<string, React.ComponentType<any>> = {
    Shield,
    BellRing,
    MapPin,
    Route,
    Car,
    Smartphone,
    Headphones,
    Wrench,
    Phone,
    Battery,
    Power,
    Lock,
    Search,
    Clock,
    Unlock,
    Package,
    Plane,
    Truck,
    Award,
    Navigation,
    BarChart,
    Gauge,
    Radio,
    Settings,
  };

  const IconComponent = iconMap[service.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/30 transition-all duration-300 group shadow-sm"
    >
      <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-brand)]/20 transition-colors">
        <IconComponent size={24} className="text-[var(--color-brand)]" />
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">
          {service.title}
        </h3>
        {service.price && (
          <span className="text-xs text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-1 rounded">
            {service.price}
          </span>
        )}
      </div>
      
      <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
        {service.short}
      </p>

      <ul className="space-y-2 mb-6">
        {service.bullets.map((bullet, bulletIndex) => (
          <li key={bulletIndex} className="flex items-center text-sm text-[var(--color-text-muted)]">
            <div className="w-1.5 h-1.5 bg-[var(--color-brand)] rounded-full mr-2 flex-shrink-0"></div>
            {bullet}
          </li>
        ))}
      </ul>

    </motion.div>
  );
};

export default ServiceCard;