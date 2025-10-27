
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import GlobalClientEffects from '@/components/GlobalClientEffects';
import Header from '@/components/Header';
import SignupModal from '@/components/SignupModal';

import HomePage from '@/pages/HomePage';
import PoliticaPrivacidadePage from '@/pages/PoliticaPrivacidadePage';
import PoliticaCookiesPage from '@/pages/PoliticaCookiesPage';
import TermosUsoPage from '@/pages/TermosUsoPage';
import PoliticaCancelamentoPage from '@/pages/PoliticaCancelamentoPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookiesPage />} />
          <Route path="/termos-de-uso" element={<TermosUsoPage />} />
          <Route path="/politica-de-cancelamento-e-reembolso" element={<PoliticaCancelamentoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SignupModal />
        <Toaster />
        <GlobalClientEffects />
      </div>
    </ThemeProvider>
  );
}

export default App;
