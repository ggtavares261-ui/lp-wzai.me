
'use client';

export default function FAQ() {
  return (
    <section className="faq-wrapper" style={{ color: '#fff', fontFamily: 'ui-sans-serif,system-ui' }}>
      <style>{`
        .faq-item{background:transparent;border-radius:4px;transition:background .28s ease, box-shadow .28s ease, border-color .28s ease}
        .faq-item summary{list-style:none}
        .faq-item summary::-webkit-details-marker{display:none}
        .faq-item:hover{box-shadow:0 0 0 1px rgba(5,150,105,.18), inset 0 0 18px rgba(5,150,105,.06)}
        .faq-item[open]{
          background:
            linear-gradient(180deg, rgba(5,150,105,.10), rgba(5,150,105,.04) 140px, rgba(5,150,105,0) 100%);
          box-shadow:
            inset 0 0 0 1px rgba(5,150,105,.60),
            inset 0 12px 32px rgba(5,150,105,.22);
        }
        .faq-item[open] summary{background:rgba(5,150,105,.08)}
        .faq-item > div{transition:opacity .22s ease}
        .faq-item[open] > div{opacity:1}
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontWeight: '700', fontSize: '20px', marginBottom: '8px' }}>PERGUNTAS FREQUENTES</h2>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Em quanto tempo a automação começa a funcionar depois da contratação?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            A automação pode entrar em operação assim que o processo DAI for concluído, desde que o escritório envie as informações necessárias e aprove as adaptações de linguagem durante a fase de configuração.<br /><br />
            O tempo médio observado é entre 7 e 14 dias, podendo variar conforme nível de personalização solicitado pelo escritório.
          </div>
        </details>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            A automação responde em nome do meu escritório ou da Wzai?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            As respostas aparecem como enviadas pelo próprio número do escritório, desde que o WhatsApp esteja conectado à conta configurada na implantação. A Wzai apenas opera a automação invisível ao destinatário.<br /><br />
            O cliente final não visualiza nenhuma identidade da Wzai, a não ser que o escritório opte explicitamente por informar isso nas mensagens.
          </div>
        </details>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Como funciona a metodologia DAI na prática?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            A metodologia DAI é aplicada durante a implantação e consiste em três etapas executadas na ordem: Desenvolvimento, Adaptação e Ignição. Na fase de Desenvolvimento a equipe da Wzai cria a infraestrutura técnica inicial; na fase de Adaptação o fluxo é ajustado à realidade do escritório; na fase de Ignição o atendimento automatizado começa a operar com leads reais.
          </div>
        </details>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Wzai respeita normas éticas da OAB?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            Os fluxos da Wzai podem ser configurados para seguir diretrizes éticas, desde que o escritório informe políticas internas e restrições de linguagem no processo de adaptação. Nada é publicado automaticamente sem aprovação.
          </div>
        </details>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Como são tratadas mensagens fora do horário comercial?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            A Wzai pode operar 24h com mensagens automáticas fora do horário, desde que o escritório habilite respostas ativas fora do expediente.
          </div>
        </details>

        <details className="faq-item" style={{ border: '1px solid #059669', marginBottom: '10px', borderRadius: '4px' }}>
          <summary style={{ cursor: 'pointer', padding: '16px 18px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Como funciona a cobrança?
          </summary>
          <div style={{ padding: '16px 18px', fontSize: '14px', lineHeight: '1.55', opacity: '.9', borderTop: '1px solid #059669' }}>
            A cobrança é via assinatura recorrente, desde que o escritório mantenha o meio de pagamento ativo. Planos variam conforme escopo habilitado.<br /><br />
            Se o pagamento falhar ou for cancelado, o acesso e a automação podem ser suspensos.
          </div>
        </details>

      </div>
    </section>
  );
}
