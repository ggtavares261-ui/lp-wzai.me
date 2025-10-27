

export default function CancellationRefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-header">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#059669] text-center scroll-mt-[96px]">
          Política de Cancelamento e Reembolso
        </h1>
        <p className="text-white/60 mb-12 text-center">Última atualização: 21/10/2025</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">1. Direito de Arrependimento (Compras Online)</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">1.1. Prazo Legal</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Em conformidade com o Artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/90), 
              o Usuário Pessoa Física tem o direito de desistir do contrato de assinatura no prazo 
              de 7 (sete) dias corridos, a contar da data da contratação ou do primeiro acesso ao Serviço.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">1.2. Notificação</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Para exercer o direito de arrependimento, o Usuário deve notificar o Wzai formalmente 
              por meio do Canal do Encarregado (DPO):{' '}
              <a href="mailto:wzai.me@gmail.com" className="text-[#059669] hover:underline">
                wzai.me@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">1.3. Reembolso Integral</h3>
            <p className="text-white/80 leading-relaxed">
              Se o arrependimento for exercido dentro do prazo de 7 (sete) dias, o Wzai fará a 
              devolução integral e imediata dos valores pagos pela assinatura, monetariamente atualizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">2. Cancelamento de Assinaturas (Após 7 Dias)</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              O cancelamento do Serviço varia conforme o plano de assinatura contratado pelo Usuário 
              (mensal, trimestral, anual, etc.).
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.1. Planos de Duração Mensal (Prazo Indeterminado)</h3>
            <ul className="space-y-3 text-white/80 leading-relaxed mb-6">
              <li>
                <strong>Solicitação:</strong> O Usuário pode solicitar o cancelamento a qualquer momento 
                por meio do painel de controle da plataforma ou via suporte oficial.
              </li>
              <li>
                <strong>Efetividade:</strong> O cancelamento será efetivado ao final do ciclo de 
                faturamento mensal vigente.
              </li>
              <li>
                <strong>Reembolso:</strong> Não haverá reembolso dos valores referentes à mensalidade 
                em curso, uma vez que o Serviço permaneceu disponível e foi usufruído até o final do 
                ciclo contratado. O acesso será mantido até a data final do ciclo pago.
              </li>
              <li>
                <strong>Cobranças Futuras:</strong> Todas as cobranças futuras (renovações) serão 
                imediatamente interrompidas.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.2. Planos com Fidelidade ou Prazo Determinado (Ex: Anual)</h3>
            <ul className="space-y-3 text-white/80 leading-relaxed mb-6">
              <li>
                <strong>Cancelamento sem Custo:</strong> Se o cancelamento for solicitado após o 
                cumprimento integral do prazo de fidelidade contratado, não haverá cobrança de multa.
              </li>
              <li>
                <strong>Cancelamento Antecipado (Multa):</strong> Se o Usuário solicitar o cancelamento 
                antes do término do prazo de fidelidade, o Wzai reserva-se o direito de aplicar uma 
                multa rescisória.
              </li>
              <li>
                <strong>Cálculo da Multa:</strong> A multa será proporcional ao tempo restante do 
                contrato e não será abusiva. Será calculada como [Inserir Porcentagem, Ex: 10% a 20%] 
                do saldo das mensalidades que seriam devidas até o fim do contrato.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">2.3. Cancelamento por Falha do Wzai</h3>
            <p className="text-white/80 leading-relaxed">
              Não haverá aplicação de multa se o cancelamento ocorrer comprovadamente por falha, 
              defeito ou descumprimento substancial do Serviço por parte do Wzai, conforme previsto 
              no Código de Defesa do Consumidor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">3. Reembolso por Falha no Serviço (Indisponibilidade)</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">3.1. Indisponibilidade Prolongada</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Caso o Serviço se torne substancialmente indisponível ou inoperante por um período 
              prolongado e não razoável, por culpa exclusiva do Wzai e fora dos períodos de manutenção 
              programada, o Usuário terá direito a:
            </p>
            <ul className="space-y-3 text-white/80 leading-relaxed list-disc list-inside">
              <li>
                <strong>Reembolso Proporcional:</strong> O Wzai poderá conceder um reembolso proporcional 
                ao período de indisponibilidade, calculado sobre o valor da mensalidade paga.
              </li>
              <li>
                <strong>Crédito:</strong> Alternativamente, o Wzai poderá compensar o Usuário com um 
                crédito equivalente na próxima fatura.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">4. Processamento do Reembolso</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">4.1. Prazo</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              O reembolso de quaisquer valores devidos será processado em até [Inserir Prazo Razoável, 
              Ex: 15 a 30] dias úteis após a aprovação formal do cancelamento ou da solicitação de reembolso.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white/90 scroll-mt-[96px]">4.2. Forma de Devolução</h3>
            <p className="text-white/80 leading-relaxed">
              A devolução será realizada utilizando o mesmo método de pagamento original da compra 
              (cartão de crédito, Pix, boleto, etc.), sempre que tecnicamente possível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white scroll-mt-[96px]">5. Contato</h2>
            <p className="text-white/80 leading-relaxed">
              Quaisquer dúvidas ou solicitações relacionadas a cancelamentos e reembolsos devem ser 
              direcionadas ao Encarregado de Dados (DPO) através do e-mail:{' '}
              <a href="mailto:wzai.me@gmail.com" className="text-[#059669] hover:underline">
                wzai.me@gmail.com
              </a>
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

