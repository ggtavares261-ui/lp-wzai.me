

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-header">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#059669] text-center scroll-mt-[96px]">
          Política de Privacidade
        </h1>
        <p className="text-white/60 mb-12 text-center">Última atualização: 21/10/2025</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">1. Controlador e Escopo</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                <strong>Controlador:</strong> Giovanni Guagnoni Tavares (MEI), CNPJ 59.720.786/0001-64, 
                endereço Rua Julieta Macedo Pereira, 238 - Ribeirânia, Ribeirão Preto/SP, 14096-420; 
                doravante denominado "Wzai", responsável pelo site wzai.me e pelos serviços oferecidos 
                sob a marca Wzai.
              </p>
              <p>
                <strong>Canal do Encarregado (DPO):</strong>{' '}
                <a href="mailto:wzai.me@gmail.com" className="text-[#059669] hover:underline">
                  wzai.me@gmail.com
                </a>
              </p>
              <p>
                Esta política explica como tratamos dados pessoais em wzai.me e na prestação dos 
                serviços de automação/atendimento via WhatsApp.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">2. Dados Coletados</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.1 Fornecidos por você</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Identificação/contato:</strong> nome, e-mail, WhatsApp/telefone, empresa/especialidade.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Faturamento:</strong> CPF/CNPJ, endereço, dados de pagamento (processados por gateways parceiros).
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.2 Coletados automaticamente</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>Logs e telemetria:</strong> IP, data/hora, user-agent, páginas acessadas, 
              cookies/identificadores, eventos de erro/performance.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.3 Operação de atendimento</h3>
            <p className="text-white/80 leading-relaxed">
              Metadados de mensagens do WhatsApp (status, horários, números mascarados). Conteúdos só 
              são analisados/retidos quando necessário para execução do serviço, segurança, auditoria 
              e conforme contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">3. Bases Legais (LGPD)</h2>
            <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
              <li><strong>Execução de contrato</strong> (art. 7º, V) – implantação/uso da plataforma.</li>
              <li><strong>Legítimo interesse</strong> (art. 7º, IX) – melhoria, métricas, prevenção a fraudes/abuso.</li>
              <li><strong>Consentimento</strong> (art. 7º, I) – marketing e cookies não essenciais.</li>
              <li><strong>Obrigação legal</strong> (art. 7º, II) – guarda de registros, fiscais/contábeis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">4. Finalidades</h2>
            <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
              <li>Implantação (metodologia DAI: Desenvolvimento, Adaptação e Ignição), operação, suporte.</li>
              <li>Comunicações transacionais e notificações.</li>
              <li>Cobrança, gestão de assinaturas e prevenção a fraudes.</li>
              <li>Analytics, segurança, auditoria e evolução do produto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">5. Compartilhamento</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                <strong>Operadores/fornecedores:</strong> hospedagem, e-mail, analytics, gateways de 
                pagamento, provedores BSP/WhatsApp Business, ferramentas de automação/integração.
              </p>
              <p>
                <strong>Autoridades:</strong> quando exigido por lei.
              </p>
              <p>
                Todos operam sob contrato com cláusulas de proteção de dados e confidencialidade.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">6. Transferências Internacionais</h2>
            <p className="text-white/80 leading-relaxed">
              Podem ocorrer via infraestrutura de fornecedores. Adotamos salvaguardas contratuais e 
              técnicas (TLS, criptografia em repouso, controle de acesso).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">7. Retenção e Eliminação</h2>
            <ul className="space-y-2 text-white/80 leading-relaxed list-disc list-inside">
              <li><strong>Registros de acesso:</strong> mín. 6 meses (Marco Civil) ou conforme lei/contrato.</li>
              <li><strong>Documentos fiscais:</strong> 5 anos.</li>
              <li>
                <strong>Dados operacionais:</strong> enquanto necessários à prestação do serviço e à 
                defesa de direitos. Após o prazo, anonimizamos ou eliminamos de forma segura.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">8. Direitos dos Titulares</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Acesso, confirmação, correção, anonimização, portabilidade, eliminação, revogação de 
              consentimento e informação sobre compartilhamentos.
            </p>
            <p className="text-white/80 leading-relaxed">
              Solicite em:{' '}
              <a href="mailto:wzai.me@gmail.com" className="text-[#059669] hover:underline">
                wzai.me@gmail.com
              </a>{' '}
              (assunto "Direitos LGPD").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">9. Segurança</h2>
            <p className="text-white/80 leading-relaxed">
              Criptografia em trânsito (TLS), controles de privilégio, logs/auditoria, backups, gestão 
              de incidentes e vulnerabilidades, treinamento de equipe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">10. Marketing</h2>
            <p className="text-white/80 leading-relaxed">
              Enviado apenas mediante consentimento. Descadastre-se a qualquer momento pelos links das 
              mensagens ou solicitando ao DPO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">11. Atualizações</h2>
            <p className="text-white/80 leading-relaxed">
              Publicaremos novas versões nesta página. Mudanças relevantes poderão ser comunicadas por 
              e-mail/avisos no sistema.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#059669] hover:text-[#047857] transition-colors font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
}

