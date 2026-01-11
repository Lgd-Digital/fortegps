import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Info, AlertTriangle, Scale } from 'lucide-react';

const TermosUso: React.FC = () => {
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
            <Scale size={32} className="text-[var(--color-brand)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Termos de <span className="text-[var(--color-brand)]">Uso</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Leia atentamente as condições de uso dos nossos serviços e plataforma.
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
              <Info size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">1. Aceitação dos Termos</h2>
            </div>
            <p>
              Ao utilizar a plataforma, o aplicativo ou os serviços da ForteGPS, você concorda integralmente com estes Termos de Uso. 
              Estes termos regem o relacionamento entre a ForteGPS e seus usuários, estabelecendo direitos e obrigações para ambas as partes.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">2. Descrição dos Serviços</h2>
            </div>
            <p className="mb-4">
              A ForteGPS fornece serviços de rastreamento e monitoramento veicular através de hardware instalado no veículo e software acessível via web e aplicativo móvel, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Localização em tempo real do veículo.</li>
              <li>Bloqueio e desbloqueio remoto (dependente da compatibilidade do veículo).</li>
              <li>Histórico de rotas e alertas de ignição, velocidade e cercas virtuais.</li>
              <li>Suporte e atendimento 24 horas para casos de sinistro.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">3. Responsabilidades do Usuário</h2>
            </div>
            <p className="mb-4">O usuário obriga-se a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações cadastrais verídicas e atualizadas.</li>
              <li>Garantir a confidencialidade de sua senha de acesso ao aplicativo.</li>
              <li>Comunicar imediatamente à ForteGPS em caso de perda, roubo ou mau funcionamento do equipamento de rastreamento.</li>
              <li>Utilizar o sistema apenas para fins lícitos e autorizados.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-[var(--color-brand)]" />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">4. Limitações e Isenções</h2>
            </div>
            <p className="mb-4">
              A ForteGPS não se responsabiliza por falhas decorrentes de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interrupção do sinal de GPS ou GPRS causada por fatores atmosféricos ou áreas de "sombra".</li>
              <li>Ações de terceiros que danifiquem o equipamento ou utilizem jammer (bloqueador de sinal).</li>
              <li>Manuseio inadequado ou instalação por profissionais não autorizados pela ForteGPS.</li>
              <li>Impossibilidade de recuperação do veículo em situações de força maior.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponível no site e aplicativo, incluindo textos, gráficos, logotipos e software, é de propriedade exclusiva da ForteGPS ou de seus licenciadores, sendo protegido pelas leis de propriedade intelectual.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">6. Alterações nos Termos</h2>
            <p>
              A ForteGPS reserva-se o direito de alterar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas aos usuários através da plataforma ou e-mail. O uso continuado dos serviços após a alteração implica aceitação dos novos termos.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-card)] p-8 rounded-2xl border border-[var(--color-border)]/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">7. Foro</h2>
            <p>
              Fica eleito o foro da comarca de Fortaleza/CE para dirimir quaisquer controvérsias oriundas destes termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
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

export default TermosUso;
