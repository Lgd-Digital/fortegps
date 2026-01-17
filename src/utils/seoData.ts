import { services } from '../data/services';
import { faqs } from '../data/faqs';

const baseUrl = 'https://fortegps.com.br';

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ForteGPS',
  description: 'Empresa especializada em rastreamento veicular com tecnologia avançada e suporte 24 horas',
  url: baseUrl,
  logo: `${baseUrl}/logo-total.png`,
  image: `${baseUrl}/logo-total.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-85-9403-8884',
    contactType: 'Customer Service',
    areaServed: 'BR',
    availableLanguage: ['Portuguese', 'pt-BR']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'CE',
    addressLocality: 'Fortaleza'
  },
  sameAs: [
    'https://wa.me/558594038884'
  ]
});

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#organization`,
  name: 'ForteGPS',
  image: `${baseUrl}/logo-total.png`,
  url: baseUrl,
  telephone: '+55-85-9403-8884',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'CE',
    addressLocality: 'Fortaleza'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.71722,
    longitude: -38.5433
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  }
});

export const getServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Rastreamento de Veículos',
  provider: {
    '@type': 'Organization',
    name: 'ForteGPS'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Rastreamento',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.short
      }
    }))
  }
});

export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ForteGPS',
  url: baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/servicos?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
});
