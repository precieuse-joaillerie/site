import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/ui/footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Précieuse | Joaillerie Artisanale Sur Mesure',
  description: 'Créations uniques en or 19 carats et diamants GVS, fabriquées à la main dans notre atelier au Portugal. Bijoux sur mesure personnalisés par Emeline, joaillière.',
  keywords: 'joaillerie artisanale, bijoux sur mesure, or 19 carats, diamants GVS, bagues de fiançailles, alliances, Portugal, fait main, Emeline Le Ray',
  authors: [{ name: 'Emeline Le Ray' }],
  creator: 'Emeline Le Ray',
  publisher: 'Précieuse',
  robots: 'index, follow',
  openGraph: {
    title: 'Précieuse | Joaillerie Artisanale Sur Mesure',
    description: 'Créations uniques en or 19 carats et diamants GVS, fabriquées à la main dans notre atelier au Portugal.',
    url: 'https://www.precieuse-joaillerie.com',
    siteName: 'Précieuse',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczMFtiIKDDUA3PGyxnbmI9F6QL1pyizyWF2VL6AlbudNO4MG_i_hN_bbk0PHc4EQSw5Yalit1DLohvU2j90UGItWCEXIZvHUKB7pm2eeoJS3hjbOFJ2FEwVINP-gC4ycmzb7P0xZ6R4LxfxBp98ZVtCV=w1916-h1916-s-no-gm?authuser=1',
        width: 1916,
        height: 1916,
        alt: 'Précieuse Joaillerie Artisanale Sur Mesure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Précieuse | Joaillerie Artisanale Sur Mesure',
    description: 'Créations uniques en or 19 carats et diamants GVS, fabriquées à la main au Portugal.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#005454',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@500&family=Ysabeau+Office:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
            <WhatsAppButton />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}