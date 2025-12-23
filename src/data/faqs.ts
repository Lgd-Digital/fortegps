export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Como funciona o rastreamento ForteGPS?",
    answer:
      "Instalamos um equipamento discreto em seu veículo que se comunica via satélite e rede celular, enviando a localização em tempo real para nossos servidores. Você acompanha tudo pelo aplicativo ou site."
  },
  {
    question: "Quanto tempo demora nossa instalação?",
    answer:
      "A instalação é rápida, levando em média de 30 a 60 minutos, dependendo do modelo do veículo. O agendamento é feito conforme sua disponibilidade."
  },
  {
    question: "O rastreador funciona em qualquer lugar do Brasil?",
    answer:
      "Sim, nosso sistema funciona em todo o território nacional, desde que haja cobertura de rede celular ou satélite. Utilizamos as principais operadoras para garantir a melhor conexão possível."
  },
  {
    question: "Posso bloquear meu veículo remotamente?",
    answer:
      "Sim, é possível imobilizar o veículo remotamente através do aplicativo em situações de risco, roubo ou como forma de prevenção. A ação é instantânea e fica registrada no sistema."
  },
  {
    question: "O serviço é indicado para empresas e frotas?",
    answer:
      "Sim. O rastreamento veicular é ideal para empresas e frotas, permitindo monitoramento em tempo real, mais segurança, redução de custos operacionais e maior controle e produtividade dos motoristas, tudo por meio de plataforma online ou aplicativo."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte 24 horas por dia através de WhatsApp, chat online e telefone. Nossa equipe de monitoramento é especializada e preparada para atender com agilidade e eficiência em qualquer situação."
  }
];
