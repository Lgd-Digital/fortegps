import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ForteGPS - Rastreamento de Veículos 24h',
  description = 'ForteGPS - Rastreamento de veículos com tecnologia avançada, bloqueio remoto, alertas em tempo real e suporte 24h. Proteção completa para seu carro ou moto em Fortaleza, CE.',
  keywords = 'rastreamento, gps, veículos, bloqueio remoto, monitoramento, fortaleza, ceará, rastreamento veicular, gps veicular, rastreador, segurança veicular',
  image = 'https://fortegps.com.br/logo-total.png',
  url = 'https://fortegps.com.br',
  type = 'website',
  structuredData,
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('ForteGPS') ? title : `${title} | ForteGPS`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `https://fortegps.com.br${image}`;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="ForteGPS" />
      <meta name="geo.region" content="BR-CE" />
      <meta name="geo.placename" content="Fortaleza" />
      <meta name="geo.position" content="-3.71722;-38.5433" />
      <meta name="ICBM" content="-3.71722, -38.5433" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="ForteGPS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
