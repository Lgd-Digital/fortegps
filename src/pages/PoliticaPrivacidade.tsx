import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand)]/10 rounded-2xl mb-6">
            <Shield size={32} className="text-[var(--color-brand)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Política de <span className="text-[var(--color-brand)]">Privacidade</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Sua privacidade e a segurança dos seus dados são nossa prioridade máxima.
            Saiba como protegemos suas informações.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-[var(--color-text-muted)] leading-relaxed">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">1. Coleta de Informações</h2>
            </div>
            <p className="mb-4">
              A ForteGPS coleta informações essenciais para a prestação dos serviços de rastreamento e monitoramento veicular, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados cadastrais (nome, CPF/CNPJ, endereço, e-mail e telefone).</li>
              <li>Dados do veículo (placa, modelo, cor, chassi).</li>
              <li>Dados de geolocalização em tempo real para fins de rastreamento e segurança.</li>
              <li>Histórico de posições, velocidades e eventos do veículo.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">2. Uso dos Dados</h2>
            </div>
            <p className="mb-4">As informações coletadas são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prestação dos serviços de rastreamento e bloqueio remoto.</li>
              <li>Envio de alertas e notificações configuradas pelo usuário.</li>
              <li>Suporte técnico e atendimento ao cliente.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
              <li>Melhoria contínua de nossa plataforma e serviços.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">3. Segurança dos Dados</h2>
            </div>
            <p>
              Empregamos tecnologias de ponta para proteger seus dados contra acessos não autorizados, 
              perda ou destruição. Utilizamos criptografia em trânsito e em repouso, além de servidores 
              de alta segurança com redundância de dados.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">4. Seus Direitos</h2>
            </div>
            <p className="mb-4">De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais a qualquer momento.</li>
              <li>Corrigir dados incompletos ou inexatos.</li>
              <li>Solicitar a exclusão de seus dados (observadas as obrigações legais de retenção).</li>
              <li>Revogar o consentimento para o processamento de dados.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">5. Contato</h2>
            <p>
              Para dúvidas relacionadas à sua privacidade ou para exercer seus direitos, entre em contato 
              conosco através do e-mail: <strong className="text-[var(--color-brand)]">atendimento@fortegps.com.br</strong> 
              ou pelo telefone <strong className="text-[var(--color-brand)]">(85) 3222-1684</strong>.
            </p>
          </motion.section>

          <div className="text-center pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm">Última atualização: 11 de Janeiro de 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
