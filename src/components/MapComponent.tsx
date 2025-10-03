import React from 'react';
import { MapPin } from 'lucide-react';

const MapComponent: React.FC = () => {
  const address = "R. José Hipólito, 550 - 40 - Messejana, Fortaleza - CE, 60871-170";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWWgU6xUfJ7jY&q=${encodedAddress}`;
  
  return (
    <div className="w-full">
      <div className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-sm">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe
            src={googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da ForteGPS"
            className="rounded-lg"
          />
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MapPin size={20} className="text-[var(--color-brand)]" />
            <h4 className="font-semibold text-[var(--color-text)]">
              ForteGPS - Sede
            </h4>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            R. José Hipólito, 550 - Sala 40<br />
            Messejana - Fortaleza/CE<br />
            CEP: 60871-170
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-3 text-[var(--color-brand)] hover:text-[var(--color-brand)]/80 transition-colors text-sm font-medium"
          >
            <MapPin size={16} />
            <span>Ver no Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
