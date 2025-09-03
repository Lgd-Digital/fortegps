export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  icon: string;
  price?: string;
};

export const services: Service[] = [
  {
    slug: 'bloqueio-remoto',
    title: 'Bloqueio Remoto',
    short: 'Imobilize o veículo via app em situações de risco.',
    bullets: ['Ação em segundos', 'Registro de tentativas', 'Suporte 24h'],
    icon: 'Shield',
    price: 'Incluso no plano'
  },
  {
    slug: 'alerta-movimento',
    title: 'Alerta de Movimento',
    short: 'Notificações quando o carro/moto sai do perímetro.',
    bullets: ['Cerca virtual (geofence)', 'Horários personalizados', 'Push + e-mail'],
    icon: 'BellRing'
  },
  {
    slug: 'gps-tempo-real',
    title: 'GPS em Tempo Real',
    short: 'Localização precisa e atualizada do seu veículo.',
    bullets: ['Precisão de até 3 metros', 'Mapa interativo', 'Histórico de 90 dias'],
    icon: 'MapPin'
  },
  {
    slug: 'historico-rotas',
    title: 'Histórico de Rotas',
    short: 'Acompanhe todos os trajetos realizados pelo veículo.',
    bullets: ['Relatórios detalhados', 'Análise de comportamento', 'Export para PDF'],
    icon: 'Route'
  },
  {
    slug: 'multiplos-veiculos',
    title: 'Múltiplos Veículos',
    short: 'Gerencie frotas de qualquer tamanho em uma tela.',
    bullets: ['Painel centralizado', 'Filtros avançados', 'Alertas personalizados'],
    icon: 'Car'
  },
  {
    slug: 'app-mobile',
    title: 'App Mobile',
    short: 'Controle total na palma da sua mão.',
    bullets: ['iOS e Android', 'Notificações push', 'Interface intuitiva'],
    icon: 'Smartphone'
  },
  {
    slug: 'suporte-24h',
    title: 'Suporte 24h',
    short: 'Atendimento especializado quando você precisar.',
    bullets: ['Chat online', 'WhatsApp direto', 'Técnicos qualificados'],
    icon: 'Headphones'
  },
  {
    slug: 'instalacao-gratuita',
    title: 'Instalação Gratuita',
    short: 'Equipamento instalado por técnicos especializados.',
    bullets: ['Agendamento flexível', 'Instalação certificada', 'Teste no local'],
    icon: 'Wrench'
  }
];