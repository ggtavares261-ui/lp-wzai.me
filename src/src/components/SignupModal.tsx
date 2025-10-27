
'use client';

import { useEffect, useState } from 'react';

const GREEN = '#059669';
const WEBHOOK_URL = 'https://webhook.lernow.com/webhook/cb4882d9-cf27-4a92-a5d3-ae90f06d0a35';

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [specialty, setSpecialty] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    specialty_other: '',
  });

  useEffect(() => {
    function openModal(e: Event) {
      const trigger = (e.target as HTMLElement).closest('[data-open-signup-modal]');
      if (!trigger) return;
      
      e.preventDefault();
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      
      const currentScrollY = window.scrollY;
      
      setTimeout(() => {
        window.scrollTo({ top: currentScrollY, left: 0, behavior: 'instant' });
        const firstInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        firstInput?.focus({ preventScroll: true });
      }, 50);
    }

    function closeModal() {
      setIsOpen(false);
      document.body.style.overflow = '';
    }

    document.addEventListener('click', openModal);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeModal();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', openModal);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'specialty') {
      setSpecialty(value);
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const currentScrollY = window.scrollY;
    setTimeout(() => {
      window.scrollTo({ top: currentScrollY, left: 0, behavior: 'instant' });
    }, 0);
  };

  const sendToWebhook = async (payload: any, retryCount = 0): Promise<boolean> => {
    const maxRetries = 3;
    
    console.log(`[SignupModal] Tentativa ${retryCount + 1}/${maxRetries} - Enviando para webhook:`, payload);
    console.log(`[SignupModal] URL do webhook: ${WEBHOOK_URL}`);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[SignupModal] Status da resposta: ${response.status}`);
      console.log(`[SignupModal] Headers da resposta:`, Object.fromEntries(response.headers.entries()));

      if (response.ok || response.status === 0) {
        console.log('✅ [SignupModal] Dados enviados com sucesso para o webhook!');
        return true;
      }

      const responseText = await response.text();
      console.warn(`[SignupModal] Resposta do webhook (${response.status}):`, responseText);

      if (retryCount < maxRetries - 1) {
        console.log(`[SignupModal] Tentando novamente em 1 segundo...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sendToWebhook(payload, retryCount + 1);
      }

      return false;
    } catch (error) {
      console.error(`[SignupModal] Erro na tentativa ${retryCount + 1}:`, error);
      
      if (retryCount < maxRetries - 1) {
        console.log(`[SignupModal] Tentando novamente em 1 segundo...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return sendToWebhook(payload, retryCount + 1);
      }
      
      return false;
    }
  };

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    const finalSpecialty = formData.specialty === 'outro' && formData.specialty_other 
      ? formData.specialty_other 
      : formData.specialty || 'Não informado';

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      specialty: finalSpecialty,
      source: 'modal',
      timestamp: new Date().toISOString(),
    };

    console.log('=== [SignupModal] INÍCIO DO ENVIO ===');
    console.log('[SignupModal] Dados do formulário:', payload);

    const webhookSuccess = await sendToWebhook(payload);

    if (webhookSuccess) {
      console.log('✅ [SignupModal] Webhook confirmado! Redirecionando para WhatsApp...');
    } else {
      console.warn('⚠️ [SignupModal] Webhook pode ter falho, mas continuando com redirecionamento...');
    }

    console.log('[SignupModal] Abrindo WhatsApp...');
    window.open('https://w.app/lx4gi2', '_blank');
    console.log('=== [SignupModal] FIM DO PROCESSO ===');

    setIsOpen(false);
    document.body.style.overflow = '';
    setFormData({
      name: '',
      email: '',
      phone: '',
      specialty: '',
      specialty_other: '',
    });
    setSpecialty('');
    setIsSubmitting(false);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div
      id="signup-modal"
      className={`fixed inset-0 z-[9999] ${isOpen ? '' : 'hidden'}`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleCloseClick}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
        className="relative mx-auto my-10 w-[92%] max-w-xl rounded-2xl border border-[#1f2937] bg-gradient-to-br from-[#111827] to-[#0b0f16] p-6 sm:p-8 shadow-2xl"
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={handleCloseClick}
          className="absolute right-4 top-4 text-white/70 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <h2 id="signup-title" className="text-lg font-semibold mb-4 text-white">
          Cadastro
        </h2>

        <form id="signup-modal-form" className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nome completo *
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Seu nome"
              className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
              style={{ outlineColor: GREEN, boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="seu@email.com"
              className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
              style={{ outlineColor: GREEN }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              WhatsApp *
            </label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="(11) 99999-9999"
              className="w-full rounded-md bg-[#1f2937] border border-[#374151] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2"
              style={{ outlineColor: GREEN }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Especialidade jurídica
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
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

          {specialty === 'outro' && (
            <div id="specialty-other-wrap">
              <label className="block text-sm font-medium text-white mb-2">
                Qual especialidade?
              </label>
              <input
                name="specialty_other"
                value={formData.specialty_other}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                placeholder="Descreva sua especialidade"
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="translate-x-0 transition-transform"
            >
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
        </form>
      </div>
    </div>
  );
}
