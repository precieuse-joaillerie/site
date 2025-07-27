"use client";
import Link from 'next/link';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { currentLanguage } = useLanguage();
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-light text-bronze mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            {currentLanguage === 'FR' ? 'Page Non Trouvée' : currentLanguage === 'EN' ? 'Page Not Found' : 'Página Não Encontrada'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {currentLanguage === 'FR' ? 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.' : currentLanguage === 'EN' ? 'Sorry, the page you are looking for does not exist or has been moved.' : 'Desculpe, a página que você está procurando não existe ou foi movida.'}
          </p>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-bronze text-bronze hover:bg-bronze hover:text-white"
            >
              {currentLanguage === 'FR' ? 'Retour à l\'Accueil' : currentLanguage === 'EN' ? 'Back to Home' : 'Voltar para a Página Inicial'}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}