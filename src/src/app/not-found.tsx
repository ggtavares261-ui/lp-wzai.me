
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300">
          Página não encontrada
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="pt-4">
          <a href="/">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Voltar para a página inicial
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
