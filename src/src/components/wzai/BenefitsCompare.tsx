
'use client';

export default function BenefitsCompare() {
  return (
    <div className="w-full bg-[#0A0A0A] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Veja o impacto real da automação no seu escritório.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <h3 className="col-title" style={{color: 'rgba(239,68,68,0.85)'}}>Fluxo atual do escritório</h3>

            <div className="relative group rounded-xl border p-5 backdrop-blur-[2px] transition-[transform,box-shadow] duration-300 will-change-transform"
                 style={{borderColor: 'rgba(239,68,68,0.38)', backgroundColor: 'rgba(239,68,68,0.05)', boxShadow: 'inset 0 -2px 0 0 rgba(239,68,68,0.35)'}}>
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   style={{backgroundColor: 'rgba(239,68,68,0.08)'}}></div>
              <div className="pointer-events-none absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   style={{borderColor: 'rgba(239,68,68,0.55)'}}></div>
              <div className="absolute inset-0 rounded-xl -z-10 group-hover:scale-[1.008] transition-transform duration-200"></div>

              <ul className="space-y-3 text-[#F5F5F5] relative">
                <li className="leading-relaxed">Responde manualmente o WhatsApp em horários soltos.</li>
                <li className="leading-relaxed">Perde tempo filtrando curiosos ou casos sem aderência.</li>
                <li className="leading-relaxed">Leads esfriam no meio do dia por falta de resposta.</li>
                <li className="leading-relaxed">Perguntas repetidas drenam horas do time.</li>
                <li className="leading-relaxed">Cada pessoa responde de um jeito, sem padrão.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="col-title" style={{color: 'rgba(5,150,105,0.85)'}}>Com a WZAI no escritório</h3>

            <div className="relative group rounded-xl border p-5 backdrop-blur-[2px] transition-[transform,box-shadow] duration-300 will-change-transform"
                 style={{borderColor: 'rgba(5,150,105,0.38)', backgroundColor: 'rgba(5,150,105,0.05)', boxShadow: 'inset 0 -2px 0 0 rgba(5,150,105,0.35)'}}>
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   style={{backgroundColor: 'rgba(5,150,105,0.08)'}}></div>
              <div className="pointer-events-none absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                   style={{borderColor: 'rgba(5,150,105,0.55)'}}></div>
              <div className="absolute inset-0 rounded-xl -z-10 group-hover:scale-[1.008] transition-transform duration-200"></div>

              <ul className="space-y-3 text-[#F5F5F5] relative">
                <li className="leading-relaxed">Atendimento inicial automatizado, 24h.</li>
                <li className="leading-relaxed">Chegam apenas contatos triados, com intenção jurídica.</li>
                <li className="leading-relaxed">Fluxo contínuo até o agendamento confirmado.</li>
                <li className="leading-relaxed">Respostas padronizadas para dúvidas recorrentes.</li>
                <li className="leading-relaxed">Comunicação uniforme com padrão do escritório.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
