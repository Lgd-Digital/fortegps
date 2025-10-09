import React from 'react';
import { MapPin } from 'lucide-react';

const MapComponent: React.FC = () => {
  const address = "Rua José Hipólito, 550, Sala 41 - CEP: 60871170 - Messejana - Fortaleza/CE";
  const encodedAddress = encodeURIComponent(address);
  
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="w-full">
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
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
      </div>
      <div className="flex items-center justify-center gap-2 mb-4 text-sm text-[var(--color-text-muted)]">
        <MapPin size={16} className="text-[var(--color-brand)]" />
        <span>Rua José Hipólito, 550, Sala 41 - CEP: 60871-170 - Messejana - Fortaleza/CE</span>
      </div>
    </div>
  );
};

export default MapComponent;