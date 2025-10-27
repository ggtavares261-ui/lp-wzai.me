
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold text-[#059669]">404</h1>
        <h2 className="text-3xl font-semibold">Página não encontrada</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white rounded-lg font-semibold hover:bg-[#047857] transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
