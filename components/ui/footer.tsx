"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from "@/hooks/useFetch";

export function Footer() {
  const { currentLanguage } = useLanguage();

  const query = `
    *[_type == "contact"]
 `;
  const { data, isLoading, error } = useFetch(query);

  const phone = !data ? '' : data[0].phone;
  const facebook = !data ? '' : data[0].facebook;
  const instagram = !data ? '' : data[0].insta;
  const linkedin = !data ? '' : data[0].linkedin;

  if (isLoading) return null;
  if (error) return null;

  return (
    <footer className="bg-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Colonne 1 - Description */}
          <div>
            <p className="text-white">
              {currentLanguage === 'FR' ? 'Joaillerie artisanale de luxe. Créations uniques en or 19 carats et diamants certifiés.' : currentLanguage === 'EN' ? 'Artisanal Luxury Jewelry. Unique creations in 19 carat gold and certified diamonds.' : 'Joalharia artesanal de luxo. Cria es únicas em ouro de 19 quilates e diamantes certificados.'}
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'Accueil' : currentLanguage === 'EN' ? 'Home' : 'Início'}
                </Link>
              </li>
              <li>
                <Link href="/joaillerie" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'La Joaillerie' : currentLanguage === 'EN' ? 'Jewelry' : 'A Joalharia'}
                </Link>
              </li>
              <li>
                <Link href="/sur-mesure" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'Le Sur-Mesure' : currentLanguage === 'EN' ? 'Custom Made' : 'Feito Sob Medida'}
                </Link>
              </li>
              <li>
                <Link href="/histoire" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'La Marque' : currentLanguage === 'EN' ? 'The Brand' : 'A Marca'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'Blog' : currentLanguage === 'EN' ? 'Blog' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-powder transition-colors">
                  {currentLanguage === 'FR' ? 'Contact' : currentLanguage === 'EN' ? 'Contact' : 'Contato'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {currentLanguage === 'FR' ? 'Contact' : currentLanguage === 'EN' ? 'Contact' : 'Contato'}
            </h3>
            <div className="space-y-2">
              <p className="text-white">{phone}</p>
              <p className="text-white">
                {currentLanguage === 'FR' ? 'Disponible 7j/7' : currentLanguage === 'EN' ? 'Available 7/7' : 'Disponível 7/7'}
              </p>
            </div>
          </div>

          {/* Colonne 4 - Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {currentLanguage === 'FR' ? 'Suivez Précieuse' : currentLanguage === 'EN' ? 'Follow Précieuse' : 'Siga Précieuse'}
            </h3>
            <div className="flex space-x-4">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-powder transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-powder transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-powder transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              {currentLanguage === 'FR' ? '2025 Précieuse. Tous droits réservés.' : currentLanguage === 'EN' ? '2025 Précieuse. All rights reserved.' : '2025 Précieuse. Todos os direitos reservados.'}
            </p>
            
            <a
              href="https://www.vasseo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-powder transition-colors"
            >
              Created with <span className="text-rust">❤️</span> by 
              {currentLanguage === 'FR' ? 'Vasseo' : currentLanguage === 'EN' ? 'Vasseo' : 'Vasseo'}
            </a>
            
            <div className="flex space-x-4">
              <Link href="/mentions-legales" className="text-white text-sm hover:text-powder transition-colors">
                {currentLanguage === 'FR' ? 'Mentions Légales' : currentLanguage === 'EN' ? 'Legal Notice' : 'Aviso Legal'}
              </Link>
              <span className="text-white text-sm">•</span>
              <Link href="/politique-confidentialite" className="text-white text-sm hover:text-powder transition-colors">
                {currentLanguage === 'FR' ? 'Politique de Confidentialité' : currentLanguage === 'EN' ? 'Privacy Policy' : 'Política de Privacidade'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}