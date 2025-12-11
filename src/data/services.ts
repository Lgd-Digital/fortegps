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
    slug: '0800-sinistros',
    title: '0800 Em Casos de Sinistros',
    short: 'Linha gratuita para emergências e situações de risco.',
    bullets: ['Atendimento 24 horas', 'Resposta imediata'],
    icon: 'Phone'
  },
  {
    slug: 'aplicativo',
    title: 'Aplicativo',
    short: 'Controle total do seu veículo na palma da mão.',
    bullets: ['iOS e Android', 'Interface intuitiva'],
    icon: 'Smartphone'
  },
  {
    slug: 'alerta-bateria-violada',
    title: 'Alerta de Bateria Violada',
    short: 'Notificação instantânea em caso de desconexão da bateria.',
    bullets: ['Detecção automática', 'Alerta em tempo real'],
    icon: 'Battery'
  },
  {
    slug: 'alerta-veiculo-ligado',
    title: 'Alerta de Veículo Desligado / Ligado',
    short: 'Monitoramento do status de ignição do veículo.',
    bullets: ['Status em tempo real', 'Histórico completo'],
    icon: 'Power'
  },
  {
    slug: 'equipe-carro-blindado',
    title: 'Equipe com Carro Blindado',
    short: 'Equipe especializada com veículos blindados para recuperação.',
    bullets: ['Máxima segurança', 'Equipe treinada'],
    icon: 'Shield'
  },
  {
    slug: 'estacione-seguro',
    title: 'Estacione Seguro',
    short: 'Sistema de identificação de movimento indevido.',
    bullets: ['Notificação via App', 'Sensores avançados'],
    icon: 'MapPinned'
  },
  {
    slug: 'busca-recuperacao',
    title: 'Busca e Recuperação do Veículo',
    short: 'Localização e recuperação ativa do veículo roubado.',
    bullets: ['Equipe especializada', 'Tecnologia avançada'],
    icon: 'Search'
  },
  {
    slug: 'central-24x7',
    title: 'Central 24x7',
    short: 'Monitoramento contínuo com central de operações.',
    bullets: ['Operação 24 horas', 'Suporte especializado'],
    icon: 'Clock'
  },
  {
    slug: 'cerca-virtual',
    title: 'Cerca Virtual',
    short: 'Defina perímetros virtuais e receba alertas de entrada/saída.',
    bullets: ['Zonas personalizadas', 'Alertas automáticos'],
    icon: 'MapPin'
  },
  {
    slug: 'bloqueio-desbloqueio',
    title: 'Bloqueio e Desbloqueio Online',
    short: 'Controle remoto de bloqueio via aplicativo ou web.',
    bullets: ['Controle remoto', 'Ação instantânea'],
    icon: 'Unlock'
  },
  {
    slug: 'iscas-carga',
    title: 'Iscas para sua carga',
    short: 'Dispositivos de rastreamento discretos para cargas.',
    bullets: ['Proteção de carga', 'Rastreamento discreto'],
    icon: 'Package'
  },
  {
    slug: 'equipe-drone',
    title: 'Equipe equipada com Drone',
    short: 'Tecnologia de drones para localização aérea.',
    bullets: ['Visão aérea', 'Localização precisa'],
    icon: 'Drone'
  },
  {
    slug: 'gestao-frotas',
    title: 'Gestão de Frotas',
    short: 'Controle completo de múltiplos veículos em uma plataforma.',
    bullets: ['Painel centralizado', 'Relatórios detalhados'],
    icon: 'Truck'
  },
  {
    slug: 'equipamento-anatel',
    title: 'Equipamento homologado pela Anatel',
    short: 'Dispositivos certificados e aprovados pela Anatel.',
    bullets: ['Certificação oficial', 'Qualidade garantida'],
    icon: 'Award'
  },
  {
    slug: 'localizacao-tempo-real',
    title: 'Localização (Monitoramento) em tempo real',
    short: 'Posição exata do veículo atualizada constantemente.',
    bullets: ['Precisão GPS', 'Atualização contínua'],
    icon: 'Navigation'
  },
  {
    slug: 'relatorios-diversos',
    title: 'Relatórios diversos',
    short: 'Relatórios completos de uso, rotas e comportamento.',
    bullets: ['Análises detalhadas', 'Exportação de dados'],
    icon: 'BarChart'
  },
  {
    slug: 'gestao-velocidade',
    title: 'Gestão de Velocidade',
    short: 'Monitoramento e controle de velocidade do veículo.',
    bullets: ['Alertas de velocidade', 'Histórico de infrações'],
    icon: 'Gauge'
  },
  {
    slug: 'antena-marshall',
    title: 'Equipe equipada com Antena Marshall',
    short: 'Tecnologia especializada para localização em áreas complexas.',
    bullets: ['Localização avançada', 'Cobertura ampliada'],
    icon: 'Radio'
  },
  {
    slug: 'personalizacao-rastreio',
    title: 'Personalização de Rastreio',
    short: 'Personalização de rastreio para atender às necessidades específicas de cada cliente.',
    bullets: ['Personalização de rastreio', 'Atendimento personalizado'],
    icon: 'Settings'
  }
];