
import { useEffect } from 'react';

export default function PoliticaCookiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-[#059669]">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300">
            Esta Política de Cookies explica como usamos cookies e tecnologias similares.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">1. O que são Cookies</h2>
          <p className="text-gray-300">
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8">2. Como Usamos Cookies</h2>
          <p className="text-gray-300">
            Utilizamos cookies para melhorar sua experiência em nosso site.
          </p>
        </div>
      </div>
    </div>
  );
}
