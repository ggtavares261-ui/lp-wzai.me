
import { useEffect } from 'react';

export default function PoliticaPrivacidadePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#059669]">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300">
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">1. Coleta de Informações</h2>
          <p className="text-gray-300">
            Coletamos informações que você nos fornece diretamente ao usar nossos serviços.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">2. Uso das Informações</h2>
          <p className="text-gray-300">
            Utilizamos suas informações para fornecer e melhorar nossos serviços.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">3. Proteção de Dados</h2>
          <p className="text-gray-300">
            Implementamos medidas de segurança para proteger suas informações pessoais.
          </p>
        </div>
      </div>
    </div>
  );
}
