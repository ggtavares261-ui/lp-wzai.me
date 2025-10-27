
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const plans = [
  {
    name: 'Agente Conversacional',
    price: 'R$ 297',
    period: '',
    description: '',
    cta: 'Falar com Vendas',
    features: [
      'Respostas automáticas',
      'CRM integrado',
      'Controle total do agente',
      'Suporte personalizado via WhatsApp',
      'Integrações com JusBrasil',
    ],
    highlighted: false,
  },
  {
    name: 'WZAI Bot',
    price: 'R$ 249',
    period: '',
    description: '',
    cta: 'Falar com Vendas',
    features: [
      'Triagens',
      'Respostas rápidas',
      'Suporte prioritário',
      'CRM integrado',
    ],
    highlighted: true,
    badge: 'MAIS POPULAR',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: '',
    cta: 'Falar com Vendas',
    features: [
      'Suporte prioritário',
      'WZAI Bot',
      'Agente conversacional',
      'CRM integrado',
    ],
    highlighted: false,
  },
];

export default function Plans() {
  useEffect(() => {
    const offerEl = document.querySelector(
      'body > main > section:nth-child(5) > div.relative.z-10.container.mx-auto.px-4.sm\\:px-6.lg\\:px-8 #offerCount'
    ) as HTMLElement | null;
    if (!offerEl) return;

    let remaining = (17 * 60 + 16) * 60 + 14;

    const pad = (n: number) => String(n).padStart(2, '0');

    function render(sec: number) {
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;
      if (offerEl) {
        offerEl.textContent = `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
      }
    }

    render(remaining);

    const tmr = setInterval(() => {
      remaining = Math.max(remaining - 1, 0);
      render(remaining);
      if (remaining === 0) clearInterval(tmr);
    }, 1000);

    return () => clearInterval(tmr);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleTrackEvent = (eventName: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
      });
    }
  };

  return (
    <section id="planos" className="relative py-12 sm:py-16 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-6 space-y-4" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5]">
            Planos Simples e Transparentes
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Escolha o plano perfeito para o seu negócio.
          </p>
        </motion.div>

        <motion.div className="mx-auto max-w-2xl mb-10 z-30 relative" variants={itemVariants}>
          <div className="w-full rounded-lg border border-[#333] bg-[#121212] text-white/80 text-sm px-4 py-2 flex items-center justify-center gap-2">
            <span>Oferta especial termina em:</span>
            <span id="offerCount" className="font-semibold text-[#059669]">
              17h 16m 14s
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className="relative rounded-lg transition-colors duration-300 overflow-visible"
              variants={itemVariants}
            >
              {plan.highlighted && (
                <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="px-4 py-1 rounded-full text-sm font-bold shadow"
                    style={{ backgroundColor: '#046C4E', color: '#fff' }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`relative p-8 h-full flex flex-col rounded-lg ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#059669]/12 to-[#1A3A52]/20 border-2 border-[#046C4E]'
                    : 'bg-[#1A1A1A] border border-[#333333]'
                }`}
              >
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      {plan.highlighted ? (
                        <span className="text-[#059669]">
                          {plan.name}
                        </span>
                      ) : (
                        plan.name
                      )}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight">
                        {plan.highlighted ? (
                          <span className="text-[#059669]">
                            {plan.price}
                          </span>
                        ) : (
                          plan.price
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-[#059669] flex-shrink-0 mt-0.5 w-5 h-5">✓</span>
                        <span className="text-sm text-white/90">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://w.app/lx4gi2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleTrackEvent('plan_click')}
                  className="w-full mt-8 py-3 rounded font-semibold flex items-center justify-center gap-2 bg-[#059669] text-white transition-transform transition-shadow duration-200 transform-gpu will-change-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(5,150,105,.35)] active:scale-[0.995] focus:outline-none focus:ring-2 focus:ring-[#059669]/50"
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center text-sm mt-8 text-[#F3A047]"
          style={{ opacity: 1, transform: 'none' }}
          variants={itemVariants}
        >
          ⏱️ Implementações são feitas por ordem de solicitação.
        </motion.div>
      </motion.div>
    </section>
  );
}
