export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Como funciona o rastreamento GPS?",
    answer: "Instalamos um equipamento discreto em seu veículo que se comunica via rede celular, enviando a localização em tempo real para nossos servidores. Você acompanha tudo pelo app ou site."
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer: "A instalação é rápida, levando em média 30 a 60 minutos, dependendo do modelo do veículo. Agendamos conforme sua disponibilidade."
  },
  {
    question: "O rastreador funciona em qualquer lugar do Brasil?",
    answer: "Sim, nosso sistema funciona em todo território nacional onde há cobertura de rede celular. Utilizamos as principais operadoras para garantir conexão."
  },
  {
    question: "Posso bloquear o veículo remotamente?",
    answer: "Sim, você pode imobilizar o veículo através do app em situações de risco ou roubo. A função é instantânea e registrada no sistema."
  },
  {
    question: "Existe taxa de instalação?",
    answer: "Não cobramos taxa de instalação. O serviço está incluído no primeiro mês de contratação."
  },
  {
    question: "Como é o suporte técnico?",
    answer: "Oferecemos suporte 24 horas por dia através de WhatsApp, chat online e telefone. Nossa equipe é especializada em rastreamento veicular."
  }
];