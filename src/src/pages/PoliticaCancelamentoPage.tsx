
import { useEffect } from 'react';

export default function PoliticaCancelamentoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#059669]">Política de Cancelamento e Reembolso</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300">
            Esta política descreve os termos de cancelamento e reembolso de nossos serviços.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">1. Cancelamento</h2>
          <p className="text-gray-300">
            Você pode cancelar sua assinatura a qualquer momento através do painel de controle.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">2. Reembolso</h2>
          <p className="text-gray-300">
            Reembolsos são processados de acordo com nossa política de garantia.
          </p>
        </div>
      </div>
    </div>
  );
}
