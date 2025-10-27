
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        {/* Barra translúcida + blur */}
        <div className="backdrop-blur-sm bg-black/55 border-b border-white/5">
          <div className="container mx-auto h-20 px-4 flex items-center justify-between">
            {/* LOGO */}
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

            {/* Navegação desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#como-funciona" className="text-white/80 hover:text-white transition-colors">
                Como funciona
              </a>
              <a href="#planos" className="text-white/80 hover:text-white transition-colors">
                Planos
              </a>
              <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                Contato
              </a>
            </nav>

            {/* CTA Cadastro (verde) */}
            <div className="hidden md:block">
              <a
                href="#"
                data-open-signup-modal
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md font-semibold bg-[#059669] text-white hover:bg-[#047857] transition-colors"
              >
                Cadastrar-se
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Menu mobile (botão hambúrguer) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/10"
              aria-label="Abrir menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Linha inferior animada */}
        <div className="w-full wzai-animated-bar" />
      </header>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-white/10 shadow-2xl overflow-y-auto">
            {/* Header do Menu */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white font-semibold">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-white/80 hover:bg-white/10 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navegação Principal */}
            <div className="p-4 space-y-1">
              <a
                href="#como-funciona"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#planos"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Planos
              </a>
              <a
                href="#contato"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Contato
              </a>
            </div>

            {/* Divider */}
            <div className="mx-4 border-t border-white/10" />

            {/* Políticas */}
            <div className="p-4 space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
                Políticas
              </div>
              <a
                href="/politica-de-privacidade"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/politica-de-cookies"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Política de Cookies
              </a>
              <a
                href="/termos-de-uso"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="/politica-de-cancelamento-e-reembolso"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                Cancelamento e Reembolso
              </a>
            </div>

            {/* CTA Button */}
            <div className="p-4">
              <a
                href="#"
                data-open-signup-modal
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full h-12 px-4 rounded-md font-semibold bg-[#059669] text-white hover:bg-[#047857] transition-colors"
              >
                Cadastrar-se
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
