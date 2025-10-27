
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import Header from "@/components/Header";
import SignupModal from "@/components/SignupModal";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      <Header />
      {children}
      <SignupModal />
      <Toaster />
      <GlobalClientEffects />
    </>
  );

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>WZAI - Automação de WhatsApp para Advogados</title>
        <meta name="description" content="Automatize captação, triagem e agendamento de consultas jurídicas com WZAI. Estética Juridical Noir, 24/7." />
        <meta name="keywords" content="WhatsApp, automação, advogados, agendamento, captação de leads" />
        <meta property="og:title" content="WZAI - Automação de WhatsApp para Advogados" />
        <meta property="og:description" content="Automatize captação, triagem e agendamento de consultas jurídicas com WZAI." />
        <meta property="og:type" content="website" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                history.scrollRestoration = 'manual';
              }
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {content}
        </ThemeProvider>
      </body>
    </html>
  );
}
