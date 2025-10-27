
'use client';

import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white relative">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* COLUNA 1 — POLÍTICAS */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white/70 mb-4">POLÍTICAS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/politica-de-privacidade" className="text-white/80 hover:text-[#059669] transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/politica-de-cookies" className="text-white/80 hover:text-[#059669] transition-colors">
                Política de Cookies
              </a>
            </li>
            <li>
              <a href="/termos-de-uso" className="text-white/80 hover:text-[#059669] transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="/politica-de-cancelamento-e-reembolso" className="text-white/80 hover:text-[#059669] transition-colors">
                Cancelamento e Reembolso
              </a>
            </li>
          </ul>
        </div>

        {/* COLUNA 2 — CONTATO */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white/70 mb-4">CONTATO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="mailto:contato@wzai.com" 
                className="text-white/80 hover:text-[#059669] transition-colors"
              >
                contato@wzai.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+5516981266180" 
                className="text-white/80 hover:text-[#059669] transition-colors"
              >
                +55 (16) 98126-6180
              </a>
            </li>
            <li>
              <span className="text-white/80 hover:text-[#059669] transition-colors cursor-default inline-block">
                Ribeirão Preto/SP
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Faixa inferior do rodapé */}
      <div className="container mx-auto px-4 pb-8">
        <div className="footer-bottom flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://metrycads.com.br/wp-content/uploads/2025/10/d0857f2c-092e-4af4-8906-201b2acc3c4c.webp"
              alt="WZAI"
              className="h-8 w-auto"
              loading="eager"
              fetchPriority="high"
            />
            <span className="sr-only">WZAI</span>
          </a>

          {/* Ícones das redes sociais no canto inferior direito */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1BdtkDCg82/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#059669] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/wzai.me?igsh=aG9tNnBlNmluYWVv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#059669] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://w.app/lx4gi2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#059669] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Barra animada abaixo do rodapé */}
      <div className="w-full wzai-animated-bar"></div>
    </footer>
  );
}
