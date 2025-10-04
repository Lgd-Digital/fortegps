import React from 'react';

const MapComponent: React.FC = () => {
  const address = "Rua José Hipólito, 550, Sala 40 - CEP: 60871170 - Messejana - Fortaleza/CE";
  const encodedAddress = encodeURIComponent(address);
  
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="w-full">
      <div className="bg-[var(--color-bg-card)] p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-sm">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Nossa Localização
          </h3>
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
      </div>
    </div>
  );
};

export default MapComponent;