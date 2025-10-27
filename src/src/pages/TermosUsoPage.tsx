
import { useEffect } from 'react';

export default function TermosUsoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#059669]">Termos de Uso</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300">
            Ao acessar e usar nossos serviços, você concorda com estes Termos de Uso.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">1. Aceitação dos Termos</h2>
          <p className="text-gray-300">
            Ao usar nosso serviço, você aceita estar vinculado a estes termos.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">2. Uso do Serviço</h2>
          <p className="text-gray-300">
            Você concorda em usar o serviço apenas para fins legais e autorizados.
          </p>
        </div>
      </div>
    </div>
  );
}
