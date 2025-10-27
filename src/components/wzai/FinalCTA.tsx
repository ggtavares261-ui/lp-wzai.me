
'use client';

import React, { useMemo, useState } from 'react';

const GREEN = '#059669';
const WEBHOOK_URL = 'https://webhook.lernow.com/webhook/cb4882d9-cf27-4a92-a5d3-ae90f06d0a35';

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    other: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showOther = useMemo(() => form.specialty === 'outro', [form.specialty]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.currentTarget;
    setForm((f) => ({ ...f, [name]: value }));
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const currentScrollY = window.scrollY;
    setTimeout(() => {
      window.scrollTo({ top: currentScrollY, left: 0, behavior: 'instant' });
    }, 0);
  };

  const sendToWebhook = async (payload: any, retryCount = 0): Promise<boolean> => {
    const maxRetries = 3;
    
    console.log(`[FinalCTA] Tentativa ${retryCount + 1}/${maxRetries} - Enviando para webhook:`, payload);
    console.log(`[FinalCTA] URL do webhook: ${WEBHOOK_URL}`);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[FinalCTA] Status da resposta: ${response.status}`);
      console.log(`[FinalCTA] Headers da resposta:`, Object.fromEntries(response.headers.entries()));

      if (response.ok || response.status === 0) {
        console.log('✅ [FinalCTA] Dados enviados com sucesso para o webhook!');
        return true;
      }

      const responseText = await response.text();
      console.warn(`[FinalCTA] Resposta do webhook (${response.status}):`, responseText);

      if (retryCount < maxRetries - 1) {
        console.log(`[FinalCTA] Tentando novamente em 1 segundo...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sendToWebhook(payload, retryCount + 1);
      }

      return false;
    } catch (error) {
      console.error(`[FinalCTA] Erro na tentativa ${retryCount + 1}:`, error);
      
      if (retryCount < maxRetries - 1) {
        console.log(`[FinalCTA] Tentando novamente em 1 segundo...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sendToWebhook(payload, retryCount + 1);
      }
      
      return false;
    }
  };

  async function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    const finalSpecialty = form.specialty === 'outro' && form.other 
      ? form.other 
      : form.specialty || 'Não informado';

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      specialty: finalSpecialty,
      source: 'footer',
      timestamp: new Date().toISOString(),
    };

    console.log('=== [FinalCTA] INÍCIO DO ENVIO ===');
    console.log('[FinalCTA] Dados do formulário:', payload);

    const webhookSuccess = await sendToWebhook(payload);

    if (webhookSuccess) {
      console.log('✅ [FinalCTA] Webhook confirmado! Redirecionando para WhatsApp...');
    } else {
      console.warn('⚠️ [FinalCTA] Webhook pode ter falho, mas continuando com redirecionamento...');
    }

    console.log('[FinalCTA] Abrindo WhatsApp...');
    window.open('https://w.app/lx4gi2', '_blank');
    console.log('=== [FinalCTA] FIM DO PROCESSO ===');

    setForm({
      name: '',
      email: '',
      phone: '',
      specialty: '',
      other: '',
    });

    setIsSubmitting(false);
  }

  return (
    <section id="contato" className="w-full bg-[#0A0A0A] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5]">
            O único risco é não começar <span style={{ color: GREEN }}>hoje.</span>
          </h2>
          <p className="text-lg text-[#999] mt-3">
            Escolha o plano perfeito para o seu escritório de advocacia.
          </p>
        </div>

        <div className="relative mx-auto w-full md:w-3/5">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[rgba(5,150,105,0.20)] to-transparent blur-2xl -z-10" />

          <form className="relative rounded-2xl border border-[#1f2937] bg-gradient-to-br from-[#111827] to-[#0b0f16] p-6 sm:p-8 shadow-2xl">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Nome completo *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  onFocus={handleInputFocus}
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
                  style={{ outlineColor: GREEN, boxShadow: `0 0 0 0 rgba(0,0,0,0)` }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  onFocus={handleInputFocus}
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
                  style={{ outlineColor: GREEN }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">WhatsApp *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  onFocus={handleInputFocus}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
                  style={{ outlineColor: GREEN }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Especialidade jurídica</label>
                <select
                  name="specialty"
                  value={form.specialty}
                  onChange={onChange}
                  onFocus={handleInputFocus}
                  className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white focus:outline-none"
                  style={{ outlineColor: GREEN }}
                >
                  <option value="">Selecione uma especialidade</option>
                  <option value="trabalhista">Direito Trabalhista</option>
                  <option value="familia">Direito de Família</option>
                  <option value="civil">Direito Civil</option>
                  <option value="criminal">Direito Criminal</option>
                  <option value="empresarial">Direito Empresarial</option>
                  <option value="imobiliario">Direito Imobiliário</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {showOther && (
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Descreva sua especialidade *</label>
                  <input
                    name="other"
                    value={form.other}
                    onChange={onChange}
                    onFocus={handleInputFocus}
                    required
                    placeholder="Ex: Direito Ambiental"
                    className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
                    style={{ outlineColor: GREEN }}
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleButtonClick}
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 font-semibold transition-transform duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: GREEN,
                  color: '#0A0A0A',
                  boxShadow: '0 10px 30px -10px rgba(5,150,105,.45)',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.transform = 'scale(1.01)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {isSubmitting ? 'Enviando...' : 'Conversar com a equipe'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <p className="text-center text-xs text-[#F5F5F5] pt-2">
                Ao se inscrever, você concorda com nossos{" "}
                <a href="/termos-de-uso" className="text-[#60A5FA] hover:text-[#93C5FD]">Termos de Uso</a>{" "}
                e{" "}
                <a href="/politica-de-privacidade" className="text-[#60A5FA] hover:text-[#93C5FD]">Política de Privacidade</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
